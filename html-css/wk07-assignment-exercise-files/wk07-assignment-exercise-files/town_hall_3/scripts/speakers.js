
window.addEventListener("DOMContentLoaded", function(e) {
  const orderButtons = document.querySelector("button[data-order]");

  //orderButtons.forEach(function(button) {
    
    orderButtons.addEventListener("click", function(e) {
      const button = e.currentTarget;
      const container = button.parentNode;

      const order = {
        id: (id = button.getAttribute("data-order")),
        title: container.querySelector("#event-information h1").innerText,
        date: container.querySelector(".date").innerText,
        speaker: container.querySelector(".speaker").innerText
      };

      localStorage.setItem("order", JSON.stringify(order));

      const url = window.location.href.replace("toobin.html", "../tickets.html");
      window.location.href = url;
    });
  //  });
});
