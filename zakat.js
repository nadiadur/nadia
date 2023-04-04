
        function hasil(){
            var Harta=parseInt(document.getElementById('harta').value);
            
            document.getElementById("harta").innerHTML=total;
            var persen=0.025;
            var bayar;
            if(total>0){
                bayar=total*dis;
                document.getElementById("tot").innerHTML=bayar;
                document.getElementById("persen").innerHTML="2.5%";
            }else{
                document.getElementById("tot").innerHTML=total;
                document.getElementById("persen").innerHTML="0%";
            }
        
        }