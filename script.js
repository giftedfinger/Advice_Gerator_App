

const print = console.log.bind()

const btn = document.querySelector(".icon-div");
let quoteNumber = document.querySelector('#quoteNumber')
let Advice = document.querySelector('.advice')


//  print(quoteNumber)

const createAdvise= ((id,advice)=>{
    quoteNumber.textContent = id
Advice.textContent = advice
})




const adviceApi =async ()=>{
    try {
        let res = await fetch('https://api.adviceslip.com/advice');
       let data =await res.json();

        let id = data.slip.id
        let advice= data.slip.advice

       print(data)
       print(data.slip.id)

        createAdvise(id,advice) 

    } catch (error) {
        print(error)
    }
    // adviceApi()
}


btn.addEventListener('click', ()=>{
adviceApi()

}
)

document.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) { // key code of the keybord key
        event.preventDefault();
        // your code to Run
        adviceApi()
    }
});