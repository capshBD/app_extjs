Ext.onReady(
	function() {
		new Ext.TabPanel({
			title:"tabpanel",
			width:300,
			height:200,
			applyTo:"TabPanel",
			animScroll:true,//使用动画滚动效果
			enableTabScroll : true,//tab标签超宽时自动出现滚动按钮
			autoTabs:true,//自动扫描页面中的div然后将其转换为标签页
			deferredRender : false,//不进行延时渲染
			activeTab:0//默认激活第一个tab页
		})
	}
);