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
}

$().ready(function(){
    interactMenu()
    $("#fooddiv").css("opacity", "1");
    $("#food").css("opacity", "1");
    $("#flärps li").click( interactMenu);
    $("#flärps li").tap( interactMenu);
});