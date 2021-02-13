const form = document.querySelector('form')
const error = document.querySelector('.error')
const emailInput = document.querySelector('.emailInput')

form.addEventListener('submit', (e) =>{
    let errorsCount = [];

    const validateEmail = /^[^@]+@\w+(\.\w+)+\w$/.test(emailInput.value);
    if(validateEmail == false){
        error.innerHTML = 'Please provide a valid email address'
        errorsCount.push(1)
    }

    if(emailInput.value === ''){
        error.innerHTML = 'Whoops! It looks like you forgot to add your email'
        errorsCount.push(1)
    }

    if(errorsCount.length > 0){
        e.preventDefault() 
    }else{
        error.innerHTML = 'Submitted'
        error.style.color = 'green'
    }

})