export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
     <div class="Initial">
      <p> A sua rede SocioAmbiental, criada para conectar idéias que transformam o planeta! </p>
      <button class="enter"><strong> Fazer Login </strong></button>
      </br>
      <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/dr5dueiANhI" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <footer>
    <p>© Rede Social Eco Green - Desenvolvido por <a href='https://github.com/larissamiyaji'>Larissa</a>, <a href='https://github.com/kellyalves87'>Kelly</a> e <a href='https://github.com/mirescordeiro'>Tamires</a></p>
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
