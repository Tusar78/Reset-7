// All of Refferal 
const getId = elem => {
    return document.getElementById(elem);
}

const depositText = getId('d-amount');
const depositInput = getId('diposit-input');
const depositBtn = getId('diposit-btn');

const withdrawText = getId('w-amount');
const withdrawInput = getId('withdraw-input');
const withdrawBtn = getId('withdraw-btn');

const ammountText = getId('a-amount');

depositBtn.addEventListener('click', () => {
    const getExistingDiposit = +depositText.innerText;
    const getDipositNumber = +depositInput.value;
    const totalDiposit = getExistingDiposit + getDipositNumber;
    depositText.innerText = totalDiposit;

    const getExistingBalance = +ammountText.innerText;
    const totalBalance = getExistingBalance + getDipositNumber;
    ammountText.innerText = totalBalance;

    depositInput.value = '';
})

withdrawBtn.addEventListener('click', () => {
    const getExistingWithdraw = +withdrawText.innerText;
    const getWithdrawNumber = +withdrawInput.value;
    const totalWithdraw = getExistingWithdraw + getWithdrawNumber;
    const getExistingBalance = +ammountText.innerText;
    if (getExistingBalance >= getWithdrawNumber) {
        let newBalance = getExistingBalance - getWithdrawNumber;
        ammountText.innerText = newBalance;
        withdrawText.innerText = totalWithdraw; 
    } else {
        alert('not anough money')
    }


    withdrawInput.value = '';
})