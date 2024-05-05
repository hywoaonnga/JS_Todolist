const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string의 변수명은 대문자로 짓는게 관습. 반복되는 문자열의 오타를 막을 수 있음.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 함수의 첫번째 argument로 첫번째로 발생한 이벤트 정보를 채운다.
// .preventDefault() : 함수의 디폴트 동작을 막는다. (새로고침 막아줌)
function onLoginSubmit(event) {
  event.preventDefault();
  const userName = logininput.value;
  // local storage는 브라우저의 미니 DB 역할. key, value 값 필요.
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(userName);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the from
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // addEventListener는 브라우저가 해준다. 함수 실행과 이벤트 입력.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show thr greeting
  paintGreeting(savedUsername);
}
