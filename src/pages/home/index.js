export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
     <div class="Initial">
      <p> A sua rede SocioAmbiental, criada para conectar idéias que transformam o planeta! </p>
      </br>
      <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/dr5dueiANhI" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <footer>@Rede Social Eco Green - Alunas laboratoria
  </footer>
</div>
  `;
  return rootElement;
};