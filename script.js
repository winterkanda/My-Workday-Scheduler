//this is defining the time stamp for today
$("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss a"));

// row buttons 
$(".saveBtn").on("click", function() {
    var currentHour = $(this)
        .parent()
        .attr("id");

    var descriptionText = $(this)
        .siblings("textarea")
        .val()
        .trim();

        console.log(descriptionText)
        localStorage.setItem(currentHour, descriptionText);
})

$("#hour8").children(".description").val(localStorage.getItem("hour8"));
$("#hour9").children(".description").val(localStorage.getItem("hour9"));
$("#hour10").children(".description").val(localStorage.getItem("hour10"));
$("#hour11").children(".description").val(localStorage.getItem("hour11"));
$("#hour12").children(".description").val(localStorage.getItem("hour12"));
$("#hour13").children(".description").val(localStorage.getItem("hour13"));
$("#hour14").children(".description").val(localStorage.getItem("hour14"));
$("#hour15").children(".description").val(localStorage.getItem("hour15"));
$("#hour16").children(".description").val(localStorage.getItem("hour16"));
$("#hour17").children(".description").val(localStorage.getItem("hour17"));

//
function hours() {
    var currentTime = parseInt(moment().format("hh"))
        $(".hour-block").each(function () {

        var blockTime = parseInt($(this)
            .attr("id").split("hour")[1]);

            console.log(currentTime)
            console.log(blockTime)
        if (blockTime < currentTime) {
            $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
        } else if (blockTime === currentTime) {
            $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
        } else {
            $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
hours();