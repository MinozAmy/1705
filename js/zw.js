/* 
* @Author: Marte
* @Date:   2017-08-26 10:32:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-28 13:34:53
*/


window.onload=function(){
    var main2=document.getElementsByClassName('main2')[0];
    var main2a=document.getElementsByClassName('main2a')[0];
    var header=main2a.lastElementChild.children;
    var content = main2.lastElementChild.children;
    header[0].className='active';
    for(var i=0;i<content.length;i++){
        if(i>0){
            content[i].style.display='none';
        }
        header[i].idx=i;
        header[i].onclick=function(){
            var idx=this.idx;
            for(var i=0;i<header.length;i++){
                if(i===idx){
                            header[i].className = 'active';
                            content[i].style.display = 'block';
                        }else{
                            header[i].className = '';
                            content[i].style.display = 'none';
                        }
            }
        }
    }
    //----------Special Package---js-------------
   /*var contents=[{
        imgurl:'../img/1.png',
        name1:'Up & Down  Open Cowhide Leather Case with Crocodile',
        Save1:'py6.30'
    },{
        imgurl:'../img/2.png',
        name1:'Up & Down  Open Cowhide Leather Case with Crocodile',
        Save1:'py6.30'
    }];
    var content1=document.getElementsByClassName('content1')[0];
    var content2=document.getElementsByClassName('content2')[0];
    var content3=document.getElementsByClassName('content3')[0];
    var html='<ul class="goods">';
    for(var i=0;i<contents.length;i++){
        var good=contents[i];
        html+='<li><img src="'+good.imgurl+'"><p class="name1">'+good.name1+'</p><p class="SP1"><span>'+good.Save1+'</span></p></li>';
    }
    html+='</ul>';

    content1.innerHTML=html;
    content2.innerHTML=html;
    content3.innerHTML=html;*/

       /* content.onclick=function(){
            var 
        }

    var goods1=document.getElementsByClassName('goods1')[0];
    var 
        goods1.onclick=function(){

        }*/
            
    //-----------CUSTOMERS ALSO BOUGHT----------
    var liste=[{
        imgurl:'../img/1.png',
        name:'Up & Down  Open Cowhide Leather Case with Crocodile',
        ListPrice:'py6.219',
        OurPrice:'py6.189',
        Save:'py6.30'
    },{
        imgurl:'../img/2.png',
        name:'Up & Down  Open Cowhide Leather Case with Crocodile',
        ListPrice:'py6.219',
        OurPrice:'py6.189',
        Save:'py6.30'
    },{
        imgurl:'../img/1.png',
        name:'Up & Down  Open Cowhide Leather Case with Crocodile',
        ListPrice:'py6.219',
        Our :'py6.189',
        Save:'py6.30'
    }];
    var list=document.getElementsByClassName('list')[0];
    //拼接
    var html='<ul class="LS">';
    for(var i=0;i<liste.length;i++){
        var lists=liste[i];
        html+='<li><img src="'+lists.imgurl+'"><p class="name">'+lists.name+'</p><p class="LP">List Price:<span>'+lists.ListPrice+'</span></p><p class="OP">Our Price:<span>'+lists.OurPrice+'</span></p><p class="SP">Save:<span>'+lists.Save+'</span></p></li>';
    }
    html+='</ul>';
   list.innerHTML=html;
   var p1=document.getElementById('p1');
   var main3b=document.getElementsByClassName('main3b')[0];
    p1.onmousedown = function(){
            list.style.display = 'block';
        }
    // list.onmouseleave = function(){
    //         list.style.display = 'none';
    //     }   


      











}