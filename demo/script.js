
var a = 1
var b = -3
var c = 2
var delta = b * b - 4 * a * c
var sqrt = Math.sqrt(delta)
if (delta < 0) {
    console.log("pt vo nghiem")
}
else if (delta = 0) {
    console.log("phuong trinh co nghiem kep x1=x2: " + (-b / (2 * a)))
}
else {
    console.log("nghiem x1= " + ((-b + sqrt) / 2 * a))
    console.log("nghiem x2= " + ((-b - sqrt) / 2 * a))
}

console.log("----------------------------------")



console.log("----------------------------------")
var diem = 8
if (diem < 5) {
    console.log("loai yeu")
}
else if (diem < 8) {
    console.log("loai kha")
}
else {
    console.log("loai gioi")
}
console.log("----------------------------------")

var dem
for (dem = 1; dem <= 100; dem++) {
    if (dem % 3 != 0 && dem % 5 != 0) {
        console.log(dem)
    }
    if (dem % 3 == 0) {
        console.log(dem + " Fizz")
    }
    if (dem % 5 == 0) {
        console.log(dem + " Buzz")
    }
    if (dem % 3 == 0 && dem % 5 == 0) {
        console.log(dem + " FizzBuzz")
    }
}
console.log("----------------------------------")

// for(var i = 0; i < 5; i++){
//     for(var j =0 ; j <= i; j ++){
//         console.log("*" + " ")
//         console.log
//     }
// }


function inSo() {
    var text = document.getElementById("input_so").value
    var tong = 0
    for (var i = 1; i <= text; i++) {
        tong = tong + i
    }
    document.getElementById("p_ketqua").innerText = "Ket qua bai nay la: " + tong
}

console.log("------------------------------------")
// console.log(tong)


console.log("------------------------------------")

var n = 100
var tong = 0
var i = 1
while (i <= n) {
    tong = tong + i
    i++
}
console.log(tong)
console.log("------------------------------------")

var n = 100
var tong = 0
var i = 1
do {
    tong = tong + i
    i++
}
while (i <= n)
console.log(tong)
console.log("------------------------------------")

var n = 15
var ketqua

for (var i = 2; i < n; i++) {
    if (n % i == 0) {
        kiemtra = "khong la so nguyen to"
        break
    }
    else {
        kiemtra = "la so nguyen to"
    }
}
console.log(kiemtra)
console.log("------------------------------------")

var n = 9
for (var i = 2; i <= n; i++) {
    for (var j = 1; j <= 10; j++) {
        var a = i * j
        console.log(i + " * " + j + " = " + a)
    }
}
console.log("------------------------------------")

var h = 4
var s = 1
for (var i = 0; i < h; i++) {
    s = s * 5
}
console.log(s)
console.log("------------------------------------")

var h = 4
for (var i = 0; i < h; i++) {
    var star = 1 + 2 * i;
    var space = h - 1 - i;
    var row_string = ""
    for (var k = 0; k < space; k++) {
        row_string += " "
    }
    for (var j = 0; j < star; j++) {
        row_string += "*"
    }
    console.log(row_string);
}

console.log("----------------------------------")

var h = 5
for (var i = 0; i < h; i++) {
    var star = 1 + i;
    var row = ""
    for (var j = 0; j < star; j++) {
        row += "* "
    }
    console.log(row)
}

console.log("------------------------------------")

var n = 10000
var tong = 0
for (var i = 0; i <= n; i++) {
    tong += i
    if (tong > 10000) {
        console.log(i)
        break
    }
}
console.log("------------------------------------")

var n = 0
while (true) {
    var s = 0
    for (var i = 0; i <= n; i++) {
        s += i
    }
    if (s > 10000) {
        console.log(n)
        break
    }
    n++
}


console.log("----------------------------------")

function inChieuCao() {
    var text = document.getElementById("input_chieucao").value
    console.log(text)
}

console.log("----------------------------------")

function kiemTraSoNguyenTo(so) {
    if (so == 2 || so == 3) {
        return true
    }
    for (var i = 2; i < so; i++) {
        if (so % i == 0) {
            return false
        }
    }
    return true
}


console.log("----------------------------------")

var tong = 0
for (i = 1; i <= 100; i++) {
    if (kiemTraSoNguyenTo(i) == true)
        tong += i
}
console.log(tong)
console.log("----------------------------------")
var so1 = 56
var so2 = 72

