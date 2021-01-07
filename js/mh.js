function vfd(formd){
        var f =document.getElementById(formd);
        f.style.display="block";

        

      }

      function cerravfd(formd){
       var f =document.getElementById(formd);
        f.style.display="none";
      }



function fs(pauvi,myModal,img,n){
            
            var pav = document.getElementById(pauvi);
            pav.play();

             var modal = document.getElementById(myModal);
             
             // Get the image and insert it inside the modal - use its "alt" text as a caption
             //var img = document.getElementById('myImg');
             var modalImg = document.getElementById(img);
             var pav = document.getElementById(pauvi);
            modal.style.display = "block";
            
            

             // Get the <span> element that closes the modal
             var span = document.getElementsByClassName("close")[n];

             // When the user clicks on <span> (x), close the modal
             span.onclick = function() { 
             modal.style.display = "none";
             pav.pause();
             }

          }






          function ocultt(){
           var ocu = document.getElementById("oc1");
           ocu.style.display="none";
          }






var op=0;
          var dec=0;
          var vb1=0;
          var vb2=0;

          function mg(){
            
            if(op==0){
            document.getElementById("meg").style.background="darkred";
            document.getElementById("meg").style.color="#15f4ee";
            document.getElementById("meg").style.border="1px solid white";
            op=1;
            
            document.getElementById("nomeg").style.background="black";
              document.getElementById("nomeg").style.color="white";
              document.getElementById("nomeg").style.border="1px solid #15f4ee";
              dec=0;
       
            } else{
              document.getElementById("meg").style.background="black";
              document.getElementById("meg").style.color="white";
              document.getElementById("meg").style.border="1px solid #15f4ee";
              op=0;
 
            }
                 localStorage.setItem("v1",op);

                 localStorage.setItem("v2",dec);


          }


          
          function nmg(){
            
            if(dec==0){
            document.getElementById("nomeg").style.background="darkred";
            document.getElementById("nomeg").style.color="#15f4ee";
            document.getElementById("nomeg").style.border="1px solid white";
            dec=1;

            document.getElementById("meg").style.background="black";
              document.getElementById("meg").style.color="white";
              document.getElementById("meg").style.border="1px solid #15f4ee";
              op=0;

            }
            else{
              document.getElementById("nomeg").style.background="black";
              document.getElementById("nomeg").style.color="white";
              document.getElementById("nomeg").style.border="1px solid #15f4ee";
              dec=0;
            }
           
                 localStorage.setItem("v1",op);

                 localStorage.setItem("v2",dec);

          }




