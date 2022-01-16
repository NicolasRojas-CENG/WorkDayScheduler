setInterval(function () {
    $("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

var colour = function() {
    var date = moment().hour();
    $(".container").children("article").children("h2").each(function () {
        var value = this.textContent.trim();
        //value = value.split(" ");
        //value = value[0];
        var hour = parseInt(value);
        if (hour < 9){
            hour += 12;
        }
        console.log(this);
        console.log(date);
        console.log(hour);
        //debugger;
        if (date > hour){
            $(".container").children("article").children("span").addClass("col-8 description past");
            console.log(this);
            console.log("This task is in the past.");
        }
        if(date < hour) {
            $(".description").addClass("col-8 description future");
            console.log("This task is in the future.");
        }
        if (date === hour){
            $(".description").addClass("col-8 description present");
            console.log("This task is in the present.");
        }
    });

}
//debugger;
colour();