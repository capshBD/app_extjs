Ext.onReady(function(){
    Ext.regModel('Ext.us.User',{
        fields:[{
            name:'username',type:'auto'
        },{
            name:'password',type:'auto'
        }]
    });
    Ext.regModel('Ext.us.Type',{
       fields:[{
            name:'id',type:'auto'
        },{
            name:'desc',type:'auto'
        }]
    });
    var store=Ext.create('Ext.data.Store',{
        model:'Ext.us.Type',
        proxy:{type:'memory'},
        autoLoad: true,
        data:[
            {id:'001',desc:'货币类'},
            {id:'002',desc:'混合类'},
            {id:'003',desc:'股票类'},
            {id:'004',desc:'债券类'},
            {id:'005',desc:'指数类'}]
    });
    
     Ext.regModel('Bank',{
	     fields:[{name:'BANK_ORG_ID',type:'string'},
	             {name:'BANK_ORG_NAME',type:'string'}]
     });
    var tstore=Ext.create('Ext.data.Store',{
        model:'Bank',
        pageSize:20,
        proxy:{
             type:'ajax',
             url:pathUrl+'/bankInfo.action',
             reader:{
                type:'json',
                root:'data',
                totalProperty:'total'
            }
        }
     });
     
    var task=new Ext.util.DelayedTask();
    var user=Ext.create('Ext.us.User',{username:'119@qq.com',password:'123435'});
    
            // 定义函数: 验证再次输入的密码是否一致
           Ext.apply(Ext.form.VTypes, {
              /* confirmPwd: function (value, field) {
                    // field 的 confirmPwd 属性
                  if (field) {
                      var first = field.first;
                      var second = field.second;
                     
                     var firstField = Ext.getCmp(first);
                     var seconField = Ext.getCmp(second);
                    var firstPwd = firstField.getValue();
                   var secondPwd = seconField.getValue();
                  if (firstPwd == secondPwd) {
                      return true;
                   } else {
                        return false;
                    }
                }
           },*/
             confirmPwd: function (value, field) {
                    // field 的 confirmPwd 属性
                  if (field) {
                      var first = field.confirmPwd.first;
                      var second = field.confirmPwd.second;
                     
                     var firstField = Ext.getCmp(first);
                     var seconField = Ext.getCmp(second);
                    var firstPwd = firstField.getValue();
                   var secondPwd = seconField.getValue();
                  if (firstPwd == secondPwd) {
                      return true;
                   } else {
                        return false;
                    }
                }
           },
           confirmPwdText:'两次输入的密码不一致！'
      });

    
    var textForm=Ext.create('Ext.form.Panel',{
        width:400,
        height:350,
        bodyStyle:'padding:5 5 5 5',
        frame:true,
        title:'登录表单',
        renderTo:'textForm',
        defaultType:'textfield',
        buttonAlign:'center',
        defaults:{
            labelSeparator:':',
            labelWidth:55,
            width:250,
            pageSize:20,
            allowBlank:false,
            msgTarget:'side',
            labelAlign:'right'
        },
        items:[{
	             fieldLabel:'用户名',
	             id:'usr_nm',
	             name:'username',
	             selectOnFocus:true,
                 regex:/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/,
                 regexText:'非法邮箱地址',
	             grow:true//自动伸缩
             },{
                 fieldLabel:'密码',
                 id:'logPwd',
                 name:'password',
                 inputType:'password',
                 listeners:{
                    change:function(){
                        textForm.getForm().findField('repassword').setValue('');
                    }
                 
                 }
             },{
                 fieldLabel:'确认密码',
                 id:'rePwd',
                 name:'repassword',
                 inputType:'password',
                 vtype:'confirmPwd',
               /*  listeners:{
                    change:function(){
                        task.delay(1000,function(){
                            Ext.form.VTypes.confirmPwd(this.getValue(),this.confirmPwd)
                        },
                        this);
                    }
             },*/
              confirmPwd: {
                             first:'logPwd',
                             second:'rePwd'
             }},{
                 xtype:'radiogroup',
                 fieldLabel:'性别',
                 columns: 3,
                 vertical: true,//均匀跨列
                 items:[
                    {boxLabel:'男',name:'sex',inputValue: '1',checked: true},
                    {boxLabel:'女',name:'sex',inputValue: '2'},
                    {boxLabel:'妖',name:'sex',inputValue: '3'}
                 ]
             },{
                 xtype:'checkboxgroup',
                 fieldLabel:'爱好',
                 id:'hobby',
                 columns: 4,
                 vertical: true,
                 items:[
                    {boxLabel:'编程',name:'hobby',inputValue: '11'},
                    {boxLabel:'跳舞',name:'hobby',inputValue: '22'},
                    {boxLabel:'篮球',name:'hobby',inputValue: '33'},
                    {boxLabel:'搞基',name:'hobby',inputValue: '44'}
                 ]
             },{
                xtype:'numberfield',
                fieldLabel:'整数微调',
                name:'num1',
                allowDecimals:false,
                baseChars:'025789',//只能输入2578这几个数
                hideTrigger:true,//设置为true时隐藏trigger按钮，只显示为基础的文本框
                maxValue: 99,
                minValue: 0,
                value:13
             },{
                xtype:'numberfield',
                fieldLabel:'小数微调',
                name:'num2',
                emptyText:'请输入小数',
                step:0.5,//步长
                decimalPrecision:2
             },{
                xtype:'combobox',
                listConfig:{
                    emptyText:'没有找到',
                    maxHeight:200
                },
                fieldLabel:'选择类型',
                width:340,
                name:'type',
                queryModel:'remote',
                minChars:2,
                store:tstore,
                valueField:'BANK_ORG_ID',
                displayField:'BANK_ORG_NAME',
                queryParam:'type',
                queryDelay:400,
                multiSelect:true,
                triggerAction:'all'
                /*forceSelection:true,//只能输入store中的值
                typeAhead:true,
                value:'004'*/
             }],
              dockedItems: [{
		        xtype: 'toolbar',
		        dock: 'top',
		        items: [{
		            text: '爱好全选',
                    handler:function(){
                    Ext.Array.each( Ext.getCmp('hobby').items.items,function(box){
                        box.setValue(1);
                    });
                    }
		        }]
		    }],
          buttons:[{
                text:'登录系统',handler:function(){
                   var baseForm=textForm.getForm();
                   if(!baseForm.isValid())
                    Ext.MessageBox.alert('严重','无效的表单');
                   var fd1=baseForm.findField("username"),fd2=baseForm.findField("password");
                   console.info(fd1.getName()+"|"+fd1.getValue()+";"+fd2.getName()+"|"+fd2.getValue());
                   console.info(textForm.getValues());
                   
                }
          },{
              text:'重置',handler:function(){
                textForm.getForm().reset();
              }
          },{
              text:'装载',handler:function(){
                textForm.getForm().loadRecord(user);
              }
          },{
		        text: '操作',
		        handler: function() {
		            this.up('form').down('[name=num1]').spinDown();//数值框向下微调方法
		        }
        }]
    });
    console.info(textForm.down('#usr_nm'));
    console.info(textForm.down('radiogroup'));
    //xtype和ID选择器可叠加使用 panel#usr_nm 查找xtype为panel并且id或者itemId为usr_nm的所有组件
    //属性选择器
    //Ext.ComponentQuery.query('panel[myAttribute= "helloWorld"]'); -自定义属性也可以匹配的到
    //后代选择器
    //Ext.ComponentQuery.query('#myCt panel'); --返回所有id为“myCt”的容器中Ext.Panel实例
    //向上选择
    //Ext.ComponentQuery.query('textfield ^ form') 查找给定元素 的父容器 （递归向上查找所有匹配元素)
    //myFormPanel.query("{isDisabled()}"); --可以根据组件的方法进行查找,返回所有isDisabled()返回true的组件
})