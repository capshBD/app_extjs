Ext.onReady(
	function(){
		new Ext.Panel({
			applyTo:"pn",
			width:400,
			height:300,
			title:"Panel",
			layout:"form",
			labelAlign:"left",
			items:[
				new Ext.form.TextField({
					fieldLabel:'用户名',
					allowBlank : false
				}),
				new Ext.form.TextField({
					fieldLabel:'密码',
					allowBlank : false
				})
			]
		})
	
	}

)