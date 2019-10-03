console.log("images.js triggered")

// Moving RV across the screen
function movingRV()
{
    console.log("movingRV() triggered");
    var imageRVElement = document.createElement("img");
    imageRVElement.setAttribute("height", "30");
    imageRVElement.setAttribute("src", "media/RV.png");
    imageRVElement.setAttribute("id", "RV");
    document.body.append(imageRVElement);

// RV in motion

        // yPos is used to control the up and down
        var yPos = 0;
        // xPos is used to the control left and right
        var xPos = 0;
   
        
        // Added to the style of top and left only to represent the graph from left to right and top to bottom 

        // imageRVElement.style.top = yPos + 'px';
        // imageRVElement.style.left = xPos + 'px';

        // setInterval(nextFunction, "speed")
        var interval = setInterval(firstStep, 10);
    
        // Diagonally right-down
        function firstStep() 
        {
        
         imageRVElement.setAttribute("src", "media/RV.png");
         
            if (yPos == 125) 
          {
            clearInterval(interval);
            interval = setInterval(secondStep, 15);
          } 
          else 
          {
            xPos++;
            yPos++;
            imageRVElement.style.top = yPos + 'px';
            imageRVElement.style.left = xPos + 'px';
      
  
          }
        }

        // Going up
        function secondStep() 
        {
          if (yPos == 15) 
          {
            clearInterval(interval);
            interval = setInterval(thirdStep, 9);
          } 
          else 
          {
            // xPos++;
            yPos--
            imageRVElement.style.top = yPos + 'px';
            imageRVElement.style.left = xPos + 'px';
          }
        }
        
        // Going back down diagonally to D.C.
        function thirdStep()
        {
            if (yPos == 65) 
            {
              clearInterval(interval);
              interval = setInterval(fourthStep, 25);
            } 
            else 
            {
             xPos++;
            yPos++
            imageRVElement.style.top = yPos + 'px';
            imageRVElement.style.left = xPos + 'px';
            }
            
        }
        // Going up to Great Lakes
        function fourthStep()
        {
            if (xPos == 255) 
            {
              clearInterval(interval);
              interval = setInterval(fifthStep, 20);
            } 
            else 
            {
                xPos = xPos + 2;
                yPos++
                imageRVElement.style.top = yPos + 'px';
                imageRVElement.style.left = xPos + 'px';
            }
            
        }
        // Up around Great Lakes
        function fifthStep()
        {
            if (yPos == 55) 
            {
              clearInterval(interval);

              interval = setInterval(sixthStep, 50);
            } 
            else 
            {
                //xPos++;
                yPos--
                imageRVElement.style.top = yPos + 'px';
                imageRVElement.style.left = xPos + 'px';
            }
            
        }

        // Move straight across northern U.S. border
        function sixthStep()
        {
            imageRVElement.setAttribute("src", "media/flippedRV.png");
            if (yPos == 0) 
            {
              clearInterval(interval);
              interval = setInterval(seventhStep, 30);
              
            } 
            else 
            {
                xPos--;
                yPos--;
                imageRVElement.style.top = yPos + 'px';
                imageRVElement.style.left = xPos + 'px';
            }
            
        }
        //Get into position for the next movement
        function seventhStep()
        {
            if (yPos == 0) 
            {
              clearInterval(interval);
              interval = setInterval(eightStep, 20);
              
            } 
            else 
            {
                xPos--;
                yPos++;
                imageRVElement.style.top = yPos + 'px';
                imageRVElement.style.left = xPos + 'px';
            }
            
        }
        // Everything is in position and start to loop.
        function eightStep()
        {
            if (xPos == 0) 
            {
              clearInterval(interval);
              interval = setInterval(firstStep, 15);
                xPos=0;
                yPos=0;
            } 
            else 
            {
                xPos--;
                //yPos++;
                imageRVElement.style.top = yPos + 'px';
                imageRVElement.style.left = xPos + 'px';
            }
            
        }
        
        
        
}

function LoadAnswerImage(finalAnswer)
{   

    var imageAnswerElement = document.createElement("img");
    imageAnswerElement.setAttribute("height", "250px");

    
    if (finalAnswer == "New York City, New York")
    { 
        imageAnswerElement.setAttribute("src", "media/NewYork.png");
    }
    else if (finalAnswer == "San Franscisco, California")
    {
        imageAnswerElement.setAttribute("src", "media/SanFranscisco.png");
    }
    else if (finalAnswer == "St. Louis, Missouri")
    {
        imageAnswerElement.setAttribute("src", "media/StLouis.png");
    }

    else if (finalAnswer == "Charleston, South Carolina")
    {
        imageAnswerElement.setAttribute("src", "media/Charleston.png");
    }
    
    else if (finalAnswer == "Barrow, Alaska")
    {
        imageAnswerElement.setAttribute("src", "media/Barrow.png");
        imageAnswerElement.setAttribute("id", "alaska");
        var comment = document.createElement("p");
        var commentTextNode = document.createTextNode("Where's Alaska!?");
        comment.append(commentTextNode);
        document.body.append(comment); 


    }    
    else if (finalAnswer == "San Marcos, Texas")
    {
        imageAnswerElement.setAttribute("src", "media/SanMarcos.png");
    }    
    else if (finalAnswer == "Salt Lake City, Utah")
    {
        imageAnswerElement.setAttribute("src", "media/SaltLakeCity.png"); 
    }    
    else if (finalAnswer == "St. Peter, Minnesota")
    {
        imageAnswerElement.setAttribute("src", "media/StPeter.png"); 
    }
    else 
    {
        alert("ERROR");
    }

    document.body.append(imageAnswerElement);
}