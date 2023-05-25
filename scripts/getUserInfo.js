const hiUserSpan = document.getElementById('hi-user-span');

const isLoggedIn = localStorage.getItem('isLoggedIn') ? true : false;

if (isLoggedIn) {
  const userId = +localStorage.getItem('userId');
  const userList = JSON.parse(localStorage.getItem('userList'));
  const existUser = userList.find(user => {
    console.log(user);
    console.log(userId);
    return +user.id === userId;
  });
  const userFullName = existUser.firstName + ' ' + existUser.lastName;
  hiUserSpan.textContent = `Hi ${userFullName}`;
}
