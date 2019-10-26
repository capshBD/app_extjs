Ext.onReady(
	function() {
		var mypanel = new Ext.Panel({
			applyTo:'pn',
			width:400,
			height:300,
			title:'Panel',
			layout:'card',
			activeItem:0,
			items:[
				new Ext.Panel({
					title:'子面板一',
					width:200,
					height:100,
					html:'子面板一本体内容'
				}),
				new Ext.Panel({
					title:'子面板二',
					width:200,
					height:100,
					html:'子面板二本体内容'
				}),
				new Ext.Panel({
					title:'子面板三',
					width:200,
					height:100,
					html:'子面板三本体内容'
				})
			],
			buttons:[
				{text:'上一页',handler:changePage},
				{text:'下一页',handler:changePage}
			]
		});
		
		function changePage(btn) {
			var index = Number(mypanel.layout.activeItem.id.substring(12));
			if(btn.text == '上一页') {
				index -= 1;
				if(index < 1) {
					index = 1;
				}
			} else {
				index += 1;
				if(index > 3) {
					index = 3;
				}
			}
			mypanel.layout.setActiveItem('ext-comp-100'+index);
		}
	}
);