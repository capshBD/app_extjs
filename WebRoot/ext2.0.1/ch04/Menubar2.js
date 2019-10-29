Ext.onReady(
	function(){
		var mymenu=new Ext.menu.Menu();
		
		mymenu.add({
			text:'一级菜单',
			menu:[{
				text:'二级菜单',
					menu:[{
						text:'三级菜单',
							menu:[{
								text:'四级菜单'
							}]
					}]
			}]
		});
		var showmenubar=Ext.get('showMenubar');
		showmenubar.on('click',function(){
			mymenu.show(showmenubar);
		});
	}
);