const $btn = $(".submit");
const $ul = $("#listedSkills");
const $input = $("#skills");
const $form = $("form");

$ul.on("click", "button", function (event) {
    event.preventDefault();
    $(this).closest($ul).fadeOut(1000, function (event) {
        $(this).remove();
    });
});

function addInfo(event) {
    event.preventDefault();
    let startingInput = $input.val();
    let userInput = $ul.append(startingInput).append("<button id='remove'>x</button>");
};

$btn.on("click", addInfo);
$form.on("button", addInfo);