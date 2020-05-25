// Add listeners to the menu button so you scroll to a section when you click.
$("#homeButton").click(function() {
  document.getElementById("home").scrollIntoView();
});

$("#projectsButton").click(function() {
  document.getElementById("projecten").scrollIntoView();
});

$("#badgeButton").click(function() {
  document.getElementById("mijnbadges").scrollIntoView();
});

$("#contactButton").click(function() {
  document.getElementById("contact").scrollIntoView();
});


// Defining function for changing the current active menu button.
function switchActive(selector) {
  $(selector).addClass("active");
  if (selector != "#homeButton") {
    $("#homeButton").removeClass("active");
  }
  
  if (selector != "#projectsButton") {
    $("#projectsButton").removeClass("active");
  }
  
  if (selector != "#badgeButton") {
    $("#badgeButton").removeClass("active");
  }
  
  if (selector != "#contactButton") {
    $("#contactButton").removeClass("active");
  }
}

// Switch the active selector to the menu item that corresponds to the correct section.
function correctActive() {
  let yScrollPos = window.pageYOffset + window.innerHeight;
  let homePos = $("#parallax").offset().top;
  let projectsPos = $("#projects").offset().top;
  let badgesPos = $("#mijnbadges").offset().top;
  let contactPos = $("#contact").offset().top;
  console.log("offset = " + yScrollPos);
  console.log("projectpos = " + projectsPos);
  if (yScrollPos < projectsPos) {
    switchActive("#homeButton");
  } else if (yScrollPos < badgesPos) {
    switchActive("#projectsButton");
  } else if (yScrollPos < contactPos) {
    switchActive("#badgeButton");
  } else {
    switchActive("#contactButton");
  }
}


correctActive();

// On scroll, check where user is on page and from that
$(window).scroll(correctActive);