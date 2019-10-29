Ext.onReady(
	function helloword() {
		Ext.MessageBox.alert("欢迎","孤帆远影碧空尽",function(e){
				if(e=='ok'){
					document.write("单击了确定");
				}else{
					document.write("单击了取消");
				}
;		});
	}
);