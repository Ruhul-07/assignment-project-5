
/**------------------Common Function---------------------- */

function getInputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;

}
// History show Function

function history(id){
    const inputValue = getInputValueById(id)
    const historyItem = document.createElement('div');
    historyItem.className = "rounded-lg p-8 border-1 border-bg-[#1111111]";
    historyItem.innerHTML = `
        <h4 class="font-bold text-[#111111] text-xl">${inputValue} Taka is donated for flood-2024 at Noakhali,Bangladesh</h4>
        <p class="text-base text-[#111111B3] font-light">Date:${new Date()}</p>
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    return historyContainer;
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
    history('input-value-1');
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
    history('input-value-2');  
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
    history('input-value-3');
})

