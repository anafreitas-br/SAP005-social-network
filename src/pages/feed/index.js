import { outLogin } from "../../services/index.js"


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
       
        
         <form action="" class="formPost">
         <textarea name="textarea" placeholder="Vamos salvar a natureza?"></textarea>
         <div class="iconsAndButton">
         
         <button type="submit" class="btnSubmitForm">Publicar</button>
      
         </div>
         </form>
       </div>
     </div>
     <ul class="posts">
     <li class="post">
     <div class="infoUserPost">
     <div class="imgUserPost">
     <div class="nameAndHour">
     <strong>Fulana</strong>
     <p>21h</p>
     </div>
     </div>
     </div>
     <p>sou um teste dhukashkuasgfkasgdfkjsghsdfkhgasdhfgkshdgfshadkgfkjagsdfkjga</p>
     <div class="actionBtnPost">
     <button type="button" class="btnLike">
     <img class="like" src="./images/afirmativo.png" alt="curtir"> Curtir </button>
     </div>
     </li>
     </ul>
     </br>
     <ul class="posts">
     <li class="post">
     <div class="infoUserPost">
     <div class="imgUserPost">
     <div class="nameAndHour">
     <strong>Fulana</strong>
     <p>21h</p>
     </div>
     </div>
     </div>
     <p>sou um teste dhukashkuasgfkasgdfkjsghsdfkhgasdhfgkshdgfshadkgfkjagsdfkjga</p>
     <div class="actionBtnPost">
     <button type="button" class="btnLike">
     <img class="like" src="./images/afirmativo.png" alt="curtir"> Curtir </button>
     </div>
     </li>
     </ul>
     </br>
     <ul class="posts">
     <li class="post">
     <div class="infoUserPost">
     <div class="imgUserPost">
     <div class="nameAndHour">
     <strong>Fulana</strong>
     <p>21h</p>
     </div>
     </div>
     </div>
     <p>sou um teste dhukashkuasgfkasgdfkjsghsdfkhgasdhfgkshdgfshadkgfkjagsdfkjga</p>
     <div class="actionBtnPost">
     <button type="button" class="btnLike">
     <img class="like" src="./images/afirmativo.png" alt="curtir"> Curtir </button>
     </div>
     </li>
     </ul>
   </main>
   <button class="btn " id="btnLogout">
   Sair
 </button>
 <footer>@Rede Social Eco Green - Alunas laboratoria
 </footer>
    
    `;
//

    const btnLogout = feedPage.querySelector('#btnLogout')
    btnLogout.addEventListener('click', (event) => {
      event.preventDefault();
      outLogin();
    });
    

    return feedPage;
  };
  