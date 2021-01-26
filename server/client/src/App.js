import './App.css';
import Header from './components/Header';
import ScrollPage from './components/ScrollPage';

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='App_scrollpages'>
        <ScrollPage
          title='Model 3'
          desc='立即試駕'
          descLink=''
          backgroundImage={Model3}
          leftBtnText='客製化訂單'
          leftBtnlLink=''
          rightBtnText='了解更多內容'
          rightBtnlLink=''
          twoButtons='true'
          first
        />
        <ScrollPage
          title='Model S'
          desc='立即試駕'
          descLink=''
          backgroundImage={ModelS}
          leftBtnText='客製化訂單'
          leftBtnlLink=''
          rightBtnText='了解更多內容'
          rightBtnlLink=''
          twoButtons='true'
        />
        <ScrollPage
          title='Model X'
          desc='立即試駕'
          descLink=''
          backgroundImage={ModelX}
          leftBtnText='客製化訂單'
          leftBtnlLink=''
          rightBtnText='了解更多內容'
          rightBtnlLink=''
          twoButtons='true'
        />
        <ScrollPage
          title='Model Y'
          desc=''
          descLink=''
          backgroundImage={ModelY}
          leftBtnText='客製化訂單'
          leftBtnlLink=''
          rightBtnText='了解更多內容'
          rightBtnlLink=''
          twoButtons='false'
        />
        <ScrollPage
          title='Solar Roof 和 Powerwall 產品'
          desc='全方位能源供應'
          descLink=''
          backgroundImage={SolarRoof}
          leftBtnText='了解更多內容'
          leftBtnlLink=''
          rightBtnText=''
          rightBtnlLink=''
        />
      </div>
    </div>
  );
}

export default App;
