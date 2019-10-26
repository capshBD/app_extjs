Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../ext/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var formPanle = new Ext.FormPanel({
			renderTo:"TestVtype",
			title:"formPanel",
			width:300,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
				new Ext.form.TextField({
					name:"email",
					fieldLabel:"邮箱",
					vtype:"email",
					vtypeText:"请输入正确的邮箱格式"
				}),
				new Ext.form.TextField({
					name:"url",
					fieldLabel:"URL",
					vtype:"url",
					vtypeText:"请输入正确的URL"
				}),
		new Ext.form.RadioGroup({
			        fieldLabel : '职工性别',
			        autoHeight : true,
			        width : 100,
      				items : [
      						new Ext.form.Radio({
                            id : 'male',
                            name : 'employeeSex',
                            checked : true,
                            width : '50',
                            boxLabel : '男',inputValue:'1'
                        }), 
            			    new Ext.form.Radio({
                            id : 'female',
                            name : 'employeeSex',
                            width : '50',
                            boxLabel : '女',inputValue:'0'
                        })
                        ]
   				 }),
   				new Ext.form.CheckboxGroup({
   					fieldLabel:'爱好',
   					name:'hobby',
   					width:150,
   					items:[
   						new Ext.form.Checkbox({
   							name:'hob',
   							boxLabel : '打球',
   							inputValue:'打球'
   						}),
   						new Ext.form.Checkbox({
   							name:'hob',
   							boxLabel : '上网',
   							inputValue:'上网'
   						}),
   						new Ext.form.Checkbox({
   							name:'hob',
   							boxLabel : '英语',
   							inputValue:'英语'
   						})
   					]
   				})
			]
		});
	}
);