		var logo = document.getElementById('logo');
		var zy = logo.getElementsByTagName('img')[0];
		var lo =logo.getElementsByTagName('img')[1];
		logo.onmouseenter = function(){
			zy.style.left = '52px';
			lo.style.left = '60px';
		}
		logo.onmouseleave = function(){
			zy.style.left = '0px';
			lo.style.left = '0px';
		}
		
		
		var dhl = document.getElementById('dhl');
		var dhli = dhl.getElementsByTagName('li');
		var mi = document.getElementById('mi');		//隐藏的模块
		var mili = mi.querySelectorAll("li");
		
		for(var i=0;i<1;i++){
			var img = mi.querySelectorAll("img");
			var div = mi.querySelectorAll("div");
			
			mi.onmouseleave = function(){
				mi.style.transition = '0.3s';
				mi.style.height = '0px'
			}
			dhli[0].onmouseenter =function(){
				mi.style.height = '230px'
				mi.style.transition = '0.5s';
				img[0].src = 'img/mi1.png';
				div[0].innerText = '小米9 Pro 5G';
				div[1].innerText = '3699元';
				
				img[1].src = 'img/mi2.png';
				div[2].innerText = '小米MIX Alpha';
				div[3].innerText = '19999元';
				
				img[2].src = 'img/mi3.png';
				div[4].innerText = '小米CC9';
				div[5].innerText = '1799元';
				
				img[3].src = 'img/mi4.png';
				div[6].innerText = '小米CC9e';
				div[7].innerText = '1199元';
				
				img[4].src = 'img/mi5.png';
				div[8].innerText = '小米CC9 美图秀秀定制版';
				div[9].innerText = '2699元';
				
				img[5].src = 'img/mi6.png';
				div[10].innerText = '小米9';
				div[11].innerText = '2799元';
			}
//Redmi红米
			dhli[1].onmouseenter =function(){
				mi.style.height = '230px'
				mi.style.transition = '0.5s';
				img[0].src = 'img/red1.png';
				div[0].innerText = '小米9 Pro 5G';
				div[1].innerText = '3699元';
				
				img[1].src = 'img/red2.png';
				div[2].innerText = '小米MIX Alpha';
				div[3].innerText = '19999元';
				
				img[2].src = 'img/red3.png';
				div[4].innerText = '小米CC9';
				div[5].innerText = '1799元';
				
				img[3].src = 'img/red4.jpg';
				div[6].innerText = '小米CC9e';
				div[7].innerText = '1199元';
				
				img[4].src = 'img/red5.jpg';
				div[8].innerText = '小米CC9 美图秀秀定制版';
				div[9].innerText = '2699元';
				
				img[5].src = 'img/red6.jpg';
				div[10].innerText = '小米9';
				div[11].innerText = '2799元';
			}
//电视			
			dhli[2].onmouseenter =function(){
				mi.style.height = '230px'
				mi.style.transition = '0.5s';
				img[0].src = 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=200&h=138';
				div[0].innerText = '小米9 Pro 5G';
				div[1].innerText = '3699元';
				
				img[1].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=200&h=138';
				div[2].innerText = '小米MIX Alpha';
				div[3].innerText = '19999元';
				
				img[2].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg?thumb=1&w=200&h=138';
				div[4].innerText = '小米CC9';
				div[5].innerText = '1799元';
				
				img[3].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138';
				div[6].innerText = '小米CC9e';
				div[7].innerText = '1199元';
				
				img[4].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg?thumb=1&w=200&h=138';
				div[8].innerText = '小米CC9 美图秀秀定制版';
				div[9].innerText = '2699元';
				
				img[5].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bd922870295a97a0972eaba5af92129e.jpg?thumb=1&w=200&h=138';
				div[10].innerText = '小米9';
				div[11].innerText = '2799元';
			}
//笔记本		
			dhli[3].onmouseenter =function(){
				mi.style.height = '230px'
				mi.style.transition = '0.5s';
				img[0].src = 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a25f895ad6019c3fae32fd1f48a2c7c.png?thumb=1&w=200&h=138';
				div[0].innerText = '小米9 Pro 5G';
				div[1].innerText = '3699元';
				
				img[1].src = 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33c6a31aaee90164ce963801bec48e64.png?thumb=1&w=200&h=138';
				div[2].innerText = '小米MIX Alpha';
				div[3].innerText = '19999元';
				
				img[2].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/95c4329ce2c454e2a5fa1e0931528a46.png?thumb=1&w=200&h=138';
				div[4].innerText = '小米CC9';
				div[5].innerText = '1799元';
				
				img[3].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96108a8feee8e790389b09b8b949fa7d.png?thumb=1&w=200&h=138';
				div[6].innerText = '小米CC9e';
				div[7].innerText = '1199元';
				
				img[4].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb159dbe860ee434b52d8eed9e9fd424.png?thumb=1&w=200&h=138';
				div[8].innerText = '小米CC9 美图秀秀定制版';
				div[9].innerText = '2699元';
				
				img[5].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png?thumb=1&w=200&h=138';
				div[10].innerText = '小米9';
				div[11].innerText = '2799元';
			}
//家电
			dhli[4].onmouseenter =function(){
				mi.style.height = '230px'
				mi.style.transition = '0.5s';
				img[0].src = 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png?thumb=1&w=200&h=138';
				div[0].innerText = '小米9 Pro 5G';
				div[1].innerText = '3699元';
				
				img[1].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png?thumb=1&w=200&h=138';
				div[2].innerText = '小米MIX Alpha';
				div[3].innerText = '19999元';
				
				img[2].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg?thumb=1&w=200&h=138';
				div[4].innerText = '小米CC9';
				div[5].innerText = '1799元';
				
				img[3].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&w=200&h=138';
				div[6].innerText = '小米CC9e';
				div[7].innerText = '1199元';
				
				img[4].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/486a2a7359b6bda95b3dbd4e45b9c50a.jpg?thumb=1&w=200&h=138';
				div[8].innerText = '小米CC9 美图秀秀定制版';
				div[9].innerText = '2699元';
				
				img[5].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ae019eebf10a55f8df2fee8d19b4e1f.jpg?thumb=1&w=200&h=138';
				div[10].innerText = '小米9';
				div[11].innerText = '2799元';
			}
//路由器
			dhli[5].onmouseenter =function(){
				mi.style.height = '230px'
				mi.style.transition = '0.5s';
				img[0].src = 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dd23c09b7eb6471968537fdce629194.png?thumb=1&w=200&h=138';
				div[0].innerText = '小米9 Pro 5G';
				div[1].innerText = '3699元';
				
				img[1].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ec5be5f93ac0118aeec27b8df4337fc9.jpg?thumb=1&w=200&h=138';
				div[2].innerText = '小米MIX Alpha';
				div[3].innerText = '19999元';
				
				img[2].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=200&h=138';
				div[4].innerText = '小米CC9';
				div[5].innerText = '1799元';
				
				img[3].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28efac56ef4c4942077dac7e30e8c624.jpg?thumb=1&w=200&h=138';
				div[6].innerText = '小米CC9e';
				div[7].innerText = '1199元';
				
				img[4].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3c3e9f61cc72ccd2a37fc90fed215b66.jpg?thumb=1&w=200&h=138';
				div[8].innerText = '小米CC9 美图秀秀定制版';
				div[9].innerText = '2699元';
				
				img[5].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5fc5ee374e5306aa5513be4f3b560531.png?thumb=1&w=200&h=138';
				div[10].innerText = '小米9';
				div[11].innerText = '2799元';
			}
//智能硬件
			dhli[6].onmouseenter =function(){
				mi.style.height = '230px'
				mi.style.transition = '0.5s';
				img[0].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg?thumb=1&w=200&h=138';
				div[0].innerText = '小米9 Pro 5G';
				div[1].innerText = '3699元';
				
				img[1].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg?thumb=1&w=200&h=138';
				div[2].innerText = '小米MIX Alpha';
				div[3].innerText = '19999元';
				
				img[2].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5630aa997c82409ee33b2814c7eb2244.jpg?thumb=1&w=200&h=138';
				div[4].innerText = '小米CC9';
				div[5].innerText = '1799元';
				
				img[3].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg?thumb=1&w=200&h=138';
				div[6].innerText = '小米CC9e';
				div[7].innerText = '1199元';
				
				img[4].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df136199221a23299bc5348f37230a86.jpg?thumb=1&w=200&h=138';
				div[8].innerText = '小米CC9 美图秀秀定制版';
				div[9].innerText = '2699元';
				
				img[5].src = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1016ddffd2ac5808c4bebcdbefd413a.jpg?thumb=1&w=200&h=138';
				div[10].innerText = '小米9';
				div[11].innerText = '2799元';
			}
		}
		
		// var li = mi.querySelectorAll('li');
		// for(i = 0;i<li.length;i++){
		// 	(function(a){
		// 		var img = li[a].querySelectorAll('img')[];
		// 		var div = li[a].querySelectorAll('div')[0];
		// 		dhli[1].onmouseenter = function(){
		// 			img.src ='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=200&h=138';
		// 			div.innerText = '123';
		// 			console.log(img[0])
		// 			mi.style.height = '230px'
		// 		}
		// 	})(i)
		// }	
		
		
		
