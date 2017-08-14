define(['jquery','cookie'],function($){
            $('#formLogin').submit(function (e){
          var data =  $(this).serializeArray(); 
                $.ajax({
                  url:'/api/login',
                  type:'post',
                  data:data,
                  success:function (result){
                     alert('登陆成功...');
                 $.cookie('tcInfo',JSON.stringify(result.result))
                        location.href = '/' ;
                  },
                  error:function (errInfo){
                    alert('用户名或是密码错误...');
                  }
                }) 
          return false;  
        })
})