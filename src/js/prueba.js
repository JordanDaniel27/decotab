document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector(".input-box");
  input.textContent = "Arequipa"; // Dato que llega de la bd

  var indexDepa = null;
  console.log(input.textContent.trim());

  const radio = document.querySelectorAll(".radio");

  radio.forEach((item) => {
    if (item.classList.contains("Arequipa")) {
      item.checked = true;
      indexDepa = item.getAttribute("depa-atributo");
      return;
    }
  });

  console.log(indexDepa);
});
