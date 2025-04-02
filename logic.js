window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
const id = params.get("id");
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
  
  
  