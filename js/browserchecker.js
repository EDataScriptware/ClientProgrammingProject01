// NAME: Edward Riley
// PROFESSOR: Michael Floeser
// COURSE: Client Programming
// DATE: 10/06/2019
// ASSIGNMENT: Project 01


// Works Cited: https://jsfiddle.net/6spj1059/ in https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser 


// Firefox/Gecko 1.0+
 var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
 var isIE = /*@cc_on!@*/false || !!document.documentMode;

 // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
 var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

 // console.log browser checker
 var output = 'isFirefox/Gecko:' + isFirefox;
 output += ' isChrome:' + isChrome;
 output += ' isSafari:' + isSafari;
 output += ' isIE:' + isIE;
 output += ' isEdge:' + isEdge;
 console.log(output); 

// If it is any IE versions, redirect to a barebone webpage
if (isIE)
{
    alert("You will now be redirected to a custom barebone webpage that contains browsers.");
    window.location.replace("https://serenity.ist.rit.edu/~emr9018/340/.averycomplicateddirectory/Project01/custom/websites.html")
}