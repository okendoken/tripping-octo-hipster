$(document).ready(function() {
    $("#story").hide();
    $("#story-form").submit(function(event) {
        var blanks = ["person", "adjective", "noun", "insect", "noun2", "verb"];

        blanks.forEach(function(blank) {
            var userInput = $("input#" + blank).val();
            console.log(userInput);
            $("." + blank).text(userInput).val();
        });

        $("#story").show();
        event.preventDefault()
    });
});