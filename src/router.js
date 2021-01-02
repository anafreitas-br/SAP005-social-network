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
       .getElementById('btnRegister')
      .addEventListener('click', (e) => {
         e.preventDefault();
        onNavigate('/register');
       });
    
        document
        .getElementById('btnForgot')
        .addEventListener('click', (e) => {
          e.preventDefault();
          onNavigate('/forgot');
        });
    
    
       
      routeRender();
    });
    
    
    
    
    
    //let btnEnjoy = document.getElementById('btnEnjoy')
    //let btnForgot = document.getElementById('btnForgot')
    //
    //let btnHome = document.getElementById('btnHome')
    
    
    
    
    
    
    
    //$( "btnEnjoy" ).on( "click", function( event ) {
     // event.preventDefault();
      
    //firebase.initializeApp(config);
    
    //var database = firebase.database();
    
    // Adicionando o evento de click no botão
    
       // database.ref("like/amount").on('value', function(snapshot) {
      //     like(snapshot.val());
      //  });
    //});
    
    //function like(amount) {
    //   database.ref('like').set({ amount + 1});
     //};
    
    //não esta funcionando aqui é "esqueci a senha"
    //btnForgot.addEventListener('click', function () {
    //var emailAddress = ""
    //if (user != null) {
      //firebase.auth().SendPasswordResetEmailAsync(emailAddress).ContinueWith(task => {
        //if (task.IsCanceled) {
          //Debug.LogError("SendPasswordResetEmailAsync was canceled.");
          //return;
        //}
        //if (task.IsFaulted) {
          //Debug.LogError("SendPasswordResetEmailAsync encountered an error: " + task.Exception);
          //return;
        //}
    
        //Debug.Log("Password reset email sent successfully.");
      //});
    //}
    //});
    
    
    
    
    // ler e gravar dados do usuario
    //var database = firebase.database();
    
    //function writeUserData(userId, name, email, imageUrl) {
      //firebase.database().ref('users/' + userId).set({
        //username: name,
        //email: email,
        //profile_picture : imageUrl
      //});
    //}/register');
 




//let btnEnjoy = document.getElementById('btnEnjoy')
//let btnForgot = document.getElementById('btnForgot')
//
//let btnHome = document.getElementById('btnHome')







//$( "btnEnjoy" ).on( "click", function( event ) {
 // event.preventDefault();
  
//firebase.initializeApp(config);

//var database = firebase.database();

// Adicionando o evento de click no botão

   // database.ref("like/amount").on('value', function(snapshot) {
  //     like(snapshot.val());
  //  });
//});

//function like(amount) {
//   database.ref('like').set({ amount + 1});
 //};

//não esta funcionando aqui é "esqueci a senha"
//btnForgot.addEventListener('click', function () {
//var emailAddress = ""
//if (user != null) {
  //firebase.auth().SendPasswordResetEmailAsync(emailAddress).ContinueWith(task => {
    //if (task.IsCanceled) {
      //Debug.LogError("SendPasswordResetEmailAsync was canceled.");
      //return;
    //}
    //if (task.IsFaulted) {
      //Debug.LogError("SendPasswordResetEmailAsync encountered an error: " + task.Exception);
      //return;
    //}

    //Debug.Log("Password reset email sent successfully.");
  //});
//}
//});




// ler e gravar dados do usuario
//var database = firebase.database();

//function writeUserData(userId, name, email, imageUrl) {
  //firebase.database().ref('users/' + userId).set({
    //username: name,
    //email: email,
    //profile_picture : imageUrl
  //});
//}