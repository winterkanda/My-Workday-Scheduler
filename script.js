//this is defining the time stamp for today
$("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss a"));

// row buttons 
$("#saveBtn").on("click", function() {
    var currentHour = $(this)
        .parent()
        .attr("id");

    var descriptionText = $("<textarea>")
        .attr("class", "description")
        .val()
        .text()
        .trim();

        localStorage.setItem(currentHour, descriptionText);
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

