import './gameNFT.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import React, { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useNetworkMismatch, useNetwork, ChainId, } from "@thirdweb-dev/react";
import { ABICollection } from './config/smartContract'
const pos_Contract = "0x611b1440396121123587A3f9A4E838c56753fF0e";
const sdk = new ThirdwebSDK("mumbai");


enum Mint {
  RareWolf,
  EpicWolf,
  LegendaryWolf,
  MESOPLANETS,
  PLANETARS,
  GIANTS
}

export const GameNFT = () =>
{

  const isMismatched = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const address = useAddress();
  const [rareWolf, setrareWolf] = useState('');


  const fetchData = async () => {
    const contract = await sdk.getContractFromAbi(pos_Contract, ABICollection);
    //const balance = await contract.call("daoAddress", address);
    //console.log(`Updated balance ${balance / 1e18}`);
    //const wolf_collection = await sdk.getContractFromAbi(pos_Contract, ABICollection);
    const balance = await contract.call("WolfCollection", 0);
        console.log( {balance });
  };

  const RareWolf = async () => {
    const contract = await sdk.getContractFromAbi(pos_Contract, ABICollection);
    const res  = await contract.call("WolfCollection", 0);
    setrareWolf(res);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  
  const [displayWolfRare, setdisplayWolfRare] = useState(false);
  const [displayWolfEpic, setdisplayWolfEpic] = useState(false);
  const [displayWolfLegendary, setdisplayWolfLegendary] = useState(false);
  const [displayPLANETARS, setPLANETARS] = useState(false);
  const [displayMESOPLANETS, setdisplayMESOPLANETS] = useState(false);
  const [displayGIANTS, setGIANTS] = useState(false);
  const [position, setPosition] = useState('center');

  const dialogFuncMap = {
      
      'displayWolfRare': setdisplayWolfRare,
      'displayWolfEpic': setdisplayWolfEpic,
      'displayWolfLegendary':setdisplayWolfLegendary,
      'displayPLANETARS':setPLANETARS,
      'displayMESOPLANETS':setdisplayMESOPLANETS,
      'displayGIANTS':setGIANTS
  }

  const onClick = (option:Mint) => {

    switch(option){
    case Mint.RareWolf:
      RareWolf();
      dialogFuncMap[`displayWolfRare`](true);
      console.log(rareWolf[4] );

      if (position)
        setPosition(position);
    break;
    case Mint.EpicWolf:
      dialogFuncMap[`displayWolfEpic`](true);
      if (position)
        setPosition(position);
    break;
    case Mint.LegendaryWolf:
      dialogFuncMap[`displayWolfLegendary`](true);
      if (position)
        setPosition(position);
    break;
    case Mint.PLANETARS:
      dialogFuncMap[`displayPLANETARS`](true);
      if (position)
        setPosition(position);
    break;
    case Mint.MESOPLANETS:
      dialogFuncMap[`displayMESOPLANETS`](true);
      if (position)
        setPosition(position);
    break;
    case Mint.GIANTS:
      dialogFuncMap[`displayGIANTS`](true);
      if (position)
        setPosition(position);
    break;
    }
 
  }

  const onHide = () => {
      dialogFuncMap[`displayWolfRare`](false);
      dialogFuncMap[`displayWolfEpic`](false);
      dialogFuncMap['displayWolfLegendary'](false);
      dialogFuncMap['displayPLANETARS'](false);
      dialogFuncMap['displayMESOPLANETS'](false);
      dialogFuncMap['displayGIANTS'](false);
  }

  const renderFooter = () => {
    return (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
        </div>
    );
}
const leftContents = (
  <Fragment>
                    <div>
      {isMismatched !== true? (
        <div className="font-italic p-2 text-white">Welcome, To Path of Salvation!</div>
      ) : (
        <Button label='Switch to the correct Network' onClick={() => switchNetwork?.(ChainId.Mumbai)} />
      )}
    </div>
  </Fragment>
);

const rightContents = (
  <Fragment>
     <ConnectWallet />
  </Fragment>
);


    return<>
    <Toolbar left={leftContents} right={rightContents} className="surface-50 opacity-100 shadow-8"/>
    <div className='boxMain'>
    <img
      src="/playground_assets/background.png"
      alt="Background"
      className="background"
    />
    <div className="planets">
    <div className="viper" onClick={() => onClick(Mint.PLANETARS)}>
        <span className="textMain" >
          <span>PLANETARS</span>
        </span>
      </div>
      <div className="mesoPlanets" onClick={() => onClick(Mint.MESOPLANETS)}>
        <span className="textMain">
          <span>MESOPLANETS</span>
        </span>
      </div>

      <div className="giants" onClick={() => onClick(Mint.GIANTS)}>
        <span className="textMain">
          <span>GIANTS PLANETS</span>
        </span>
      </div>
    </div>
    <div className="chests">
      <div className="legendaryChest" onClick={() => onClick(Mint.LegendaryWolf)}>
        <span className="textMain">
          <span>LEGENDARY</span>
        </span>
      </div>
      <div className="epicChest" onClick={() => onClick(Mint.EpicWolf)}>
        
        <span className="textMain">
          <span>EPIC</span>
        </span>
      </div>
      <div className="rareChest" onClick={() => onClick(Mint.RareWolf)}>
        <span className="textMain">
          <span>RARE</span>
        </span>
      </div>
    </div>
    <Dialog header="PLANETARS" visible={displayPLANETARS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '35vw'}} footer={renderFooter()}>
                    <p>SmartContract Is not Ready Yet!</p>
      </Dialog>
      <Dialog header="MESOPLANETS" visible={displayMESOPLANETS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '35vw'}} footer={renderFooter()}>
                    <p>SmartContract Is not Ready Yet!</p>
      </Dialog>
      <Dialog header="GIANTS PLANETS" visible={displayGIANTS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '35vw'}} footer={renderFooter()}>
                    <p>SmartContract Is not Ready Yet!</p>
      </Dialog>

    <Dialog header="Unchained Wolf Rare" visible={displayWolfRare} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '35vw'}} footer={renderFooter()}>
                    <div className="text-900 text-l mb-3 font-medium">Minted 100/5000</div>
                    <p>Cost: 1 ether<br/>
                    <br/>Low Oxygen Rewards.
                    <br/>Small Resources Storage.
                    <br/>Rare PvP Gear.
                    </p>
                    <Button label="Mint Wolf Rare" icon="pi pi-angle-double-down" onClick={() => onHide()} autoFocus />
      </Dialog>
      <Dialog header="Unchained Wolf Epic" visible={displayWolfEpic} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '35vw'}} footer={renderFooter()}>
                    <p>Soon More..</p>
      </Dialog>
      <Dialog header="Unchained Wolf Legendary" visible={displayWolfLegendary} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '35vw'}} footer={renderFooter()}>
                    <p>Soon More..</p>
      </Dialog>
  </div>
  </>
    
}
