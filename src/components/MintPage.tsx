import './mintpage.css'
import './config/chatBubble.css'
import { Image } from 'primereact/image';

export const MintPage = () =>{
    return    <div className="card">
    <div className="card-container blue-container overflow-hidden">
        <div className="bg-auto bg-no-repeat bg-center level0" >
        <div className="wolfGrid">
    <div className="wolf"><div className='col'>
        <div className="bubble bubble-bottom-left">
                We are under Development!
                <br/>Coming Soon

        </div>
    </div>
    <div className='col'><Image src="./images/wolf.png" alt="Wolf Avatar" /></div></div></div>


    <div className="grid mainGrid">
    <div className="col-fixed chess"><Image src="./images/chess1.png" alt="Wolf Avatar" /></div>
    <div className="col-fixed chess"><Image src="./images/chess2.png" alt="Wolf Avatar" /></div>
    <div className="col-fixed chess"><Image src="./images/chess3.png" alt="Wolf Avatar" /></div>
    </div>





    </div>
    </div>
</div>
    
}
