$(document).ready(function(){

    
    $("img.picB").click(function(){
        $("img.picB").animate({height: "300px"});
    });
    

    $("img.picB").fadeOut(500);
    $("img.picB").fadeIn(500);
   

    $("img.picD").fadeOut(500);
    $("img.picD").fadeIn(500);


    var repeticiones_Yuda = 0;
    var repeticiones_Oscar = 0;
   

    $("#perfil_yuda").click(function(){

        repeticiones_Yuda++;

        if(repeticiones_Yuda % 2){
            $("#imgyuda").fadeOut(500, function(){

                $("#info_yuda").fadeIn(500, function(){

                    $("#info_yuda").css("display", "block");

                });

            });
        }else{
            $("#info_yuda").fadeOut(500, function(){

                $("#imgyuda").fadeIn(500);

            });
        }

    });

 

    $("#perfil_harold").click(function(){

        repeticiones_Oscar++;

        if(repeticiones_Oscar % 2){
            $("#imgoscar").fadeOut(500, function(){

                $("#info_harold").fadeIn(500, function(){

                    $("#info_harold").css("display", "block");

                });

            });
        }else{
            $("#info_harold").fadeOut(500, function(){

                $("#imgoscar").fadeIn(500);

            });
        }

    });

});
