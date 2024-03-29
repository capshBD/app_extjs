Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
	
	//数据
	var data=[
		[1,'熊猫',22],
		[2,'老虎',23],
		[3,'大象',56],
		[4,'小狗',12]
	];
	
	//记录类型
	var Person=new Ext.data.Record.create([
		{name:'id',mapping:0},
		{name:'name',mapping:1},
		{name:'age',mapping:2}
	]);
	//存储器
	var store=new Ext.data.Store({
		data:data,
		reader:new Ext.data.ArrayReader({id:0},Person)
	});
	
	//表格面板
	var gridpanel=new Ext.grid.GridPanel({
		id:'gridpanel',
		renderTo:gp,
		title:'人员信息',
		width:500,
		height:300,
		store:store,
		columns:[
		{header:'id',dataIndex:'id',sortable:true},
		{header:'姓名',dataIndex:'name',sortable:true},
		{header:'年龄',dataIndex:'age',sortable:true}
		],
		autoExpandColumn:1
	})
})