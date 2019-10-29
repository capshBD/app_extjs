Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Ext/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var formPanle = new Ext.FormPanel({
			renderTo:"TestTimeField",
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
				new Ext.form.TimeField({
					id:"time",
					name:"time",
					fieldLabel:"选择时间",
					format:"g时i分s秒 A",
					increment:10,
					minValue:"11:00",
					maxValue:"18:00",
					minText:"必须大于{0}",
					maxText:"必须小于{0}",
					invalidText:"无效的时间格式"
				})			
			]
		});
	}
);