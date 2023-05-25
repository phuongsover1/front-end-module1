const emailForm = document.getElementById('email-form');
const fullForm = document.getElementById('full-form');
let emailInput = document.getElementById('emailInp');
const passwordDiv = document.getElementById('password-div');
const passwordInp = document.getElementById('passwordInp');
const passwordError = document.getElementById('password-error');
let enteredEmail = null;

//const userList = [{email: 'phuongsover2@gmail.com', password: '123456'}]
//localStorage.setItem('userList', JSON.stringify(userList))
const userList = JSON.parse(localStorage.getItem('userList')) ?? [];
let initialLogin = true;

const onLoginHandler = event => {
  console.log(event);
  event.preventDefault();
  enteredEmail = emailInput.value;
  const existUser = userList.find(user => user.email === enteredEmail);
  if (existUser && initialLogin) {
    passwordDiv.classList.remove('d-none');
    passwordError.classList.add('d-none');
    initialLogin = false;
    return;
  }
  if (existUser) {
    const enteredPassword = passwordInp.value;
    if (enteredPassword === existUser.password) {
      passwordError.classList.add('d-none');
      console.log('Dang nhap thanh cong');
      // luu thong tin user
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userId', existUser.id);
      window.location.replace('http://localhost:8080');
      return;
    }
    // sai password
    passwordError.classList.remove('d-none');
    return;
  }
  // cho phep dang ky
  console.log('cho phep dang ky');
  emailForm.classList.add('d-none');
  fullForm.classList.remove('d-none');
  event.preventDefault();
  emailInput = document.getElementById('emailInp-1');
  console.log(enteredEmail);
  emailInput.value = enteredEmail;
};

const onRegisterHandler = event => {
  event.preventDefault();
  const enteredEmail = emailInput.value.trim();
  const existUserWithEmail = userList.find(user => user.email === enteredEmail);
  if (!existUserWithEmail) {
    const registerPasswordInp = document.getElementById('passwordInp-1');
    const genderSelect = document.getElementById('genderSelect');
    const lastNameInp = document.getElementById('lastNameInp');
    const firstNameInp = document.getElementById('firstNameInp');
    const monthInp = document.getElementById('monthInp');
    const dayInp = document.getElementById('dayInp');
    const yearInp = document.getElementById('yearInp');

    const dateOfBirthh =
      monthInp.value.trim() +
      '/' +
      dayInp.value.trim() +
      '/' +
      yearInp.value.trim();

    const newUser = {
      id: Math.random(),
      email: enteredEmail.trim(),
      password: registerPasswordInp.value.trim(),
      gender: genderSelect.value.trim(),
      lastName: lastNameInp.value.trim(),
      firstName: firstNameInp.value.trim(),
      dateOfBirthh,
      bags: [],
      likeItems: [],
      orders: [],
    };
    console.log('newUser', newUser);
    userList.push(newUser);
    localStorage.setItem('userList', JSON.stringify(userList));
    window.location.replace('http://localhost:8080/register.html');
  } else {
    const emailError = document.getElementById('email-error-1');
    emailError.classList.remove('d-none');
  }
};

emailForm.addEventListener('submit', onLoginHandler);
fullForm.addEventListener('submit', onRegisterHandler);
