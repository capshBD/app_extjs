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
		myPanel.getTopToolbar().add(new Ext.Toolbar.Fill())	;
		myPanel.getTopToolbar().add(new Ext.Toolbar.Button({text:"按钮1"}));
		//分隔线
		myPanel.getTopToolbar().add(new Ext.Toolbar.Separator());
		myPanel.getTopToolbar().add(new Ext.Toolbar.Button({text:"按钮2"}));
		//分隔线
		myPanel.getTopToolbar().add(new Ext.Toolbar.Separator());
		//空格
		myPanel.getTopToolbar().add(new Ext.Toolbar.Spacer());
		myPanel.getTopToolbar().add(new Ext.Toolbar.Spacer());
		myPanel.getTopToolbar().add(new Ext.Toolbar.Spacer());
		myPanel.getTopToolbar().add(new Ext.Toolbar.Spacer());
		myPanel.getTopToolbar().add(new Ext.Toolbar.Button({text:"按钮3"}));
		myPanel.getTopToolbar().add(new Ext.Toolbar.TextItem("文本1"));
		myPanel.getTopToolbar().add(new Ext.Toolbar.TextItem({text:"文本2"}));
			
	}
);