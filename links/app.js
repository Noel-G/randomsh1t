var r = new XMLHttpRequest();
var postNewLink = new XMLHttpRequest();

var newLink = {
	url: "http://twitter.com/",
	description: "twitter"
};


r.onreadystatechange = function () {
	if (r.readyState != 4 || r.status != 200) return;
	console.log("Success: " + r.responseText);
};

postNewLink.onreadystatechange = function() {
	if (postNewLink.readyState != 4 || postNewLink.status != 200) return;
	console.log("Success: " + postNewLink.responseText);
}

postNewLink.open('POST', "http://localhost:3000/links", true);
postNewLink.setRequestHeader("Content-type", "application/json");
postNewLink.send(JSON.stringify(newLink));

r.open("GET", "http://localhost:3000/links", true);
r.send(null);