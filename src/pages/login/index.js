
import { loginGoogle, authLogin, registerUser } from "../../services/index.js"

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="loginInit">
 
  <button class="btn " id="btnGmail">
    <img src="./images/google.png" width="15px" height="15px"/>
    Iniciar sessão com o Google
  </button>

<form action="Acesso">
   <div class="form">
    <input type="email" class="acessar" id="email" placeholder="Digite o seu email" autocomplete="off">
  </div>
   <div class="form">
    <input type="password" class="acessar" id="senha" placeholder="Senha" autocomplete="off">
  </div>
 </form>
 <button class="btn " id="btnLogin">
  Entrar
</button>

    
    <ul>
     <li id="btnRegister">Não possui conta?
       <a href="/register">Cadastre-se</a>
     </li>
   
    </ul> 
   </div>
   <footer>@Rede Social Eco Green - Alunas laboratoria
 </footer>

  `;

  const btnGmail = rootElement.querySelector('#btnGmail')
  btnGmail.addEventListener('click', (event) => {
    event.preventDefault();
    loginGoogle();
  });
  
  const btnLogin = rootElement.querySelector('#btnLogin');
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    authLogin();
  })

  const btnRegister = rootElement.querySelector('#btnRegister');
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    registerUser();
  })



  return rootElement;
};
 