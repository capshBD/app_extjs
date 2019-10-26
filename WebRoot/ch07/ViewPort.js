Ext.onReady(
	function(){
		new Ext.Viewport({
			title:"ViewPort示例",
			layout:"border",
			items:[
			{title:'上边',region:'north',html:'上面'},
			{title:'下边',region:'south',html:'下面'},
			{title:'中间',region:'center'},
			{title:'左边',region:'west'},
			{title:'右边',region:'east'}
			]
		});
	}
);