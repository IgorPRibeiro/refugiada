const urlParams = new URLSearchParams(window.location.search);

var name = urlParams.get("name");
var value = urlParams.get("value");

let text =
  value === "A"
    ? `Deseja ser Acolhida 
por ${name}?`
    : `Deseja acolher ${name}?`;

document.getElementById("text-acolher").innerHTML = text;

function acolher(params) {
  if (params === "S") {
    alert(`Obrigado. A ${name} entrara em contato por email!`);
    window.location.href = "../../../index.html";
  } else {
    if (value === "A") {
      window.location.href = "../Refugiada/Refugiada.html";
    } else {
      window.location.href = "../Acolhedora/Acolhedora.html";
    }
  }
}
