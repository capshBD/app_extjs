Ext.onReady(
	function(){
		var mymenu=new Ext.menu.Menu();
		
		mymenu.add({
			text:'文件',
			menu:[
				{text:"打开"},
				{text:"保存"},
				{text:"另存为"},
				{text:"退出"}
			]
		});
		mymenu.add({
			text:"编辑",
			menu:[
				{text:"复制"},
				{text:"黏贴"},
				{text:"剪切"}
			]
		});
		mymenu.add({
			text:'字体大小',
			menu:[
				new Ext.menu.CheckItem({text:'一号',group:'ziti'}),
				new Ext.menu.CheckItem({text:'二号',group:'ziti'}),
				new Ext.menu.CheckItem({text:'三号',group:'ziti'}),
				new Ext.menu.CheckItem({text:'四号',group:'ziti'})
			]
		});
		mymenu.add({
			text:"字体效果",
			menu:[
				new Ext.menu.CheckItem({text:"粗体"}),
				new Ext.menu.CheckItem({text:"斜体"}),
				new Ext.menu.CheckItem({text:"下划线"})
			]
		});
		mymenu.add({
			text:'其他',
			menu:[
			{text:'日期选择器',menu:new Ext.menu.DateMenu()},
			{text:'颜色选择器',menu:new Ext.menu.ColorMenu()}
			]
		});
		mymenu.add(new Ext.menu.TextItem({text:"文本菜单项"}));
		mymenu.add('文本菜单项二');
		
		var showmenubar=Ext.get('showMenubar');
		showmenubar.on('click',function(){
			mymenu.show(showmenubar);
		});
	}
);