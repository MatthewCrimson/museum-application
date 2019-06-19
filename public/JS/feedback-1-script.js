$("select").imagepicker()

$

$('#submitbutton1').click(function () {
  console.log("selected works: " + $("select").data('picker').selected_values());
  $("select").data('picker').destroy();
  window.location.href = "gallery2.html";
});
