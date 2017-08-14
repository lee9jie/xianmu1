// NProgress.start();
//
// NProgress.done();
//
// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

// 验证是否登陆，如果没有登陆的话，则跳转到登陆页面
define(['jquery','cookie','template'], function ($,ck,template) {
	if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
		window.location.href = '/login';
	}
	if (location.pathname != '/login' && location.pathname != './dashboard/login' && location.pathname != './views/dashboard/login') {
		var html = template('tlp_avatar', JSON.parse($.cookie('tcInfo')));
		$('.aside>.profile').html(html)
	}
   $('#logout').on('click',function(){
       $.ajax({
		   url:'/api/logout',
		   type:'post',
		   success: ()=>{
			   alert('退出成功');
			   location.href = '/login'
		   }

	   })
   })
})