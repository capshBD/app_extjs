Ext.onReady(
	function() {
		new Ext.Panel({
			applyTo:"pn",
			width:400,
			height:300,
			title:"Panel",
			layout:"absolute",
			items:[
				{
					title:"子面板一",
					x:"10%",
					y:"10%",
					width:300,
					height:200,
					html:"子面板一本体内容"
				}
			]
		});
	}
);