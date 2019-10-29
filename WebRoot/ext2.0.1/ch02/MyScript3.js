Ext.onReady(
	function helloword() {
		Ext.MessageBox.confirm("保存","是否保存文件",function(e){
				if(e=='yes'){
					document.write("保存文件");
				}else{
					document.write("不保存文件");
				}
;		});
	}
);