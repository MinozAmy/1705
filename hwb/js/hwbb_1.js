window.onload=function(){
    var hdivz =document.getElementById('hdivz');
    // 
    var hdivzz =document.getElementById('hdivzz');
    var params = location.search;
    var params = decodeURI(params);
    var simplegoods = params.slice(1).split('&');
    var arrGoods = {};
    simplegoods.forEach((item)=>{
        simplegoods = item.split('=');
        arrGoods[simplegoods[0]] = simplegoods[1]; 
    });
    console.log(arrGoods); 
    html = '<li class="hgoods" data-guid="'+arrGoods['data-guid']+'">'+
        '<img src="' + arrGoods.imgurl + '" id="himgg1">'+
        '<p class="hpp1">'+arrGoods.name+'<span>SKU:V41 1 32</span></p>'+
        '<p class="hpp11"><del>'+arrGoods.USD+'</del></p>'+
        '<p class="hpp12">'+arrGoods.USD+'</p>'+
        '</li>';
    hdivzz.innerHTML = html;
            //小图的列表
            var hpics=document.getElementsByClassName('hul1')[0];
            //获取大图元素
            var himg=document.getElementById('himgg1');
            //第一张图片为大图的src
            hpics.children[0].children[0].src=himg.src;
            //给第一张图设置data-src，内容为大图的src
            hpics.children[0].children[0].setAttribute('data-Src',himg.src);



            hpics.onclick=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                for(var i=0;i<hpics.children.length;i++){
                    hpics.children[i].className="";
                }
                if(target.tagName.toLowerCase()=='img'){
                var Src=target.getAttribute('data-Src');
                himg.src=Src;
                target.parentNode.classList.add("active");
                }
            }





//动画
       
        // 绑定按钮
            imglEle = document.querySelector('.imgl');
            imgrEle = document.querySelector('.imgr');
            
            var index = 0;
            imgrEle.onclick = ()=>{
                console.log(777);
                index ++;
                var ul = document.querySelector('.hul1');
                if(index >= 4){
                    index = 0;
                }
                animate(ul,{left:-150*index});
            };
            imglEle.onclick = ()=>{
                console.log(888);
                index --;
                var ul = document.querySelector('.hul1');
                if(index < 0){
                    index = 3;
                }
                animate(ul,{left:-150*index});
            };
        // 动画函数
        function animate(ele,opt,callback){
            // 记录动画数量
            let timerLen = 0;
            // 遍历opt
            for(var attr in opt){
                createTimer(attr);
                timerLen++;
            }

            function createTimer(attr){
                // 为每个属性设置不同的定时器(关键1)
                let timerName = attr + 'timer';
                let target = opt[attr];

                clearInterval(ele[timerName]);

                // 把定时器与Dom关联（关键2）
                ele[timerName] = setInterval(()=>{
                // 先获取当前值
                    let current = getComputedStyle(ele)[attr];//String:100px,50rem,0.5,60deg
    
                    // 提取数值：单位
                    // 根据当前值提取单位(单位在current最后面)
                    let unit = current.match(/[a-z]+$/);
                    if(unit){
                    current = current.substring(0,unit.index)*1;
                    unit = unit[0]
                    }else{
                    unit = '';
                    current *= 1;
                    }

                    // 计算速度
                    let speed = (target - current)/10;
    
                    // 处理speed值，防止speed为小数而造成定时器无法完成的情况
                    // 0.3=>1,-0.3=>-1
                    speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);


                    if(attr === 'opacity'){
                        speed = speed>0 ? 0.05 : -0.05;
                    }

                    // 动画完成
                    if(current === target){
                    clearInterval(ele[timerName]);
                    current = target - speed;

                    timerLen--;

                    if(typeof callback === 'function' && timerLen === 0){
                        callback();
                    }
                    }

                    ele.style[attr] = current + speed + unit;
                },30)
            }
        }
  

//飞入购物车

    var buyCar = document.querySelector('.hspan2');
    buyCar.onclick = ()=>{
        // 复制当前商品图片(用于实现动画效果)
            console.log(666);
            let currentImg = document.querySelector('#himgg1');
            let copyImg = currentImg.cloneNode();
            console.log(currentImg);

        // 把复制的图片写入页面，并设置样式（定位到当前商品图片所在的位置）
            copyImg.style.position = 'position';
            copyImg.style.left = currentImg.offsetLeft + 'px';
            copyImg.style.top = currentImg.offsetTop + 'px';
            copyImg.style.width = currentImg.clientWidth + 'px';

            document.body.appendChild(copyImg);
            console.log(copyImg);

        //设置目标值 
        let target = {
            left:500,
            top:50,
            width:100,
            height:100

        }
        animate(copyImg,target,()=>{
            // 复制当前商品所有信息(用于往购物车添加)，等飞入动画完成后添加到购物车
            let copyLi = arrGoods;
            var tb1 = document.querySelector('.tb1');
            console.log(copyLi);
            // tab1.appendChild(copyLi);
            console.log(tb1);
            // let btnAdd2Car = copyLi.querySelector('button').parentNode;
            // copyLi.removeChild(btnA
            // // 3)在购物车列表中添加移除按钮
            // let btnDel = document.createElement('span');
            // btnDel.innerHTML = '&times;'
            // btnDel.className = 'btn-close';
            // copyLi.appendChild(
            // // 删除动画图片
            // document.body.removeChild(copyImg);
        });




    }










}


