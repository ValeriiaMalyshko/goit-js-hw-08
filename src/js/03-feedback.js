import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleInput, 500));

initForm ();

form.addEventListener('submit', (event) => {
event.preventDefault();
// const formData = new FormData(form);
// formData.forEach ((key, value) => {
// if (key === "") {
//     return alert('Please fill in all the fields!');
// }
// else {
//     console.log (value, key);
// }
// });
const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(`Email: ${email.value}, message: ${message.value}`);
event.currentTarget.reset();
localStorage.removeItem('feedback-form-state'); 
});

function handleInput(event) {
let savedData = localStorage.getItem('feedback-form-state');
savedData = savedData ? JSON.parse(savedData) : {};
savedData[event.target.name]=event.target.value;

if(savedData) {
    localStorage.setItem('feedback-form-state',JSON.stringify(savedData));
}
};

function initForm() {
    let savedData = localStorage.getItem('feedback-form-state');

    if(!savedData){
        return ;
    }
    else  {
        savedData = JSON.parse(savedData);
    }

    Object.entries(savedData).forEach(([name, value]) => (form.elements[name].value = value),);
}