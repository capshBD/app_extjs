Ext.onReady(function(){
    //User DataModel类
    Ext.regModel('Ext.us.User',{
        fields:[{
            name:'username',type:'auto'
        },{
            name:'password',type:'auto'
        }]
    });
    //Type DataModel类
    Ext.regModel('Ext.us.Type',{
       fields:[{
            name:'id',type:'auto'
        },{
            name:'desc',type:'auto'
        }]
    });

    //Store实例 内存代理 自动加载
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

    //Bank DataModel类
     Ext.regModel('Bank',{
	     fields:[{name:'BANK_ORG_ID',type:'string'},
	             {name:'BANK_ORG_NAME',type:'string'}]
     });
     //Store实例 ajax代理
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

    //实例化一个User的对象
    var user=Ext.create('Ext.us.User',{username:'119@qq.com',password:'123435'});
    
            // 定义函数: 验证再次输入的密码是否一致 为Ext.form.VTypes对象扩展一个验证配置
           //Ext.form.VTypes 单例对象 它包含了一个常用的字段验证的函数集合并且提供一种可以创建重用的字段验证机制
           Ext.apply(Ext.form.VTypes, {
             confirmPwd: function (value, field) {
                    // field 的 confirmPwd 属性
                  if (field) {
                      var first = field.confirmPwd.first;

                     var firstField = Ext.getCmp(first);
                    var firstPwd = firstField.getValue();
                  if (firstPwd == value) {
                      return true;
                   } else {
                        return false;
                    }
                }
                  console.info(value);
           },
           confirmPwdText:'两次输入的密码不一致！'
      });

    
    var textForm=Ext.create('Ext.form.Panel',{
        width:400,
        height:350,
        bodyStyle:'padding:5 5 5 5', //用户自定义CSS样式被应用到panel的body元素上  String/Object/Function
        frame:true, //true 为 Panel 填充画面,默认为false.
        title:'登录表单',
        renderTo:'textForm', //被渲染到 String/HTMLElement/Ext.Element
        defaultType:'textfield', //默认子字段组件的类型为textfield
        buttonAlign:'center',
        defaults:{           //子组件的默认配置选项
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
	             selectOnFocus:true, //true当表单项获得输入焦点时，将会自动选中所有存在的表单项文本
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
                 vtype:'confirmPwd', //验证时会调用Ext.form.VTypes的confirmPwd方法 传入value值和本filed对象
               //延时验证有点问题
                /* listeners:{
                    change:function(){
                        task.delay(5000,function(){
                            Ext.form.VTypes.confirmPwd(this.getValue(),this);
                        },
                        this);
                    }
             },*/
              confirmPwd: {
                             first:'logPwd'
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
                allowDecimals:false, //禁用小数
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
                decimalPrecision:2 //小数点后允许的最大精度
             },{
                xtype:'combobox',
                listConfig:{ //N组可选的配置属性将被传递到的Ext.view.BoundList(内部使用的数据视图)的构造函数。 可以包含BoundList有效的任何配置
                    emptyText:'没有找到',
                    maxHeight:200
                },
                fieldLabel:'选择类型',
                width:340,
                name:'type',
                queryModel:'remote',
                minChars:2,//用户必须自动完成输入之前且typeAhead激活的字符最小数目
                store:tstore,
                valueField:'BANK_ORG_ID',
                displayField:'BANK_ORG_NAME',
                queryParam:'type', //store传递键入字符串使用的参数名
                queryDelay:400, //时间以毫秒为单位长度从开始键入到发送查询到过滤器之间延迟下拉列表
                multiSelect:true, //多选
                triggerAction:'all' //触发器被点击时执行的操作
                /*forceSelection:true,//只能输入store中的值 指定allQuery配置项执行查询
                typeAhead:true, //为true时，配置了延迟（typeAheadDelay）后，如果匹配到已知的值将填充和自动选择键入的文本其余部分
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
                   //得到表单的所有值的对象
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