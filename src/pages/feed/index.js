import { outLogin,  postar , savingData } from "../../services/index.js"


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
    btnPost.addEventListener('click', (event) => {
      event.preventDefault();
        postar();
    });

    const form = feedPage.querySelector ('#formPost')
    form.addEventListener ('submit', (event)=>{
      event.preventDefault();
      savingData();
    });
    
     
    //  const postTemplate = (post)=>{`
    //  <li id='${post.uid}'>
    //  ${post.data().text} ${post.data().likes}
    //  </li>
      
     // `     
    //  feedPage.querySelector('posts').innerHTML+= postTemplate;
  
   // }

   
    return feedPage;
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
