queryId("#section button");
queryId("#article div");

function queryId(id) {
  document.querySelectorAll("#section button").forEach((tab, index) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(id).forEach((tab) => {
        tab.classList.remove("active");
        tab.classList.remove("tab");
      });

      if (id === "#article div") {
        document.querySelectorAll(id)[index].classList.add("tab");
      } else {
        document.querySelectorAll(id)[index].classList.add("active");
      }
    });
  });
}