//导航搜索框
		var search = document.getElementById('search');
		var sssize = document.getElementById('sssize');
		var sizea = sssize.getElementsByTagName('a');
		
		search.onclick = function(){
			sssize.style.display = 'none';
		}
		search.onkeydown = function(){
			sssize.style.display = 'none';
		}
		search.onmouseout = function(){
			if(search.value == ''){
				sssize.style.display = 'block';
			}
		}
		
		sizea[0].onclick = function(){
			sssize.style.display = 'none';
			search.value = '小米9 Pro 5G';
		}
		sizea[1].onclick = function(){
			sssize.style.display = 'none';
			search.value = 'Redmi Note 8';
		}
		
		
		
		
		
		
// 侧边导航
		// var cbnav = document.getElementById('cbnav');
		// var cbnavli = cbnav.getElementsByTagName('li');
		// var sidenav = document.getElementById('sidenav');
		
		// cbnavli[0].onmouseenter = function(){
		// 	sidenav.style.display = 'block';
		// }
		// sidenav.onmouseleave = function(){
		// 	sidenav.style.display = 'none';
		// }
		
		// cbnavli[1].onmouseenter = function(){
		// 	sidenav.style.display = 'block';
		// }
		// sidenav.onmouseleave = function(){
		// 	sidenav.style.display = 'none';
		// }
		
		// cbnavli[2].onmouseenter = function(){
		// 	sidenav.style.display = 'block';
		// }
		// sidenav.onmouseleave = function(){
		// 	sidenav.style.display = 'none';
		// }
		
		
		
