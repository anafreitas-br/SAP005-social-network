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
       
<<<<<<< HEAD
          
        <main class="mainFeed">
          <div class="newPost">
=======

          
        <main class="mainFeed">
          <div class="newPost">

>>>>>>> 6148d156a989fbac3101a7cf4acf26784dd36e3a
      
         <form action="" id="formPost">
         <textarea name="textarea" id="textPost" placeholder="Vamos salvar a natureza?"></textarea>
         <div class="iconsAndButton">
         <button type="submit" class="btnSubmitForm">Publicar</button>
         </div>
         </form>
        
        <ul id='posts'>
        </ul>
<<<<<<< HEAD
  
  <h1>Publique o seu Post</h1>
    <div class="content">
=======


  
  <h1>Publique o seu Post</h1>

    <div class="content">

>>>>>>> 6148d156a989fbac3101a7cf4acf26784dd36e3a
        <form id="publicar">
            <input type="text" name="name" placeholder="Nome">
            <input type="text" name="comentario" placeholder="Comentário">
            <button>Adicionar Comentário</button>
        </form>
<<<<<<< HEAD
        <ul id="post"></ul>
=======

        <ul id="post"></ul>

>>>>>>> 6148d156a989fbac3101a7cf4acf26784dd36e3a
        
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

<<<<<<< HEAD
=======
    const form = feedPage.querySelector ('#formPost')
    form.addEventListener ('submit', (event)=>{
      event.preventDefault();
      savingData();
    });
    
<<<<<<< HEAD
    
=======
     
>>>>>>> 6148d156a989fbac3101a7cf4acf26784dd36e3a
    //  const postTemplate = (post)=>{`
    //  <li id='${post.uid}'>
    //  ${post.data().text} ${post.data().likes}
    //  </li>
      
     // `     
    //  feedPage.querySelector('posts').innerHTML+= postTemplate;
  
   // }

<<<<<<< HEAD
  
=======
>>>>>>> 18cf9b04cba3edb07fa1d516cf0a4bfe8a0858af
   
>>>>>>> 6148d156a989fbac3101a7cf4acf26784dd36e3a
    return feedPage;
  };


<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======

>>>>>>> 6148d156a989fbac3101a7cf4acf26784dd36e3a
>>>>>>> 18cf9b04cba3edb07fa1d516cf0a4bfe8a0858af
