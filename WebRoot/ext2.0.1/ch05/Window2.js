Ext.onReady(
	function() {
		Ext.QuickTips.init();
		
		var myWindow = new Ext.Window({
			width:500,
			height:400,
			title:"window",
			closeAction:"hide",
			closable:false,
			tools:[
				{id:"save",qtip:"保存"},
				{id:"help",qtip:"帮助"},
				{id:"close",qtip:"关闭",handler:function() {
					myWindow.hide();
				}
				}
			],
			tbar:new Ext.Toolbar({
				height:30
			})
		});
		myWindow.show();
		
		
		var mymenu = new Ext.menu.Menu({
			items:[
				{text:"保存",icon:"save.jpg"},
				{text:"打开",icon:"open.jpg"}
			]
		});
		
		myWindow.getTopToolbar().add(new Ext.Toolbar.Button(
			{
				text:"文件",
				menu:mymenu
			})
		);
		
	}
);