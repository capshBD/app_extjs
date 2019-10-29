Ext.onReady(
	function helloword() {
		Ext.MessageBox.show({
			title:'欢迎',
			msg:'一战成名',
			buttons:Ext.MessageBox.OKCANCEL,
			icon:Ext.MessageBox.INFO,
			prompt:true,	        //弹出框带有输入框
			multiline:true,			//设为true，则弹出框带有多行输入框
			width:400,
			defaultTextHeight :150
		});
	}
);