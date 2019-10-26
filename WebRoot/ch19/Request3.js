function login() {
	Ext.Ajax.request({
		url:"loginServerXml.jsp",
		xmlData:createXML(),
		callback:function(options,success,response){
			if(success){   
				alert(response.responseText);
			}
		}
	});
}

function createXML() {
	//接受表单参数
	var uname = document.forms["loginForm"].username.value;
	var pw = document.forms["loginForm"].password.value;
	//创建XML文档对象
	var dom = new ActiveXObject("msxml2.DOMDocument");
	//头部声明
	var header = dom.createProcessingInstruction("xml", "version='1.0'");
	dom.appendChild(header);
	var root = dom.createElement("userinfo");
	var username = dom.createElement("username");
	username.text = uname;
	var password = dom.createElement("password");
	password.text = pw;
	root.appendChild(username);
	root.appendChild(password);
	dom.appendChild(root);
	return dom;
}