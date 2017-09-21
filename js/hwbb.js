	window.onload = function(){
			var arrGoods = [{
							imgurl:"../img/1.jpg",
							name:"Up  Down Open Cowhide Leather Case ...",
							USD:10,
							save:"Sava USD 0",
						},{
							imgurl:"../img/2.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone...",
							USD:30,
							save:"Sava USD 0",
						},{
							imgurl:"../img/3.jpg",
							name:"Up  Down Open Cowhide Leather Case ...",
							USD:20,
							save:"Sava USD 0",
						},{
							imgurl:"../img/4.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone...",
							USD:80,
							save:"Sava USD 0",
						},{
							imgurl:"../img/5.jpg",
							name:"Up Down Open Cowhide Leather Case ...",
							USD:70,
							save:"Sava USD 0",
						},{
							imgurl:"../img/6.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone...",
							USD:60,
							save:"Sava USD 0",
						},{
							imgurl:"../img/7.jpg",
							name:"Up  Down Open Cowhide Leather Case ...",
							USD:40,
							save:"Sava USD 0",
						},{
							imgurl:"../img/8.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone...",
							USD:100,
							save:"Sava USD 0",
						},{
							imgurl:"../img/9.jpg",
							name:"Up  Down Open Cowhide Leather Case ...",
							USD:150,
							save:"Sava USD 0",
						},{
							imgurl:"../img/10.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone...",
							USD:50,
							save:"Sava USD 0",
						},{
							imgurl:"../img/11.jpg",
							name:"Up  Down Open Cowhide Leather Case ...",
							USD:90,
							save:"Sava USD 0",
						},{
							imgurl:"../img/12.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone...",
							USD:160,
							save:"Sava USD 0",
						},{
							imgurl:"../img/13.jpg",
							name:"Up  Down Open Cowhide Leather Case ...",
							USD:140
						},{
							imgurl:"../img/14.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone...",
							USD:130,
							save:"Sava USD 0",
						},{
							imgurl:"../img/15.jpg",
							name:"Up  Down Open Cowhide Leather Case ...",
							USD:120,
							save:"Sava USD 0",
						},{
							imgurl:"../img/16.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone...",
							USD:110,
							save:"Sava USD 0",
						}
					  ]
				 
			var sec = document.getElementById('sec');
			var secRb = sec.getElementsByClassName('secRb')[0];
			var secPrice = document.getElementById('secPrice');
            var datalist = document.getElementById('datalist');
			//数据生成
			var res = arrGoods.map(function(item){
				var sale = item.USD*0.6
				return "<li>"+
				 '<a href= "hwba.html?imgurl='+encodeURI(item.imgurl)+'&name='+encodeURI(item.name)+'&USD='+encodeURI(item.USD)+'&save='+encodeURI(item.save)+'">'+
                    // '<img src ="'+ item.imgurl + '">'+
				"<img src = "+item.imgurl+">"+
				"</a>"+
				"<p><input type='checkbox' />Name:"+item.name+"</p>"+
				"<p>USD:￥<span>"+item.USD+"</span></p>"+
				"<p>"+item.save+"</p>"+
				"<p><span>wholesale</span></p>"+
				"</li>"
			}).join('');

		
			var ul = document.createElement('ul');
			ul.innerHTML = res;
			secRb.appendChild(ul);

			//排序
			var secPrice = document.getElementById('secPrice');
			var flag = true;
			
			secPrice.onclick = function(){
				secRb.innerHTML=''
				if(flag == true){
					//改变箭头
					secPrice.style.background =' url("../img/up.jpg") no-repeat center';
					//价格从高到低排序
					var newArr = arrGoods.map(function(item){
						return item.USD
					});

					//排序之后的数组
					var result = newArr.sort(function(a,b){
						return b-a
					});
					goodslist(result)
					flag = false;
				}else{
				
					secPrice.style.background =' url("../img/down.jpg") no-repeat center';
					var newArr = arrGoods.map(function(item){
						return item.USD
					});
					//排序之后的数组
					var result = newArr.sort(function(a,b){
						return a-b
					});
					
					goodslist(result)
					flag = true;
				}
			};
			 // function doooo(arrGoods){
    //             var html = '';
    //             html += arrGoods.map(function(item){
    //                 return "<li>"+
				//  '<a href= "hwba.html?imgurl='+encodeURI(item.imgurl)+'&name='+encodeURI(item.name)+'&USD='+encodeURI(item.USD)+'&save='+encodeURI(item.save)+'">'+
    //                 '<img src ="'+ item.imgurl + '">'+
				// "<img src = "+item.imgurl+">"+
				// "</a>"+
				// "<p><input type='checkbox' />Name:"+item.name+"</p>"+
				// "<p>USD:￥<span>"+item.USD+"</span></p>"+
				// "<p>"+item.save+"</p>"+
				// "<p><span>wholesale</span></p>"+
				// "</li>"
    //             }).join('');
    //              datalist.innerHTML = html;
    //         }
    //         doooo(arrGoods);


			// var secPrices = document.getElementById('secPrices');
			// secPrices.onclick = function(){
			// 	secRb.innerHTML=''
			// 	if(flag == true){
			// 		//改变箭头
			// 		secPrices.style.background =' url("../img/up.jpg") no-repeat center';
			// 		//价格从高到低排序
			// 		var newArr = arrGoods.map(function(item){
			// 			return item.USD
			// 		});

			// 		//排序之后的数组
			// 		var result = newArr.sort(function(a,b){
			// 			return b-a
			// 		});
			// 		goodslist(result)
			// 		flag = false;
			// 	}else{
			// 		secPrices.style.background =' url("../img/down.jpg") no-repeat center';
			// 		var newArr = arrGoods.map(function(item){
			// 			return item.USD
			// 		});
			// 		//排序之后的数组
			// 		var result = newArr.sort(function(a,b){
			// 			return a-b
			// 		});
					
			// 		goodslist(result)
			// 		flag = true;
			// 	}
				
			// };
			function goodslist(result){
				var ul = document.createElement('ul');
				var structure = ''
					//遍历比较数组，输出HTML结构
				
					for(var i=0;i<result.length;i++){
						ul = arrGoods.map(function(item){
								if(result[i] == item.USD){
									structure += "<li><p><img src = "+item.imgurl+"></p><p><input type='checkbox' />Name:"+item.name+"</p><p>USD:￥<span>"+item.USD+"</span></p><p>"+item.save+"</p><p><span>wholesale</span></p></li>"
								}
							return structure
						}).join('')	
					}
					secRb.innerHTML = ul	
			}		
}
