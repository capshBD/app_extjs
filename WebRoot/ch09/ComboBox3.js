Ext.onReady(
	function(){
		var store=new Ext.data.SimpleStore({
			fields:['chinese','english'],
			proxy:new Ext.data.HttpProxy({
				url:"citySearchServer2.jsp"
			})
		});
	
		var fromPanel=new Ext.FormPanel({
			renderTo:cbx,
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"left",
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
					mode:"remote",
					hiddenName:'cityValue',
					queryParam:'shengfen', //查询参数
					allQuery:'hunan',   //查询值
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