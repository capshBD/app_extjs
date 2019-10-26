Ext.onReady(
	function() {
	var tabPanel=new Ext.TabPanel({
			title:"tabpanel",
			width:300,
			height:200,
			renderTo:TabPanel,
			animScroll:true,//使用动画滚动效果
			enableTabScroll : true,//tab标签超宽时自动出现滚动按钮
			items:[
				{title:'tab标签页1',html:'tab标签页1内容'},
				{title:'tab标签页2',html:'tab标签页2内容'},
				{title:'tab标签页3',html:'tab标签页3内容'},
				{title:'tab标签页4',html:'tab标签页4内容'},
				{title:'tab标签页5',html:'tab标签页5内容'},
				{title:'tab标签页6',html:'tab标签页6内容'}
			],
			buttons:[
				{text:'添加选项页',handler:addTabPage}
				]
		});
		function addTabPage(){
			var index=tabPanel.items.length+1;
			var tabPage=tabPanel.add({
			    title:"tab标签页" + index,
				html:"tab标签页" + index + "内容",
				closable:true
			});
			tabPanel.setActiveTab(tabPage);
		}
	}
);