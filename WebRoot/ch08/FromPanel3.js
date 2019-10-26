Ext.onReady(
	function(){
		var form=new Ext.FormPanel({
			renderTo:'tf',
			width:300,
			height:300,
			labelSeparator:' :',
			labelAlign:'right',
			frame:true,
			items:[
			new Ext.form.TextArea({
				id:'memo',
				width:250,
				height:250,
				fieldLabel:'请输入备注'
			})
			],
			buttons:[
				{text:'备注',handler:function(){
				Ext.MessageBox.alert('备注',form.findById('memo').getValue())
				}
					}
				]
		})
	}

)