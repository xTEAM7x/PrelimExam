$(document).ready(function() { 
    $("h5").click(function() { 
        $("html, body").animate({ 
            scrollTop: $( 
              'html, body').get(0).scrollHeight 
        }, 200); 
    }); 
}); 