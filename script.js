const dice = document.querySelector('.dice');
const quote = document.querySelector('.quote');
const para = document.querySelector('#advice');
const num = document.querySelector('#num');
const diceBtn = document.querySelector('.dice')

const getQuote =async ()=> {

    // https://api.adviceslip.com

    diceBtn.classList.add('diceRolling')
const res = await fetch('https://api.adviceslip.com/advice');

const data = await res.json();
diceBtn.classList.remove('diceRolling')
// console.log(data.slip.advice)
num.innerHTML= data.slip.id
para.innerHTML = data.slip.advice
// quote. = data ;
}

dice.addEventListener('click', getQuote)

// function getQuote(){

//         // https://api.adviceslip.com
    
//     fetch('https://api.adviceslip.com')
//     .then((response)=>{
//     response.json()
    
//     })
//     .then(data=>{
//         console.log(data)
//         // quote.innerHTML=`${data}`;
//     })

 
// catch(error){
//     console.log(error);
// }

// async function

