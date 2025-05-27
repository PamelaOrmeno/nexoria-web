document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const mensajeExito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir comportamiento por defecto

    const datos = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: datos,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        mensajeExito.style.display = "block";

        setTimeout(() => {
          mensajeExito.style.display = "none";
        }, 5000); // Ocultar a los 5 segundos

        form.reset();
      } else {
        alert("Error al enviar. Intenta nuevamente.");
      }
    }).catch(error => {
      alert("Hubo un problema al enviar el mensaje.");
    });
  });
});
