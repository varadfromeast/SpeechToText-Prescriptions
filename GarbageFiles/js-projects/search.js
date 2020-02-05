var fs= require('fs');

var res;

fs.readFile("prescription.txt",function(err,data){
	if(err) throw err;
	
	res=data.toString().split(" ");
	
	console.log(res.toString());
	
	var j;

for(j=0; j<res.length; j++){
	
	
	
		if(res[j].toString()=="Name"){
		
		
		//console.log(res[j].toString())
		



			fs.readFile("firstnames.txt",function(err,data){
	if(err) throw err;
	
	var i;

		var k;
		
		var array= data.toString().split("\r\n");
		
		//console.log(array);
		
	for(i=0; i<res.length; i++){
		
		
		for(k=0; k<array.length;k++){
		if(array[k]==(res[i])){
			
			console.log(res[i].toString())
			
		}
		}
		
		
		
	}
	
});
		
		
	}
	
	
	
	
	
	if(res[j].toString()=="Name"){
		
		
		//console.log(res[j].toString())
		



			fs.readFile("lastnames.txt",function(err,data){
	if(err) throw err;
	
	var i;

		var k;
		
		var array= data.toString().split("\r\n");
		
		//console.log(array);
		
	for(i=0; i<res.length; i++){
		
		
		for(k=0; k<array.length;k++){
		if(array[k]==(res[i])){
			
			console.log(res[i].toString())
			
		}
		}
		
		
		
	}
	
});
		
		
	}
	
	
	if(res[j].toString()=="Disease"){
		
		
	//	console.log(res[j].toString())
		



			fs.readFile("diseases.txt",function(err,data){
	if(err) throw err;
	
	var i;
	
	var k;
	
	
	var array=data.toString().split("\r\n");
	
	for(i=0; i<res.length; i++){
	

		for(k=0; k<array.length;k++){
		if(array[k]==(res[i])){
			
			console.log(res[i].toString())
			
		}
		
		}
		
		
	}
	
});
		
		
	}
	
	
	if(res[j].toString()=="Medicines"){
		
		
//		console.log(res[j].toString())
		



			fs.readFile("medicines.txt",function(err,data){
	if(err) throw err;
	
	var i;
	
	var k;
	
	var array=data.toString().split("\r\n");
	
	for(i=0; i<res.length; i++){
		
		for(k=0;k<array.length;k++){
		
		if(array[k]==(res[i])){
			
			console.log(res[i].toString())
			
		}
		
		
		}
		
	}
	
});
		
		
	}
	
	
}
});







/**
fs.readFile("lastnames.txt",function(err,data){
	if(err) throw err;
	
	var i;
	
	for(i=0; i<res.length; i++){
		
		if(data.includes(res[i])){
			
			console.log(res[i].toString())
			
		}
		
	}
	
});


fs.readFile("diseases.txt",function(err,data){
	if(err) throw err;
	
	var i;
	
	for(i=0; i<res.length; i++){
		
		if(data.includes(res[i])){
			
			console.log(res[i].toString())
			
		}
		
	}
	
});






fs.readFile("medicines.txt",function(err,data){
	if(err) throw err;
	
	var i;
	
	for(i=0; i<res.length; i++){
		
		if(data.includes(res[i])){
			
			console.log(res[i].toString())
			
		}
		
	}
	
});
*/

