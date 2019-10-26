Ext.onReady(
	function(){
		var store=new Ext.data.SimpleStore({
			fields:['chinese','english'],
			data:[
				["北京","beijing"],
				["广州","guangzhou"],
				["上海","shanghai"],
				["长沙","changsha"]
			]
		});
	
		var fromPanel=new Ext.FormPanel({
			renderTo:cbx,
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
				new Ext.form.ComboBox({
					id:'city',
					name:'city',
					fieldLabel:'城市',
					triggerAction:"all",
					store:store,
					typeAhead : true,
					displayField:"chinese",
					valueField:'english',
					mode:"local",
					hiddenName:'cityValue',
					listeners:{
						'select':function(){
							Ext.MessageBox.alert('城市','你选的城市是'+Ext.get('cityValue').getValue())
						}
					}
				})
			]
			}
		
		);
	}
);