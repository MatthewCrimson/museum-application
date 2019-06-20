$("select").imagepicker()

$('#submitbutton1').click(function () {
  console.log("selected works: " + $("select").data('picker').selected_values());

  var selected_list = $("select").data('picker').selected_values();

  //var database = firebase.database();

  var i;
  for (i = 0; i < selected_list.length; i++)
  {
    var old_value;
    firebase.database().ref("Votes/Gallery1/item" + selected_list[i]).once('value', function(snapshot){
      old_value = snapshot.val();
      console.log(old_value);
    });

    firebase.database().ref("Votes/Gallery1/item" + selected_list[i]).set(old_value + 1);
    console.log("attempted to send")
  }


  //var updates = {};
  //updates['/Votes/Gallery1/item1'] = 10;
  //firebase.database().ref("Votes/Gallery1/item1").set(+1);

  //$("select").data('picker').destroy();
  //window.location.href = "gallery2.html";
});
