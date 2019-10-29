Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
	
	var data = [
		{
			id:1,
			name:"张三",
			age:45,
			homePage:"www.ibeifeng.com"
		},
		{
			id:2,
			name:"李四",
			age:23,
			homePage:"www.163.com"
		},
		{
			id:3,
			name:"王五",
			age:45,
			homePage:"bbs.ibeifeng.com"
		},
		{
			id:4,
			name:"赵六",
			age:90,
			homePage:"www.qq.com"
		}
	
	];
	
	//记录类型
	var Person=new Ext.data.Record.create([
		{name:'id',mapping:'id'},
		{name:'name',mapping:'name'},
		{name:'age',mapping:'age'},
		{name:'homePage',mapping:'homePage'}
	]);
	//存储器
	var store=new Ext.data.Store({
		data:data,
		reader:new Ext.data.ArrayReader({id:'id'},Person)
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
		{header:'年龄',dataIndex:'age',sortable:true},
		{header:'主页',dataIndex:'homePage',sortable:true}
		],
		autoExpandColumn:1
	})
})