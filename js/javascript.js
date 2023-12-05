function adder(){
    var count=document.getElementById("countnum").innerHTML;
    count=parseInt(count)+1;
    document.getElementById("countnum").innerHTML=count;
}
function minuser(){
    var count=document.getElementById("countnum").innerHTML;
    if(count<=0){
        count=0;
    }else{
        count=parseInt(count)-1;
    }    
    document.getElementById("countnum").innerHTML=count;
}