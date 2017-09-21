window.onload = function(){
	//id函数
	function $(id){
		return document.getElementById(id);
	}

	//获取元素类名
	function getClass(className,ele){
		if(!ele){ele = document;}
		if(ele.getElementsByClassName){return ele.getElementsByClassName(className);}
		var arr = [];
		var dom = ele.getElementsByTagName("*");
		for (var i = 0; i < dom.length; i++) {
			if (dom[i].className.indexOf(className) >= 0) {arr.push(dom[i]);}
		}
		return arr;
	}
/**
 * [获取随机验证码]
 * @param  {[Number]} num [验证码位数]
 * @return {String}     [验证码]
 */
function yanzhengma(num){
	if(num === undefined){
		num = 4;
	}
	var arr = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	// 循环获取验证码
	var res = '';
	for(var i=0;i<num;i++){
		var idx = parseInt(Math.random()*arr.length);
		res += arr[idx];
	}
	return res;
}







	//评分
	var star = document.querySelector('#star');
	var item = star.children;
	var len = item.length;

	var score = 1;
	star.onmouseover = e=>{
	    if(e.target.tagName.toLowerCase()==='li'){
	        var index = 0;
	        // 获取target所在的索引值
	        for(var i=0;i<len;i++){
	            if(item[i] === e.target){
	                index = i;
	            }
	        }

	        // 再次遍历
	        // 小于等于index的加高亮
	        // 大于index的去除高亮
	        for(var i=0;i<len;i++){
	            if(i<=index){
	                item[i].className = 'active';
	            }else{
	                item[i].className = '';
	            }
	        }
	    }
	}

	// 鼠标移开
	// 大于等于scroe的li去除高亮
	star.onmouseout = e=>{
	    if(e.target.tagName.toLowerCase()==='li'){
	        for(var i=0;i<len;i++){
	            if(i>=score){
	                item[i].className = '';
	            }
	        }
	        
	    }
	}


	// 点击评分
	// 点击时设定分数值
	star.onclick = e=>{
	    if(e.target.tagName.toLowerCase()==='li'){
	        for(var i=0;i<len;i++){
	            if(item[i] === e.target){
	                score = i+1;
	            }
	        }
	       
	    }
	}



	//验证码
	$('identifyCode').innerHTML = yanzhengma(4);
	$('identifyCode').onclick = function(){
		$('identifyCode').innerHTML = yanzhengma(4);
	}
	//发布
	var ul = document.createElement("ul");  // 创建ul
    getClass('two')[0].appendChild(ul);


    //时间
    var now = new Date() ;
    var date = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    var time = date+'/'+month+'/'+year;

    
    //图片
 //    var img;
	// $('file').onclick = function(){
	// 	var fileUrl = $('file').value;
	// 	img = document.createElement('img');
	// 	img.src = '"'+fileUrl+'"';
	// 	console.log(fileUrl);
	// }


	// 度量尺
	var meters = document.getElementsByTagName('meter');
	var spans = getClass('right')[0].getElementsByTagName('span');
	for (var i = 0; i < spans.length; i++) {
		spans[i].innerHTML = meters[i].value;
	}






    //提交
	$('reviewsSubmit').onclick = function(){
		var num = getClass('output')[0].value.toLowerCase();
		if($('identifyCode').innerHTML.toLowerCase() !== num ){
			// alert("请重新输入验证码");
			// return false;//停止执行
		}

		
		//过滤敏感字符
		var mingan = 'shit,fuck,法轮功,金三胖,六合彩,赌博,我操'.split(',');
		var txt = $('Content').value;
		var data = [];
		mingan.forEach(function(item){
			var reg = new RegExp(item,'ig');
			txt = txt.replace(reg,'**');
		})
		data.push(txt);
		//创建li
		var newLi = document.createElement("li");
		newLi.className = "newLi";	



		//把表单信息传给newLi
		var text=document.getElementById('text');
		newLi.innerHTML=data+text+time+'<img src="../img/3 (2).png">';
       
       //清空表单
        text ="";
        txt = ""; 
        getClass('output')[0].value = ""; 

        //刷新验证码
        yanzhengma(4);
        $('identifyCode').innerHTML = yanzhengma(4);
        var lis = ul.children;  // 获得有多少个li

       //让新发布的内容最上显示
        if(lis.length == 0)  //  第一次创建
        {
            ul.appendChild(newLi); // ul 的后面追加
        }
        else
        {
            ul.insertBefore(newLi,lis[0]); 
        }   
	}




	//ajax




	var datalists = document.querySelector('#datalists');
	var page = document.querySelector('#page');

	//当前分页
	var pageNo = 1;
	//每页显示数量
	var qty = 4;

	var pageLen;
	


	//获取并处理数据
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
			var res = JSON.parse(xhr.responseText);
			// console.log(res);
			var html = '';
			html+= res.data.map(item=>{
				return `<li class="access clearfix" data-id="${item.id}">
					<div class="small fl">
						<ul id='smallStar'>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<p class="d">${item.today}</p>
						<p class="username">${item.text}</p>
						<span><i class="ding"></i>${(item.ding)}</span>
						<span><i class="cai"></i>${(item.cai)}</span>	
					</div>
					<div class="fl">
						<p class="write">${item.write}</p>
						<div class='file'></div>
						<div id="green"><img src="../img/green.png"></div>
					</div>
				</li>`
			}).join('');


			datalists.innerHTML = html;
		// 插入图片
			
			var green = document.querySelectorAll('#green');
			var file = document.querySelectorAll('.file');
			//console.log(res.data);
			//遍历每一个li
			for (var i = 0; i < res.data.length; i++) {
				if(res.data[i].src){
					for(var j=0;j<res.data[i].src.length;j++){
						var fileimg = document.createElement('img');
						fileimg.className = 'fileimg';
						fileimg.src = res.data[i].src[j];
						file[i].appendChild(fileimg);
					}
				
				}		
			}
								

		

			// 生成分页
			page.innerHTML = '';
			pageLen = Math.ceil(res.total/res.qty);
			for(var i=0;i<pageLen;i++){
				var span = document.createElement('span');
				span.innerHTML = i+1;
				if(i===res.pageNo-1){
					span.className = 'active';
				}
				page.appendChild(span);
			}
			}
	}
	
	xhr.open('post','../api/review.php',true);
	xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
	xhr.send('pageNo='+pageNo + '&qty='+qty);

	// 点赞
		// 传递id到后端	
		datalists.onclick = function(e){
			
			if(e.target.className == 'ding' || e.target.className == 'cai'){
				let span = e.target.parentNode;
				let currentLi = span.parentNode.parentNode;
				if(e.target.className == 'ding'){
					console.log('ding');
					var id = currentLi.dataset.id;
				}else{var id2 = currentLi.dataset.id;}
				let xhr_zan = new XMLHttpRequest();
				xhr_zan.onreadystatechange = function(){
					if(xhr_zan.readyState === 4){
						
						let currentMsg = JSON.parse(xhr_zan.responseText);
						console.log(currentMsg);
						if(id){span.innerHTML = currentMsg.ding;}
						else{span.innerHTML = currentMsg.cai;}
						
					}
				}
				xhr_zan.open('post','../api/review_zan.php',true);
				xhr_zan.setRequestHeader('content-type','application/x-www-form-urlencoded');
				xhr_zan.send('id='+id+'&id2='+id2);
				// xhr_zan.open('get','../api/review_zan.php?id='+id+'&id2='+id2,true);
				// xhr_zan.send();
			}
			
		}
	//下一页按钮
	var next = document.querySelector('.next');
	next.onclick = function(){
		pageNo++;
		if(pageNo>pageLen){
			return false;
		}
		xhr.open('post','../api/review.php',true);
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send('pageNo='+pageNo + '&qty='+qty);
	}
	// 点击分页获取相应信息
	page.onclick = function(e){
		e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName.toLowerCase() === 'span'){
			pageNo = target.innerText;
			xhr.open('post','../api/review.php',true);
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
			xhr.send('pageNo='+pageNo + '&qty='+qty);
		}
	}


	

		
	












}