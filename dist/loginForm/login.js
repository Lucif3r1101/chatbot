var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function validate(){
  
  var text = '{ "employees" : [' +
    '{ "username":"John" , "password":"Doe" },' +
    '{ "username":"Anna" , "password":"Smith" },' +
    '{ "username":"Peter" , "password":"Jones" } ]}';
    
    
    var obj = JSON.parse(text);

    //Exapmle in console.log()
    console.log(obj.employees[0].username);
    console.log(obj.employees[0].password);

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Formget" && password == "formget#123"){
        const channel = new BroadcastChannel("login-channel");
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