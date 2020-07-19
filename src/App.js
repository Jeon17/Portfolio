import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Credentials from './Components/Credentials';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Credentials resumeData={resumeData}/>
        <Works resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;