while (so1 != so2) {
    if (so1 > so2) {
        so1 = so1 - so2
    }
    else {
        so2 = so2 - so1
    }
}
console.log(so1)

console.log("----------------------------------------")

var array = [31, 3, 5, 99, 123, 22, 33, 11, 71]
var dem = 0
for (var i = 0; i < array.length; i++) {
    if (kiemTraSoNguyenTo(array[i])) {
        console.log(array[i])
        dem++
    }
}
console.log("tat ca cac so nguyen to: " + dem)

console.log("----------------------------------")

var string = "Toi la lap trinh vien"
var dem = 0
for (var i = 0; i < string.length; i++) {
    if (string[i] == " ") {
        dem++
    }
}
console.log(dem)

console.log("----------------------------------")

//Bai 33
var chuoi = "toi la lap trinh vien"
var chuoiKq = ""

for (var i = 0; i < chuoi.length; i++) {
    if (chuoi[i - 1] == " " || i == 0) {
        chuoiKq += chuoi[i].toUpperCase()
    } else {
        chuoiKq += chuoi[i]
    }
}
console.log("ket qua la: " + chuoiKq)

console.log("----------------------------------")



console.log("----------------------------------")

var mangDienThoai = ["iPhone X", "Nokia", "Samsung"]

// var chuoiDienThoai = mangDienThoai.join(" + ")
// console.log(chuoiDienThoai)
// var arrayTest = chuoiDienThoai.split("aha")
// console.log(arrayTest)
loadData()

function loadData() {
    var ulDienThoai = document.getElementById("danhsach_dienthoai")
    ulDienThoai.innerHTML = ""
    for (var i = 0; i < mangDienThoai.length; i++) {
        ulDienThoai.innerHTML +="<li>"+ mangDienThoai[i] +"</li>"
    }
}

function themDienThoai() {
    var tenDT = document.getElementById("input_dienthoai").value
    mangDienThoai.push(tenDT)
    loadData()

}

console.log("----------------------")
var currentDate = new Date()
console.log(currentDate) 

console.log("----------------------")

function inPhepNhan() {
    var so1 = document.getElementById("input_number1").value
    var so2 = document.getElementById("input_number2").value
    var so_nhan = so1 * so2

    document.getElementById("ketqua").innerText = "The Result Is: " + so_nhan
}
function inPhepChia() {
    var so1 = document.getElementById("input_number1").value
    var so2 = document.getElementById("input_number2").value
    var so_chia = so1 / so2

    document.getElementById("ketqua").innerText = "The Result Is: " + so_chia
}


console.log("----------------------")

function inDoC() {
    var doF = document.getElementById("input_doF").value

    in_do_C = (doF - 32) / 1.8
    document.getElementById("Ketqua").innerText = "ket qua do C: " + in_do_C
}

function inDoF() {
    var doC = document.getElementById("input_doC").value

    in_do_F = (doC * 1.8) + 32
    document.getElementById("Ketqua").innerText = "ket qua do F: " + in_do_F
}

//Bai12

function Nhap_so(){
    var chuoiSo = document.getElementById("nhap_so").value
    var mang_so = chuoiSo.split(" ")
    var so_x 
    var so_y
    var bien = 0
    for(var i = 0; i < mang_so.length; i++){
        var so = parseInt(mang_so[i])
        so_y = so
        if(so_x < so){
            bien = so_x
            so_x = so
            so = bien
        }
        console.log(so)
    document.getElementById("ketquagiamdan").innerText += so 
    }
}
// Bai 13
function NhapSo() {

    var chuoiNhapTuInput = document.getElementById("input_nhapso").value
    var mangSo = chuoiNhapTuInput.split(" ")

    var max = 0
    for(var i=0; i<mangSo.length; i++) {
        var soThuI = parseInt(mangSo[i])
        if (max < soThuI) {
            max = soThuI
        }
    }
    document.getElementById("in_ket_qua").innerText = "ket qua la: " + max
}
console.log("----------------------------------")
var so1 = 10
var so2 = 12
var so3 = 9
var bien = 0

