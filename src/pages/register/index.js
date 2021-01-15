import { registerUser } from "../../services/index.js";
export const Register = () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
   <div class='container'>
   
   <form action="Acesso">
     <div class="form">
     <input type="email" class='acessar' id='email' placeholder='Digite o seu email' autocomplete='off'>
     </div>
   <div class='form'>
     <input type='password' class='acessar' id='senha' placeholder='Senha' autocomplete='off'>
   </div>
   </form>
     <button class='btn'id='btnLogin'>
     
      <ul >     
       <li id="btnRegister">Não possui conta?
         <a href="/register">Cadastre-se</a>
       </li>
     </ul> 
     </button>
 </div>
 <footer>@Rede Social Eco Green - Alunas laboratoria</footer>
 `;

  const btnRegister = rootElement.querySelector("#btnRegister");
  btnRegister.addEventListener("click", (event) => {
    event.preventDefault();
    registerUser();
  });

  return rootElement;
};