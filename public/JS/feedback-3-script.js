$("select").imagepicker()

$

$('#submitbutton3').click(function () {
  console.log("selected works: " + $("select").data('picker').selected_values());
  window.location.href = "enddemo.html";
});
