                
const quoteBtn = document.querySelector('button')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const iconBtn = document.querySelector('.speech')


quoteBtn.addEventListener ('click', ()=> {
    quoteBtn.innerText = "Generating Quote..."
    fetch('http://api.quotable.io/random').then(Response => Response.json()).then(data => {
        console.log(data);
    quote.innerText = data.content    
    author.innerText = data.author 
    quoteBtn.innerText = "Next Quote"
 
    })

})

iconBtn.addEventListener('click', ()=> {
    let quoteUtterance = new SpeechSynthesisUtterance(`${quote.innerText}`)
   // speechSynthesis.cancel()
    speechSynthesis.speak(quoteUtterance)
    console.log(quoteUtterance);
})




/*num1= prompt("enter a number: ")
num2 = prompt("enter a number: ")


function divide(num1, num2){
 let output = num1 / num2
 return output
}


division = (divide(num1, num2))
console.log(division)*/