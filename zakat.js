
        function hasil(){
            var Harta=parseInt(document.getElementById("harta").value);
            
            document.getElementById("harta").innerHTML=total;
            var persen=0.025;
            var bayar;
            if(harta>0){
                bayar=harta*persen;
                document.getElementById("bayar").innerHTML=bayar;
                document.getElementById("persen").innerHTML="2.5%";
            }else{
                document.getElementById("bayar").innerHTML=harta;
                document.getElementById("persen").innerHTML="0%";
            }
        
        }