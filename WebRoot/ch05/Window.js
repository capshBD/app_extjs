Ext.onReady(
	function() {
		Ext.QuickTips.init();
		var myWindow = new Ext.Window({
			resizable:false,     //(是否可以改变大小，默认可以)
			maximizable:true, //(是否增加最大化，默认没有)
			minimizable:true,
			draggable:false,
			width:300,
			height:200,
			title:"window",
			closeAction:"hide",
			closable:false,
			constrain:true,  //constrain属性如果为true则强制此window控制在viewport，默认为false
			plain:true,		 //plain属性如果为true则主体背景透明，false则主体有小差别的背景色，默认为false
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
		
		myWindow.getTopToolbar().add(new Ext.Toolbar.Button(
			{
				tooltip:"保存",
				icon:"save.jpg",
				cls:"x-btn-icon"
			})
		);
		myWindow.getTopToolbar().add(new Ext.Toolbar.Button(
			{
				tooltip:"打开",
				icon:"open.jpg",
				cls:"x-btn-icon"
			})
		);
		
		Ext.get("openWin").on("click",function(){
			myWindow.show();
		});
		
		Ext.get("closeWin").on("click",function() {
			myWindow.close();
		}
		);
	}
);