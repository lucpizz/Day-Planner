var currentTime = moment().hour();
var tm = moment().format("h");

console.log(tm);

function getTimeClass(time_check) {
  if (time_check < currentTime) {
    return "past";
  } else if (time_check === currentTime) {
    return "present";
  } else {
    return "future";
  }
}

function timeSlots() {
  let schedule = JSON.parse(localStorage.getItem("schedule"));

  for (var i = 8; i <= 16; i++) {
    let task = localStorage.getItem(i.toString());

    $(".container").append(
      `<div class="row"><div class="hour col-sm-1">${i}</div><input class="rounded-0 time-block h-100 textarea col-sm-10 ${getTimeClass(
        i
      )}" type="text" name="text" placeholder=${
        task ? task : "Enter_Text"
      }><button class="col-sm-1 saveBtn" type="submit"><i class="far fa-save"></i></button></div>`
    );
  }
}

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
