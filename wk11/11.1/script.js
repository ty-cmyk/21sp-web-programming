// Examples of Loops!

// for
var val = 0

for ( x = 0; x <= 10; x = x + 1) {
    val = x + 10
    console.log(x)
}

// while
// always loops forever can cause crashing
var starter = 10

while (starter > 0) {
    console.log(starter)
    starter = starter - 1
}

// for in object
var obby = {size: 5, weight:400, color= 'pink'}

for (x in obby) {
    console.log (obby[x])
}

// for each
var things = [1, 2, 3, 'pink', 'hello', 'yellow', 42]

things.forEach(function(val, i) {
    console.log(i)
})