var user = [];
function cadastrar() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let refugiada = document.getElementById("refugiada").checked;
  let acolher = document.getElementById("acolher").checked;
  let val;
  let obj;

  if (refugiada) {
    val = "R";
  } else if (acolher) {
    val = "A";
  } else {
    alert("Informe sua situação");
  }

  obj = {
    email: email,
    senha: senha,
    tipo: val,
  };

  user.push(obj);

  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../../../index.html";
}
