// adding validation 
function addValidation(finalAnswer)
{
    // creates an input text box with following attributes
    var textBoxElement = document.createElement("INPUT");
    textBoxElement.setAttribute("type", "text");
    textBoxElement.setAttribute("placeholder", "Your Name");
    textBoxElement.setAttribute("id", "name");

    // creates a button with following attributes
    buttonB = document.createElement("button");
    buttonB.setAttribute("type", "button");
    buttonB.setAttribute("value", "validate name");
    buttonB.setAttribute("onclick", "validationCheck(finalAnswer)");
    var buttonBTextNode = document.createTextNode("INPUT NAME");

    // creates a paragraph element to split button from text node
    pName = document.createElement("p");

    // append to parent node
    pName.append(buttonB);
    buttonB.append(buttonBTextNode)

    // parent node appends to document
    document.body.append(textBoxElement);
    document.body.append(pName);
}

// ON CLICK BY buttonB to validate
function validationCheck(finalAnswer)
{   
        // if input text box is blank - it will tell the user to try again
        if (document.getElementById("name").value == "") 
        {
            alert("User name may not be blank - try again");
        }
        else 
        {
            // saves the name value and informs the user that it is nice to meet you and recommend to live in their final destination
            name= document.getElementById("name").value
            alert("Hello " + name + ", it is very nice to meet you. I am glad that you are looking forward to living in " + finalAnswer + " for vacation. I hear it is very nice there.");
        }
         
    
}