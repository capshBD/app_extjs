Ext.onReady(
	function() {
		Ext.QuickTips.init();		
		var formPanle = new Ext.FormPanel({
			renderTo:"tf",
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
				new Ext.form.NumberField({
					fieldLabel:"整数",
					allowDecimals:false,  //不允许输入小数
					allowNegative:false,   //不允许输入负数
					nanText:"请输入有效的整数"
				})
			]
		});
	}
);