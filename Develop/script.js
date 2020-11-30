/*
    variables for the day-planner
*/

//var today = moment().format("YYYY-MM-DD");

$(document).ready(function ()
{

    var today = moment().format("dddd, MMMM Do YYYY");

    $("#currentDay").text(today);

    console.log(today);

});


