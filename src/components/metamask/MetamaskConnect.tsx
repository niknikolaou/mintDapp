import { Button } from 'primereact/button';
import '../extra.css'

export type ActivateBrowserWallet = (arg?: { type: string }) => void

type PrivateProps = {
    account?: string
    activateBrowserWallet: ActivateBrowserWallet
    deactivate: () => void
}

export const MetamaskConnect = ({ account, activateBrowserWallet, deactivate }:PrivateProps) => {
    

    const ConnectButton = () => (
    <div>
        <Button label="Connect" icon="pi pi-wallet"  onClick={() =>  activateBrowserWallet()}></Button>
    </div>)

    return (
        <div>
        {account && (
        <div>
            <Button label={account.substring(0,5)+"..."+account.substring(38)} icon="pi pi-wallet"  onClick={() => deactivate()}></Button>
                
            
            <br/>
        </div>)}
        {!account && <ConnectButton />}
      </div>
    )
}