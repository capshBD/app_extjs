function formatAge(value,metadata){
	if(value>30){
		metadata.attr="style='color:red'";
	}
	return value;
}

function formatId(value,metadata){
	if(value%2==0){
		metadata.attr="style='background-color:green'";
	}
	return value;
}
function showURL(value) {
	return "<a href=" +" http://" + value + " target='_blank'>" + value + "</a>"
}

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
	
	var Person=new Ext.data.Record.create([
		{name:'id',mapping:'id'},
		{name:'name',mapping:'name'},
		{name:'age',mapping:'age'},
		{name:'homePage',mapping:'homePage'}
	]);
	
	//存储器
	var store = new Ext.data.Store({
		url:"data.xml",	
		reader:new Ext.data.XmlReader(
			{record:"row",id:'id'},Person)
	})
	
	store.load();
	
	//列模型
	var coM = new Ext.grid.ColumnModel([
			{header:"id",dataIndex:"id",sortable:true,renderer:formatId},
			{header:"姓名",dataIndex:"name",sortable:true},
			{header:"年龄",dataIndex:"age",sortable:true,renderer:formatAge},
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
		autoExpandColumn:3,
		sm:new Ext.grid.CellSelectionModel(),
		bbar:[
			{text:"查看选择的单元格信息",handler:function(){
				var cell = gridPanel.getSelectionModel().getSelectedCell();		//获取单元格,几行几列
				alert(cell);
				alert(cell[0]);																				//获取行
				alert(cell[1]);																				//获取列
				alert(gridPanel.getColumnModel().getDataIndex(cell[1]));			//获取此列字段名
				var colName = gridPanel.getColumnModel().getDataIndex(cell[1]);
				alert(gridPanel.getStore().getAt(cell[0]).get(colName));				//获取单元格属性值
			}}
		]
	})
});
