var doc = document;

var left_class = doc.getElementsByClassName("classroom")[0];

var right_class = doc.getElementsByClassName("classroom")[1];

var class_container = doc.querySelector(".classroom_container");

right_class.addEventListener("click", () => {
    class_selection(right_class);
});

left_class.addEventListener("click", () => {
    class_selection(left_class);
});

function class_selection(choice) {
    var notChosen;
    if(choice == right_class) notChosen = left_class;
    else notChosen = right_class;

    class_container.style.gridTemplateColumns = choice == right_class ? "0vw 100vw" : "100vw 0vw" ;
    notChosen.style.opacity = "0%";
    class_container.style.transition = "all 1s, visibility 2s";
    
    choice.style.scale = "1"
    choice.style.opacity  = "0%";
    choice.style.transition = "all 2s";
    
    setTimeout(() => {
        notChosen.style.visibility = "hidden";
        choice.remove();
        if(choice == right_class) window.location.replace("htmls/2437.html");
        else window.location.replace("htmls/2436.html");
    }, "2000");
}