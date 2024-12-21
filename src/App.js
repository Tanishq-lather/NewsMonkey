import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  


    return (
      <> 
        <Router>
        <Navbar />  
         <LoadingBar
         height={3}
         color='rgb(220,53,69,1)'
         progress={progress}
       />    
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={12} country="us" category="General" />} />
              <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={12} country="us" category="Business"/>} />
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={12} country="us" category="Entertainment"/>} />
              <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={12} country="us" category="General"/>} /> 
              <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={12} country="us" category="Health"/>} />  
              <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={12} country="us" category="Science"/>} />  
              <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={12} country="us" category="Sports"/>} />  
              <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={12} country="us" category="Technology"/>} /> 
            </Routes>
          <Footer />
        </Router>
      </>
    )
  }

export default App;