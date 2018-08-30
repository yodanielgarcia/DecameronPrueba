var x;
x = $(document);
y = $(window);


x.ready(inicializarEventosDocument);
y.load(inicializarEventosWindow);

function inicializarEventosDocument() {
    logOut();
}

function inicializarEventosWindow() {

}


function logOut() {
    var datos = "action=logout";
    window.location.assign("index.html");
}