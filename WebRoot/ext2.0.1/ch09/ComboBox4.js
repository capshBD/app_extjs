Ext.onReady(
	function(){
		Ext.QuickTips.init();
		var store=new Ext.data.SimpleStore({
			fields:['chinese','english'],
			proxy:new Ext.data.HttpProxy({
				url:'citySearchServer2.jsp'
			})
		});
	var shengfenStore=new Ext.data.SimpleStore({
		fields:['chinese','english'],
		proxy:new Ext.data.HttpProxy({
			url:'shengfenSearchServer.jsp'
		})
	});
	
	var formpanel=new Ext.FormPanel({
			renderTo:cbx,
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
			new Ext.form.ComboBox({
					id:"shengfen",
					name:"shengfen",
					fieldLabel:"省份",
					triggerAction:"all",
					store:shengfenStore,
					displayField:"chinese",
					valueField:"english",
					mode:"remote",
					hiddenName:"shengfenValue",
					forceSelection : true,                //要求输入值必须在列表中存在
					typeAhead : true,                      //允许自动选择匹配的剩余部分文本
					listeners:{
					'select':function(){
						store.proxy=new Ext.data.HttpProxy({
							url:"citySearchServer2.jsp?shengfen=" + Ext.get("shengfenValue").getValue()
							});
							store.load();
						}
					}
			}),
		      new Ext.form.ComboBox({
					id:"city",
					name:"city",
					fieldLabel:"城市",
					triggerAction:"all",
					store:store,
					displayField:"chinese",
					valueField:"english",
					mode:"remote",
					hiddenName:"cityValue",
					listeners:{
						"select":function() {
							Ext.MessageBox.alert("城市","你选择的城市是" +  Ext.get("cityValue").getValue())
						}
					}
			  })
			]
		})
	}
);