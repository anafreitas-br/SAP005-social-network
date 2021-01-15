/* eslint-disable object-curly-newline */
import { outLogin, savingData, getPosts, deletePost } from '../../services/index.js';

export const Feed = () => {
  const feedPage = document.createElement('div');
  feedPage.innerHTML = `
      <div class="profile">
      <button class="bt " id="btnLogout">Sair</button>
        <div class="imgUser">
        </div>
      </div>
        <strong>Nome do Usuário</strong>
          
        <main class="mainFeed">
          <div class="newPost">
            <div class="infoUser">
              <form id="formPost">
                <input type="text" name="userPost" id="textPost" placeholder="Vamos salvar a natureza?"></input>
                <div class="buttonForm">
                  <button class="btnSubmitForm"> Publicar </button>
                  
                </div>
              </form>
            </div>
          </div>
        </main> 
        <ul id='posts'>
        </ul>      
    
  <footer>@Rede Social Eco Green - Alunas laboratoria
  </footer>
    
    `;

  const createPostElement = (post, id) => {
    const li = document.createElement('li');
    const userPost = document.createElement('article');
    userPost.classList.add('mainFeed');
    userPost.innerHTML = `
        <div class="newPost">

          <div class="infoUser">

            <form action="" class="formPost" id="${id}">

            <input type="text" name="textarea" id="textPostUser" value = "${post.userPost}"></input>
            <div class="iconsAndButton">
              <button type="button" class="btnLike">
              <img class="like" src="./images/afirmativo.png" alt="curtir"> 
              Curtir 
              </button>
              <button class="deletePost" data-delete="${id}" >Deletar</button>
            </div>
            </form>
          </div>
        </div>
    `;
    li.setAttribute('data-id', id);
    li.appendChild(userPost);
    const listId = feedPage.querySelectorAll('.deletePost');
    console.log (listId);
    li.getElementsByClassName('deletePost')[0].addEventListener('click', (e) => {
      e.preventDefault();
      deletePost(id);
    });

    return li;
  };

  const getDate = () => {
    const date = new Date();
    return date.toLocaleString();
  };

  const postsUl = feedPage.querySelector('#posts');
  getPosts().then((snapshot) => {
    snapshot.forEach((doc) => {
      postsUl.appendChild(createPostElement(doc.data(), doc.id));
    });
  });


  const template = feedPage.querySelector('#posts');

  const btnLogout = feedPage.querySelector('#btnLogout');
  btnLogout.addEventListener('click', (event) => {
    event.preventDefault();
    outLogin();
  });

  const btnPost = feedPage.querySelector('.btnSubmitForm');
  const submitData = feedPage.querySelector('#textPost');
  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    const post = {
      userPost: submitData.value,
      name: `${firebase.auth().currentUser.displayName}`,
      likesCount: 0,
      like: [],
      userUid: `${firebase.auth().currentUser.email}`,
      date: getDate(),


    };
    savingData(post);
    postsUl.prepend(createPostElement(post));
  });

  const carregaPost = () => {
    getPosts(template);
  };
    btnPost.addEventListener('click', carregaPost());

  return feedPage;
};

