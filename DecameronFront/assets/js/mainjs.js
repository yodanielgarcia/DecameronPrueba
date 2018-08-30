var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    loadUsers();
}

let headers = { 'Authorization': 'Bearer ' + getToken() }

let params = {
    method: typeMethod,
    cache: 'default',
    mode: 'cors'
}

params.headers = headers

function loadUsers() {
    $('#contenido').html("");
    $.post("ingregarHoteles.html", function(response) {
        $('#contenido').html(response);
        $('#contenido').fadeIn();
    });
}

function loadproces() {
    $('#contenido').html("");
    $.post("ingregarHoteles.html", function(response) {
        $('#contenido').html(response);
        $('#contenido').fadeIn();
    });
}