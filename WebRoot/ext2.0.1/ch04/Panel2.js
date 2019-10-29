Ext.onReady(

	function(){
		Ext.QuickTips.init();
			var myPanel=new Ext.Panel({
				applyTo:'td',
				width:300,
				height:150,
				title:'唯吾独尊',
				html:'一江春水向东流',
				tools:[
				{id:"save",qtip:"保存"},
				{id:"help",qtip:"帮助"},
				{id:"close",qtip:"关闭"}
				],
				tbar:new Ext.Toolbar({
					width:300,
					height:20
				})
			});
		var fileMenu=new Ext.menu.Menu({
			items:[
			{text:'打开'},
			{text:'保存'},
			{text:'关闭'}
			]
		});
	
	var editMenu=new Ext.menu.Menu({
			items:[
			{text:'复制'},
			{text:'黏贴'},
			{text:'剪切'}
			]
	});
	
	myPanel.getTopToolbar().add(new Ext.Toolbar.SplitButton({text:'文件',menu:fileMenu}));
	myPanel.getTopToolbar().add(new Ext.Toolbar.Separator());
	myPanel.getTopToolbar().add(new Ext.Toolbar.Button({text:'编辑',menu:editMenu}));
	}
);