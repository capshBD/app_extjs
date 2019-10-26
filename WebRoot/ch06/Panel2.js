Ext.onReady(
	function(){
		new Ext.Panel({
				renderTo:'pn',
				width:400,
				height:300,
				title:'Panel',
				layout:'accordion',//可折叠
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