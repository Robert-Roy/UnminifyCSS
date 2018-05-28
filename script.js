/* 
 * All rights reserved. Copyright Robert Roy 2018.
 */

/**
 *
 * @author Robert Roy <www.robertsworkspace.com>
 */

$(document).ready(function () {
    var $input = $("#input");
    var $copyThis = $("#copyThis");
    var $output = $("#output");
    var $copy = $("#copy");

    $input.val("");
    $copyThis.val("");
    $input.keypress(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        } else {
        }
    });
    $input.on("keyup paste change", function () {
        setTimeout(changeInput($(this)), 1);
    });
    $copy.click(function () {
        var target = document.getElementById("copyThis");
        target.setSelectionRange(0, target.value.length);
        $copyThis.focus();
        window.scrollTo(0, 0);
        try {
            document.execCommand("copy");
            $copy.val("Copied!");
        } catch (e) {
            $copy.val("An Error Occurred. Unable to Copy.");
        }
        $copy.focus();
    });

    function changeInput(that) {
        var output = tryConvert(that.val());
        $output.html(output);
        $copyThis.val(output);
        if (that.val() === "") {
            $output.html("");
        }
        ;
        $copy.val("Copy");
    }
});


function tryConvert(value) {
    return convert(value);
}

function convert(input) {
    if (!isValid(input)) {
        return "Invalid Input";
    }
    var output = input;
    output = replaceAll(output, ";", ";\n\t");
    output = replaceAll(output, "{", "{\n\t");
    output = replaceAll(output, "}", "\n}\n");
    //return "test\ntest<br>test";
    return output;
}

function isValid(input) {
    return true;
}

function replaceAll(searchThis, findThis, replaceWithThis) {
    return searchThis.split(findThis).join(replaceWithThis);
}