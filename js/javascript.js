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

function adder2(){
    var count2=document.getElementById("countnum2").innerHTML;
    count2=parseInt(count2)+1;
    document.getElementById("countnum2").innerHTML=count2;
}
function minuser2(){
    var count2=document.getElementById("countnum2").innerHTML;
    if(count2<=0){
        count2=0;
    }else{
        count2=parseInt(count2)-1;
    }    
    document.getElementById("countnum2").innerHTML=count2;
}