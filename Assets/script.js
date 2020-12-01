$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do YYYY");

  $("#currentDay").text(today);

  console.log(today);

  var currentTime = moment().hour();

  console.log(currentTime);

  function timeSlots() {
    var tm = moment().format("H A");

    console.log(tm);

    for (var i = 0; i <= 8; i++) {
      var hour = 8 + i;
      var timeSlotRow = $("<input/>").attr({
        class: "container .row .time-block",
        type: "text",
        name: "text",
        placeholder: "Enter Event",
      });
      var saveBtn = $("<input>").attr({
        class: ".saveBtn",
        type: "submit",
        value: "Save Event",
      });
      $(".container").append(hour + ":00", timeSlotRow, saveBtn, $("<br>"));

      console.log(hour);
      console.log(timeSlotRow);
    }

    if (tm < currentTime) {
      $(".time-block").text.addClass(".past");
    }
  }

  timeSlots();
});
