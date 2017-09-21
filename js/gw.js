/* 
* @Author: Marte
* @Date:   2017-08-27 15:02:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-28 14:41:51
*/
window.onload=function(){
    var hot=[{
        imgurl:'../img/4.png',
        name:'Louis Vuitton Monogram Ver',
        Price1:'$2455.00',
        Price2:'225.99 pv6.',
        imgurl0:'../img/10.png'
    },{
        imgurl:'../img/5.png',
        name:'Louis Vuitton Monogram Ver',
        Price1:'$2455.00',
        Price2:'225.99 pv6.',
        imgurl0:'../img/10.png'
    },{
        imgurl:'../img/6.png',
        name:'Louis Vuitton Monogram Ver',
        Price1:'$2455.00',
        Price2:'225.99 pv6.',
        imgurl0:'../img/10.png'
    },{
        imgurl:'../img/7.png',
        name:'Louis Vuitton Monogram Ver',
        Price1:'$2455.00',
        Price2:'225.99 pv6.',
        imgurl0:'../img/10.png'
    },{
        imgurl:'../img/8.png',
        name:'Louis Vuitton Monogram Ver',
        Price1:'$2455.00',
        Price2:'225.99 pv6.',
        imgurl0:'../img/10.png'
    },{
        imgurl:'../img/9.png',
        name:'Louis Vuitton Monogram Ver',
        Price1:'$2455.00',
        Price2:'225.99 pv6.',
        imgurl0:'../img/10.png'
    },{
        imgurl:'../img/14.png',
        name:'Louis Vuitton Monogram Ver',
        Price1:'$2455.00',
        Price2:'225.99 pv6.',
        imgurl0:'../img/10.png'
    },{
        imgurl:'../img/15.png',
        name:'Louis Vuitton Monogram Ver',
        Price1:'$2455.00',
        Price2:'225.99 pv6.',
        imgurl0:'../img/10.png'
    }];




// 面向对象动画
var gw=document.getElementsByClassName('gw');
var gws=document.getElementsByClassName('gws')[0];
   function Carousel(opt){
                // 按钮           
                this.gw2 ='.gw2';
                this.gw1 ='.gw1';
                this.ht ='.ht';
                // 容器
                this.ele = opt.ele || '.gws';

                //动画速度
                this.speed = -10;

    };
            // 定义方法
    Carousel.prototype = {
        // 重新设置constructor
        constructor:gws,
        // 初始化
        // * 生成html结构
        // * 绑定事件
        init:function(){console.log(666);
            this.ele = document.querySelector(this.ele);
            // 生成html结构
            var html='<ul class="ht">';
            for(var i=0;i<hot.length;i++){
                var hots=hot[i];
                html+='<li>'
                    +'<img src="'+hots.imgurl+'">'
                    +'<p class="nm">'+hots.name+'</p>'
                    +'<p class="pc">'+'<span class="pc1">'+hots.Price1+'</span>'
                    +'<span class="pc2">'+hots.Price2+'</span></p>'
                    +'<p class="pd"><img src="'+hots.imgurl0+'"></p>'+'</li>';   
            };
            html+='</ul>';
            this.ele.innerHTML=html;
            
            // 绑定按钮
            this.gw1Ele = document.querySelector(this.gw1);
            this.gw2Ele = document.querySelector(this.gw2);
            
            var index = 0;
            this.gw2Ele.onclick = ()=>{
                console.log(777);
                index ++;
                this.ul = document.querySelector(this.ht);
                if(index >= 3){
                    index = 0;
                }
                this.animate(this.ul,{left:-500*index});
            };
            this.gw1Ele.onclick = ()=>{
                console.log(888);
                index --;
                this.ul = document.querySelector(this.ht);
                if(index < 0){
                    index = 2;
                    this.animate(this.ul,{left:-500*index});
                }else{
                    this.animate(this.ul,{left:-500*index});
                }
            };
            return this;
        },

        // 动画函数
        animate:function(ele,opt,callback){
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
    }

            // 链式调用
            new Carousel(hot).init();
}