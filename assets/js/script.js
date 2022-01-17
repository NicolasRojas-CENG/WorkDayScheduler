var tasks  = [];

setInterval(function () {
    $("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

var colour = function() {
    var date = moment().hour();
    $(".container").children("article").children("h2").each(function () {
        var value = this.textContent.trim();
        var hour = parseInt(value);
        if (hour < 9){
            hour += 12;
        }
        
        if (date > hour){
            $(this).siblings("p").removeClass('future');
            $(this).siblings("p").removeClass('present');
            $(this).siblings("p").addClass('past');
        }else if(date < hour) {
            $(this).siblings("p").removeClass('past');
            $(this).siblings("p").removeClass('present');
            $(this).siblings("p").addClass('future');
        }else{
            $(this).siblings("p").removeClass('past');
            $(this).siblings("p").removeClass('future');
            $(this).siblings("p").addClass('present');
        }
    });
}

setInterval(function () {
    colour();
}, (1000 * 60) * 5);
colour();

// $(".description").on("click", function (){
//     var text = $(this).text().trim();
//     var textInput = $("<textarea>")
//      .addClass("col-8 description")
//      .val(text);
//      $(this).replaceWith(textInput);
//      //console.log(textInput);
// });

// $(".saveBtn").on("click", function() { //ocure cuando apreto el boton que yo le hize click.
//     var parent = $(this).parent();
//     var text = parent.find("textarea").val();
//     var id = parent.attr("id");
//     //console.log(text);
//     var textInput = $("<p>")
//         .addClass("col-8 description")
//         .text(text);
//         parent.find("textarea").replaceWith(textInput);
//     colour();
//  });

$(".row").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("col-8 description")
        .val(text);
    $(this).replaceWith(textInput);
});

$(".row").on("click", "button", function() {
    var parent = $(this).parent();
    console.log(parent);
    // var text = parent.find("textarea").val();
    var id = parent.attr("id");
    console.log(id);
    var text = $(this).siblings("textarea")
       .val()
       .trim();
    var taskSpan = $("<p>")
       .addClass("col-8 description")
       .text(text);
    $(this).siblings("textarea").replaceWith(taskSpan);
    colour();
});