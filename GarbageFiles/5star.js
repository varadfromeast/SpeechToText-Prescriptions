var recognizing;
  var recognition = new webkitSpeechRecognition();
  var mainString = '';
  recognition.continuous = true;
  recognition.interimResults = false;
  var fs= require('fs');
  var file;
  //reset();
  recognition.onend = reset;
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

  function reset() {
    recognizing = false;
    //button.innerHTML = "Click to Speak";
  }

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
  function change_speak(){
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
}
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
var file2;
var file3;
var file4;
var string1="";

var string2="";
var string3="";
var string4="";
var string5="";
function rbutton()
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
     file = fs.readFile("firstnames.txt",function(err,data){
  if(err) throw err;
  
  var i;

    var k;
    
    var array= data.toString().toLowerCase().split("\r\n");
    
    //console.log(array);
    
  for(i=0; i<Name.length; i++){
    
    
    for(k=0; k<array.length;k++){
    if(array[k]==(Name[i])){
       string1= string1+" "+Name[i];
      console.log(Name[i]);
      
    }
    }
    
    
    
  }
  
});
    file2 = fs.readFile("lastname1.txt",function(err,data){
  if(err) throw err;
  
  var i;

    var k;
    
    var array= data.toString().toLowerCase().split("\r\n");
    
    //console.log(array);
    
  for(i=0; i<Name.length; i++){
    
    
    for(k=0; k<array.length;k++){
    if(array[k]==(Name[i])){
       string1= string1+" "+Name[i];
      console.log(Name[i]);
      
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

 string2= Symptoms;

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

       file3 = fs.readFile("diseases.txt",function(err,data){
  if(err) throw err;
  
  var i;

    var k;
    
    var array= data.toString().toLowerCase().split("\r\n");
    
    //console.log(array);
    
  for(i=0; i<Diagnosis.length; i++){
    
    
    for(k=0; k<array.length;k++){
    if(array[k]==(Diagnosis[i])){
       string3= string3+" "+Diagnosis[i];
      console.log(array[k]);
      
    }
    }
    
    
    
  }
  
});

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

         file4 = fs.readFile("medicines.txt",function(err,data){
  if(err) throw err;
  
  var i;

    var k;
    
    var array= data.toString().toLowerCase().split("\r\n");
    
    //console.log(array);
    
  for(i=0; i<Prescription.length; i++){
    
    
    for(k=0; k<array.length;k++){
    if(array[k]==(Prescription[i])){
       string4= string4+" "+Prescription[i];
      console.log(array[k]);
      
    }
    }
    
    
    
  }
  
});

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
       string5= Advice;
      console.log(Advice);
      }
    }
   }
  
}

function sendPDF()
    {
      var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sih.codewarriors@gmail.com',
    pass: 'sih2020cw'
  }
});

var mailOptions = {
  from: 'sih.codewarriors@gmail.com',
  to: 'shubhankargaikwad2006@gmail.com, sidheehande@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  attachments:[
  {
    filename:'Prescription.pdf',
    path:'C:/Users/varad/Desktop/Prescription.pdf',
    contentType:'application/pdf'
    
    
  }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    }

