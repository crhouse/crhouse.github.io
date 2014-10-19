
var main = function(){
                var inverse =true;
                var open = false;

    //toggle navbar color when scrolldown
    $(window).scroll(function(){
       /* if ($(this).scrollTop() > 50) {
            $('#navbar').removeClass('navbar-inverse');
            $('#navbar').addClass('navbar-default');
        } else {
            $('#navbar').removeClass('navbar-default');
            $('#navbar').addClass('navbar-inverse');
        }*/

        if ($(this).scrollTop() > 50) { //scroll down pass
            if(inverse&!open){ //if not open, change from transparent to default
            $('#navbarinverse').animate({'opacity':0});
            $('#navbardefault').animate({'opacity':1},300);
            inverse=false;
            }
        } else {
            if(!inverse&!open ){
            $('#navbardefault').animate({'opacity':0});
            $('#navbarinverse').animate({'opacity':1},300);
            inverse=true;
            }
        }
    });
    
        //Toggle negative/default navbar color when clicked
    //TODO: change toggle speed
    $('.navbar-toggle').click(function(){
        
        //toggle by change opacity
        if($(window).scrollTop() > 50 ){
        }else{
            if(inverse){
                $('#navbarinverse').animate({'opacity':0});
                $('#navbardefault').animate({'opacity':1},100);
                inverse=false;
            }else{
                $('#navbardefault').animate({'opacity':0});
                $('#navbarinverse').animate({'opacity':1},300);
                inverse=true;
            }
        }
        open=!open;
        /*if($(window).scrollTop() > 50 ) {
            
        } else {
            if($('#navbar').hasClass('navbar-default')){
                
                setTimeout( function(){
                        $('#navbar').stop(true,true).toggleClass('navbar-inverse navbar-default');
                }, 500);
            } else {
                $('#navbar').toggleClass('navbar-inverse navbar-default',500);
            }
            //$('#navbarinverse').
        }*/
    });
    
};

$(document).ready(main);