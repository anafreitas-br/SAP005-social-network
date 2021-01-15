const db = firebase.firestore();

export const savingData = (post) => {
  db.collection('posts').add(post);
};

export const getPosts = () => db.collection('posts').get();

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const token = result.credential.accessToken;
      const user = result.user;
      alert('login feito com sucesso');
      window.location.replace('/feed');
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
};
//like Unlike

export const likeFirebase = (id) => firestore().doc(id).update({
  likes: firebase.firestore.FieldValue.increment(1),
})
  .then(() => true)
  .catch((error) => error);


  //likeFirebase(posts)
  //.then(()  => {
    alert('Curtida realizada!');
    bottonLike.classList.add('btnLike');
    bottonLike.innerHTML = "Curtiu!";
  
  
  .catch(() => {
    alert('Não foi dessa vez');
  })

  export const likePost = (id, userID) => {
    const userLike = firebase.firestore.FieldValue.arrayUnion(userID);
    const postLike = firebase.firestore().collection("post").doc(id);
    return postLike.update({
      usersLike: userLike,
    });
  };

  export const removeLike = (id, userId) => {
    const userLike = firebase.firestore.FieldValue.arrayRemove(userId);
    const postLike = firebase.firestore().collection("post").doc(id);
    return postLike.update({
      usersLike: userLike,
    });
  };

  export const dislikePost = (id, userID) => {
    const userDislike = firebase.firestore.FieldValue.arrayUnion(userID);
    const postDislike = firebase.firestore().collection("post").doc(id);
    return postDislike.update({
      usersDislike: userDislike,
    });
  };

  export const removeDislike = (id, userId) => {
    const userDislike = firebase.firestore.FieldValue.arrayRemove(userId);
    const postDislike = firebase.firestore().collection("post").doc(id);
    return postDislike.update({
      usersDislike: userDislike,
    });
  };


export const authLogin = () => {
  let email = document.getElementById('email');
  let senha = document.getElementById('senha');
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, senha.value)
    .then(function (_result) {
      alert('Usuário Logado Com Sucesso!');
      window.location.replace('/feed');
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('Email não cadastrado.');
          break;
        case 'auth/wrong-password':
          alert('Senha inválida.');
          break;
        default:
          alert(`Erro desconhecido: ${error.code}: ${error.message}`);
          break;
      }
    });
};

export const registerUser = () => {
  let email = document.getElementById('email');
  let senha = document.getElementById('senha');
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, senha.value)
    .then(function (_result) {
      alert('Usuário Cadastrado Com Sucesso!');

      window.location.replace('/feed');
    })
    .catch(function (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('O endereço de email já está cadastrado.');
          break;
        case 'auth/invalid-email':
          alert('Insira um endereço de email válido.');
          break;
        case 'auth/weak-password':
          alert('A senha deve ter no mínimo 6 caracteres.');
          break;
        default:
          alert(`Erro desconhecido: ${error.code}: ${error.message}`);
          break;
      }
    });
};

export const outLogin = () => {
  firebase
    .auth()
    .signOut()
    .then((_error) => {
      alert('Volte logo!');
      window.location.replace('/');
    })
    .catch(function (error) {
      alert(`Erro desconhecido: ${error.code}: ${error.message}`);
    });
};