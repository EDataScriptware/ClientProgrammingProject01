
console.log("structuredData.js triggered");
var count = 0;
var selectA = document.createElement("select");





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

    document.title = "Website Vacation!";

    var title = document.createElement("h1");
    var titleNode = document.createTextNode("Please choose a place where you would like to have vacation at!"); 
    title.append(titleNode);
    document.body.append(title);

    console.log("init() triggered")
    count = count + 1;

    var pA = document.createElement("p");

    selectA.setAttribute("id",count);
    pA.setAttribute("id", count);

    document.body.append(selectA);

    for (x in data[firstData])
    {
        // console.log(x);
        // console.log("test " + data[firstData][x]);

        
        if (x == 0)
        {
            // Suppose to print a question here
            // pA.innerHTML = data[firstData][0];
            
            var pAtextnode = document.createTextNode(data[firstData][0]); 
            pA.append(pAtextnode);
            document.body.append(pA);
        
        }
        document.body.append(selectA);
        if (x >= 1)
        {
            // Suppose to print options here
            var option = document.createElement("option");
            option.value = data[firstData][x];
            option.text = data[firstData][x].charAt(0).toUpperCase() + data[firstData][x].slice(1);
           // selectA.add(option, selectA[x]);

           selectA.appendChild(option);
        }
    } // init() end here



    selectA.addEventListener("change", function()
    {
        //console.log("console log test")
        //console.log("event target value" + event.target.id);


        SetCookie(count, selectA.options[selectA.selectedIndex].text.toLowerCase());
        
        
        //document.cookie= count+"="+ selectA.options[selectA.selectedIndex].text.toLowerCase();
        
        
        window.localStorage.setItem(count, selectA.options[selectA.selectedIndex].text.toLowerCase());

        stability(selectA);
    });

    
}


// failed function
function removeSelection(data){
    while (data != document.lastElementChild.lastElementChild.lastElementChild)
    {
        
        data.parentElement.lastElementChild.lastElementChild.remove();
        // pB.parentElement.parentElement.lastElementChild.remove(); 
    }
}


function stability(selectB)
{
    removeSelection(selectB);

    console.log("stability() triggered");
    if (selectB.parentElement != null)
    { 
         selectedText = selectB.options[selectB.selectedIndex].text.toLowerCase();

    }
    count = count + 1;

    // if (document.getElementById())
    selectA = document.createElement("select");
   
    selectA.setAttribute("id",count);

    var pB = document.createElement("p");
    pB.setAttribute("id", "p" + count);
    
    console.log(selectedText)

    for (x in data[selectedText])
    {
    // console.log(x);
       // console.log("test " + data[selectedText][x]);

    
        
        if (x == 0)
        {
            // Prints a question here
            
            // pB.innerHTML = data[selectedText][0];
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
            

            // console.log("Check for undefined - " + selectA.length);

            if (count == 4)
            {
                buttonA = document.createElement("button");
                buttonA.setAttribute("type", "button");
                buttonA.setAttribute("value", "delete cookie");
                buttonA.setAttribute("onClick", "DeleteAllCookie()");
                var buttonTextNode = document.createTextNode("DELETE COOKIE");
                console.log(pBtextnode.textContent);
                console.log(pB);

                SetCookie("answer", pBtextnode.textContent);
                
                
                // document.cookie="answer="+pBtextnode.textContent;
                
                
                localStorage.setItem("answer", pBtextnode.textContent);
                finalAnswer = localStorage.getItem("answer");

                alert("You want a " + localStorage.getItem(1) + " place to live in. You want a " + localStorage.getItem(2) + ". You want a " + localStorage.getItem(3) + ". In that case, I recommend you to live in " + localStorage.getItem("answer"));

                document.body.removeChild(selectA);
                LoadAnswerImage(finalAnswer);
                pCookie = document.createElement("p");
                buttonA.append(buttonTextNode);
                pCookie.append(buttonA);

                document.body.append(pCookie);
                
            }
    }
    


    selectA.addEventListener("change", function()
        {
            SetCookie(count, selectA.options[selectA.selectedIndex].text.toLowerCase())
           
           
            //  document.cookie=count+"="+selectA.options[selectA.selectedIndex].text.toLowerCase();
           
            
            localStorage.setItem(count, selectA.options[selectA.selectedIndex].text.toLowerCase());

            stability(selectA);
        });
} // End Stability()

function VisitCounter(){

    var counterElement = document.createElement("h2");

    console.log("VisitCounter Triggered");
    var visitsC = GetCookie("counter");
    visitsC = parseInt(visitsC);
    if (!visitsC) 
    {
        visitsC = 1;
         SetCookie("counter", visitsC);         

         
         counterTextnode = document.createTextNode("Hey, I don't mean to be weird but I noticed it's your first time!"); 
         
         counterElement.append(counterTextnode);

    
    }
    else 
    {
        
        
        visitsC = visitsC + 1;
        SetCookie("counter", visitsC);
        counterTextnode = document.createTextNode("Hey! You've been here like " + visitsC + " times according to our cookies!"); 
        counterElement.append(counterTextnode);

    }
    document.body.append(counterElement);

}

function LocalStorageCounter(){

    var visitsL = localStorage.getItem("counter");
    
    visitsL = parseInt(visitsL);
    if (!visitsL) 
    {
        visitsL = 1;
        localStorage.setItem("counter", visitsL);

    
    }
    else 
    {
        visitsL = visitsL + 1;
        localStorage.setItem("counter", visitsL);
    }
}