
// checking to see if this js file is called
console.log("structuredData.js triggered");
var count = 0;
// creating a select element
var selectA = document.createElement("select");




//initialize the data structure
function init()
{        
    // Functions to store cookie and local storage counter (how many times you have been on the website)
    VisitCounter(); 
    LocalStorageCounter();
    
    // Set up Header (America) image
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", "media/header.png");
    imageElement.setAttribute("height", "250px")
    document.body.append(imageElement);

    // website title
    document.title = "Website Vacation!";

    // create a h1 then append to webpage
    var title = document.createElement("h1");
    var titleNode = document.createTextNode("Please choose a place where you would like to have vacation at!"); 
    title.append(titleNode);
    document.body.append(title);

    count = count + 1;

    // create p and select elements and assign ids to with count
    var pA = document.createElement("p");

    selectA.setAttribute("id",count);
    pA.setAttribute("id", count);

    document.body.append(selectA);

    // x 
    for (x in data[firstData])
    {

        if (x == 0)
        {
            // Print a question here then append          
            var pAtextnode = document.createTextNode(data[firstData][0]); 
            pA.append(pAtextnode);
            document.body.append(pA);
        
        }
        

        //appended blank selectA
        document.body.append(selectA);
        if (x >= 1)
        {
            // Suppose to print options here
            var option = document.createElement("option");
            option.value = data[firstData][x];
            option.text = data[firstData][x].charAt(0).toUpperCase() + data[firstData][x].slice(1);

           selectA.appendChild(option);
        }
    } // init() end here


    // if selection change - trigger this
    selectA.addEventListener("change", function()
    {
        // set a cookie
        SetCookie(count, selectA.options[selectA.selectedIndex].text.toLowerCase());
                
        // set a local storage
        window.localStorage.setItem(count, selectA.options[selectA.selectedIndex].text.toLowerCase());

        // carry the select element to the function
        stability(selectA);
    });

    
}


// failed function - did nor function appropriately
function removeSelection(data){
    while (data != document.lastElementChild.lastElementChild.lastElementChild)
    {
        
        data.parentElement.lastElementChild.lastElementChild.remove();
        // pB.parentElement.parentElement.lastElementChild.remove(); 
    }
}

// function stability - carry through selections
function stability(selectB)
{
    // A failed attempt to remove selection
    removeSelection(selectB);

    // checking to see if stability is called
    console.log("stability() triggered");

    // carry over from last selected text for the next question
    if (selectB.parentElement != null)
    { 
         selectedText = selectB.options[selectB.selectedIndex].text.toLowerCase();

    }
    count = count + 1;

    // create select and paragraph of question and answer
    selectA = document.createElement("select");  
    selectA.setAttribute("id",count);
    var pB = document.createElement("p");
    pB.setAttribute("id", "p" + count);
    
    // Checking the the selectedText from last selection
    console.log(selectedText)

    // searching for the next choices and question
    for (x in data[selectedText])
    {
    // console.log(x);
       // console.log("test " + data[selectedText][x]);

    
        
        if (x == 0)
        {
            // Prints a question here
            
            var pBtextnode = document.createTextNode(data[selectedText][0]); 
            pB.append(pBtextnode);
            document.body.append(pB);
          

        }
            // second and third "select"
            document.body.append(selectA);
            if (x >= 1)
            {
                // Prints options into Selected
                var option = document.createElement("option");
                option.value = data[selectedText][x];
                option.text = data[selectedText][x].charAt(0).toUpperCase() + data[selectedText][x].slice(1);
                selectA.add(option, selectA[x]);      
            }
            
            // when everything is done
            if (count == 4)
            {
                // create a button that will delete cookie
                buttonA = document.createElement("button");
                buttonA.setAttribute("type", "button");
                buttonA.setAttribute("value", "delete cookie");
                buttonA.setAttribute("onClick", "DeleteAllCookie()");
                var buttonTextNode = document.createTextNode("DELETE COOKIE");
               
                // assigns the result to cookie
                SetCookie("answer", pBtextnode.textContent);                
                
                // assigns the result to the local storage
                localStorage.setItem("answer", pBtextnode.textContent);
                finalAnswer = localStorage.getItem("answer");

                // informs the user of their answer
                alert("You want a " + localStorage.getItem(1) + " place to live in. You want a " + localStorage.getItem(2) + ". You want a " + localStorage.getItem(3) + ". In that case, I recommend you to live in " + localStorage.getItem("answer"));

                // removes the current select
                document.body.removeChild(selectA);

                //shows up picture
                LoadAnswerImage(finalAnswer);

                //cookie button and textnode then add to the document
                pCookie = document.createElement("p");
                buttonA.append(buttonTextNode);
                pCookie.append(buttonA);
                document.body.append(pCookie);

                // Validation
                addValidation(finalAnswer);
                
                
            }
    }
    

        // selection change
    selectA.addEventListener("change", function()
        {
            // adds count and answers to cookie/local storage
            SetCookie(count, selectA.options[selectA.selectedIndex].text.toLowerCase())
            localStorage.setItem(count, selectA.options[selectA.selectedIndex].text.toLowerCase());

            // loop 
            stability(selectA);
        });
} // End Stability()


// visit counter cookie to track how many times a user has been here
function VisitCounter(){

    // create a element that will apepar firstly
    var counterElement = document.createElement("h2");

    // checking to see if triggered
    console.log("VisitCounter Triggered");

    //get the current cookie
    var visitsC = GetCookie("counter");
    visitsC = parseInt(visitsC);
    if (!visitsC) 
    {
        // Setting cookie and telling the user he's been there one time
        visitsC = 1;
        SetCookie("counter", visitsC);                  
        counterTextnode = document.createTextNode("Hey, I don't mean to be weird but I noticed it's your first time!"); 
        counterElement.append(counterTextnode);

    }
    else 
    {
        // setting a cookie and telling the user how many times he been here before
        visitsC = visitsC + 1;
        SetCookie("counter", visitsC);
        counterTextnode = document.createTextNode("Hey! You've been here like " + visitsC + " times according to our cookies!"); 
        counterElement.append(counterTextnode);
    }

    // append if or else element
    document.body.append(counterElement);

}

// localstorage counter how many times user has been here
function LocalStorageCounter(){

    // gets and parses the counter in localstorage
    var visitsL = localStorage.getItem("counter")
    visitsL = parseInt(visitsL);
    
    // if first time
    if (!visitsL) 
    {
        visitsL = 1;
        localStorage.setItem("counter", visitsL);

    
    }
    // else second time
    else 
    {
        
        visitsL = visitsL + 1;
        localStorage.setItem("counter", visitsL);
    }
}