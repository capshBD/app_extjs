function showUrl(value){
	return "<a href="+"http://"+value+"target='_blank'>"+value+"</a>"
}
Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
	
		//数据
	var data=[
		[1,'熊猫',22,'www.qq.com'],
		[2,'老虎',23,'www.qq.com'],
		[3,'大象',56,'www.qq.com'],
		[4,'小狗',12,'www.qq.com']
	];
	
	//存储器
	var store=new Ext.data.SimpleStore({
		data:data,
		fields:['id','name','age','homePage']
	});
	
	//列模型
	var com=new Ext.grid.ColumnModel([
		{header:'id',dataIndex:'id',sortable:true},
		{header:'姓名',dataIndex:'name',sortable:true},
		{header:'年龄',dataIndex:'age',sortable:true},
		{header:'主页',dataIndex:'homePage',sortable:true,renderer:showUrl}
	]);
	
	//表格面板
	var gridpanel=new Ext.grid.GridPanel({
		id:'gridpanel',
		renderTo:gp,
		title:'人员信息',
		width:500,
		height:300,
		store:store,
		cm:com,
		autoExpandColumn:1
	})
})