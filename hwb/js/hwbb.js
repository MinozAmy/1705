	window.onload = function(){
			var arrGoods = [{
							imgurl:"../img/1.jpg",
							name:"Up  Down Open Cowhide Leather Case VeryGood xiezi",
							USD:10,
							save:"Sava USD 0",
						},{
							imgurl:"../img/2.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone",
							USD:30,
							save:"Sava USD 0",
						},{
							imgurl:"../img/3.jpg",
							name:"Up  Down Open Cowhide Leather Case VeryGood xiezi",
							USD:20,
							save:"Sava USD 0",
						},{
							imgurl:"../img/4.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone",
							USD:80,
							save:"Sava USD 0",
						},{
							imgurl:"../img/5.jpg",
							name:"Up Down Open Cowhide Leather Case ",
							USD:70,
							save:"Sava USD 0",
						},{
							imgurl:"../img/6.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone",
							USD:60,
							save:"Sava USD 0",
						},{
							imgurl:"../img/7.jpg",
							name:"Up  Down Open Cowhide Leather Case VeryGood xiezi",
							USD:40,
							save:"Sava USD 0",
						},{
							imgurl:"../img/8.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone",
							USD:100,
							save:"Sava USD 0",
						},{
							imgurl:"../img/9.jpg",
							name:"Up  Down Open Cowhide Leather Case VeryGood xiezi",
							USD:150,
							save:"Sava USD 0",
						},{
							imgurl:"../img/10.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone",
							USD:50,
							save:"Sava USD 0",
						},{
							imgurl:"../img/11.jpg",
							name:"Up  Down Open Cowhide Leather Case VeryGood xiezi",
							USD:90,
							save:"Sava USD 0",
						},{
							imgurl:"../img/12.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone",
							USD:160,
							save:"Sava USD 0",
						},{
							imgurl:"../img/13.jpg",
							name:"Up  Down Open Cowhide Leather Case VeryGood xiezi",
							USD:140
						},{
							imgurl:"../img/14.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone",
							USD:130,
							save:"Sava USD 0",
						},{
							imgurl:"../img/15.jpg",
							name:"Up  Down Open Cowhide Leather Case VeryGood xiezi",
							USD:120,
							save:"Sava USD 0",
						},{
							imgurl:"../img/16.jpg",
							name:"Decent Module Case Silicone Skin Cover for iPhone",
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
}