//粘性导航
		var sjapp =document.getElementById('sjApp');
		var cberm = document.getElementById('cbewm');
		
		sjapp.onmouseenter = function() {
			cberm.style.display = 'block';
		}
		sjapp.onmouseleave = function(){
			cberm.style.display ='none';
		}
		
		
//购物车
		var gwc =document.getElementById('gwc');
		var gwcxl = document.getElementById('gwcxl');
		
		gwc.onmouseenter = function(){
			gwcxl.style.display = 'block';
			gwc.style.backgroundColor ='white';
			gwc.style.color ='#ff6700';
		}
		gwcxl.onmouseleave = function() {
			gwcxl.style.display = 'none';
			gwc.style.backgroundColor ='#FF6700';
			gwc.style.color ='white';
		}
		
// /*删除*/
		var gwcxl = document.getElementById('gwcxl');
		var xlcon = document.getElementsByClassName('xlcon');
		
		var del = document.getElementsByClassName('del');
		var wusp = document.getElementById('wusp');
		for(i = 0;i<del.length;i++){
			(function(i){
				del[i].onclick = function(){
				//总件数
					var jian = document.getElementById('jian');
					var jian1 = document.getElementById('jian').innerText;
					jian.innerText = parseInt(jian1)-1;
				//总价	
					var sc = this.parentNode;
					var span = sc.querySelector('span');
					var danj = span.querySelector('em');
					var zj = document.getElementById('zj');
					var zj1 = document.getElementById('zj').innerText;
					zj.innerText = parseInt(zj1) - parseInt(danj.innerText);
				//顶部购物车
					var gwcsl = gwc.querySelector('span');
					gwcsl.innerText = jian.innerText;
				//固定购物车
					var gdgwc = document.getElementById('gdgwc');
					gdgwc.innerText = jian.innerText ;
				//删除
				var de = this.parentNode;
					de.parentNode.removeChild(de);
				}
			})(i)
		}
		
		

		/*删除*/
		// var gwcxl = document.getElementById('gwcxl');
		// var del = document.getElementsByClassName('del');
		// var wusp = document.getElementById('wusp');
		// //span 单价
		// var span = gwcxl.querySelectorAll('span');
		// // var em = span.querySelectorAll('em');
		// // console.log(em);
		// //获取减去总价的所有单价的span
		// var spanem = span.length - 2;
		// for (j = 0; j < span.length; j++){
		// 	// var span = gwcxl.querySelectorAll('span');
		// 	var em = span[j].querySelectorAll('em');
		// 	var em = em[0];
		// 	console.log(em);
		// }
		// for (i = 0; i < del.length; i++) {
				
		// 		del[i].onclick = function() {
		// 			//总件数
		// 			var jian = document.getElementById('jian');
		// 			var jian1 = document.getElementById('jian').innerText;
		// 			jian.innerText = parseInt(jian1) - 1;
		// 			//总价
		// 			var zj = document.getElementById('zj');
		// 			var zj1 = document.getElementById('zj').innerText;
		// 			zj.innerText = parseInt(zj1) - parseInt(em[i].innerText);
		// 			console.log(em[i]);
		// 			//顶部购物车
		// 			var gwcsl = gwc.querySelector('span');
		// 			gwcsl.innerText = jian.innerText;
		// 			//固定购物车
		// 			var gdgwc = document.getElementById('gdgwc');
		// 			gdgwc.innerText = jian.innerText;
		// 			//删除
		// 			// $(this).parents('li').remove();
		// 		}
		// }
		
