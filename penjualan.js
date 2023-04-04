function hasil(){
    var harga=parseInt(document.getElementById('harga').value);
    var jumlah=parseInt(document.getElementById('harga').value);
    var total=harga*jumlah;
    document.getElementById("total").innerHTML=total;
    var diskon=0.10;
    var bayar;
    if(total>100000){
        bayar=total-(total*diskon);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("diskon").innerHtml="10%";
    }else{
        document.getElementById("bayar").innerHTML=total;
        document.getElementById("diskon").innerHtml="0%";
    }

}