<?php
  header("Content-type:text/html;charset=utf-8");

//   echo '这是一个后台语言中的输出信息。。。';
// 后台语言是可以加载可是解析html代码 的，可以通过include将html代码引入过来
//		include  '/views/dashboard/index.html';
//		include  '/views/dashboard/login.html';
//		include  '/views/teacher/list.html';
//		include  '/views/user/list.html';

	//	$_SERVER 可以获取有关服务器的一切信息，其中就包括用户的访问网址
	//  index.php后面的地址信息，是存在于PATH_INFO这个属性当中的
		//echo $_SERVER['PATH_INFO'];

			//var_dump($_SERVER);

    $path = $_SERVER["PATH_INFO"];   ///views/dashboard/index

    include $path.".html";  // 获取用户输入的内容再拼接上.html页面，就可以返回给浏览器供浏览器渲染了

    // 此时的index.php就相当于是一个入口路由或是一个路由导航

    //http://studyit.com/index.php/index
?>