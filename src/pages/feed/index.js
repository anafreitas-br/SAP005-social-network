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
         <textarea name="textarea" id="textPost" placeholder="Vamos salvar a natureza?"></textarea>
         <div class="iconsAndButton">
         
         <button type="submit" class="btnSubmitForm">Publicar</button>
      
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
    const btnSubmitForm = feedPage.querySelector('.btnSubmitForm')
    btnSubmitForm.addEventListener('click', (event) => {
      event.preventDefault();
      const textPost = feedPage.querySelector ('#textPost').value;
      const post = {
        text: text,
        user_id: "Daniel",
        likes: 0,
      }
      
      const postsColletion = firebase.firestore().colletion("posts")
      postColletion.add(post);
    });
   


    function addPosts(post){
      const postTemplate =`
      <li id='${post.id}'>
      ${post.data().text} ${post.data().likes}
      </li>
      
      `     
      feedPage.querySelector('posts').innerHTML+= postTemplate;

    }
    function loadPosts() {
      const postsColletion = firebase.firestore().colletion ("posts")
      feedPage.querySelector('posts').innerHTML = "Carregando...";
      postsColletion.get().then(snap =>{
        feedPage.querySelector('posts').innerHTML = "";
        snap.forEach(post =>{
          addPost(post);
        
        })
      }) 
    }
function deletePost(postId) {
  const postsColletion = firebase.firestore().colletion ("posts")
  postsColletion.doc(postId).delete().then (doc =>
    loadPosts()
  )
}
    return feedPage;
  };
  