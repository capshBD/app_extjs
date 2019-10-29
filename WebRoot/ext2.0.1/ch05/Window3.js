var i=1;
var myGroup;

Ext.onReady(
	function(){
		myGroup=new Ext.WindowGroup();
		Ext.get('newWin').on('click',newWindow);
		Ext.get('sendToback').on('click',sendToback);
		Ext.get('hideAll').on('click',hideAll);
	}
);

	function newWindow(){
		var myWindow=new Ext.Window({
			width:500,
			height:300,
			title:'win'+i++,
			manager:myGroup
		});
		myWindow.show();
	}
	
	function sendToback() {
		myGroup.sendToBack(myGroup.getActive());
	}

	function hideAll() {
		myGroup.hideAll();
	}