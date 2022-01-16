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
            $(this).siblings("span").removeClass('future');
            $(this).siblings("span").removeClass('present');
            $(this).siblings("span").addClass('past');
        }else if(date < hour) {
            $(this).siblings("span").removeClass('past');
            $(this).siblings("span").removeClass('present');
            $(this).siblings("span").addClass('future');
        }else{
            $(this).siblings("span").removeClass('past');
            $(this).siblings("span").removeClass('future');
            $(this).siblings("span").addClass('present');
        }
    });
}

setInterval(function () {
    colour();
}, (1000 * 60) * 5);
colour();

$(".container").on("click", "span", function() {
    var text = $(this)
        .text()
        .trim();
        console.log(text);
    var textInput = $("<textarea>")
        .addClass("col-8 description")
        .val(text);
    $(this).replaceWith(textInput);
    // textInput.trigger("focus");
});

$(".container").on("click", "button", function() {
    //console.log(this);
//     // get the textarea's current value/text
    var text = $(this).siblings("textarea")
       .val()
       .trim();
    //console.log(text);
    var taskSpan = $("<span>")
       .addClass("col-8 description")
       .text(text);
    //console.log(taskSpan);
//     // replace textarea with p element
     $("textarea").replaceWith(taskSpan);
     colour();
});
