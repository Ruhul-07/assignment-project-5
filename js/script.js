

//common function

function getInputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;

}


// History Button Function
document.getElementById('history-btn').addEventListener('click', function(){
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');

    historyBtn.classList.add('bg-primary')
    donationBtn.classList.remove('bg-primary')

   const card = document.getElementById('card');

   card.classList.add('hidden')
})

document.getElementById('donation-btn').addEventListener('click', function(){
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');

    historyBtn.classList.remove('bg-primary')
    donationBtn.classList.add('bg-primary')

   const card = document.getElementById('card');

   card.classList.remove('hidden')
})

// Donate Now Button Function

document.getElementById('donate-now').addEventListener('click', function(){
    const inputValue = getInputValueById('input-value');
    

    
})
