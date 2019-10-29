function login(){
Ext.Ajax.request({
	url:'loginServer.jsp',
	form:'loginForm',
	callback:function(options,success,response){
		if(success){
			alert(response.responseText);
		}
	}
});
}