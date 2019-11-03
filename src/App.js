import React from 'react';

import './App.css';
import Greet from './components/function_component'
import Welcome from './components/class_compo'
import Hello from './components/props'
import Message from './components/state'
import Count from './components/setState'
import Events from './components/events';
import Bind from './components/bind'
import ParentCompo from './components/ParentCompo';
import Conditional_Render from './components/Conditional_Render';
import List1 from './components/List1';
import List2 from './components/List2';
function App() {
  return (
    <div className="App">
      
      <Greet/>
      <Welcome/>

      <Hello name="sam"/>
      <Hello name="Drake">
        <p>I am children props</p>
      </Hello>
     
     <Message />
     <Count/>
     <Events></Events>
     <Bind/>

     <ParentCompo/>
     <Conditional_Render></Conditional_Render>
     <List1/>
     <List2/>
    </div>
  );
}

export default App;
