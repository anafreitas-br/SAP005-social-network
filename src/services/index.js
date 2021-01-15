/* eslint-disable no-alert */
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
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      alert("login feito com sucesso");
      window.location.replace('/feed');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};

export const authLogin = () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, senha.value)
    .then(() => {
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
//like Unlike



  export const likePost = (id, userID) => {
    const userLike = firebase.firestore.FieldValue.arrayUnion(userID);
    const postLike = firebase.firestore().collection("post").doc(id);
    return postLike.update({
      usersLike: userLike,
    });
  };

export const registerUser = () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, senha.value)
    .then(() => {
      alert('Usuário Cadastrado Com Sucesso!');

      window.location.replace('/feed');
    })
    .catch((error) => {
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
    .then(() => {
      alert('Volte logo!');
      window.location.replace('/');
    })
    .catch((error) => {
      alert(`Erro desconhecido: ${error.code}: ${error.message}`);
    });
};

export const likeFirebase = (id) => firestore().doc(id).update({
  likes: firebase.firestore.FieldValue.increment(1),
})

export const deletePost = (id) => {
  db.collection('posts').doc(id).delete()
    .then(() => {
      console.log('Apagou!');
    })
    .catch((error) => {
      console.error('Erro ao excluir o post: ', error);
    });
};