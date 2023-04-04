// add new todo 
$('input').keypress(function(e){
    if(e.which===13){
        const todoText=$(this).val();
        $('#list').append(`<li><span>x</span> ${todoText}</li>`);
        $(this).val("");
    }
});

// mark completed
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
})


// fade and delete
$('ul').on('click','span',function(event){
    event.stopPropagation();                     // to stop event bubbling
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    });
    
})


$('#plus').click(function(){
    $('input').fadeToggle();
})
