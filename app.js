data = require('./data').data;
const util = require('util')



//First Goal
const found = []
const AnimalRecursive = (object) => {
    Object.keys(object).forEach(key => {
    if (typeof object[key] === 'object') {
            if(key != 'animals'){
                AnimalRecursive(object[key])
            }else{
                let animals = object[key].filter(value => value.name.includes('ry'))
                if(animals.length > 0) {
                    found.push(animals)
                }
            }
    }
})}
AnimalRecursive(data)
//Second Goal
const addCountAnimal = (data) => {
    data.forEach(value => {
        value.name = (value.name + ' ['+(value.people != undefined ? value.people.length : 0)+ ']');
        
        value.people.forEach(user => (
            user.name = user.name + ' ['+(user.animals != undefined ? user.animals.length : 0)+ ']'));
    });
    return data;
};

console.log('goal 1')
console.log(util.inspect(found, false, null, true /* enable colors */))
console.log('goal 2')
console.log(util.inspect(addCountAnimal(data), false, null, true /* enable colors */))
