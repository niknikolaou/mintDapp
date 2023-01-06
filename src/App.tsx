
import './App.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

import {Footer} from './components/Footer';
import { GameNFT } from './components/GameNFT';
import {MintPage} from './components/MintPage';



function App() {
   return (
    <div className="App"  >
          <MintPage/>
     {/* <br></br>
      <div className="flex align-items-center justify-content-center card-container"> 
   <Footer/>
      </div>*/}
    </div>
  );
}

export default App;
