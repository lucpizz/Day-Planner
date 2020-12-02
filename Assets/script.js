/*

Work Day Scheduler Program

CurrentTime variable to set hour timestamp used to set the color of the area text boxes

*/

var currentTime = moment().hour();

//function with conditionals to set the text area color

function getTimeClass(time_check) {
  if (time_check < currentTime) {
    return "past";
  } else if (time_check === currentTime) {
    return "present";
  } else {
    return "future";
  }
}

/* 
    function with for loop and JQuery append to greet 8 hour work schedule
    and add inputs to local storage
*/

function timeSlots() {
  let schedule = JSON.parse(localStorage.getItem("schedule"));

  var i = 8;

  for (var i = 8; i <= 17; i++) {
    let task = localStorage.getItem(i.toString());

    $(".container").append(
      `<div class="row"><div class="hour col-sm-1">${i}</div><input class="rounded-0 time-block h-100 textarea col-sm-10 ${getTimeClass(
        i
      )}" type="text" name="text" placeholder=${
        task ? task : ""
      }><button class="col-sm-1 saveBtn" type="submit"><i class="far fa-save"></i></button></div>`
    );
  }
}

/*
   JQuery function to set current timestap, click button action, and local storage

   Launches the timeslot function to create the HTML
*/

$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do YYYY");

  $("#currentDay").text(today);

  $(document).on("click", ".saveBtn", function () {
    let input_val = $(this).siblings("input").val();

    let hour = $(this).parent().children(":first-child").text();

    localStorage.setItem(hour, input_val);
  });

  timeSlots();
});

/*

  *** this is code is to try an append AM or PM but not functional yet ***

  var tm = moment().format("hA");

  for (var tm = 8; tm <= 16; tm++) {
      
    $(".container").append(`<div class="hour col-sm-1">${tm}Am</div>`);

    console.log(tm);

  }
*/
