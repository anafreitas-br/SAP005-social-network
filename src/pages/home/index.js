export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
     <div class="Initial">
      <p class='enter'> A sua rede SocioAmbiental, criada para conectar idéias que transformam o planeta!</p>
     
      <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/dr5dueiANhI" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      </div>
      <footer>
    <p>© Rede Social Eco Green - Desenvolvido por <a href='https://github.com/edilenefern'>Edilene Fernandes</a>, <a href='https://github.com/Fernandapy'>Fernanda Lima</a> e <a href='https://github.com/anafreitas-br'>Ana Freitas</a></p>
  </footer>
    </div>
  `;
  const enterSite = rootElement.querySelector('.enter');
  enterSite.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('/login');
  });
  return rootElement;
};

// {/* <button class="enter"><strong> Fazer Login </strong></button> */}
