document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if (nome && email && mensagem) {
      alert("Obrigado pela mensagem, " + nome + "! Entraremos em contato em breve.");
      // Aqui você pode implementar o envio dos dados para um servidor
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });

  // Função para carregar os trabalhos do arquivo JSON
fetch('trabalhos.json')
.then(response => response.json())
.then(data => {
  const portfolio = document.querySelector('.portfolio');
  data.trabalhos.forEach(trabalho => {
    const item = document.createElement('div');
    item.classList.add('portfolio-item');
    item.innerHTML = `
      <img src="${trabalho.imagem}" alt="${trabalho.titulo}">
      <h3>${trabalho.titulo}</h3>
      <p>${trabalho.descricao}</p>
    `;
    portfolio.appendChild(item);
  });
})
.catch(error => console.error('Erro ao carregar os trabalhos:', error));

// Função para carregar a galeria do arquivo JSON
fetch('galeria.json')
.then(response => response.json())
.then(data => {
  const gallery = document.querySelector('.media-gallery');
  data.galeria.forEach(item => {
    const mediaItem = document.createElement('div');
    mediaItem.classList.add('media-item');
    if (item.tipo === 'foto') {
      mediaItem.innerHTML = `<img src="${item.src}" alt="Foto">`;
    } else if (item.tipo === 'video') {
      mediaItem.innerHTML = `
        <video controls>
          <source src="${item.src}" type="video/mp4">
          Seu navegador não suporta vídeos.
        </video>`;
    }
    gallery.appendChild(mediaItem);
  });
})
.catch(error => console.error('Erro ao carregar a galeria:', error));

  