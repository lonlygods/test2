		var user = document.getElementById('username');
		var password = document.getElementById('password');
		var oError = document.getElementById('error_box');
		var login = document.getElementById('login');
		var t = true;
		var f = false;
		user.onkeyup = function(){
			var u = user.value;
			if(u == 'admin'){
				oError.style.color = 'lawngreen';
				oError.innerHTML = '账号正确';
				t = true;
			}else{
				oError.style.color = 'red';
				oError.innerHTML = '账号输入错误';
				f = false;
			}
		}
		
		password.onkeyup = function(){
			var pass = password.value;
			if(pass == 'admin'){
				oError.style.color = 'lawngreen';
				oError.innerHTML = '密码正确';
				t = true;
			}else{
				oError.style.color = 'red';
				oError.innerHTML = '密码输入错误';
				f = false;
			}
		}
		
// 验证码
		var verifyCode = new GVerify("v_container");
		login.onclick = function() {
			var res = verifyCode.validate(document.getElementById("code_input").value);
			var u = user.value;
			var pass = password.value;
			
			if(u !== 'admin'||pass !== 'admin'){
				oError.style.color = 'red';
				oError.innerHTML = '账号或密码错误';
				f = false;
			}else if(res) {
			if(t == true & f == true)
				oError.style.color = 'lawngreen';
				oError.innerHTML = '登录成功';
				window.location.href=('home.html');
			} else {
				oError.style.color = 'red';
				oError.innerHTML = '验证码错误';
			}
		}

// 扫码登录
		document.getElementById('smdl').onclick = function(){
			document.getElementById('sm').style.opacity = '1';
			document.getElementById('zh').style.display = 'none';
		}
		document.getElementById('zhdl').onclick = function(){
			document.getElementById('zh').style.display = 'block';
			document.getElementById('sm').style.opacity = '0';
		}
		