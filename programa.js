
$('#boton-pedir-uno').click(function(){
  var codigo = $('#codigo').val();
  $.get("https://jsonplaceholder.typicode.com/posts/" + codigo, function(dato, status){
    $('#titulo-uno').text(dato.title);
  });

});


console.log(codigo);

$('#boton-enviar').click(function(){

  $.get("https://jsonplaceholder.typicode.com/posts", function(datos, status){
    $.each(datos, function (ind, elem) {
      console.log('¡Hola :'+ elem.id );
      $('.dato-tabla').append("<tr><td>" + elem.id + "</td><td>" + elem.title + "</td><td>"+ elem.body + "</td></tr>");
    });

  });
});
