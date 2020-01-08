import React, { Fragment } from 'react';

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
import StyleSheet from "./components/stylesheet";
import Inline from './components/Inline';
import './components/style.css'
import style from './components/style.module.css'
import Form from './components/form';
import Todo  from './components/Todo';
import Landing from './components/Landing';
import Speech2text from './components/Speech2text';
import LifecycleA from './components/LifecycleA';
import UpdateLM from './components/UpdateLM';
import FragmentR from './components/Fragment';

import Purecomp1 from './components/Purecomp1';
import Refs from './components/Refs';
import Portal from './components/Portal';
import Hero from './components/Hero';
import Err_Boundary from './components/Err_Boundary';

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
     <List2 />
     <StyleSheet/>
     <Inline/>

     {/* using css modules i.e */}
     <h2 className='primary'>Css module</h2>
     {/* prefereed is module.style.class */}
     <h1 className={style.col} >css module-2</h1>
     
     <Form/>
     <Todo/>
     <Landing/>
     <Speech2text/>
     <LifecycleA/>
     <UpdateLM/>
     <FragmentR/>
     <Purecomp1/>
     <Refs/>
     <Portal/>

     {/* Error boundary testing */}
     <Err_Boundary>
     <Hero heroname="Batman"></Hero>
     </Err_Boundary>

     <Err_Boundary>
     <Hero heroname="superman"></Hero>
     </Err_Boundary>

     <Err_Boundary>
     <Hero heroname="joker"></Hero>
     </Err_Boundary>
     {/* change heroname to "Joker " to see error */}
    {/* Error boundary is available in production mode ,so on top right click cross button to see result */}
     
     
    </div>
  );
}

export default App;
