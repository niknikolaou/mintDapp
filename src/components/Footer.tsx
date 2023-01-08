import { Button } from 'primereact/button';
import './footer.css';

function openURL(url:string) {
    window.open(url);
  }

export const Footer = () =>{
    return     <div className="button-media">
            <div className="template">
                <Button className="youtube p-0" aria-label="Youtube">
                    <i className="pi pi-youtube px-2"></i>
                    <span className="px-3">Youtube</span>
                </Button>
                <Button className="facebook p-0" aria-label="Facebook">
                    <i className="pi pi-facebook px-2"></i>
                    <span className="px-3">Facebook</span>
                </Button>
                <Button className="twitter p-0" aria-label="Twitter">
                    <i className="pi pi-twitter px-2"></i>
                    <span className="px-3">Twitter</span>
                </Button>
                <Button className="discord p-0" aria-label="Discord" onClick={() => openURL('https://discord.gg/wNkzRCVvuB')}>
                    <i className="pi pi-discord px-2"></i>
                    <span className="px-3">Discord</span>
                </Button>
            </div>   
    </div>
    
}