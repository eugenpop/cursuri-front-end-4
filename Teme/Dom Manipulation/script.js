function onSucces(name) {
      if ( !name  || name !== ""){
        document.getElementById("succesMsg").innerHTML = "Succes " + name;
        console.log(name);
      }
    }
        
    $("#button").click(function(){
    $("p").show();
});