$("select").imagepicker()

$('#submitbutton1').click(function () {
  console.log("selected works: " + $("select").data('picker').selected_values());

  var selected_list = $("select").data('picker').selected_values();

  //var database = firebase.database();

  var i;
  for (i = 0; i < selected_list.length; i++)
  {
    var old_value;
    firebase.database().ref("Votes/Gallery1/item" + selected_list[i]).on('value', function(snapshot){
      old_value = snapshot.val();
      console.log("old value: " + old_value);
      updateValues(old_value, selected_list[i]);

      firebase.database().ref("Votes/Gallery1/item" + selected_list[i]).set(old_value + 1);
      console.log("attempted to send")
    });

    //firebase.database().ref("Votes/Gallery1/item" + selected_list[i]).set(old_value + 1);
  //  console.log("attempted to send lower_old value:" +old_value);
  }

  //$("select").data('picker').destroy();
  //window.location.href = "gallery2.html";
});
