Ext.onReady(function(){
	var mypanel=new Ext.Panel({
		renderTo:hi,
		id:'mypanel',
		title:" "
	})
	Ext.getCmp("mypanel").setWidth(800);
	Ext.getCmp("mypanel").setHeight(300);
	Ext.getCmp("mypanel").setTitle("标题");
})