// objects

// create
const myCar = {
     //key: 'value'
      color: 'black',
      pistons: 4
};
console.log(myCar);


// mutate: add data (properties)

myCar.fuelInjection = true;
console.log(myCar);
// array notation when hyphenated
myCar['4-wheel-drive'] = true;

// display single item with dot
console.log('my car is', myCar.color);
// display single item with array notation
console.log('is it 4 wheel drive?', myCar['4-wheel-drive']);
// using toString (works with arrays too)
console.log(myCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());
// mutate: remove property
delete myCar.pistons;
console.log('my car without pistons', myCar)
// merge two objects
const basicJuke ={
      wheels: 4,
      color: 'red',
      doors: 4,
      make: 'nissan'
};
const newJuke = Object.assign({}, basicJuke, myCar);
console.log('new juke', newJuke);
// objects in arrays
const cars = [
      { make: 'Nissan', model: 'Rogue', color: 'orange' },
      { make: 'Nissan', model: 'Altima', color: 'blue' },
      { make: 'Dodge', model: 'Viper', color: 'blue' },
      { make: 'VW', model: 'Beetle', color: 'pink' },
      { make: 'Chevy', model: 'Blazer', color: 'black' },
      { make: 'Dodge', model: 'Charger', color: 'green' }
];
console.log('index 0 of cars color', cars[0].color);
const randomIdx = Math.round(Math.random() * cars.length - 1);
console.log('my car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);

