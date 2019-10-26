Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Ext/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var formPanle = new Ext.FormPanel({
			renderTo:"TestHidden",
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
				new Ext.form.TextField({
					name:"username",
					fieldLabel:"用户名"
				}),
				new Ext.form.Hidden({
					name:"page",
					value:"123",
					fieldLabel:"页码"
				}),
				new Ext.form.TextField({
					name:"password",
					inputType:"password",
					fieldLabel:"密码"
				})
			]
		});
	}
);