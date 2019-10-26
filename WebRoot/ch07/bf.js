Ext.onReady(function(){

	var tabPanel=new Ext.TabPanel({
			title:'主面板',
			region:'center',
			activeTab:0,
			autoScroll:true,
			enableTabScroll:true,
			items:[{
				title:'welcome',
				html:'welcome to home!'
			}]
	});
	
	new Ext.Viewport({
		title:'bei feng system',
		layout:'border',
		items:[{
			title:'系统',
			html:'html',
			region:'north',
			height:100
		},{
			title:'menu',
			region:'west',
			width:150,
			tbar:[{
				text:'operater',
				menu:[{
					text:'myorder',
					handler:function(){
						myOrder('order','googs')
					}
				},{
					text:'balman',
					handler:function(){
						myOrder('bal','money')
					}
				}]
			}]
		},tabPanel]
	})
	
	function myOrder(title,content){
		var tabpage=tabPanel.add({
			title:title,
			html : content,
			closable : true//允许关闭
		});
	tabPanel.setActiveTab(tabpage);
	}
})