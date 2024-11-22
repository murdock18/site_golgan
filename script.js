AOS.init({ duration: 1200, easing: "ease-in-out" });

// Seleciona os elementos
// Seleciona os elementos
const hamburger = document.querySelector('.hamburger');
const sidebarMenu = document.querySelector('.menu-sidebar');

// Alternar a exibição do menu sidebar ao clicar no ícone hambúrguer
hamburger.addEventListener('click', () => {
  sidebarMenu.classList.toggle('active');
});

// Fechar o menu sidebar ao clicar fora dele ou em um link
document.addEventListener('click', (event) => {
  if (
    !sidebarMenu.contains(event.target) && // Clique fora do menu
    !hamburger.contains(event.target) // Clique fora do ícone hambúrguer
  ) {
    sidebarMenu.classList.remove('active'); // Fecha o menu
  }
});

// Ajuste de rolagem para compensar o menu fixo
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const offset = 140; // Ajuste de altura para o navbar
    const topPosition = targetElement.offsetTop - offset;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  });
});

//Serviços
document.addEventListener("DOMContentLoaded", () => {
  const servicoItems = document.querySelectorAll(".servico-item");

  servicoItems.forEach((item) => {
    // Adiciona o comportamento de clique
    item.addEventListener("click", () => {
      // Remove a classe 'active' de todos os itens
      servicoItems.forEach((el) => el.classList.remove("active"));
      // Adiciona a classe 'active' no item clicado
      item.classList.add("active");
    });

    // Adiciona o comportamento de mouseleave (tirar o mouse de cima)
    item.addEventListener("mouseleave", () => {
      // Remove a classe 'active' para voltar ao estado inicial
      item.classList.remove("active");
    });
  });
});



// Seleciona o formulário de contato
const contatoForm = document.querySelector('#contato form');

// Evento para submissão do formulário
contatoForm.addEventListener('submit', (event) => {
  // Evita o comportamento padrão de envio
  event.preventDefault();

  // Captura os dados do formulário
  const nome = contatoForm.querySelector('input[placeholder="Seu nome"]').value.trim();
  const email = contatoForm.querySelector('input[placeholder="Seu e-mail"]').value.trim();
  const whatsapp = contatoForm.querySelector('input[placeholder="WhatsApp"]').value.trim();
  const assunto = contatoForm.querySelector('input[placeholder="Assunto"]').value.trim();
  const mensagem = contatoForm.querySelector('textarea[placeholder="Mensagem..."]').value.trim();

  // Valida os campos obrigatórios
  if (!nome || !email) {
    alert('Por favor, preencha os campos obrigatórios: Nome e E-mail.');
    return;
  }

  // Cria uma mensagem para enviar pelo WhatsApp
  const whatsappMessage = `
      Olá, meu nome é ${nome}.
      Email: ${email}
      WhatsApp: ${whatsapp}
      Assunto: ${assunto}
      Mensagem: ${mensagem}
    `.trim();

  // Codifica a mensagem e monta o link
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappNumber = '5591991608168'; // Número do WhatsApp no formato internacional
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Abre o WhatsApp com a mensagem
  window.open(whatsappLink, '_blank');

  // Limpa o formulário após o envio
  contatoForm.reset();
});

  AOS.init({ duration: 1200, easing: "ease-in-out" });

// Ajuste de rolagem para compensar o navbar fixo
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 70, // Ajuste para compensar o navbar
      behavior: "smooth",
    });
  });
});

document.querySelectorAll('.servico-item').forEach(item => {
  item.addEventListener('click', () => {
    // Atualizar o título e os detalhes dinamicamente
    const servico = item.getAttribute('data-servico');
    const detalhes = document.querySelector('.servicos-detalhes');
    const tituloDetalhes = detalhes.querySelector('.detalhes-title');

    tituloDetalhes.textContent = servico;

    // Exibir detalhes
    detalhes.classList.add('active');
  });
});
