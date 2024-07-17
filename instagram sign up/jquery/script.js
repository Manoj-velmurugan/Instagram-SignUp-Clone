$(document).ready(function(){
    $('#mobile').blur(function(){
        var userInput = $(this).val();
        if(userInput.length < 4){
            $('.error').show();
        }
    });
});