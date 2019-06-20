$("select").imagepicker()

$('#submitbutton1').click(function () {
  console.log("selected works: " + $("select").data('picker').selected_values());

  var selected_list = $("select").data('picker').selected_values();
  alert(selected_list);

  var db = firebase.database();

  var updates = {};
  updates['/Votes/Gallery1/item1'] = 10;
  firebase.database().ref("/Gallery1/item1").set(10);

  $("select").data('picker').destroy();
  window.location.href = "gallery2.html";
});
