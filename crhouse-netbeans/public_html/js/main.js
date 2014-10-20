
var main = function(){
    var bgtransparent=true;
    //toggle navbar color when scrolldown
    $(window).scroll(function(){
        if ($(this).scrollTop() < 60) {
            if(!bgtransparent) {
                $('#mainnav').animate({"background-color":"transparent"});
                bgtransparent=true;
            }
            
        } else {
            if(bgtransparent) {
                $('#mainnav').animate({"background-color":"white"});
                bgtransparent=false;
            }
        };
     
    });
    
    //toggle color when transparent navbar collapse
    $('.navbar-toggle').click(function(){
        
        if($(window).scrollTop() < 60 ){
            if(bgtransparent){
                $('#mainnav').animate({"background-color":"white"});
            }else{
                $('#mainnav').animate({"background-color":"transparent"});
            }
        }
        bgtransparent=!bgtransparent;
       
    });
    
};

$(document).ready(main);