Ext.onReady(
	function(){
		new Ext.FormPanel({
			renderTo:'tf',
			width:300,
			height:300,
			labelSeparator:' :',
			labelAlign:'right',
			frame:true,
			items:[
			new Ext.form.TextField({
				fieldLabel:'你的姓名'
			})
			]
		})
	}

)