// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

function crearUrlAmigable(str){
  // Reemplaza los caracteres especiales | simbolos con un espacio
  str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();

  // Corta los espacion al inicio y al final del string
  str = str.replace(/^\s+|\s+$/gm, '');

  //Reemplaza el espacio con guion
   str = str.replace(/^\s+|\s+$/gm, '');

   var input = document.getElementById('url');
    input.value = str;
}

function cargarImagen() {

    var name = document.getElementById('img');
    //alert('Nombre: ' + name.files.item(0).name);
    //alert('Tamaño: ' + name.files.item(0).size);
    //alert('Tipo: ' + name.files.item(0).type)

    nas = name.files.item(0).name

    var ini = document.getElementById('img');

    ini.value = nas;

}

//function ProductsView() {
$(function() {
    $('.show-btn').on('click', function () {
        alert("Esta es una prueba");
    });
});

// $(function() {
//     var form_submit = false;
//
//     //var valid = true;
//     function validate_form(id) {
//         var valid = true;
//         if (validate_blank($("#product_name")) == false)
//             valid = false;
//     }
//
//     $("#new_product").submit(function() {
//         alert (form_submit)
//         if (form_submit) {
//             return true;
//         } else {
//             validate_form($(this).attr("id"));
//             return false;
//         }
//     });
// });


function validate_blank(element) {
    var id = element.attr("id");

    $("#span_red" + id).remove();

    if (element.val() == "") {
        element.addClass("error_text_fields");
        element.after("<span class='span_red' id='span_red" + id + "'>No puede ser vacío</span>");
        return false;
    } else {
        element.removeClass("error_text_fields");
        return true;
    }
}
