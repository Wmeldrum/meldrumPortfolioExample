console.log("I'm working!");



//button labels
var $playersLabel = $("#players-label");
var $eventsLabel = $("events-label");
var $gamesLabel = $("games-label");
//buttons
var $events = $("#events");
var $players = $("#players");
var $games =$("#games");
//all buttons
var $buttons = $(".nav-button");

$events.hover( function() {
  $eventsLabel.addClass("animated fadeInUp");
  console.log("succesful hover");
});
