

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


// Donate Now Button Section 1 Function
document.getElementById('donate-now-1').addEventListener('click', function(){
    const showAmountElement = document.getElementById('show-amount-1');
    const showAmount = parseFloat(showAmountElement.innerText);
    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    const inputValue = getInputValueById('input-value-1');
    const newShowAmount = showAmount + inputValue;

    showAmountElement.innerText = newShowAmount;

    const remainingBalance = mainBalance - inputValue;
    mainBalanceElement.innerText = remainingBalance;
      
})

// Donate Now Button Section 2 Function

document.getElementById('donate-now-2').addEventListener('click', function(){
    const showAmountElement = document.getElementById('show-amount-2');
    const showAmount = parseFloat(showAmountElement.innerText);

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    const inputValue = getInputValueById('input-value-2');
    const newShowAmount = showAmount + inputValue;

    showAmountElement.innerText = newShowAmount;

    const remainingBalance = mainBalance - inputValue;
    mainBalanceElement.innerText = remainingBalance;
      
})


// Donate Now Button Section 3 Function

document.getElementById('donate-now-3').addEventListener('click', function(){
    const showAmountElement = document.getElementById('show-amount-3');
    const showAmount = parseFloat(showAmountElement.innerText);

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    const inputValue = getInputValueById('input-value-3');
    const newShowAmount = showAmount + inputValue;

    showAmountElement.innerText = newShowAmount;  
    
    const remainingBalance = mainBalance - inputValue;
    mainBalanceElement.innerText = remainingBalance;
})