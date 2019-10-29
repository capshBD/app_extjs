function showUrl(value){
		return "<a href=http://"+value+" target='_blank'>"+value+"</a>";
}

function formatAge(value,metadata){
	if(value > 30) {
		metadata.attr = 'style="color:red"';
	}
	return value;
}

function formateID(value,metadata){
	if(value % 2 == 0) {
		metadata.attr = 'style="background-color:red"';
	}
	return value;
}


Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
	
	//记录类型
	var Person = new Ext.data.Record.create([
		{name:"id",mapping:"id"},
		{name:"name",mapping:"name"},
		{name:"age",mapping:"age"},
		{name:"homePage",mapping:"homePage"}
	]);
	
	//存储器
	var store = new Ext.data.Store({
		url:"../jsonData.action",
		reader:new Ext.data.JsonReader(
			{root:"persons",id:"id"},
		Person)
	});
	
	store.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	//表格面板
	var gridPanel = new Ext.grid.GridPanel({
		id:"gridPanel",
		renderTo:"hello",
		title:"人员信息",
		width:500,
		height:300,
		store:store,
		columns:[
			sm,
			{header:"id",dataIndex:"id",sortable:true,renderer:formateID},
			{header:"姓名",dataIndex:"name",sortable:true},
			{header:"年龄",dataIndex:"age",sortable:true,renderer:formatAge},
			{header:"个人主页",dataIndex:"homePage",sortable:true,renderer:showUrl}
		],
		autoExpandColumn:4,
		sm:sm,
		bbar:[
			{text:"获得所选行",handler:function(){
				var msg = "";
				var row = gridPanel.getSelectionModel().each(function(rec){
					msg = msg + rec.get("id") + "," + rec.get("name") + "," + 
						rec.get("age") + "," + rec.get("homePage") + "\n";
 				});
 				alert(msg);
			}}
		]
	})
});
