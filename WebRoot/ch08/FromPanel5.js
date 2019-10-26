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
				{
					layout:"column",
					width:150,
					items:[
						new Ext.form.Label({
							text:"性别:"							
						}),
						new Ext.form.Radio({
							name:"sex",
							boxLabel:"男"
						}),
						new Ext.form.Radio({
							name:"sex",
							boxLabel:"女"
						})
					]
				},
				{
					layout:"column",
					width:150,
					items:[
						new Ext.form.Label({
							text:"爱好:"							
						}),
						new Ext.form.Checkbox({
							name:"aihao",
							boxLabel:"篮球"
						}),
						new Ext.form.Checkbox({
							name:"aihao",
							boxLabel:"足球"
						})
					]
				}
			]
		});
	}
);