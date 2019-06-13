$("select").imagepicker()

$('#submitbutton1').click(function () {
  testy = $("select").data('picker');
  console.log("test1");
  console.log($("select").data('picker'));
});
