const firebaseConfig = {
  apiKey: 'AIzaSyA7hVcpjh3HMz0WipRpe2-gZJ1U1i38PU4',
  authDomain: 'rede-social-893e0.firebaseapp.com',
  projectId: 'rede-social-893e0',
  storageBucket: 'rede-social-893e0.appspot.com',
  messagingSenderId: '332323313520',
  appId: '1:332323313520:web:1d4c3e0c797716de47a1b5',
  measurementId: 'G-VWNQS3P4HW',
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const posts = document.querySelector('#posts');




//createElement and Render
const renderPost = (doc) => {
  let li = document.createElement("li");
  let userPost = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  userPost.textContent = doc.data().userPost;
   cross.textContent = 'x';

  li.appendChild(userPost);
   li.appendChild(cross);

  cross.addEventListener('click', (e) =>{
    e.stopPropagation();
   let id = e.target.parentElement.getAttribute('data-id');
  });
};

//export const deletePost = (userPost) => {
 // const postsCollection = db.collection("posts");
  //postsCollection
   // .doc(userPost)
    //.delete()
    //.then((doc) => deletePost(doc));
//};

export const savingData = (text) => {
  db.collection('posts').add({
    userPost: text,
  });
};

export const postar = () => {
  db.collection('posts').get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderPost(doc.data());
    });
  });
};

export const deleteNow = (id) => {
  const inputText = document.querySelector('#textPost');
  const confirmation = confirm("Tem certeza que deseja excluir esta publicação?");
  if (confirmation === true) {
    db.doc(id).delete(inputText.value);
  }
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider).then(function (result) {
      let token = result.credential.accessToken;
      let user = result.user;
      alert("login feito com sucesso");
      window.location.replace("/feed");
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
};


export const authLogin = () => {
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, senha.value)
    .then(function (_result) {
      alert("Usuário Logado Com Sucesso!");
      window.location.replace("/feed");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Email não cadastrado.");
          break;
        case "auth/wrong-password":
          alert("Senha inválida.");
          break;
        default:
          alert(`Erro desconhecido: ${error.code}: ${error.message}`);
          break;
      }
    });
};


export const registerUser = () => {
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, senha.value)
    .then(function (_result) {
      alert("Usuário Cadastrado Com Sucesso!");

      window.location.replace("/feed");
    })
    .catch(function (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("O endereço de email já está cadastrado.");
          break;
        case "auth/invalid-email":
          alert("Insira um endereço de email válido.");
          break;
        case "auth/weak-password":
          alert("A senha deve ter no mínimo 6 caracteres.");
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
      alert("Volte logo!");
      window.location.replace("/");
    })
    .catch(function (error) {
      alert(`Erro desconhecido: ${error.code}: ${error.message}`);
    });
};
