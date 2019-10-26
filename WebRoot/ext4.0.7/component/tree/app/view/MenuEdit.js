Ext.define('datao.view.MenuEdit',{
        extend:'Ext.window.Window',
        draggable:true,
        alias:'widget.menuedit',
        title: '更新菜单',
        height: 200,
        width: 400,
        layout:'fit',
        modal:true,
        resizable: true,
        maximizable :true, // 显示最大化按钮在右上角
        closeAction:'hide',
        items:[{
                xtype:'form',
                items:[{
                	xtype:'hidden',
         			name:'type',
	                fieldLabel:'类型'
                },{
                    xtype:'textfield',
                    name:'parentId',
                    fieldLabel:'父节点'
                },{
                    xtype:'textfield',
                    name:'id',
                    fieldLabel:'菜单id'
                },{
                    xtype:'textfield',
                    name:'text',
                    fieldLabel:'菜单名称'
                }]
            }],
         buttons:[{
	                id:'save',
	                text:'保存'
	               },{
	                id:'cancel',
	                text:'取消'
	           }]
        
});