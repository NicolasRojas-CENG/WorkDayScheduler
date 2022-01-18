setInterval(function () {
    $("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

function loadTasks() {
    for (var i = 0; i < 9; i++) {
        var key = "hour" + i;
        var id = "#" + key;
        var task = JSON.parse(localStorage.getItem(key));
    var para = $(id).find("p");
    para.text(task);
    }
}

loadTasks();

var colour = function() {
    var date = moment().hour();
    $(".container").children("article").children("h2").each(function () {
        var value = this.textContent.trim();
        var hour = parseInt(value);
        
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
    saveTask(id, text);
});

function saveTask(id ,text) {
    localStorage.setItem(id, JSON.stringify(text));
}