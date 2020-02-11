$(document).ready(function () {

    $("#btn_hienthi").click(function () {

        var tendouong = $("#ten_nguoi").val()

        $("#ket_qua_ten_nguoi").text(tendouong)

    })

    $("#doimau_xinchao").click(function () {

        $("#xinchao_2").css({

            'color': 'blue',
            'background-color': 'white',
            'font-size': '30px'
        })
    })


    $("div h1").css({
        'color': 'blue',
        'background-color': 'red',
        'font-size': '20px'
    })

    //Bai 3
    // $("form").css({
    //     'display': 'none',
    // })

    //Bai 4
    $("#myselect").change(function () {
        var selectValue = $(this).val()
        console.log(selectValue)
    })

    //Bai 5
    $("input[name=sex][value=male]").prop('checked', true)

    // //Bai 7
    // var listItem = $("ul > li")
    // for (var i = 0; i < listItem.length; i++) {
    //     var text = listItem[i].innerText
    //     console.log(text)
    // }

    // //Bai 8
    // var listItem = $("ul > li")
    // for (var i = 0; i < listItem.length; i++) {
    //     var item = listItem[i]
    //     var text = item.innerText
    //     $(item).prepend("<b>" + i + "</b>: ")
    // }


    //Bai 11
    $("p").addClass("myclass")


    $("#bai11 > p").addClass("color-blue")

    //Bai 16
    var a = $(".divclass")
    console.log(a[0])


    //Bai 17
    $("#doi_mau").click(function () {
        $("p").addClass("color-blue")
    })

    //Bai 18
      $("p").click(function(){
        $("p").append("This is a click Event")
      })
      $("p").dblclick(function(){
        $("p").append("This is a double-click Event")
      })

      //Bai 19
      $("#field1").blur(function(){
            console.log("blur")
      })

    //   //Bai 21
    //   $("h1,h2,h3").click(function(){
    //       $("h1,h2,h3").addClass("display")
    //   })

      //Bai 20
      $("#input_text").keyup(function(){
        var input_text = $(this).val()
        $("#ketqua_text").html(input_text)
      })
    
      //Bai 22
      $("p").dblclick(function(){
          $("p").css({
            'background-color': 'red',
          })
      })

      //Bai 23
      $("#input_header").click(function(){
          $("p").append(" safgdfgdf")
      })

      //Bai 24, 39
      var a = $("ul > li")
      for(var i = 0; i < a.length; i++){
          var text = a[i].innerText
          console.log(text)
    }
    console.log(i)

      //Bai 25
      $("button").click(function(){
          $("p").css({
            'background-color': 'blue',
          })
      })

      //Bai 30
    //   $("h1").click(function(){
    //       console.log("h1")
    //   })
    //   $("h2").click(function(){
    //     console.log("h2")
    // })
    // $("p").click(function(){
    //     console.log("p")
    // })

    //Bai 32
    $("h1").click(function(){
        var a = $("body").append("<b>ban da click</b><br>")
        console.log(a)
    })

      //Bai 31
      var isFirstTime = true
      var firstTimeClick
      var secondTimeClick
      $("button").click(function(){
        if(isFirstTime){
            firstTimeClick = Date.now()
            isFirstTime = false
        }else{
            secondTimeClick = Date.now()
            isFirstTime = true
            var ketqua = secondTimeClick - firstTimeClick
            console.log(ketqua)
        }
      })

      //Bai 33
      $("#box").keypress(function(e){
          $("#textbox").val(e.keyCode)
      })

      //Bai 34
      $("input").focus(function(){
         var a =  $(this).next('span').css('display','inline').fadeOut(1200)
        console.log(a)
      })

      //Bai 37
      $("input").focus(function(){
         $("input").addClass("color-blue")
      })

    //   //Bai 40
    //   $("p").mouseup(function(){
    //       console.log("afasfasf")
    //   })
    //   $("p").mousedown(function(){
    //       console.log("vbcnbxxc")
    //   })

      //Bai 41
      $(function(){
        $(window).resize(function() {
            $("p").html($(window).width());
        });
    });
    
})




