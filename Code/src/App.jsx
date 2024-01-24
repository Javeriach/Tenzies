import { useState } from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Header1 from './components2/Header1';
import Footer1 from './components2/Footer1';
import MainContent1 from './components2/MainContent1';
import 'bootstrap/dist/css/bootstrap.css';
import Practice from './Practice/Practice';
import Memegenerator from './Practice/Memegenerator';
import './App.css';
import Tenzies from './Tenzies/Tenzies';

function App() {
  // return (
  //   <div className="box">
  //     <Header />
  //     <MainContent />
  //   </div>
  // );

  return (
    <div className="box">
      {/* <Memegenerator /> */}
      {/* <Practice /> */}
      {/* <Header1 />
      <MainContent1 />
      <Footer1 /> */}
      {/* <Header /> */}
      {/* <MainContent/> */}
      <Tenzies />
    </div>
  );
}

export default App;
