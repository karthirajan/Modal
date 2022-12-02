'use strict';

let openModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let blurs = document.querySelector('.overlay');

let modalOpen = function(){
    modal.classList.remove('hidden');
    blurs.classList.remove('hidden');
}

let modalClose = function(){
    modal.classList.add('hidden');
    blurs.classList.add('hidden');
}

closeModal.addEventListener('click',modalClose)

for(let i = 0; i < openModal.length; i++){
     openModal[i].addEventListener('click',modalOpen)  
}

document.addEventListener('keydown',function(event){
    console.log(event.key);
    if(event.key === 'Backspace' && !modal.classList.contains('hidden')){
        modalClose()
    }
})

/*let i = 10;

function sum(){
    console.log('First class');
}

const high5 = function(){
    return function(message){
        console.log(`${message}`)
    };
}

const msg = high5();
console.log(msg('hi'))

document.body.addEventListener('click',high5);*/

/*const spiceJet = {
    airline : 'spice jet',
    iatCode : 'SJ',
    booking : [],
    book : function(flightNumber,name){
        console.log(`${name} has booked a seat on ${this.airline} flight ${this.iatCode}${flightNumber}`)

        this.booking.push({flight: `${this.iatCode}${flightNumber}`, name })

    }
}

//spiceJet.book(4534,'karthi');
//NOT work
//const book = spiceJet.book;
//book(2345,'rajan');
//console.log(book)

const book = spiceJet.book;

const indianAir = {
    airline : 'indian airline',
    iatCode : 'IA',
    booking : [],
}

//call
book.call(indianAir,2345,'rajan');

//apply - it input should array
const data = [2345,'rajan']
book.apply(indianAir,data);

//bind
const bookIA = book.bind(indianAir);
bookIA(2345,'rajan')*/

/*const secure = function(){
    let passenger = 0;
    return function(){
        passenger++;
        console.log(passenger);
    }
}

const count = secure();
count();
count();
count();*/

const arr = ['a','b','c','d','e'];

//for loop
for(let i = 0; i < arr.length; i++){
   console.log(arr[i])
}

//enhanced for loop
console.log('enhanced for loop')
arr.forEach(function(value,index){
    console.log(value+' : '+index);
})
  
//task
const amount = [200,500,-120,700,3000,-500]

// amount credited - values & index
// amount widthdrawl - values & index
// Math.abs()

//Map
const currencies = new Map([
    ['USD','United States Dollar'],
    ['EUR','Euro'],
    ['GBP','Pound Sterling']
])

currencies.forEach(function(value,key){
    console.log(value +' : '+key)
})

//Set
const unique = new Set(['USD','EUR','GBP','USD'])

unique.forEach(function(value,value2){
    console.log(value+':'+value2)
})

//map method

const sum = [1,3,5,4,2]

const newSum = sum.map(function(elements){
    return elements * 2
})

console.log(newSum)


//filter method

const sumFilter = [1,3,5,4,2]

const newSumFilter = sumFilter.filter(function(elements){
    return elements > 2
})

console.log(newSumFilter)

//reduce method

const sumReduce = [1,3,5,4,2]

const sumArr = sumReduce.reduce(function(previous,current){
    return previous + current
    
})

console.log('print')
console.warn('print')
console.error('print')

console.log(sumArr)