import { outLogin, savingData } from "../../services/index.js"


export const Feed = () => {
       const feedPage = document.createElement('div');
       feedPage.innerHTML = `
       <div class="profile">
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
            <button class="btnSubmitForm">Publicar</button>
            </div>
            </form>
           <ul id='posts'>
           </ul>
          </div>
        </div>
       
          
        <main class="mainFeed">
          <div class="newPost">
        
            <div class="infoUser">
           
              <form action="" class="formPost">
              <textarea name="textarea" placeholder="Vamos salvar a natureza?"></textarea>
              <div class="iconsAndButton">
       
        <button type="button" class="btnLike">
        <img class="like" src="./images/afirmativo.png" alt="curtir"> Curtir </button>
        </div>
        </form>
        </div>
        </div>
        </main>
   <button class="btn " id="btnLogout">
   Sair
 </button>
 <footer>@Rede Social Eco Green - Alunas laboratoria
 </footer>
    
    `;
//
    //const btnLike = feedPage.querySelector ('.btnLike')
    //btnLike = addEventListener('click', (event)=>{
    //  event.preventDefault();
      //userLike();
    //})

  

    const btnLogout = feedPage.querySelector('#btnLogout')
    btnLogout.addEventListener('click', (event) => {
      event.preventDefault();
      outLogin();
    });
    
    const btnPost = feedPage.querySelector('.btnSubmitForm')
    const submitData = feedPage.querySelector('#textPost');
    btnPost.addEventListener('click', (event) => {
      event.preventDefault();
      savingData(submitData.value)
      console.log(submitData.value)
       
    });

   
    return feedPage;
  };
  

