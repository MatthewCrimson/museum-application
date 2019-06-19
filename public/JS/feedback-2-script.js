$("select").imagepicker()

$

$('#submitbutton2').click(function () {
  console.log("selected works: " + $("select").data('picker').selected_values());
  $("select").data('picker').destroy();
  window.location.href = "gallery3.html";
});
