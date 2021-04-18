var attempt  = 3;
var objPeople = [
	{ // Object @ 0 index
		username: "Rishav",
		password: "A0490466"
	},
	{ // Object @ 1 index
		username: "Tony",
		password: "A0490467"
	},
	{ // Object @ 2 index
		username: "Bruce",
		password: "A0490468"
	}

]

function getInfo() {



	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			//console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			//return
			const channel = new BroadcastChannel("login-channel");
			alert("Login Succesfull");
			if(window.confirm){
				window.close();
				document.cookie = "username="+objPeople[i].username;
				window.open("../../bot.html");
				ready();
			}

			channel.postMessage("Login Success\n Welcome! "+username);
			console.log(channel);
			return false;
		}else{
			attempt --;// Decrementing by one.
			alert("You have left "+attempt+" attempt;");
			// Disabling fields after 3 attempts.
			if( attempt == 0){
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
				return false;
			}
			
		
		}
	}
	//console.log("incorrect username or password")
}