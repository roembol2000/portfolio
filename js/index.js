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



$(window).scroll(function() {
  let yScrollPos = window.pageYOffset;
  let homePos = $("#parallax").offset().top;
  let projectsPos = $("#projects").offset().top;
  let badgesPos = $("#mijnbadges").offset().top;
  let contactPos = $("#contact").offset().top;
  console.log("offset = " + yScrollPos);
  console.log("projectpos = " + projectsPos);
  if (yScrollPos < projectsPos) {
    if ($(""));
  }
});