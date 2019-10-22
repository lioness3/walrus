$(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

});

$(function() {
  $(".clickable2").click(function() {
    $("#icecream-showing").slideToggle();
    $("#icecream-hidden").slideToggle();
  });
});


$(function() {
  $(".clickable21").click(function() {
  alert("OM NOM NOM");
  $("#icecream-showing").slideToggle();
  $("#icecream-hidden").slideToggle();
});
});
