Ext.onReady(function(){
    Ext.create('Ext.form.Panel',{
        width:560,
        height:450,
        bodyStyle:'padding:5 5 5 5',
        frame:true,
        title:'其他字段',
        renderTo:'textForm',
        defaultType:'textfield',
        buttonAlign:'center',
        defaults:{bodyPadding: 4,
                  msgTarget:'side',
                  allowBlank:false},
        items:[{
            xtype:'label',
            name:'name',
            text:'展示',
            forId:'myname',
            overCls:'a'
        },{
            xtype:'textfield',
            name:'age',
            value:'1',
            inputId:'myname',
            hideLabel:true
        },{
	        xtype: 'displayfield',
	        fieldLabel: '分数',
	        name: 'visitor_score',
	        value: '11'
        },{
            xtype:'filefield',
            name: 'photo',
            fieldLabel: '照片',
            buttonText: '选择照片'
        },{
            xtype:'fieldcontainer',
            combineLabels:true,
            combineErrors:true,
            labelWidth: 80,
            layout:'hbox',
            defaults:{allowBlank:false,
                     msgTarget:'side'},
            items: [{
		            xtype: 'textfield',
	                name:'job1',
		            flex: 1
		        }, {
		            xtype: 'splitter'
		        }, {
		            xtype: 'textfield',
                    name:'job2',
		            flex: 1
		        }, {
		            xtype: 'splitter'
		        }, {
		            xtype: 'textfield',
                    name:'job3',
		            flex: 1
		        }]
        },{
            xtype:'fieldset',
            title: '联系信息',
            collapsible: true,
	        defaultType: 'textfield',
	        defaults: {anchor: '90%'},
	        layout: 'anchor',
	        items :[{
	            fieldLabel: '姓名',
	            name: 'name'
	        }, {
	            fieldLabel: '地址',
	            name: 'address'
	        }]
        },{
             // 第二列中的 Fieldset -  可以通过checkbox 来收缩/展开 , 默认收缩状态, 包含一个面板
	        xtype:'fieldset',
	        title: '更多', // 指定 title 或者 checkboxToggle 配置项,都会创建 fieldset 组头(header).
	        checkboxToggle: true,
	        collapsed: true, // 初始化为收缩状态
	        layout:'anchor',
	        items :[{
	            xtype: 'textfield',
	            anchor: '90%',
                name:'banck',
	            fieldLabel: '背景'
	        },{
                xtype: 'textfield',
                anchor: '90%',
                name:'study',
                fieldLabel: '学历'
            },{
                xtype: 'textfield',
                anchor: '90%',
                name:'email',
                fieldLabel: '邮箱'
            }] 
        },{
            xtype:'htmleditor',
            name:'remark',
            fontFamilies:['宋体','楷体','隶书','行楷'],
            height:150
        }]
    })
})