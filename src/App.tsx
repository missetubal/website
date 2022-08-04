import React from 'react';
import { Home } from './components/Home/Home';
import { Sidebar } from './components/Sidebar/Sidebar';
import './App.css'
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Resume } from './components/Resume/Resume';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <main>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
