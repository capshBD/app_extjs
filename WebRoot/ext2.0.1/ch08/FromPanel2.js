Ext.onReady(
	function(){
		Ext.QuickTips.init();
	var form=new Ext.FormPanel({
			renderTo:'tf',
			width:300,
			height:300,
			title:'formPanel',
			labelSeparator:' :',
			labelAlign:'right',
			frame:true,
			items:[
			new Ext.form.TextField({
				fieldLabel:'你的姓名',
				id:'userName',
				validateOnBlu:true,      //是否在失去焦点时进行校验
				validationDelay:1000,  //校验延迟
				minLength:2,
				minLengthText:'请输入正确的姓名',
				allowBlank:false,			//是否允许为空
				blankText:"姓名不能为空",
				msgTarget :'side'			//提示信息显示方式
			}),
			new Ext.form.TextField({
				fieldLabel:'你的邮箱',
			    validateOnBlu:true,
				validationDelay:1000,
				regex:/^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,4}$/,
				regexText:'请输入正确邮箱'
			}),
			new Ext.form.TextField({
				fieldLabel:'你的密码',
				inputType:'password'
			})
			],
			buttons:[
				{text:'登录',handler:function(){
				Ext.MessageBox.alert('登录成功','用户名'+form.findById('userName').getValue());
					}
				}
					]
		});
	}

);