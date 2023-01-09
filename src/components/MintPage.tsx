import 'primereact/resources/primereact.min.css';
import './main.css'
import React, { useState } from 'react';
import { Fragment } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import BigNumber from 'bignumber.js';
import {Footer} from './Footer';
import {isInWhitelist} from './list/whitelist';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ConnectWallet, useAddress} from "@thirdweb-dev/react";
import { useNetworkMismatch, useNetwork, ChainId, } from "@thirdweb-dev/react";
import { ABICollection } from './config/smartContract'
import {Mint, WolfCollection} from './enumTypes';



 const pos_Contract = "0x611b1440396121123587A3f9A4E838c56753fF0e";
 const sdk = new ThirdwebSDK("mumbai");
 const payment_in = "MATIC"



export const MintPage = () =>{
/**Hooks and Functions***************/
const isMismatched = useNetworkMismatch();
const [, switchNetwork] = useNetwork();
const address = useAddress();
//console.log(address);
const [rareWolf, setrareWolf] = useState<any[]>([]);
const [epicWolf, setepicWolf] = useState<any[]>([]);
const [legendaryWolf, setlegendaryWolf] = useState<any[]>([]);
const isWhitelist = isInWhitelist(address);
console.log(isWhitelist);



/**********************************/
//**********HEADER FUNCTIONS*******/
const leftContents = (
   <Fragment>
      <div>
       {isMismatched !== true? (<div className="font-italic p-2 text-white">Welcome, To Path of Salvation!

       {isWhitelist === true? (<div className="font-italic p-2 text-white">You are on Whitelist!</div>) : (<div className="font-italic p-2 text-white">Your are not in Whitelist! Join to discord more details..</div>)}

      </div>) : (<Button label='Switch to the correct Network' onClick={() => switchNetwork?.(ChainId.Mumbai)} /> )}
     </div>
   </Fragment>
 );
 
 const rightContents = (
   <Fragment>
      <ConnectWallet/>
   </Fragment>
 );

//*******************************/
//*****Dialogs POP UPS **********/
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

const GetWoldCollection= (input: any[],  wolfCollection:WolfCollection) =>{
  try 
  {
    switch(wolfCollection)
    {
      case WolfCollection.Start:{return (BigNumber(input[0]._hex).toNumber()); }
      case WolfCollection.CurrentID:{return (BigNumber(input[1]._hex).toNumber()); }
      case WolfCollection.End:{return (BigNumber(input[2]._hex).toNumber());  }
      case WolfCollection.Cost:{ return ((BigNumber(input[3]._hex).toNumber())/ 1e18); }
      case WolfCollection.Status:{ return input[4]; }
      case WolfCollection.Minted:{return (BigNumber(input[0]._hex).toNumber()-BigNumber(input[1]._hex).toNumber()); }
    } 
  } catch (error)
  {
    return "error";
  }
}

const onClick = (option:Mint) => {

  switch(option){
  case Mint.RareWolf:
    dialogFuncMap[`displayWolfRare`](true);
    

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
//*******************************/
//**Smart Contract Functions*****/
  const fetchData = async () => {
    const contract = await sdk.getContractFromAbi(pos_Contract, ABICollection);
    //const balance = await contract.call("daoAddress", address);
    //console.log(`Updated balance ${balance / 1e18}`);
    //const wolf_collection = await sdk.getContractFromAbi(pos_Contract, ABICollection);
    const balance = await contract.call("WolfCollection", 0);
       // console.log( {balance });
  };


const RareWolf = async () => {
   const contract = await sdk.getContractFromAbi(pos_Contract, ABICollection);
   setrareWolf( await contract.call("WolfCollection", 0));
   setepicWolf( await contract.call("WolfCollection", 1));
   setlegendaryWolf( await contract.call("WolfCollection", 2));
 };



 React.useEffect(() => {
  // fetchData();
   RareWolf();
 }, []);
//*******************************/

    return    <>
<Toolbar left={leftContents} right={rightContents} className="top-bar"/>
   <div className="main-body" >


     <div className="item" onClick={() => onClick(Mint.PLANETARS)}>
        <div className="title">PLANETARS</div>
        <img className="image planetars planet" src="../images/planetars.png" alt="PLANETARS"/>
     </div> 

     <div className="item" onClick={() => onClick(Mint.MESOPLANETS)}>
        <div className="title">MESOPLANETS</div>
        <img className="image mesoplanets mid-planet" src="images/mesoplanets.png" alt="MESOPLANETS"/>
     </div>
     <div className="item" onClick={() => onClick(Mint.GIANTS)}>
        <div className="title">GIANTS PLANETS</div>
        <img className="image grandplanets " src="images/grand_planets.png" alt="GIANTS PLANETS"/>
     </div>


     <div className="item" onClick={() => onClick(Mint.RareWolf)}>
        <div className="title">RARE WOLF</div>
        <img className="image rare" src="images/chest1closed.png" alt="RARE"/>
     </div>
     <div className="item" onClick={() => onClick(Mint.EpicWolf)}>
        <div className="title">EPIC WOLF</div>
        <img className="image epic" src="images/chest2closed.png" alt="EPIC"/>
     </div>
      <div className="item" onClick={() => onClick(Mint.LegendaryWolf)}>
        <div className="title">LEGENDARY WOLF</div>
        <img className="image legendary" src="images/chest3closed.png" alt="LEGENDARY"/>
   </div>
      <div className="flex align-items-center justify-content-center card-container footer"> 
   <Footer/>
      </div>
    </div>
    <Dialog header="PLANETARS" visible={displayPLANETARS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '75vw'}} footer={renderFooter()}>
                    <p>SmartContract Is not Ready Yet!</p>
      </Dialog>
      <Dialog header="MESOPLANETS" visible={displayMESOPLANETS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '75vw'}} footer={renderFooter()}>
                    <p>SmartContract Is not Ready Yet!</p>
      </Dialog>
      <Dialog header="GIANTS PLANETS" visible={displayGIANTS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '75vw'}} footer={renderFooter()}>
                    <p>SmartContract Is not Ready Yet!</p>
      </Dialog>

    <Dialog className='text-center' header="Unchained Wolf Rare Mint" visible={displayWolfRare} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '70vw'}} footer={renderFooter()}>

    <div>
       {GetWoldCollection(rareWolf,WolfCollection.Status) === true? (<div className="font-italic p-2 text-white">Is Available for Mint!</div>) : (<div className="font-italic p-2 text-white">Is NOT Available for Mint!</div>)}
     </div>
                    <div className="text-900 text-l mb-3 font-medium">Minted {GetWoldCollection(rareWolf,WolfCollection.Minted)} / {GetWoldCollection(rareWolf,WolfCollection.End)}</div>
                    <p>Cost: {GetWoldCollection(rareWolf,WolfCollection.Cost)} {payment_in} </p>
                    <table>
                      <tr><td>Low Oxygen Rewards.</td></tr>
                      <tr><td>Small Resources Storage.</td></tr>
                      <tr><td>Rare PvP Gear.</td></tr>
                    </table>
                    <br/>
                    <Button label="Mint Wolf Rare" icon="pi pi-angle-double-down" onClick={() => onHide()} autoFocus />
      </Dialog>
      <Dialog header="Unchained Wolf Epic" visible={displayWolfEpic} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '75vw'}} footer={renderFooter()}>
                    <p>Soon More..</p>
      </Dialog>
      <Dialog header="Unchained Wolf Legendary" visible={displayWolfLegendary} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '75vw'}} footer={renderFooter()}>
                    <p>Soon More..</p>
      </Dialog>
</>
    
}
