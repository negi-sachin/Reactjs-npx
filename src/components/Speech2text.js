import React, { Component } from 'react'

export class Speech2text extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             noteContents:'',
             choice:true,
        }
    }
    start=(e)=>{
     e.preventDefault();
   this.setState({
       choice:false
   })

     try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.continuous = true;
        var noteContent=''
     
      }
      catch(e) {
        console.error(e);
        
      }
      
recognition.onresult = function(event) {

  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

 
 noteContent =noteContent.concat(' ',transcript);
console.log(noteContent);
this.setState({
   
    noteContents:noteContent

})
}.bind(this)

recognition.onstart = function() { 
  console.log('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
  console.log('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    console.log('No speech was detected. Try again.');  
  };

}

recognition.start();


    }
stop=(e)=>{
    e.preventDefault();
    console.log('stopped called')
    this.setState({
        choice:true
    })
 
      try {
         var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
         var recognition = new SpeechRecognition();
        recognition.stop();
      
       }
       catch(e) {
         console.error(e);
         
       }
}

    render() {
        return (
            <div>
                <button onClick={this.state.choice?this.start:this.stop}>{this.state.choice?('start'):('Stop')}</button>
                <p>{this.state.noteContents}</p>
            </div>
        )
    }
}

export default Speech2text
