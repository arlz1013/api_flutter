function traerInformacion() {
    $.ajax(
        {
            url:"https://g2e09ee6deb0680-estudiantes.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/estudiantes/estudiantes",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuesta(respuesta.items);
            }
        }
    );
}
function pintarRespuesta(items1) {
    $("#resultado").empty();
    let items = items1.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1: 0);
    let myTable="<table class='responsive-table responsive-table-input-matrix'>";
    myTable += "<tr><th>id</th><th>Nombre</th><th>Carrera</th><th>Semestre</th></th><th>Promedio</th></tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].nombre+"</td>";
        myTable+="<td>"+items[i].carrera+"</td>";
        myTable+="<td>"+items[i].semestre+"</td>";
        myTable+="<td>"+items[i].promedio+"</td>";
        myTable+="<td><button onclick='borrarElmento("+items[i].id+")'style='background: brown; color: white; border-color: white; border-radius: 5px; border-style: dotted; cursor: help;'>Borrar</button></td>";
        myTable+="</tr>";
    }
    
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion() {
    let myData = {NOMBRE: $("#nombre").val(),CARRERA: $("#carrera").val(),SEMESTRE: $("#semestre").val(),PROMEDIO: $("#promedio").val()}
    let dataToSend = JSON.stringify(myData);
    console.log($("#nombre").val(), $("#carrera").val(), $("#semestre").val(), $("#promedio").val());
    console.log(dataToSend);
    $.ajax(
        {
            url:"https://g2e09ee6deb0680-estudiantes.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/estudiantes/estudiantes",
            type:"POST",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Insercion Exitosa");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

function editarInformacion() {
    let myData = {NOMBRE: $("#nombre").val(),CARRERA: $("#carrera").val(),SEMESTRE: $("#semestre").val(),PROMEDIO: $("#promedio").val(),ID: $("#id").val()}
    let dataToSend = JSON.stringify(myData);
    console.log(dataToSend);
    $.ajax(
        {
            url:"https://g2e09ee6deb0680-estudiantes.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/estudiantes/estudiantes",
            type:"PUT",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Actualizacion Exitosa");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

function borrarElmento(id1) {
    let myData = {ID: id1};
    let dataToSend = JSON.stringify(myData);
    
    $.ajax(
        {
            url:"https://g2e09ee6deb0680-estudiantes.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/estudiantes/estudiantes",
            type:"DELETE",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Borrado Exitoso");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}