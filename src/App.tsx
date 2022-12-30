
import './App.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

import {Header} from './components/Header'
import {Footer} from './components/Footer';
import { GameNFT } from './components/GameNFT';


function App() {
  
   return (
    <div className="App"  >
      <Header/>

      <div className="box1">
        <div className='box2'>
          <GameNFT/>
          </div>
        </div>

      <br></br>
      <div className="flex align-items-center justify-content-center card-container"> 
        <Footer/>
      </div>

    </div>
  );
}

export default App;
