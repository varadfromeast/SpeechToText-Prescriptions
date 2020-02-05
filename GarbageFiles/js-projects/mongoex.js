var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const nacl=require('tweetnacl');

const util=require('tweetnacl-util');



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };

  
  
  var i;
  
  for(i=0;i<10;i++){
	var keypair=nacl.box.keyPair();
	
	var rpublickey=util.encodeBase64(keypair.publicKey);
	
	var skey=util.encodeBase64(keypair.secretKey);
  
  var doc1= {name:"Dr." + i, publickey: rpublickey, secretkey: skey }
  
  
  dbo.collection("customers").insertOne(doc1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
	
	
    db.close();
  });
  
  }
  
  
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
	
	
    db.close();
  });
  
  
  
  
  
});