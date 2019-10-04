function addValidation(finalAnswer)
{
    var textBoxElement = document.createElement("INPUT");
    textBoxElement.setAttribute("type", "text");
    textBoxElement.setAttribute("placeholder", "Your Name");
    textBoxElement.setAttribute("id", "name");

    buttonB = document.createElement("button");
    buttonB.setAttribute("type", "button");
    buttonB.setAttribute("value", "validate name");
    buttonB.setAttribute("onclick", "validationCheck(finalAnswer)");
    var buttonBTextNode = document.createTextNode("INPUT NAME");
    pName = document.createElement("p");

    pName.append(buttonB);
    buttonB.append(buttonBTextNode)

    document.body.append(textBoxElement);
    document.body.append(pName);
}

function validationCheck(finalAnswer)
{
        if (document.getElementById("name").value == "") 
        {
            alert("User name may not be blank - try again");
        }
        else 
        {
            name= document.getElementById("name").value
            alert("Hello " + name + ", it is very nice to meet you. I am glad that you are looking forward to living in " + finalAnswer + " for vacation. I hear it is very nice there.");
        }
         
    
}