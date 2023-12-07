// function adder(){
//     var count=document.getElementById("countnum").innerHTML;
//     count=parseInt(count)+1;
//     document.getElementById("countnum").innerHTML=count;
// }
// function minuser(){
//     var count=document.getElementById("countnum").innerHTML;
//     if(count<=0){
//         count=0;
//     }else{
//         count=parseInt(count)-1;
//     }    
//     document.getElementById("countnum").innerHTML=count;
// }

// function adder2(){
//     var count2=document.getElementById("countnum2").innerHTML;
//     count2=parseInt(count2)+1;
//     document.getElementById("countnum2").innerHTML=count2;
// }
// function minuser2(){
//     var count2=document.getElementById("countnum2").innerHTML;
//     if(count2<=0){
//         count2=0;
//     }else{
//         count2=parseInt(count2)-1;
//     }    
//     document.getElementById("countnum2").innerHTML=count2;
// }


function init(){
    let btnMinus = document.getElementsByClassName("minus");
    let btnPlus = document.getElementsByClassName("plus");


for(let i=0; i<btnMinus.length; i++){
    btnMinus[i].onclick = function(e){
    let countnumObj = e.target.nextElementSibling;
    let countnum = parseInt(countnumObj.value);
    if(countnum>0){
        countnumObj.value = countnum -1
    }
}
    btnPlus[i].onclick = function(e){
    let countnumObj = e.target.previousElementSibling;
    let countnum = parseInt(countnumObj.value);
        countnumObj.value = countnum +1
    }
}
}
window.addEventListener("load", init, false);