document.addEventListener("DOMContentLoaded", inicializar);

function inicializar() {
  var buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.matches("#clear")) {
        document.querySelector(".resultado").innerHTML = "";
      }

      if (element.matches("#equals")) {
        try {
          const expresion = document.querySelector(".resultado").innerHTML;
          const calculo = eval(expresion);
          document.querySelector(".resultado").innerHTML = calculo;
        } catch (error) {
          document.querySelector(".resultado").innerHTML = "Error";
        }
      }

      if (!element.matches("#equals") && !element.matches("#clear")) {
        document.querySelector(".resultado").innerHTML += element.innerHTML;
      }
    });
  });
}
