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
        
        if (date > hour){
            $(this).siblings("input").removeClass('future');
            $(this).siblings("input").removeClass('present');
            $(this).siblings("input").addClass('past');
        }else if(date < hour) {
            $(this).siblings("input").removeClass('past');
            $(this).siblings("input").removeClass('present');
            $(this).siblings("input").addClass('future');
        }else{
            $(this).siblings("input").removeClass('past');
            $(this).siblings("input").removeClass('future');
            $(this).siblings("input").addClass('present');
        }
    });
}

setInterval(function () {
    colour();
}, (1000 * 60) * 5);
colour();



   
