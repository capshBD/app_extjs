Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
		var formPanle = new Ext.FormPanel({
			renderTo:"cbx",
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
				new Ext.form.ComboBox({
					name:'level',
					fieldLabel:'职称等级',
					lazyRender : true,
					triggerAction: 'all',
					transform : 'levelName'
				})
			]
		});
	}
);