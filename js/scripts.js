$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable2").click(function(){
    $("#emu-showing").toggle();
    $("#emu-hidden").toggle();
  });
});
