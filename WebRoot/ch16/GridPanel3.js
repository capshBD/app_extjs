function showURL(value) {
	return "<a href=" +" http://" + value + " target='_blank'>" + value + "</a>"
}

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
	
	//数据
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
	
	//存储器
	var store = new Ext.data.JsonStore({
		data:data,
		fields:["id","name","age","homePage"]
	});
	
	//列模型
	var coM = new Ext.grid.ColumnModel([
			{header:"id",dataIndex:"id",sortable:true},
			{header:"姓名",dataIndex:"name",sortable:true},
			{header:"年龄",dataIndex:"age",sortable:true},
			{header:"个人首页",dataIndex:"homePage",sortable:true,renderer:showURL}
	]);
	
	//表格面板
	var gridPanel = new Ext.grid.GridPanel({
		id:"gridPanel",
		renderTo:"gp",
		title:"人员信息",
		width:500,
		height:300,
		store:store,
		cm:coM,
		autoExpandColumn:3
	})
});
