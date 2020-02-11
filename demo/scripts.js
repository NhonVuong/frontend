$(document).ready(function() {

    $.ajax({
        url: "https://www.jasonbase.com/things/XMXA.json",
        method: "GET"
    }).done(function(response) {
        var listNews = response.list_news
        console.log('ahih')
        for(var i=0; i<listNews.length; i++) {
            var news = listNews[i]

            var stringHtml = `<a class="car-item col-6 col-sm-12 col-md-3" href="details.html?id=${news.id}">`
            stringHtml += `<img src="${news.image_url}" alt="">`
            stringHtml += `<h4>${news.title}</h4>`
            stringHtml += `<p>${news.author} - ${news.date_time}</p>`
            stringHtml += `</a>`

            $("#main-content-center > .row").append(stringHtml)
        }
    })

})
