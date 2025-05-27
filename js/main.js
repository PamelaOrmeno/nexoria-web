document.addEventListener("DOMContentLoaded", () => {
  // --- Envío de formulario de contacto ---
  const form = document.getElementById("contact-form");
  const mensajeExito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

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
        }, 5000);

        form.reset();
      } else {
        alert("Error al enviar. Intenta nuevamente.");
      }
    }).catch(error => {
      alert("Hubo un problema al enviar el mensaje.");
    });
  });

  // --- Botón "Volver arriba" ---
  const btn = document.getElementById("btnSubir");

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
