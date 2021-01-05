import { outLogin } from "../../services/index.js"


export const Feed = () => {
  const feedPage = document.createElement('div');
  feedPage.innerHTML = `

  
  <h1>Publique o seu Post</h1>

    <div class="content">

        <form id="publicar">
            <input type="text" name="name" placeholder="Nome">
            <input type="text" name="comentario" placeholder="Comentário">
            <button>Adicionar Comentário</button>
        </form>

        <ul id="post"></ul>
        
    </div>


<button class="btn " id="btnLogout">
Sair
</button>
<footer>@Rede Social Eco Green - Alunas laboratoria
</footer>

`;
};

// <div class="profile">
// <div class="imgUser">
// </div>
// </div>
// <strong>Nome do Usuário</strong>
   
// <main class="mainFeed">
// <div class="newPost">
//   <div class="infoUser">
  
   
//     <form action="" class="formPost">
//     <textarea name="textarea" id="textPost" placeholder="Vamos salvar a natureza?"></textarea>
//     <div class="iconsAndButton">
    
//     <button type="submit" class="btnSubmitForm">Publicar</button>
 
//     </div>
//     </form>
//    <ul id='posts'>
//    </ul>
//   </div>
// </div>

   
// <main class="mainFeed">
//   <div class="newPost">
 
//     <div class="infoUser">
    
//       <form action="" class="formPost">
//       <textarea name="textarea" placeholder="Vamos salvar a natureza?"></textarea>
//       <div class="iconsAndButton">

// <button type="button" class="btnLike">
// <img class="like" src="./images/afirmativo.png" alt="curtir"> Curtir </button>
// </div>
// </form>
// </div>
// </div>
// </main>



