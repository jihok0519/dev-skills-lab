const $btn = $(".submit");
const $ul = $("#listedSkills");
const $input = $("#skills");
const $form = $("form");
const $li = $("li");

function addInfo(event) {
    event.preventDefault();
    let skillInput = $input.val();
    $ul.append("<li></li>");
    let userInput = $ul.append("<button id='remove'>x</button>").append(skillInput);
};

    $ul.on("click", "button", function() {
        $(this).closest($ul).fadeOut(1000, function () {
            $(this).remove();
        })
    })

$btn.on("click", addInfo);
$form.on("button", addInfo);