//倒计时轮播
			var arr = [];
			$.ajax({
				type:"POST",
				url: "https://dawn.changxvan.top/api/ ",
				data:{
					'data' : 'data'
				},
				dataType :'json',
				success:function(data){
					var pic = data.brand;
					console.log(pic);
					pic.forEach(function(val){
						arr.push(val.photo)
					})
					for(i=0;i<djslbli.length;i++){
						var djsimg = djslbli[i].getElementsByTagName('img')[0];
						djsimg.src = arr[i];
					}
				},
				
			})
			
			var djslbul = document.getElementById('djslbul');
			var djslbli = djslbul.getElementsByTagName('li');
			var djslb = document.getElementById('djslb');
			var left = document.querySelector('.arrow-left');
			var right = document.querySelector('.arrow-right');
			var timer = null;
			left.onclick = function(){
				if(djslbul.style.left === '0px')
				{
					djslbul.style.left = 0 +'px';
				}else{
					djslbul.style.left = parseInt(djslbul.style.left)+978 +"px";
				}
				djslbul.style.transition = ('0.5s')
			}
			function arrright(){
				djslbul.style.transition = ('0.5s');
				djslbul.style.left = ('-978px');
			}
			right.onclick = function(){
				arrright();
				djslbul.style.transition = ('0.5s');
			}
			// function autoplay(){
			// 	timer = setInterval(function(){
			// 		arrright();
			// 		djslbul.style.transition = ('0.5s');
			// 	},4000)
			// }
			// autoplay();
			
			// container.onmouseenter = function(){
			// 	clearInterval(timer);
			// }
			
			// container.onmouseleave = function(){
			// 	autoplay();
			// }
			