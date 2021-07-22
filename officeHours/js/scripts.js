$(document).ready(function() {
    $.get("https://looney-toons-api.herokuapp.com/api/characters", function(res) {
        console.log(res.data)
        var html_str = "";
        for(var i = 0; i < res.data.length; i++) {
            html_str += "<section class='toons'>";
            html_str += "<h3>" + res.data[i].name + "</h3>";
            html_str += "<img src='" + res.data[i].img + "' alt='" + res.data[i].name + "' />"
            html_str += "<h4>" + res.data[i].birthDay + "</h4>"
            html_str += "</section>";
        }
        $(".main").html(html_str);
    }, "json");
})

function myFunction() { // creating a function giving it a name myFunction not requiring any outside information when activated follow the instructions
    alert("You clicked a Toon!") // instructions are to create an alert that says you clicked a toon!
}

for(let i=0; i<20; i++) {  // for loop is stating that we will start at 0, go until the current value of i is less than 20 and increase the value of i by 1 each time
    if(i % 2 !== 0) { // conditional = if the current value of i / 2 does not have a remainder of 0 do the following instructions
        console.log(i)  // {} contain the instructions which are to print to the console the current value of i
    }
}

var sum = 0  // creating a variable calling it sum setting it equal to 0
function add(num1,num2) { // creating a function calling it add asking for 2 parameters to be given
    console.log("adding numbers", num1 + num2) // printing to the console "adding numbers" and the sum of the 2 parameters
    return num1 + num2 // returning to the webpage the sum of the parameters
}
add(2,5)  //  invoking the function

