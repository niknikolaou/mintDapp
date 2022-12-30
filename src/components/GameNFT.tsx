import './gameNFT.css';
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { ABICollection } from './config/smartContract'
const pos_Contract = "0x611b1440396121123587A3f9A4E838c56753fF0e"

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

    return    <div>
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
    <Dialog header="PLANETARS" visible={displayPLANETARS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter()}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Dialog>
      <Dialog header="MESOPLANETS" visible={displayMESOPLANETS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter()}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Dialog>
      <Dialog header="GIANTS PLANETS" visible={displayGIANTS} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter()}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Dialog>




    <Dialog header="Unchained Wolf Rare" visible={displayWolfRare} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '15vw'}} footer={renderFooter()}>
                    <div className="text-900 text-l mb-3 font-medium">Minted 100/5000</div>
                    <p>Cost: 1 ether<br/>
                    <br/>Low Oxygen Rewards.
                    <br/>Small Resources Storage.
                    <br/>Rare PvP Gear.
                    </p>
                    <Button label="Mint Wolf Rare" icon="pi pi-angle-double-down" onClick={() => onHide()} autoFocus />
      </Dialog>
      <Dialog header="Unchained Wolf Epic" visible={displayWolfEpic} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter()}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Dialog>
      <Dialog header="Unchained Wolf Legendary" visible={displayWolfLegendary} onHide={() => onHide()} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter()}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Dialog>
  </div>
    
}
