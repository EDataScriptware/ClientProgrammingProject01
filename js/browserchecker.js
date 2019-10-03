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

if (isIE)
{
    alert("You will now be redirected to a custom barebone webpage that contains browsers.");
    window.location.replace("https://serenity.ist.rit.edu/~emr9018/340/.averycomplicateddirectory/Project01/custom/websites.html")
}