console.log(h1)
VM2637:1 <h1 id=​"doc">​19​</h1>​
undefined
var arr = ["Porky Pig", "Marving the Martian"]
undefined
arr.push("Tweety")
3
arr.length
3
console.log(arr)
VM3018:1 (3) ['Porky Pig', 'Marving the Martian', 'Tweety']
undefined
h1 +arr
'[object HTMLHeadingElement]Porky Pig,Marving the Martian,Tweety'
h1.append(arr)
undefined
console.log(h1)
VM3581:1 <h1 id=​"doc">​"19""Porky Pig,Marving the Martian,Tweety"</h1>​
undefined
h1.prepend(arr)
undefined
h1.innerText('Lets learn to Manipulate the DOM')
VM3797:1 Uncaught TypeError: h1.innerText is not a function
    at <anonymous>:1:4
(anonymous) @ VM3797:1
h1.innerHTML('Lets learn to Manipulate the DOM')
VM3824:1 Uncaught TypeError: h1.innerHTML is not a function
    at <anonymous>:1:4
(anonymous) @ VM3824:1
h1.innerHTML 'Lets learn to Manipulate the DOM'
VM3848:1 Uncaught SyntaxError: Unexpected string
h1.innerHTML = 'Lets learn to Manipulate the DOM'
'Lets learn to Manipulate the DOM'
arr.push({"name": "Foghorn Leghorn"})
4
console.log(arr)
VM4151:1 (4) ['Porky Pig', 'Marving the Martian', 'Tweety', {…}]0: "Porky Pig"1: "Marving the Martian"2: "Tweety"3: {name: 'Foghorn Leghorn'}length: 4[[Prototype]]: Array(0)
undefined
h1.innerText = arr[3].name
'Foghorn Leghorn'
h1.innerText = arr[0]
'Porky Pig'
arr.push({"name": "Elmer Fudd", "birthDay": 1940})
5
arr[0] = ({"name": "Porky Pig", "birthDay": "March 2, 1935"})
{name: 'Porky Pig', birthDay: 'March 2, 1935'}
console.log(arr)
VM5034:1 (5) [{…}, 'Marving the Martian', 'Tweety', {…}, {…}]0: {name: 'Porky Pig', birthDay: 'March 2, 1935'}1: "Marving the Martian"2: "Tweety"3: {name: 'Foghorn Leghorn'}4: {name: 'Elmer Fudd', birthDay: 1940}length: 5[[Prototype]]: Array(0)
undefined
arr[0].push({"spouse": "Petunia Pig"})
VM5180:1 Uncaught TypeError: arr[0].push is not a function
    at <anonymous>:1:8
(anonymous) @ VM5180:1
arr[0].append({"spouse": "Petunia Pig"})
VM5212:1 Uncaught TypeError: arr[0].append is not a function
    at <anonymous>:1:8
(anonymous) @ VM5212:1
arr[0].spouse = "Petunia Pig"
'Petunia Pig'
console.log(arr)
VM5384:1 (5) [{…}, 'Marving the Martian', 'Tweety', {…}, {…}]0: birthDay: "March 2, 1935"name: "Porky Pig"spouse: "Petunia Pig"[[Prototype]]: Object1: "Marving the Martian"2: "Tweety"3: {name: 'Foghorn Leghorn'}4: {name: 'Elmer Fudd', birthDay: 1940}length: 5[[Prototype]]: Array(0)
undefined