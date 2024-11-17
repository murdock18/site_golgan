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
