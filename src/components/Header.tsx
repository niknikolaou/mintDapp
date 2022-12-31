import { Toolbar } from 'primereact/toolbar';
import { Fragment } from 'react';
import { Button } from 'primereact/button';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import './header.css'


export type ActivateBrowserWallet = (arg?: { type: string }) => void




export const Header = () =>{

const leftContents = (
    <Fragment>
         <div>
      
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