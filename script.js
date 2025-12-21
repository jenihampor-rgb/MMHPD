document.addEventListener("DOMContentLoaded", () => {
  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    document.getElementById("time").textContent =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");

    document.getElementById("ampm").textContent = ampm;

    document.getElementById("date").textContent =
      now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });

    document.getElementById("day").textContent =
      now.toLocaleDateString("en-US", { weekday: "long" });
  }

  updateClock();
  setInterval(updateClock, 1000);
});
