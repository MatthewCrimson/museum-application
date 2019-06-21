$("select").imagepicker()

$('#submitbutton2').click(function () {
  console.log("selected works: " + $("select").data('picker').selected_values());

  var selected_list = $("select").data('picker').selected_values();

  var i;
  for (i = 0; i < selected_list.length; i++)
  {
    var old_values = [];
    firebase.database().ref("Votes/Gallery2/item" + selected_list[i]).once('value', function(snapshot){
      old_values.push(snapshot.val());
      if (old_values.length == selected_list.length){
        console.log("old values: " + old_values);
        var z;
        for(z = 0; z < selected_list.length; z++){
          firebase.database().ref("Votes/Gallery2/item" + selected_list[z]).set(old_values[z] + 1);
        }
        $("select").data('picker').destroy();
        window.location.href = "gallery3.html";
      }
    });
  }
});
