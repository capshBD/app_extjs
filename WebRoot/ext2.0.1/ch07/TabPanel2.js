Ext.onReady(
	function() {
		new Ext.TabPanel({
			title:"tabpanel",
			width:300,
			height:200,
			renderTo:TabPanel,
			animScroll:true,//使用动画滚动效果
			enableTabScroll : true,//tab标签超宽时自动出现滚动按钮
				items:[
				{title:'tab标签页1',contentEl:"div1"},
				{title:'tab标签页2',contentEl:"div2"},
				{title:'tab标签页3',contentEl:"div3"},
				{title:'tab标签页4',contentEl:"div4"},
				{title:'tab标签页5',contentEl:"div5"},
				{title:'tab标签页6',contentEl:"div6"}
			]
		})
	}
);