setTimeout(trost,0);
          function trost(){

           if(localStorage.getItem("v1")==1){
          	document.getElementById("meg").style.background="darkred";
            document.getElementById("meg").style.color="#15f4ee";
            document.getElementById("meg").style.border="1px solid white";
          }

          if(localStorage.getItem("v2")==1){
          	document.getElementById("nomeg").style.background="darkred";
            document.getElementById("nomeg").style.color="#15f4ee";
            document.getElementById("nomeg").style.border="1px solid white";
          }


          }

           

          function peli(){

            document.getElementById("we are who we are").style.display="none";
            document.getElementById("too old to die young").style.display="none";
            document.getElementById("borat 2").style.display="none";
            document.getElementById("enemy").style.display="none";
            document.getElementById("apocalypse now").style.display="none";
            document.getElementById("the social network").style.display="none";
            document.getElementById("retrato de una mujer en llamas").style.display="none";
            document.getElementById("once upon a time").style.display="none";
            document.getElementById("la balada de buster scruggs").style.display="none";
            document.getElementById("lady bird").style.display="none";
            document.getElementById("hereditary").style.display="none";
            document.getElementById("midsommar").style.display="none";
            document.getElementById("the fury of a patient man").style.display="none";
            document.getElementById("the arrival").style.display="none";
            document.getElementById("blade runner 2049").style.display="none";
            document.getElementById("cria cuervos").style.display="none";
            document.getElementById("isla de perros").style.display="none";
            document.getElementById("strangers on train").style.display="none";

            var x = document.getElementById("formu1");
            
            var i;
            for (i = 0; i < x.length ;i++) {
            text = x.elements[i].value ;
            }
            var tre =document.getElementById(text);
             tre.style.display="block";
             
          }

          function home(){
            document.getElementById("we are who we are").style.display="block";
            document.getElementById("too old to die young").style.display="block";
            document.getElementById("borat 2").style.display="block";
            document.getElementById("enemy").style.display="block";
            document.getElementById("apocalypse now").style.display="block";
            document.getElementById("the social network").style.display="block";
            document.getElementById("retrato de una mujer en llamas").style.display="block";
            document.getElementById("once upon a time").style.display="block";
            document.getElementById("la balada de buster scruggs").style.display="block";
            document.getElementById("lady bird").style.display="block";
            document.getElementById("hereditary").style.display="block";
            document.getElementById("midsommar").style.display="block";
            document.getElementById("the fury of a patient man").style.display="block";
            document.getElementById("the arrival").style.display="block";
            document.getElementById("blade runner 2049").style.display="block";
            document.getElementById("cria cuervos").style.display="block";
            document.getElementById("isla de perros").style.display="block";
            document.getElementById("strangers on train").style.display="block";
          }

          function desap(){
            document.getElementById("we are who we are").style.display="none";
            document.getElementById("too old to die young").style.display="none";
            document.getElementById("borat 2").style.display="none";
            document.getElementById("enemy").style.display="none";
            document.getElementById("apocalypse now").style.display="none";
            document.getElementById("the social network").style.display="none";
            document.getElementById("retrato de una mujer en llamas").style.display="none";
            document.getElementById("once upon a time").style.display="none";
            document.getElementById("la balada de buster scruggs").style.display="none";
            document.getElementById("lady bird").style.display="none";
            document.getElementById("hereditary").style.display="none";
            document.getElementById("midsommar").style.display="none";
            document.getElementById("the fury of a patient man").style.display="none";
            document.getElementById("the arrival").style.display="none";
            document.getElementById("blade runner 2049").style.display="none";
            document.getElementById("cria cuervos").style.display="none";
            document.getElementById("isla de perros").style.display="none";
            document.getElementById("strangers on train").style.display="none";
          }

          function nuev(){
            desap();

            document.getElementById("the fury of a patient man").style.display="block";
            document.getElementById("the arrival").style.display="block";
            document.getElementById("blade runner 2049").style.display="block";
            document.getElementById("cria cuervos").style.display="block";
            document.getElementById("isla de perros").style.display="block";
            document.getElementById("strangers on train").style.display="block";

           
          }


          function recom(){
            desap();

            document.getElementById("apocalypse now").style.display="block";
            document.getElementById("the social network").style.display="block";
            document.getElementById("retrato de una mujer en llamas").style.display="block";
            document.getElementById("once upon a time").style.display="block";
            document.getElementById("la balada de buster scruggs").style.display="block";
            document.getElementById("the arrival").style.display="block";
            document.getElementById("blade runner 2049").style.display="block";
            document.getElementById("cria cuervos").style.display="block";
            document.getElementById("isla de perros").style.display="block";
            document.getElementById("strangers on train").style.display="block";


           
          }


          function vist(){
            desap();

            document.getElementById("we are who we are").style.display="block";
            document.getElementById("too old to die young").style.display="block";
            document.getElementById("borat 2").style.display="block";
            document.getElementById("enemy").style.display="block";
            document.getElementById("blade runner 2049").style.display="block";

           
          }



          function accion(){
            desap();

            document.getElementById("too old to die young").style.display="block";
document.getElementById("apocalypse now").style.display="block";
document.getElementById("la balada de buster scruggs").style.display="block";
document.getElementById("the fury of a patient man").style.display="block";
document.getElementById("the arrival").style.display="block";
           
          }


          function terror(){
               desap();

               document.getElementById("too old to die young").style.display="block";
document.getElementById("hereditary").style.display="block";
            document.getElementById("midsommar").style.display="block";

          }


          function comedia(){
             desap();

             document.getElementById("we are who we are").style.display="block";
document.getElementById("borat 2").style.display="block";
document.getElementById("the social network").style.display="block";
document.getElementById("once upon a time").style.display="block";
document.getElementById("la balada de buster scruggs").style.display="block";
document.getElementById("lady bird").style.display="block";
document.getElementById("isla de perros").style.display="block";

          }



          function drama(){
            desap();

             document.getElementById("we are who we are").style.display="block";
            document.getElementById("too old to die young").style.display="block";
document.getElementById("enemy").style.display="block";
            document.getElementById("apocalypse now").style.display="block";
            document.getElementById("the social network").style.display="block";
            document.getElementById("retrato de una mujer en llamas").style.display="block";
document.getElementById("lady bird").style.display="block";
            document.getElementById("hereditary").style.display="block";
            document.getElementById("midsommar").style.display="block";
            document.getElementById("the fury of a patient man").style.display="block";
            document.getElementById("the arrival").style.display="block";

          }


          function romance(){
            desap();

            document.getElementById("we are who we are").style.display="block";
document.getElementById("retrato de una mujer en llamas").style.display="block";

          }


          function ciefic(){
            desap();

            document.getElementById("the arrival").style.display="block";
            document.getElementById("blade runner 2049").style.display="block";
document.getElementById("isla de perros").style.display="block";

          }


          function guerra(){
            desap();

            document.getElementById("apocalypse now").style.display="block";

          }


          function thriller(){
            desap();

            document.getElementById("too old to die young").style.display="block";
document.getElementById("enemy").style.display="block";
            document.getElementById("apocalypse now").style.display="block";
            document.getElementById("the social network").style.display="block";
document.getElementById("hereditary").style.display="block";
            document.getElementById("midsommar").style.display="block";
            document.getElementById("the fury of a patient man").style.display="block";
            document.getElementById("the arrival").style.display="block";
document.getElementById("cria cuervos").style.display="block";
document.getElementById("strangers on train").style.display="block";

          }

          
          function animacion(){
            desap();

            document.getElementById("isla de perros").style.display="block";

          }