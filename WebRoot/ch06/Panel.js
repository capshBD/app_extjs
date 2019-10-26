Ext.onReady(
	function(){
		new Ext.Panel({
				renderTo:'pn',
				width:400,
				height:300,
				title:'Panel',
				layout:'fit',
				items:[
				{
					title:'子面板一',
					width:200,
				    height:150
				},
				{
				   title:'子面板二',
					width:200,
				    height:150	
				}
				]
				
		});
	}
);