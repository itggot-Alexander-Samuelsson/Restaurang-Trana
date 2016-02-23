function interactMenu(){
    var clickedID = this.id;
    $("#flärps").children().each(
        function(){
            if(this.id != clickedID){
                $(this).css("opacity","0.5");
                $("#"+this.id+"div").css("opacity","0");
            }else{
                $(this).css("opacity", "1");
                $("#"+this.id+"div").css("opacity","1");
            }

        }
    );
    //$( "#menu_general" ).hide();
}

$().ready(function(){
    $("#flärps li").click( interactMenu);
    $("#flärps li").tap( interactMenu);
});