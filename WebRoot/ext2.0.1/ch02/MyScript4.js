Ext.onReady(
	function helloword() {
		Ext.MessageBox.prompt("请输入","请输入你的姓名",function(e,text){
				if(e=='ok'){
					document.write(text);
				}
		},null,true);
	}
);