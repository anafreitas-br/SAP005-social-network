import { outLogin, savingData, getPosts } from '../../services/index.js';

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
                  <button class="deletePost" onclick="deletePost()">Deletar</button>
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

  const createPostElement = (post) => {
    const li = document.createElement('li');
    const userPost = document.createElement('main');
    userPost.classList.add('mainFeed');
    userPost.innerHTML = `
        <div class="newPost">

          <div class="infoUser">

            <form action="" class="formPost">
            <input type="text" name="textarea" id="textPostUser" value = "${post.userPost}"></input>
            <div class="iconsAndButton">
              <button type="button" class="btnLike">
              <img class="like" src="./images/afirmativo.png" alt="curtir"> 
              Curtir 
              </button>
            </div>
            </form>
          </div>
        </div>
    `;
    li.setAttribute('data-id', post.userUid);
    li.appendChild(userPost);

    return li;
  };
  const postsUl = feedPage.querySelector('#posts');
  getPosts().then((snapshot) => {
    snapshot.forEach((doc) => {
      postsUl.appendChild(createPostElement(doc.data()));
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
      like: [],
      userUid: `${firebase.auth().currentUser.email}`,

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

