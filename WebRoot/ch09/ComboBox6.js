Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
		var proxy=new Ext.data.HttpProxy({
			url:'../fenye.action'
		});
		
		var fund=Ext.data.Record.create([
			{name:'measureid',type:'string',mapping:'MEASUREID'},
			{name:'measurename',type:'string',mapping:'MEASURENAME'}
		]);
		
		var reader=new Ext.data.JsonReader({
			totalProperty:'totalProperty',
			root:'results'
		},fund);
		
		var store=new Ext.data.Store({
			proxy:proxy,
			reader:reader
		});
		
		var cmobo=new Ext.form.ComboBox({
			store:store,
			renderTo:cbx,
			width:300,
			emptyText:'请选择基金',
			mode:'remote',
			pageSize:5,
			triggerAction:'all',
			displayField:'measurename',
			valueField:'measureid',
			readOnly:true,
			listWidth:300,
			listeners:{
				'select':function(combo){
							alert(combo.getValue());
							}
			}
		});
	
		//分页工具栏
		var page_toolbar =  new Ext.PagingToolbar({
					region:'south',
					pageSize:5,
					store: store,
					displayInfo: true,
					displayMsg: '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
					emptyMsg: "没有记录",
					items:[
					'&nbsp;&nbsp;每页显示记录数量：',
					cmobo
					]
					});
	
	}
);