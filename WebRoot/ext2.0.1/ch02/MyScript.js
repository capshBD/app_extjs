Ext.onReady(
	function helloword() {
		Ext.MessageBox.alert("欢迎","孤帆远影碧空尽",function(){
			    alert(Ext.MessageBox.CANCEL)	;
				document.write("关闭了对话框");
		});
	
	}
);