Ext.onReady(
	function(){
		Ext.QuickTips.init();
		var form=new Ext.FormPanel({
			renderTo:'tf',
			width:300,
			height:300,
			labelSeparator:' :',
			labelAlign:'right',
			frame:true,
			items:[
				new Ext.form.TriggerField({
					fieldLabel:'城市',
					id:'city',
					onTriggerClick:function(){
						var city=form.findById('city');
						Ext.MessageBox.alert('城市',city.getValue());
					}
				})
			]
		})
	}

)