$(document).ready(function() {
    $.get("https://looney-toons-api.herokuapp.com/api/characters", function(res) {
        console.log(res.data)
        var html_str = "";
        for(var i = 0; i < res.data.length; i++) {
            html_str += "<section class='toons'>";
            html_str += "<h3>" + res.data[i].name + "</h3>";
            html_str += "<img src='" + res.data[i].img + "' alt='" + res.data[i].name + "' />"
            html_str += "</section>";
        }
        $(".main").html(html_str);
    }, "json")
})

function myFunction() {
    alert("You clicked a Toon!")
}
// var data = fetch(`https://looney-toons-api.herokuapp.com/api/characters`).then(data => {return data}).then(console.log("line 18 fetch data", data))