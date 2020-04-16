//  

var xmlhttp = new XMLHttpRequest();
var url = "https://next.json-generator.com/api/json/get/EkyZfHLU_";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myArr.forEach(element => {
            //"<br><div class='border-bottom border-secondary'><img src =' "+element.imagem+"' class = 'imagem-feed rounded' onclick='myFunction()'" + "<p id= 'texto-piu'>"+ element.nome+' ('+ element.usernae +")</p></div>"
            $("#feed").prepend("<br><div class='container' id='container'><div class='border-bottom border-secondary'><div class='image-wrapper float-left pr-3'><img src =' "+element.imagem+"' class = 'imagem-feed rounded' onclick='myFunction()'></div> <div class='single-post-content-wrapper'><strong class = 'nome-piu'>" + element.nome + "</strong><br><b class = 'user-piu'>"+  element.username +"</b> <br><br><p class = 'text-muted'>" + element.mensagem +  "</p></div> </div></div>")
            console.log(element.imagem)
        });
    }
};
xmlhttp.open("GET", url);
xmlhttp.send(); 


$('textarea[name="name"]').on('keyup keydown', updateCount);


function updateCount() {

    if ($(this).val().length > 140){
        $('#characters').text($(this).val().length+'/140');
        $('#characters').addClass("text-danger");
        $('#characters').removeClass("text-muted");
        $('#characters').append("<p class = 'text-danger' id='long-text-warning'>O piu não pode excerder 140 caracteres, somos raiz!</p>");;

    } 
    else{
    $('#characters').text($(this).val().length+'/140');
    $('#characters').addClass("text-muted");
    $('#characters').removeClass("text-danger");
    $("#long-text-warning").remove()
    }
}
$('#texto').val()
$('#enviar').on('click', 
    function () { 
        if ($('#texto').val().length <= 140 && $('#texto').val().length != ''){
        $("#feed").prepend( "<br><div class='container' id='container'><div class='border-bottom border-secondary'><div class='image-wrapper float-left pr-3'><img src ='img/eu.jpg' class = 'imagem-feed rounded' onclick='myFunction()'></div> <div class='single-post-content-wrapper'><strong class = 'nome-piu'> Ilton Andrew</strong><br><b class = 'user-piu'>@Gegê</b> <br><br><p class = 'text-muted'>" + $('#texto').val() +  "</p></div> </div></div>")
        $('#texto').val("");
        console.log();
    }
 })

// function myFunction(){
//     console.log(this)
// }
// function updateCount() {
//     if ($(this).val().length > 140){
//         $('#characters').text('O Piu não pode exceder 140 caracteres!');
//         $('#characters').addClass("text-danger");
//         $('#characters').removeClass("text-muted");

//     } 
//     else{
//     $('#characters').text($(this).val().length+'/140');
//     $('#characters').addClass("text-muted");
//     $('#characters').removeClass("text-danger");
//     }
// }

// $(document).ready(function() {
//     $.each(myData, function() {
//         $('<li>' + this.firstName + ' ' + this.lastName + '</li>').appendTo("#groups");
//     });
// });