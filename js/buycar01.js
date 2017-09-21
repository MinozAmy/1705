window.onload=function(){
    var reduce=document.getElementsByClassName('reduce');
    var add=document.getElementsByClassName('add');
    var count_input=document.getElementsByClassName('count-input');
    var carTable=document.getElementById('carTable');
     var itotal=carTable.getElementsByTagName('i');
     var price=document.getElementsByClassName('price');
    for(i=0;i<reduce.length;i++){
       var redu=reduce[i];
       var addi=add[i];
        redu.onmousedown=function(){
           
             count_input[i].value=count_input[i].value-1;
             console.log(count_input[i].value);
        };
         addi.onmousedown=function(){
             
             count_input[i].value=count_input[i].value+1;
        };
        count_input[i].innerHTML=count_input[i].value;
        
        itotal[i].innerHTML=count_input[i].value*price[i];

    }
}