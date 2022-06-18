const icone = document.querySelector(".menu-burger i")
icone.addEventListener("click",function(){
    console.log("icone cliqué");
    modal.class.toogle("change-modal");
});

/*"Merci de nous avoir envoyé un message. Je ne pourrais pas y répondre.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  }); */
  const message = "Merci de nous avoir envoyé un message. Je ne pourrais pas y répondre.";
  const contactForm= document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {event.preventDefault();
    alert(message);
  });
