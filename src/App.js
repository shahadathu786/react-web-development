import React from 'react';
import './App.css';
import {Button} from 'reactstrap';
import NavBar from './Components/NavBar';
import Carouseltop from './Components/Carouseltop';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="">
      <NavBar />
      <Carouseltop />
      <MainSection/>
      <Footer />     
    </div>
  );
}

export default App;
