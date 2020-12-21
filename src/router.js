// Este é seu ponto de entrada da sua aplicação
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Home,
    '/login': Login,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('home')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/');
    });
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/login');
    });

  routeRender();
});

let btnLogin = document.getElementById('btnLogin');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let btnCadastrar = document.getElementById('btnCadastrar')
let btnGmail = document.getElementById('btnGmail')
let btnSair = document.getElementById('Sair')
let btnHome = document.getElementById('btnHome')
var provider = new firebase.auth.GoogleAuthProvider();

btnCadastrar.addEventListener('click', function () {

  firebase.auth().createUserWithEmailAndPassword(email.value, senha.value)
    .then(function (result) {
      // Signed in
      // ...
      alert('Usuário Cadastrado Com Sucesso!');

      window.location.replace('site.html');

    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      
      alert('Não possível Cadastrar Usuário!');
    });

});

btnLogin.addEventListener('click', function () {

  firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
    .then(function (result) {
      // Signed in
      // ...
      alert('Usuário Logado Com Sucesso!');
      window.location.replace('site.html');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Não é possível Logar Usuário!');
    });
});


btnGmail.addEventListener('click', function () {

  firebase.auth().signInWithPopup(provider).then(function (result) {

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    alert('login feito com sucesso');
    window.location.replace('site.html');
   
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
   
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...

  });
});

// Testando a brunch



