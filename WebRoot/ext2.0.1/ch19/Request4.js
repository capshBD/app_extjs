function login() {
	Ext.Ajax.request({
		url:"loginServerJson.jsp",
		jsonData:createJson(),
		callback:function(options,success,response){
			if(success){
				alert(response.responseText);
			}
		}
	});
}

function createJson() {
	//获得表单参数
	var uname = document.forms["loginForm"].username.value;
	var pw = document.forms["loginForm"].password.value;
	var  JsonObject = {
		username : uname,
		password : pw
	};
	return JsonObject;
}