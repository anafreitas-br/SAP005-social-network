

  export const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      let token = result.credential.accessToken;
      let user = result.user;
      alert('login feito com sucesso');
      window.location.replace('/feed');
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
  };

  

  export const authLogin = () => {
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');
    firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
      .then(function (_result) {
                alert('Usuário Logado Com Sucesso!');
        window.location.replace('/feed');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Não é possível Logar Usuário!');
      });
};


export const registerUser = () => {
  let email = document.getElementById('email');
  let senha = document.getElementById('senha');
 firebase.auth().createUserWithEmailAndPassword(email.value, senha.value)
.then(function (_result) {
    alert('Usuário Cadastrado Com Sucesso!');

  window.location.replace('/feed');

}).catch(function (error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  
  alert('Não possível Cadastrar Usuário!');
});
};


 export const passwordForgot = () => {
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
  };

  
export const outLogin = () => {
  firebase.auth().signOut().then((_error) => {
  alert('Volte logo!');
  window.location.replace('/login');
  
    }).catch(function(_error) {
});
};