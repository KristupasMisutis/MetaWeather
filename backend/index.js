


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=456b66a4fad377aa5c42085e730c5fff", function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon+ ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    var name = data.name;
    var speed = data.wind.speed;
    
    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
    $(".name").append(name);
    $(".speed").append(speed);
}
);

$(document).ready(function() {
    $('.patinka').append(patinka);
});
$(document).ready(function(){
    $("#patinkamygtukas").click(function(){
      patinka++;
      $("#patinkamygtukas").hide();
      $('.patinka').empty();
      $('.patinka').append(patinka);
    });

    $(document).ready(function() {
        $('.nepatinka').append(nepatinka);
    });
    $(document).ready(function(){
        $("#nepatinkamygtukas").click(function(){
          nepatinka++;
          $("#nepatinkamygtukas").hide();
          $('.nepatinka').empty();
          $('.nepatinka').append(nepatinka);
        
});
});
});

