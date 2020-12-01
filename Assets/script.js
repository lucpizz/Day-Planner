
 const currentTime = moment().hour();
 const tm = moment().format("H A");


$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do YYYY");

  $("#currentDay").text(today);

  console.log(today);

 

  console.log(currentTime);

  function timeSlots() {
    //var tm = moment().format("H A");

    //console.log(tm);

    for (var i = 0; i <= 8; i++) {
      var hour = 8 + i;
      var timeSlotRow = $("<input/>").attr({
        class: "container .row .time-block textarea",
        type: "text",
        name: "text",
        placeholder: "Enter Event",
      });
      var saveBtn = $("<input>").attr({
        class: ".saveBtn",
        type: "submit",
        value: "Save Event",
        id: "saveLocal",
      });
      $(".container").append(hour + ":00", timeSlotRow, saveBtn, $("<br>"));

      console.log(hour);
      console.log(timeSlotRow);
      
    }


  }

  timeSlots();
  timeSlotColor();
  console.log(timeSlotColor);
});


function timeSlotColor() {
  if (tm < currentTime) {
    $("textArea").addClass("past");
    console.log(tm);
  }
  else if (tm === currentTime) {
    $("textArea").addClass("current");
    console.log(tm);
  }
  else
    $("textArea").addClass("future");
    console.log(tm);
}

    saveLocal.value = localStorage.setItem('saveLocal');
    saveLoval.oninput = () => {
      saveLocal.setItem('saveLocal', saveLocal.value)

      console.log("saveLocal")

    };
  
