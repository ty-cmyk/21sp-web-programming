
//function  parameter
function logOutGreeting (greeting) {
    console.log(greeting);
}
//arguement
logOutGreeting('Salutations');

function getStuff (ingredient) {
    console.log('get' + ingredient);
}

getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

//old
const makeSandwich = function (ingrediantArray) {
    for(let i=0; i < ingrediantArray[i]);
        console.log('get', ingrediantArray[i]);

}

//new

const makeSandwich = (ingrediantArray) => {
    for(let i = 0; i < ingrediantArray; i++);
        console.log('get ', ingrediantArray[i]);

}


makeSandwich(['bread', 'mayo', 'tuna']);