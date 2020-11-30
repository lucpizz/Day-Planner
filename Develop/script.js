

$(document).ready(function () {

    var today = moment().format("dddd, MMMM Do YYYY");

    $("#currentDay").text(today);

    console.log(today);


    function timeSlots() {

        var tm = moment().format('hh:mm');

        var saveBtn = $('<input>').attr({ class: '.saveBtn', type: 'submit', value: 'Save Event' });

        console.log(tm);

        for (tm = 0; tm <= 8; tm++) {
            var hour = tm + 8;
            var timeSlotRow = $('<input/>').attr({ class: 'container', type: 'text', name: 'text', placeholder: 'Enter Event', time: `${[hour]}` }).addClass(".text");
            $(".container").append(hour +":00", timeSlotRow, saveBtn);


            console.log(hour);
            console.log(timeSlotRow);
        }



    }



    timeSlots();


});


