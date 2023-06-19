const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const usersList = document.querySelector('#users');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==='' && emailInput.value===''){

        msg.innerHTML='Please fill in your details.'
        msg.classList.add('error');

        setTimeout(() => msg.remove(), 3000);

    }
        else{
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
        
            usersList.appendChild(li);

            nameInput.value='';
            emailInput.value='';

        }

    
}

