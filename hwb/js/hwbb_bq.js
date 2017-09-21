function htab(){
	    var hsize=document.getElementsByClassName('hsize')[0];
        var hbq1=hsize.lastElementChild.children;
        for(var i=0;i<hbq1.length;i++){
               hbq1[i].idx=i;
               hbq1[i].onclick=function(){
                var idx=this.idx;
                for(var i=0;i<hbq1.length;i++){
                    if(i===idx){
                hbq1[i].className='huangweibingbiaoqian';
                    }else{
                hbq1[i].className='';
                    }
                }
               }
            }
        var hcolor=document.getElementsByClassName('hcolor')[0];
        var hbq2=hcolor.lastElementChild.children;
        for(var i=0;i<hbq2.length;i++){
               hbq2[i].idx=i;
               hbq2[i].onclick=function(){
                var idx=this.idx;
                for(var i=0;i<hbq2.length;i++){
                    if(i===idx){
                hbq2[i].className='huangweibingbiaoqian';
                    }else{
                hbq2[i].className='';
                    }
                }
               }
            }
}
htab();