
(function() {
  const contactForm = document.getElementById('contact');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  contactForm.addEventListener('submit', function() {
    const nameValue = nameInput.value;
    const nameLength = nameValue.length;


    if(nameInput.value === ""){

        alert("Por favor preencha o campo nome");

    }else if(emailInput.value === ""){

        alert("Por favor preencha o campo email");

    }else if(messageInput.value === ""){

        alert("Por favor preencha o campo mensagem");

    }else{

         alert("Sucesso ! Dados enviados ! ")
     } 
  
  });
})();
