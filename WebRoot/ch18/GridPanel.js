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
	Ext.QuickTips.init();
	Ext.form.Field.prototype.msgTarget="qtip";
	
	var Person=new Ext.data.Record.create([
		{name:'id',mapping:'id'},
		{name:'name',mapping:'name'},
		{name:'age',mapping:'age'},
		{name:'homePage',mapping:'homePage'},
		{name:"jianli",mapping:"jianli"}
	]);
	
	//存储器
	var store = new Ext.data.Store({
		url:"data.xml",	
		reader:new Ext.data.XmlReader(
			{record:"row",id:'id'},Person)
	})
	store.load();
	var sm=new Ext.grid.CheckboxSelectionModel();		//复选框选择模式
	//列模型
	var coM = new Ext.grid.ColumnModel([
			sm,
			{header:"id",dataIndex:"id",sortable:true,renderer:formatId},
			{header:"姓名",dataIndex:"name",sortable:true,
				editor:new Ext.form.TextField({
					allowBlank:false,
					blankText:"姓名不能为空",
					minLength:2,
					maxLength:10,
					minLengthText:"姓名不能少于{0}个字符",
					maxLengthText:"姓名不能多于{0}个字符",
					selectOnFocus:true
				})
			},
			{header:"年龄",dataIndex:"age",sortable:true,renderer:formatAge},
			{header:"个人首页",dataIndex:"homePage",sortable:true,renderer:showURL}
	]);
	
	//表格面板
	var gridPanel = new Ext.grid.EditorGridPanel({
		id:"gridPanel",
		renderTo:"gp",
		title:"人员信息",
		width:500,
		height:300,
		store:store,
		cm:coM,
		autoExpandColumn:3,
		sm:sm,
		bbar:[
			{text:"获得所选行",handler:function(){
				var msg='';
				var row = gridPanel.getSelectionModel().each(function(rec){
					msg+=rec.get('id')+','+rec.get('name')+','+rec.get('age')+'\n';
				});
				alert(msg);
			}}
		],
	viewConfig:{
		enableRowBody:true,//使用行体
		getRowClass:function(record,index,rowParams,store){
			rowParams.body="<div style='padding:10px,10px,10px,10px'>"+record.get('jianli')+"</div>";
			rowParams.bodyStyle='background-color:#CCFFFF';
			rowParams.cols=5;
			}
		}
	})
});
