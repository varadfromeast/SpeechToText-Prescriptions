(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
 
var recognizing;
  var recognition = new webkitSpeechRecognition();
  var mainString = '';
  recognition.continuous = true;
  recognition.interimResults = false;
  var fs= require('fs');
  var file;

  //reset();
  //recognition.onend = reset;
  recognition.lang = 'en-IN';
  var finalarr =[];
  recognition.onresult = function (event) {
    console.log(mainString.length);
    for (var i = event.resultIndex; i < event.results.length; ++i)
     {
        
        speech.value += event.results[i][0].transcript+' ';              //speech is textarea. Did not do document.getlement
        /*var array= (event.results[i][0].transcript+' ').split(' ');
        array.pop();
        finalarr.push(...array);*/
      
    }
   
    //console.log(finalarr);
    //console.log(finalarr.length);

  }

 /* window.reset = function() {
    recognizing = false;
    //button.innerHTML = "Click to Speak";
  }*/

  /*function toggleStartStop() {
    if (recognizing) {
      recognition.stop();

      reset();
    } else {
      recognition.start();
      recognizing = true;
      button.innerHTML = "Click to Stop";
    }
  }*/
var flag=false;
  window.change_speak = function(){
    flag=!flag;
    if(flag)
    {
   document.getElementsByClassName('speak-label')[0].innerHTML='Speaking...';
    recognition.start();
      recognizing = true;
      //button.innerHTML = "Click to Stop";
 }
 else
 {
   document.getElementsByClassName('speak-label')[0].innerHTML='Speak';
   recognition.stop();
  

      //reset();
 }
};
var finalString = [];
var KeyWords = new Array("name","symptoms","diagnosis","prescription","advice");
var Name = [];
var Symptoms = [];
var Diagnosis = [];
var Prescription = [];
var Advice = [];
var NameFlag = false;
var SymptomsFlag = false;
var DiagnosisFlag = false;
var PrescriptionFlag = false;
var AdviceFlag = false;
window.rbutton = function()
{

   finalString =  document.getElementById('speech').value.toLowerCase().split(' ');
   
   //console.log(finalString);
   var i =0;
   for(;i<finalString.length;++i)
   {
    if(finalString[i]=="name")
    {
      if(NameFlag == false)
      {
        NameFlag = true;
      Name.push(finalString[i]);
      while(finalString[i+1]!="symptoms")
      {
        i++;
        Name.push(finalString[i]);
      }
    file =  fs.readFile("firstnames.txt",function(err,data){
  if(err) throw err;
  
  var i;

    var k;
    
    var array= data.toString().split("\r\n");
    
    //console.log(array);
    
  for(i=0; i<Name.length; i++){
    
    
    for(k=0; k<array.length;k++){
    if(array[k]==(Name[i])){
      
      console.log(Name[i].toString())
      
    }
    }
    
    
    
  }
  
});






      console.log(Name);
      i++;
    }
    }

    if(finalString[i]=="symptoms")
    {
      if(SymptomsFlag == false)
      {
       SymptomsFlag = true;
      Symptoms.push(finalString[i]);
      while(finalString[i+1]!="diagnosis")
      {
        i++;
        Symptoms.push(finalString[i]);
      }
      console.log(Symptoms);
      i++;
    }
  }

    if(finalString[i] == "diagnosis")
    {
      if(DiagnosisFlag == false)
      {
       DiagnosisFlag = true;
       Diagnosis.push(finalString[i]);
      while(finalString[i+1]!="prescription")
      {
        i++;
        Diagnosis.push(finalString[i]);
      }
      console.log(Diagnosis);
      i++;
    }
    }

    if(finalString[i]=="prescription")
    {
      if(PrescriptionFlag == false)
      {
        PrescriptionFlag = true;
         Prescription.push(finalString[i]);
      while(finalString[i+1]!="advice")
      {
        i++;
        Prescription.push(finalString[i]);
      }
      console.log(Prescription);
      i++;
      }
    }

  

    if(finalString[i]=="advice")
    {
      if(AdviceFlag == false)
      {
        AdviceFlag = true;
      for(;i<finalString.length;++i)
      {
        Advice.push(finalString[i]);
      }
      console.log(Advice);
      }
    }
   }
  
};
},{"fs":1}]},{},[2]);
