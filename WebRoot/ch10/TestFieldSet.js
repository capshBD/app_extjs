Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Ext/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var formPanle = new Ext.FormPanel({
			renderTo:"TestFieldSet",
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
				new Ext.form.FieldSet({
					title:"基本信息",
					height:100,
					collapsible:true,
					items:[
						new Ext.form.TextField({
							name:"username",
							fieldLabel:"用户名"
						}),
						new Ext.form.TextField({
							name:"password",
							inputType:"password",
							fieldLabel:"密码"
						})
					]
				}),
				new Ext.form.FieldSet({
					title:"高级信息",
					height:100,
					collapsible:true,
					items:[
						new Ext.form.TextField({
							name:"name",
							fieldLabel:"姓名"
						})
					]
				})
			]
		});
	}
);