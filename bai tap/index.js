$(document).ready(function(){
    $(".submit").click(function(){
        if($(".input").val() != ""){
            alert("Login successful")
        }
        else{
            alert("Login failed")
        }
    })
    $("#mua").click(function(){
        alert("You made a successful purchase")
    })


    $.ajax({
        url:"https://jasonbase.com/things/4KqK.json",
        method:"GET"
    }).done(function(respone){
        var listNews = respone.list_news

        for(var i = 0; i < listNews.length; i++){
            var news = listNews[i]

            var stringHtml = `<a class="phone-item col-12 col-sm-6 col-lg-3" href=""`
            stringHtml += `img src="${news.image_url}" alt=""`
            stringHtml += `<p>${news.title}</p>`
            stringHtml += `<p>${news.price}</p>`
            stringHtml += `</a>`

            $(".content-top > .row").append(stringHtml)
        }
    })
})