if (so1 < so2) {
    bien = so1
    so1 = so2
    so2 = bien
}
if (so1 < so3) {
    bien = so1
    so1 = so3
    so3 = bien
}
if (so2 < so3) {
    bien = so2
    so2 = so3
    so3 = bien
}
console.log(so1, so2, so3)
console.log("----------------------------------")

//Bai 14
function nhapSo(){
    var so = document.getElementById("socannhap").value
    var n
    if(so % 2 == 0){
        document.getElementById("ket_qua").innerText="ket qua: la so chan"
    }
    else{
        document.getElementById("ket_qua").innerText="ket qua: la so le"
    }
}

console.log("----------------------------------")

//Bai 15
function nhapDiem(){
    var diem = document.getElementById("hocsinh").value
    if(diem < 5){
        document.getElementById("kiemtra").innerText="xep loai yeu"
    }
    else if(diem < 8){
        document.getElementById("kiemtra").innerText="xep loai kha"
    }
    else{
        document.getElementById("kiemtra").innerText="xep loai gioi"
    }
}

console.log("----------------------------------")

//Bai 16
function Kiemtra(){
    var so = document.getElementById("nhapso").value
    if(so % 3 == 0){
        document.getElementById("Ket_qua").innerText="Fizz"
    }
    if(so % 5 == 0){
        document.getElementById("Ket_qua").innerText="Buzz"
    }
    if(so % 3 == 0 && so % 5 == 0){
        document.getElementById("Ket_qua").innerText="FizzBuzz"
    }
    if(so % 3 != 0 && so % 5 != 0){
        document.getElementById("Ket_qua").innerText="khong thanh cong"
    }
}
console.log("----------------------------------")

//Bai 17
function Canh(){
    var h = document.getElementById("nhapcanh").value
    for (var i = 0; i < h; i++) {
        var star = 1 + i;
        var row = ""
        for (var j = 0; j < star; j++) {
            row += "* "
        }
        document.getElementById("ket_Qua").innerText += row+"\n"
    }
}

//Bai 34

function timChuoiDaiNhat(){
    var inputChuoi = document.getElementById("input_chuoi") 
    var chuoi = inputChuoi.value

    var mangTu = chuoi.split(" ")
    var tuDaiNhat = ""
    for(var i = 0; i< mangTu.length; i++){
        if(tuDaiNhat.length < mangTu[i].length){
            tuDaiNhat = mangTu[i]
        }
    }
    // console.log(tuDaiNhat)
    document.getElementById("chuoi").innerText = "chuoi dai nhat: "+tuDaiNhat
}

//Bai 35
function nguyenam(){
    var chuoi = document.getElementById("timnguyenam").value
    var dem = 0
    for(var i = 0; i < chuoi.length; i++){
        if(chuoi[i]=='u'||chuoi[i]=='e'||chuoi[i]=='o'||chuoi[i]=='a'||chuoi[i]=='i'){
             console.log(chuoi[i])
            // document.getElementById("nguyenam").innerText+=chuoi[i]
            dem++
        } 
    }
    document.getElementById("nguyenam").innerText="ketqua: "+ dem
}

//Bai 38
function mangcacso(){
    var so = document.getElementById("Timso").value
    var soInput = so.split(" ")
    soInput.sort(function(a, b){return a - b})
    var nhonhi = soInput[1]
    var lonnhi = soInput[soInput.length - 2]

    document.getElementById("demo").innerText ="ket qua: "+ nhonhi +" & "+ lonnhi
}

//Bai 39
function nhapso(){
    var n = document.getElementById("timso").value
    for(var i = 0; i < n; i++){
        if(n % i == 0){
            document.getElementById("inso").innerText += " " +i
        }
    }
}

//Bai 46
function Socannhap(){
    var a = document.getElementById("input_socannhap").value
    var b = a.split("")
    for(var i = 0; i < b.length; i++){
        // var c = parseInt(b[i])
        if(b[i] % 2 == 0){
            console.log("-"+b[i])
            document.getElementById("hienthi").innerText +="-"+ b[i]
        }
    }
}

console.log("-----------bai 45-----------")
myColor = ["Red", "Green", "White", "Black"]
var a = myColor.join(" + ")
console.log(a)

//Bai 47
function sapxep(){
    var arr1 = document.getElementById("input_Socannhap").value
    var So = arr1.split(" ")
    So.sort(function(a, b){return a-b})

    document.getElementById("so").innerText = "ket qua: "+So
}   



