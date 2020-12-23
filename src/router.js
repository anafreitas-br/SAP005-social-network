// Este é seu ponto de entrada da sua aplicação
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { Feed } from './pages/feed/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Home,
    '/login': Login,
    '/feed': Feed,
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

    document
    .getElementById('feed')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/feed');
    });

    document
    .getElementById('btnCadastrar')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/cadastro');
    });

    document
    .getElementById('btnForgot')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/forgot');
    });


   
  routeRender();
});

let btnLogin = document.getElementById('btnLogin');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let btnCadastrar = document.getElementById('btnCadastrar')
let btnGmail = document.getElementById('btnGmail')
let btnForgot = document.getElementById('btnForgot')
let btnLogout = document.getElementById('btnLogout')
let btnHome = document.getElementById('btnHome')
var provider = new firebase.auth.GoogleAuthProvider();

btnCadastrar.addEventListener('click', function () {

  firebase.auth().createUserWithEmailAndPassword(email.value, senha.value)
    .then(function (_result) {
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
    .then(function (_result) {
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

//não esta funcionando aqui é "esqueci a senha"
btnForgot.addEventListener('click', function () {
var emailAddress = ""
if (user != null) {
  firebase.auth().SendPasswordResetEmailAsync(emailAddress).ContinueWith(task => {
    if (task.IsCanceled) {
      Debug.LogError("SendPasswordResetEmailAsync was canceled.");
      return;
    }
    if (task.IsFaulted) {
      Debug.LogError("SendPasswordResetEmailAsync encountered an error: " + task.Exception);
      return;
    }

    Debug.Log("Password reset email sent successfully.");
  });
}
});
//função deslogar

btnLogout.addEventListener('click',  (e) => {
  e.preventDefault ();
  firebase.auth().signOut().then((_error) => {
  console.log ('user signOut');
    // Sign-out successful.
  }).catch(function(_error) {
    // An error happened.
});
});

//quando o status do ud=suario mudar 
function getUser {
firebase.auth().onAuthStateChange(user =>{
  if (user) {
    console.log ('user logged in:',user);
  }else {
    console.log ('user logged out');
  }
})
}

// ler e gravar dados do usuario
var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}