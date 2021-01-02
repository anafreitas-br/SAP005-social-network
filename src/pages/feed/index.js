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
        <div class="icons">

        <button class="btn" id="btnEnjoy">curtir</button>
        </div>
        <button type="submit" class="btnSubmitForm">Publicar</button>
    
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
  const btnLogout = feedPage.querySelector('#btnLogout')
  btnLogout.addEventListener('click', (event) => {
    event.preventDefault();
    outLogin();
  });
  

  return feedPage;
};
