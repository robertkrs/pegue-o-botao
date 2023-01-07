const button = document.querySelector("#btn-nao");

button.addEventListener("click", function () {
  this.style.position = "absolute";
  var valor = Math.random() * 1700 + 50;
  var valor2 = Math.random() * 900 + 50;
  var pixel = valor.toFixed(0).toString();
  var pixel2 = valor2.toFixed(0).toString();

  if (valor.toFixed >= 570 && valor.toFixed <= 1200) {
    var valor = 200;
  }
  if (valor2.toFixed > 180 && valor2.toFixed <= 620) {
    var valor2 = 400;
  }
  this.style.left = `${pixel}px`;
  this.style.top = `${pixel2}px`;
});

const button2 = document.querySelector("#btn-sim");

button2.addEventListener("click", function () {
  const main = document.querySelector("#principal");

  main.innerHTML = `<div class="clicou-sim">
  <p>
    Não esperava muito mesmo rs
  </p>
</div>`;
});
