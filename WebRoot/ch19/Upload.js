Ext.onReady(function(){
	Ext.get('btn').on('click',function(){
		Ext.Ajax.request({
		url:'../UploadServlet',
		isUpload:true,
		form:'upLoadForm',
		success:function(response,config){
			Ext.MessageBox.alert('上传','文件上传成功!');
			}
		})
	})
	
})