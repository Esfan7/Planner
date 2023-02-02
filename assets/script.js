
$(function () {
    var d = new Date() 
    console.log("d:", d)
    var day = dayjs(d).format("MMMM D, YYYY")
    var currentHour = dayjs(d).format("hA")
    var found = false;
    console.log("day:", day)
    console.log("hour:", currentHour);

    //past, present, future
    $("#time-display").text(day)

    $(".time-block").each(function (index) {
       

        if ($(this).attr("id").split("-")[1] == currentHour) {
            $(this).removeClass("past").addClass("present");
            found = true; //stop looking when found
        } else if (found) {
            $(this).removeClass("past").addClass("future");
        }

    });

    $(".saveBtn").click(function () {

        var hour = $(this).parent().attr("id").split("-")[1];


        var activity = $(this).siblings(".description").val()
        console.log("saveBtn hour:", hour, activity);

        localStorage.setItem(hour, activity)

    });

    $('.time-block').each(function (index) {

        var myId = $(this).attr("id").split("-")[1]; //9AM
        $(this).find("textarea").text(localStorage.getItem(myId));

    })


    

});


