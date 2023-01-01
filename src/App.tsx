
import './App.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

import {Footer} from './components/Footer';
import { GameNFT } from './components/GameNFT';



function App() {
   return (
    <div className="App"  >
          <GameNFT/>
      <br></br>
      <div className="flex align-items-center justify-content-center card-container"> 
        <Footer/>
      </div>

    </div>
  );
}

export default App;
