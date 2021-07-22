# Manipulating the DOM

## What is the DOM
Document object Model - basically it is the web page. However we can manipulate it using JS functions
It doesn't save anything to the actual HTML but it does allow the user to change it live

## Things we did to manipulate the dom in office hours:
All done in the console:

1. Change the id called doc to now say Whats up Doc?
document.getElementById('doc').innerHTML = 'Whats up Doc?'

2. Create a new element
var addText = document.createElement('h2')

3. Create the text we want to be displayed in our new element
var text = document.createTextNode('Take a look at our Toons!')

4. Put the text inside the variable or write the instructions that will do this
addText.appendChild(text)

5. Actually get this to print to the page
document.getElementById('append').appendChild(addText)

6. Lets use the same variables but change the type of element
addText = document.createElement('h1')

7. Again same variable but change the contents of new element
text = document.createTextNode('Welcome to Office Hours')

8. We don't want to get rid of what we have but lets add it in front of our h2 by writing the instructions
addText.prepend(text)

9. Now lets get it onto our page
document.getElementById('append').prepend(addText)

10. Create an alert function
function alertFun() {alert ("check me out!")}

11. Lets invoke the function
alertFun()

12. Lets select the main div so we can add a border to it
var toons = document.querySelector('div')

13. Lets tell it what border we want
toons.style.border = "5px groove black"

14. Lets change the values that the button would print to the console
add(6,5)


## Now look at the js file (the bottom)
Here we have written out some functions but explained them in plain English
doing this means we know for sure that we understand what these functions are doing