function showURL(value) {
	return "<a href=" +" http://" + value + " target='_blank'>" + value + "</a>"
}

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
	
	//存储器
	var store = new Ext.data.Store({
		url:"data.xml",	
		reader:new Ext.data.XmlReader({
			record:"row"
		},["id","name","age","homePage"])
	})
	
	store.load();
	
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
