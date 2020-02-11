$(document).ready(function() {
    
    var id = getParameterByKey("id")
    
    $.ajax({
        url: "https://www.jasonbase.com/things/XMXA.json",
        method: "GET"
    }).done(function(response) {
        var listNews = response.list_news

        for (var i=0; i<listNews.length; i++) {
            var news = listNews[i]

            if (news.id == id) {
                $("#news-title").text(news.title)
            }
        }
    })



    
})



function getParameterByKey(key) {
    let href = window.location.href

    var paramsString = href.split("?")[1]

    var listParams = paramsString.split("&")
    for(var i=0; i<listParams.length; i++) {
        var param = listParams[i].split('=')
        if (param[0] == key) {
            return param[1]
        }
    }
}
