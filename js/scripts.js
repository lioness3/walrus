$(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $(".clickable2").click(function() {
    $("#icecream-showing").slideToggle();
    $("#icecream-hidden").slideToggle();
  });

  $(".clickable21").click(function() {
    alert("OM NOM NOM");
    $("#icecream-showing").slideToggle();
    $("#icecream-hidden").slideToggle();
  });

  $(".clickable3").click(function() {
    $( "#learn-showing").slideToggle();
    $("#learn-hidden").slideToggle();
  });

  $("button#dark").click(function() {
    $("body").addClass("dark-background");
    $("body").addClass("light-text");
  });

  $("button#light").click(function() {
    $("body").removeClass("dark-background");
    $("body").removeClass("light-text");
  });
});
