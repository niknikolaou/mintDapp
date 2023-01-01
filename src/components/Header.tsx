import { Toolbar } from 'primereact/toolbar';
import { Fragment } from 'react';
import { Button } from 'primereact/button';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useNetworkMismatch, useNetwork, ChainId, } from "@thirdweb-dev/react";

import './header.css'


export type ActivateBrowserWallet = (arg?: { type: string }) => void




export const Header = () =>{
const isMismatched = useNetworkMismatch();
const [, switchNetwork] = useNetwork();
const address = useAddress();



const leftContents = (
    <Fragment>
               <div>
      {isMismatched !== true? (
        <div className="font-italic   p-2">Unchain your Wolf</div>
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



    return   <>  <Toolbar left={leftContents} right={rightContents} className="surface-50 opacity-100 shadow-8"/>
    
    </>
}