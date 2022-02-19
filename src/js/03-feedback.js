import throttle from 'lodash.throttle';
const form = document.querySelector('feedback-form');
const mail = document.querySelector('name="email"');
const mesagge = document.querySelector('name="message"')
const savedData = localStorage.getItem('feedback-form-state');
const parsedSavedData = JSON.parse(savedData);
form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);