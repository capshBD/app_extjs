Ext.onReady(function(){
	var panel = new Ext.Panel({
		renderTo:Ext.getBody(),
		id:"panel",
		title:"panel"
	});
	
	var hi = null;
	
	alert(Ext.isEmpty(hi));
	
	var str = "123";
	var str2 = "";
	var str3 = null;
	
	alert(Ext.isEmpty(str,true)); //允许为空
	alert(Ext.isEmpty(str2,true)); //允许为空
	alert(Ext.isEmpty(str3,true)); //允许为空
	
	alert(Ext.isEmpty(str,false)); //不允许为空
	alert(Ext.isEmpty(str2,false)); //不允许为空
	alert(Ext.isEmpty(str3,true)); //不允许为空

});
