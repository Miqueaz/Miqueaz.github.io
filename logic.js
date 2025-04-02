window.addEventListener('DOMContentLoaded', () => {
    const partesRuta = window.location.pathname.split("/");
const id = partesRuta[partesRuta.length - 1];
    const titulo = document.getElementById("tituloInvitado");
    if (titulo) {
      titulo.textContent = `Invitación #${id}`;
    }
    const numeroPases = document.getElementById("numeroPases");
    if (numeroPases) {
      numeroPases.textContent = "2 Personas";
    }

    document.getElementById("aceptarInvitacionBtn").addEventListener("click", () => {
        document.getElementById("tituloInvitado").textContent = "Xd!";
      });
  });
  
  
  