Ext.onReady(
	function helloword() {
		Ext.MessageBox.show({
			title:'请等待',
			msg:'正在加载',
			progress:true,			// 设为true，显示进度条
			progressText:'waiting',
			width:500,
			wait:true,				//设为true，动态显示progress
			waitConfig:{
				interval:600,
				duration:5000,
				fn:function(){
					Ext.MessageBox.hide();
					Ext.MessageBox.alert('success','all item successfully!');
				}
			},
			icon:Ext.MessageBox.INFO,		//弹出框内容前面的图标
			width:400,
			defaultTextHeight :150
		});
		
		var f=function(v){
			return function(){
				if(v==12){
					Ext.Msg.hide();
					Ext.Msg.alert('success','all item successfully!');
				}else{
					var i=v/11;
					
					Ext.Msg.updateProgress(i,Math.round(i*100)+'%完成');
				}
			
			}
		}
		
		for (var i = 0; i < 13; i++) {
			setTimeout(f(i),i*500);
		}
	}
);