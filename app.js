 
 
 var firebase= require('firebase');
 var start= require('./simple-prompt');
 var prompt = require('prompt');

 var config = {
    apiKey: "AIzaSyCXblpDaPjl4y4GM-e4McTdgb_IX8oIokY",
    authDomain: "projectx-8d97e.firebaseapp.com",
    databaseURL: "https://projectx-8d97e.firebaseio.com",
    storageBucket: "projectx-8d97e.appspot.com",
    messagingSenderId: "1011421642320"
  };
  firebase.initializeApp(config);


module.exports={




	createNote: function(){


	prompt.get(['username','content','title'], function(err,results){

	console.log("note created");
  	var message={content: results.content, title: results.title};
  	var ref= firebase.database().ref().child('Notes');
  	var messagesRef= ref.child(results.username);
  	var messageRef = messagesRef.push(message);


	});

	//console.log(name);

	},


	viewNote: function(){

  	console.log("note viewed");
	},


	deleteNote: function(){

  	console.log("note deleted");
	},


	listNotes: function(){

  	console.log("note listed");
	},


	searchNote: function(){

  	console.log("note searched");
	}


}



