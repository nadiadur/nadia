
        function hasil(){
            var total=parseInt(document.getElementById('tot').value);
            var persen=parseInt(document.getElementById("persen").value);
            var total=tot*persen;
            document.getElementById("total").innerHTML=total;
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