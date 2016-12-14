

$(document).ready(function () {
  $(".favorites form").submit(function (event) {
    event.preventDefault();
    var thing1 = $("#thing1").val();
    var thing2 = $("#thing2").val();
    var thing3 = $("#thing3").val();
    var things = [];

    if (!thing1) {
      $(".thing1").addClass("has-error");
      $("#thing1-warning").text("Please enter your first favorite thing.");
    }
    if (!thing2) {
      $(".thing2").addClass("has-error");
      $("#thing2-warning").text("Please enter your second favorite thing.");
    }
    if (!thing3) {
      $(".thing3").addClass("has-error");
      $("#thing3-warning").text("Please enter your third favorite thing.");
    }

    if (thing1 && thing2 && thing3) {
      things.push(thing1);
      things.push(thing2);
      things.push(thing3);
    }

    console.log(things);
  });
});