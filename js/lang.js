var dataReload = document.querySelectorAll("[data-reload]");

var language = {
  nl: {
    roosterappdes: "Een (soort van) app voor het Metis Rooster! "
  },
  eng: {
    roosterappdes: "(Sort of) an app for the schedule page of Metis! "
  }
};

if (window.location.hash) {
  if (window.location.hash === "#en") {
    roosterappdes.textContent = language.eng.roosterappdes;
  }
}

for (i=0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function() {
    location.reload(true);
  };
}