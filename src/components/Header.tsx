import { Toolbar } from 'primereact/toolbar';
import { Fragment } from 'react';
import { Button } from 'primereact/button';
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
       
    </Fragment>
);



    return   <>  <Toolbar left={leftContents} right={rightContents} className="surface-50 opacity-100 shadow-8"/>
        
    </>
}