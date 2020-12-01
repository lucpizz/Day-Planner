const currentTime = moment().hour();
const tm = moment().format("H A");

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
  for (var i = 8; i <= 18; i++) {
    let task = schedule.filter((task) => task.hour == i);
    $(".container").append(
      `<div class="row"><div><input class="time-block textarea ${getTimeClass(
        i
      )}" type="text" name="text" placeholder=${
        task.length > 0 ? task[0].task : "Enter Text"
      }><button class="saveBtn" type="submit" hour=${i}>${i}</button></div></div>`
    );
  }
}

$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do YYYY");

  $("#currentDay").text(today);

  $(document).on("click", ".saveBtn", function () {
    let input_val = $(this).siblings("input").val();
    let hour = $(this).attr("hour");

    let schedule = localStorage.getItem("schedule");

    if (schedule) {
      let old_schedule = JSON.parse(schedule);
      old_schedule.push({ hour: hour, task: input_val });
      localStorage.setItem("schedule", JSON.stringify(old_schedule));
    } else {
      localStorage.setItem(
        "schedule",
        JSON.stringify([{ hour: hour, task: input_val }])
      );
    }
  });

  timeSlots();
});

/*

    saveLocal.value = localStorage.setItem('saveLocal');
    saveLoval.oninput = () => {
      saveLocal.setItem('saveLocal', saveLocal.value)

      console.log("saveLocal")

    };
  */
