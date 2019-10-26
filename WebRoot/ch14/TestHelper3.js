Ext.onReady(function(){
	var tmp=Ext.DomHelper.createTemplate("<div id='{id}' class='{cls}'>{value}</div>");
	tmp.append(Ext.get("good"),{id:"test1",cls:"class1",value:"hello,World1"});
});