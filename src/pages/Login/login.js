function login() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let users = JSON.parse(localStorage.getItem("user"));
  users?.map((item) => {
    if (item.email === email && item.senha === senha) {
      if (item.tipo === "R") {
        window.location.href = "../Refugiada/Refugiada.html?type=" + item.tipo;
      } else {
        window.location.href = "../Refugiada/Refugiada.html?type=" + item.tipo;
      }
    } else {
      alert("Senha errada ou usario não encontrado");
    }
    console.log(item);
  });
}
