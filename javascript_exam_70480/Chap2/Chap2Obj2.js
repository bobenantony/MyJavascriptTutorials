/*** Declaring and handling bubbled events ***/

window.onload = function () {
    /*** Declaring and handling bubbled events ***/
    //document.getElementById("outer").addEventListener("click", outerDivClick, false);
    //document.getElementById("middle").addEventListener("click", middleDivClick, false);
    //document.getElementById("inner").addEventListener("click", innerDivClick, false);
    //document.getElementById("clearButton").addEventListener("click", clearList);

    /*** Handling DOM events ***/



    /*** Drag-and-drop functionality ***/
    var chip = document.getElementById("chip");
    chip.addEventListener("dragstart", function () {
        window.event.dataTransfer.setData("Text", this.id);
    });

    //bucket 1
    var b1 = document.getElementById("bucket1");
    b1.addEventListener("dragenter", function () {
        b1.classList.add("over");
        window.event.returnValue = false;
    });

    b1.addEventListener("dragleave", function () {
        b1.classList.remove("over");
    });

    b1.addEventListener("dragover", function () {
        window.event.returnValue = false;
    });

    b1.addEventListener("drop", function () {
        window.event.returnValue = false;
        var data = event.dataTransfer.getData("Text");
        var d = document.getElementById(data);
        d.classList.remove("begin");
        d.classList.add("dropped");
        this.appendChild(d);
    });

    //bucket 2
    var b2 = document.getElementById("bucket2");
    b2.addEventListener("dragenter", function () {
        b2.classList.add("over");
        window.event.returnValue = false;
    });

    b2.addEventListener("dragleave", function () {
        b2.classList.remove("over");
    });

    b2.addEventListener("dragover", function () {
        window.event.returnValue = false;
    });

    b2.addEventListener("drop", function () {
        window.event.returnValue = false;
        var data = event.dataTransfer.getData("Text");
        var d = document.getElementById(data);
        d.classList.remove("begin");
        d.classList.add("dropped");
        this.appendChild(d);
    });

    //bucket 2
    var b3 = document.getElementById("bucket3");
    b3.addEventListener("dragenter", function () {
        b3.classList.add("over"); window.event.returnValue = false;
    });

    b3.addEventListener("dragleave", function () {
        b3.classList.remove("over");
    });

    b3.addEventListener("dragover", function () {
        window.event.returnValue = false;
    });

    b3.addEventListener("drop", function () {
        window.event.returnValue = false;
        var data = event.dataTransfer.getData("Text");
        var d = document.getElementById(data);
        d.classList.remove("begin");
        d.classList.add("dropped");
        this.appendChild(d);
    });
}

function outerDivClick() {
    appendText("outer Div Clicked"); 
}

function middleDivClick() {
    appendText("middle Div Clicked");
}

function innerDivClick() {
    appendText("inner Div Clicked");
    //window.event.cancelBubble = true; 
}

function appendText(s) {
    var li = document.createElement("li");
    li.innerText = s;
    document.getElementById("eventOrder").appendChild(li);
}

function clearList() {
    var ol = document.createElement("ol");
    ol.id = "eventOrder";
    document.getElementById("bod").replaceChild(ol, document.getElementById("eventOrder"));
} 

/*** Handling DOM events ***/
function rangeChangeEvent() {
    document.getElementById("rangeValue").innerText = this.value;
} 



