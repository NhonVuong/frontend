$(document).ready(function(){
    $(".thongtin").click(function(){
        $("footer").slideToggle("slow");
    });
});



function dangky() {
    var dky = document.getElementById("trangdangky");
    var dnhap = document.getElementById("trangdangnhap");
    dnhap.style.display = "none";
    dky.style.display = "block";

}
function dangnhap() {
    var dky = document.getElementById("trangdangky");
    var dnhap = document.getElementById("trangdangnhap");
    dky.style.display = "none";
    dnhap.style.display = "block";
}
// function formdangky() {
//     var inputTen = document.form1.tendangnhap;
//     var thongbao = document.getElementById("thongbao");
//     var giaTriTen = inputTen.value;
//     if (giaTriTen == "") {
//         thongbao.style.color = "red";
//         thongbao.innerHTML = "hãy nhập đầy dủ thông tin"
//         return false;
//     } else {
//         alert("bạn đã nhập thành công");
//         return true;
//     }
// }

function kiemtra() {
    var thongbao = document.getElementById("thongbao");
    var nghenghiep = document.getElementById("nghenghiep");
    if (form1.tendangnhap.value == "" || form1.matkhau.value == ""
        || form1.email.value == "") {
        form1.tendangnhap.style.border = "1px solid red";
        form1.matkhau.style.border = "1px solid red";
        form1.email.style.border = "1px solid red";
        thongbao.style.display = "block";
        thongbao.innerHTML = "Bạn cần nhập dữ liệu đầy đủ cho các trường dữ liệu";
        thongbao.style.color = "red";
        return false;
    } else if (nghenghiep.selectedIndex == 0) {
        thongbao.style.display = "block";
        thongbao.innerHTML = "Bạn phải chọn nghề nghiệp";
        thongbao.style.color = "red";
        return false;
    } else {
        thongbao.style.display = "none";
        return true;
    }
}

function kiemtraEmail(idTag) {
    var inputTag = document.getElementById(idTag);
    var thongbao = document.getElementById("thongbao");
    var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    if (inputTag.value.match(email)) {
        thongbao.style.display = "none";
        alert("Bạn đã đăng ký thành công");
        return true;
    } else {
        thongbao.style.display = "block";
        thongbao.innerHTML = "HÃY NHẬP EMAIL HỢP LỆ ";
        //theP.style.color = "red";
        return false;
    }
}

function kiemtrahople() {
    return kiemtra() && kiemtraEmail("email");
}

function kiemtradangnhap (){
    var thongbao1 = document.getElementById("thongbao1");
    if(form2.tendangnhap.value == ""||form2.matkhau.value==""){
        form2.tendangnhap.style.border = "1px solid red";
        form2.matkhau.style.border = "1px solid red";
        thongbao1.innerHTML = "Bạn phải đăng nhập đầy đủ"
        thongbao1.style.color = "red";
        return false;
    }else{
        thongbao1.style.display = "none";
        alert("Bạn đã đăng nhập thành công");
        return true;
    }
}

function kiemtrasearch(){
    var timkiem = document.getElementById("timkiem");
    if(form3.search.value ==""){
        timkiem.innerHTML="Bạn phải nhập vào ô tìm kiếm"
        timkiem.style.color = "red";
        return false;
    }else{
        timkiem.style.display = "none";
        return true;
    }
}

// function kiemtratimkiem() {
//     var timkiem = document.getElementById("timkiem");
//     timkiem.style.display = "none";
//     return true;
// }

