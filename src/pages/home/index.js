export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
     <div class="Initial">
      <p class='enter'> A sua rede SocioAmbiental, criada para conectar idéias que transformam o planeta!</p>
     
      <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/dr5dueiANhI" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      </div>
      <footer>@Rede Social Eco Green - Alunas laboratoria
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
