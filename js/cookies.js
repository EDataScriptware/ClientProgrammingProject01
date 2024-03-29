// NAME: Edward Riley
// PROFESSOR: Michael Floeser
// COURSE: Client Programming
// DATE: 10/06/2019
// ASSIGNMENT: Project 01

// cookies.js
// You can use this code for your projects!
// Derived from the Bill Dortch code at http://www.hidaho.com/cookies/cookie.txt

// WAS USED IN A LECTURE - TOLD TO REUSE

var today = new Date();
//expires in a year....
var expiry = new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000);

function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) { endstr = document.cookie.length; }
	return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return getCookieVal (j);
			}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
		}
	return null;
}

function DeleteCookie (name,path,domain) {
	if (GetCookie(name)) {
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
}

function DeleteAllCookie()
{
	console.log("deleteallcookie triggered");
	SetCookie("answer", "");
	SetCookie("1", "");
	SetCookie("2", "");
	SetCookie("3", "");
	SetCookie("counter", "0");

	
	localStorage.clear() //clears everything in localStorage
	location.reload();


}

function SetCookie (name,value,expires,path,domain,secure) {
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

