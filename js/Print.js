

function showHeader(elem) {
    //elem.firstChild.style.display = "block" ;
    elem.firstElementChild.style.display = "block";
}

function hideHeader(elem) {
    elem.firstElementChild.style.display = "none";
}



var divMain, divMap, divMapPrint, divMapPreview, divLegend ;

var x  = document.getElementsByClassName("esri-legend__service");

divMap = document.getElementById("divMap");
divMapPrint = document.getElementById("divMapPrint");
divMapPreview = document.getElementById("mapPreview");
divMain = document.getElementById("main");
divLegend = x[0];



var mydiv3 = document.getElementById("mydiv3");
var mydiv2 = document.getElementById("mydiv2");
var mydiv1 = document.getElementById("mydiv1");
var mydiv = document.getElementById("mydiv");

var inputMapTitle = document.getElementById("mapPrintTitle");
var inputParagraphe = document.getElementById("paragraphe");


var PrintScreen = function () {
    moveNav();

    divMain.removeChild(divMap);

    title = document.createElement("h2");
    title.innerText = inputMapTitle.value ;

    paragraphe = document.createElement("p");
    paragraphe.innerText = inputParagraphe.value ;

    mydiv3.appendChild(divMap) ;
//    mydiv.appendChild(divLegend);
    mydiv2.appendChild(paragraphe);
    mydiv1.appendChild(title);

    //$(document).remove("#divMap");


    //divMap.style.display = "none";
    divMapPrint.style.display = "block";
};

var printMap = function(){
    document.getElementById("printButton").style.display = "none";
    document.getElementById("impression").style.display = "none";
    document.getElementById("help").style.display = "none";
    mydiv1.style.border = "";
    mydiv2.style.border = "";
    mydiv3.style.border = "";
    mydiv.style.border = "";
    window.print() ;
} ;

/*
$(document).ready(function()
    {
        interact('.resize-drag')
            .draggable({
                onmove: window.dragMoveListener,
                restrict: {
                    restriction: 'parent',
                    elementRect: {top: 0, left: 0, bottom: 1, right: 1}
                },
            })
            .resizable({
                // resize from all edges and corners
                edges: {left: true, right: true, bottom: true, top: true},

                // keep the edges inside the parent
                restrictEdges: {
                    outer: 'parent',
                    endOnly: true,
                },

                // minimum size
                restrictSize: {
                    min: {width: 100, height: 50},
                },

                inertia: true,
            })
            .on('resizemove', function (event) {
                var target = event.target,
                    x = (parseFloat(target.getAttribute('data-x')) || 0),
                    y = (parseFloat(target.getAttribute('data-y')) || 0);

                // update the element's style
                target.style.width = event.rect.width + 'px';
                target.style.height = event.rect.height + 'px';

                // translate when resizing from top or left edges
                x += event.deltaRect.left;
                y += event.deltaRect.top;

                target.style.webkitTransform = target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)';

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
                //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
            });



    }
);*/
/*

$( document ).ready(function() {

    interact('.resizable').resizable({
        inertia: true
    });
    interact('.draggable').draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of '
                + (Math.sqrt(event.dx * event.dx +
                event.dy * event.dy)|0) + 'px');
        }
    });

    function dragMoveListener (event) {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }
});*/