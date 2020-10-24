window.addEventListener("DOMContentLoaded", function(e) {

  let locationBox = document.querySelector("#location");
  let location = {
    latitude: "unknown",
    longitude: "unknown"
  };

  window.navigator.geolocation.getCurrentPosition(
    function(position) {

      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      locationBox.value = JSON.stringify(location);
    },
    function(error) {
      locationBox.value = JSON.stringify(location);
    });

  const order = localStorage.getItem("order");
  const ticketOrder = JSON.parse(order);

  if (order) {
    const tic = document.querySelector("#event-information");
    const title = tic.querySelector("h1");
    const date = tic.querySelector(".date");
    const speaker = tic.querySelector(".speaker");
    const orderInput = document.querySelector("#ticketorder");

    title.innerText = ticketOrder.title;
    date.innerText = ticketOrder.date;
    speaker.innerText = ticketOrder.speaker;

    orderInput.value = order;

    /*const img = pie.querySelector("img");
    img.setAttribute("src", `images/${ticketOrder.id}.png`);
    img.setAttribute("alt", ticketOrder.title);*/
  }
});
