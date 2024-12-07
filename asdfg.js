let name1 = 'alex'
let money = '10000'
let account = '7777'  

const user = prompt('Whats Your Name')

if (user ===  name1) {
    const accNum = prompt('Whats Your Account Number')
    if (accNum === account) {
        const cash = prompt('How much to cash out ?')
        if (cash >= money) {
            alert('You Windrew' + ' ' + cash + ' ' + 'Everything is fine')
        } else {
            alert('Not Enough Cash In You Accont Balance')
        }
    } else {
        alert('Wrong Account Number')
    }
} else {
    alert('Account Not Found')
}
