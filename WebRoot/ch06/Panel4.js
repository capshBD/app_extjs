Ext.onReady(
	function() {
		new Ext.Panel({
			applyTo:"pn",
			width:400,
			height:300,
			title:"Panel",
			layout:"anchor",
			items:[
				{
					title:"子面板一",
					anchor:"50% 50%",
					html:"子面板一本体内容"
				},
				{
					title:"子面板二",
					anchor:"50% 50%",
					html:"子面板二本体内容"
				}
			]
		});
	}
);