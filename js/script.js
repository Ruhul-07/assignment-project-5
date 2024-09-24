
/**------------------Common Function---------------------- */

function getInputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function cardTitleShowById(title){
    const titleValue = String(document.getElementById(title).innerHTML);
    return titleValue;
}


// History show Function

function history(id, title){
    const inputValue = getInputValueById(id);
    const cardTitle= cardTitleShowById(title);
    const historyItem = document.createElement('div');
   
    historyItem.className = "rounded-lg p-8 border-2 border-[#1111111]";
    historyItem.innerHTML = `
        <h4 class="font-bold text-[#111111] text-xl">${inputValue} Taka is ${cardTitle}</h4>
        <p class="text-base text-[#111111B3] font-light">Date: ${new Date()}</p>
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
   const showHistory = document.getElementById('history-list');
   showHistory.classList.remove('hidden')
})


// Donation Button Function

document.getElementById('donation-btn').addEventListener('click', function(){
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');
    historyBtn.classList.remove('bg-primary')
    donationBtn.classList.add('bg-primary')

   const card = document.getElementById('card');

   card.classList.remove('hidden');

   const showHistory = document.getElementById('history-list');
   showHistory.classList.add('hidden')
})


// Donate-Now Button card-1 Function
document.getElementById('donate-now-1').addEventListener('click', function(){
    const showAmountElement = document.getElementById('show-amount-1');
    const showAmount = parseFloat(showAmountElement.innerText);
    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    const inputValue = getInputValueById('input-value-1');
    if(!isNaN(inputValue) && inputValue > 0 && inputValue <= mainBalance){

        const newShowAmount = showAmount + inputValue;

        showAmountElement.innerText = newShowAmount;

        const remainingBalance = mainBalance - inputValue;
        mainBalanceElement.innerText = remainingBalance;  

        history('input-value-1', 'card-title-1');
        document.getElementById("my_modal_3").showModal();
    }
    else{
        alert('Invalid number! try again.')
        return;
    }  
})

// Donate-Now Button Section card-2 Function

document.getElementById('donate-now-2').addEventListener('click', function(){
    const showAmountElement = document.getElementById('show-amount-2');
    const showAmount = parseFloat(showAmountElement.innerText);

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    const inputValue = getInputValueById('input-value-2');

    if(!isNaN(inputValue) && inputValue > 0 && inputValue <= mainBalance){

        const newShowAmount = showAmount + inputValue;

        showAmountElement.innerText = newShowAmount;

        const remainingBalance = mainBalance - inputValue;
        mainBalanceElement.innerText = remainingBalance;  

        history('input-value-2', 'card-title-2');
        document.getElementById("my_modal_3").showModal();
    }
    else{
        alert('Invalid number! try again.')
        return;
    }  
})


// Donate-Now Button Section card-3 Function

document.getElementById('donate-now-3').addEventListener('click', function(){
    const showAmountElement = document.getElementById('show-amount-3');
    const showAmount = parseFloat(showAmountElement.innerText);

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    const inputValue = getInputValueById('input-value-3');
    if(!isNaN(inputValue) && inputValue > 0 && inputValue <= mainBalance){

        const newShowAmount = showAmount + inputValue;

        showAmountElement.innerText = newShowAmount;

        const remainingBalance = mainBalance - inputValue;
        mainBalanceElement.innerText = remainingBalance;  

        history('input-value-3', 'card-title-3');
        document.getElementById("my_modal_3").showModal();
    }
    else{
        alert('Invalid number! try again.')
        return;
    }
})

// Go to Blog page Function

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = ('blog.html');
})

