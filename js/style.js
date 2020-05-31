$(document).ready(function () {
    $("#st").click(function(){
        var inner = $("#in").val();
        $("#in").val(inner + 'O ');
      });
    $("#b").click(function(){
        var inner = $("#in").val();
        $("#in").val(inner + '─ ');
      });
    $("#f").click(function(){
        var inner = $("#in").val();
        $("#in").val(inner + '▲ ');
      });
    $("#k").click(function(){
        var inner = $("#in").val();
        $("#in").val(inner + '⦰ ');
      });
    $("#h").click(function(){
        var inner = $("#in").val();
        $("#in").val(inner + '● ');
      });
      $("#clear").click(function(){
        $("#in").val("");
      });

      
});