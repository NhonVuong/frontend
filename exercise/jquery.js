$(document).ready(function(){
    $("#gui").click(function(){
        alert($("#ngaysinh").val(),$("#thangsinh").val(),$("#namsinh").val())
        alert(2018 - $("#namsinh").val())
    })
})