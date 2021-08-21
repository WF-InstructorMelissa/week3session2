console.log(toonName)
console.log(toonName[7])

function addName(arr) {
    console.log(arr)
    for(var n = 0; n < arr.length; n++) {
        var node = document.createElement('li')
        // creates an li to add the items to our ul
        var item = document.createTextNode(arr[n])
        // creates the text that goes in the li
        node.appendChild(item)
        // adds the child text to the parent li
        document.getElementById('list').appendChild(node)
        // talks back to the html add the newly created li to the existing ul
    }
}

var images = document.getElementById('images')
var newImage = ''

function addImg(arr) {
    console.log(arr)
    for(var i = 0; i < arr.length; i++) {
        newImage += '<img src="'+arr[i]+'" alt="Toon" />'
    }
    images.innerHTML += newImage
}

var sectionName = []
var sectionImg = []

for(var n=0; n<toonName.length; n++){
    sectionName.push(toonName[n])
}
console.log(sectionName)

for(var i=0; i<toonImg.length; i++) {
    sectionImg.push(toonImg[i])
}
console.log(sectionImg)

function forIf() {
    for(var n=0; n<sectionName.length; n++) {
        for(var i=6; i<sectionImg.length; i++) {
            if(n === i) {
                console.log(sectionName[n], sectionImg[i])
            }
            else {
                console.log("Sorry function failed")
                // return sectionName
            }
        }
    }
}

var box = ''
var special = document.getElementById('special')

function allToons(arr) {
    for(var i=0; i<arr.length; i++) {
        console.log(arr[i].name)
        box += '<section>'+'<h3>'+arr[i].name+'</h3>'+ '<h4>'+arr[i].birthDay+'</h4>'+'<img src="'+arr[i].img+'" alt="'+arr[i].name+'" />'+'</section>'
    }
    special.innerHTML += box
}
