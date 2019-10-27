$(function(){



  CargarCiudades();
  CargarTipo();
});


$('#mostrarTodos').click(MostrarTodos);

function MostrarTodos() {
    $.ajax({
        url: "php/leer.php",
        type: "GET",
        success: function(response) {
            response = JSON.parse(response);
            $.each(response, function(i, data) {
                $(".colContenido").append(`
                  <div  class="tarjetas card horizontal ">
                    <di class="row">
                       <div class="col m4">
                            <img src="img/home.jpg" width="100%">
                       </div>
                        <div class="col m4">
                                <p>
                                  Ciudad: ${data.Ciudad} <br>
                                  Codigo Postal: ${data.Codigo_Postal} <br>
                                  Precio: ${data.Precio} <br>
                                  Telefono: ${data.Telefono} <br>
                                    Tipo: ${data.Tipo}<br>
                                  </p>
                            </div>

                      </div>
                  </div>
                  </div>
                `)
            });
        }
    });
}



function CargarCiudades(){
  var vectorFiltrado=[];
  $.ajax({
      url: "php/leer.php",
      type: "GET",
      success: function(response) {
          response = JSON.parse(response);
          for(var i = 0; i < response.length; i++) {
            console.log(  response[i].Ciudad);
            if(!vectorFiltrado.includes(response[i].Ciudad)) {
                vectorFiltrado.push(response[i].Ciudad);
            }
          }
          for(var i = 0; i < vectorFiltrado.length; i++) {
                $('#selectCiudad').append(new Option(vectorFiltrado[i],i));
          }
          $('#selectCiudad').material_select();

      }
  });
}


function CargarTipo(){
  var vectorFiltrado=[];
  $.ajax({
      url: "php/leer.php",
      type: "GET",
      success: function(response) {
          response = JSON.parse(response);
          for(var i = 0; i < response.length; i++) {
            console.log(  response[i].Tipo);
            if(!vectorFiltrado.includes(response[i].Tipo)) {
                vectorFiltrado.push(response[i].Tipo);
            }
          }
          for(var i = 0; i < vectorFiltrado.length; i++) {
                $('#selectTipo').append(new Option(vectorFiltrado[i],i));
          }
          $('#selectTipo').material_select();

      }
  });
}




function Buscar(){
  var slider = $("#rangoPrecio").data("ionRangeSlider");
  var from = slider.result.from;
  var to = slider.result.to;
  var city=$('#selectCiudad option:selected').text();
  var type=$('#selectTipo option:selected').text();
  $(".tarjetas").remove();


var resultString = "Result: desde: " + from + " hasta: " + to+" ciudad: "+city+" tipo: "+type;
console.log(resultString);

$.ajax({
    url: "php/leer.php",
    type: "GET",
    success: function(response) {
        response = JSON.parse(response);
        $.each(response, function(i, data) {
          var num=data.Precio;
          num=num.replace('$','');
          num=num.replace(',','');
          if(parseFloat(num)>=parseFloat(from) && parseFloat(num)<=parseFloat(to) && data.Ciudad.valueOf()==city && data.Tipo.valueOf()==type){
                $(".colContenido").append(`
                  <div class="tarjetas card horizontal ">
                    <di class="row">
                       <div class="col m4">
                            <img src="img/home.jpg" width="100%" >
                       </div>
                        <div class="col m4">
                                <p>
                                  Ciudad: ${data.Ciudad} <br>
                                  Codigo Postal: ${data.Codigo_Postal} <br>
                                  Precio: ${data.Precio} <br>
                                  Telefono: ${data.Telefono} <br>
                                    Tipo: ${data.Tipo}<br>
                                  </p>
                            </div>

                      </div>
                  </div>
                  </div>
                `)
            }
        });
    }
});




}
