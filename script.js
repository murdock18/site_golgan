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
      