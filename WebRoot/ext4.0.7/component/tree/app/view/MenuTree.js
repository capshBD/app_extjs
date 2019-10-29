/**
 * TreePanel的视图 Ext.tree.View
 * TreePanel的Store Ext.data.TreeStore 是一种NodeInterface类型的树形结构数据
 */
Ext.define('datao.view.MenuTree',{
            extend:'Ext.tree.Panel',
            alias:'widget.menulist',
            frame:true,
            id:'meuntreelist',
            title:'树形菜单',
            width:750,
            height:400,
            padding:'5 3 3 10',
            store:'MenuStore',
            useArrows:true,
            config:{
                copyNodes:''
            },
        columns: {
		    items: [{
		    		xtype:'treecolumn',
		            text: '菜单名称',
		            dataIndex: "text"
		    	},
		        {	
		            text: '菜单动作',
		            dataIndex: "handler"
		        },{
		            text: "菜单类型",
		            dataIndex: "type"
		        }
		    ],
		    defaults: {
		        flex: 1
		     }
		   },
            viewConfig:{
                plugins:{
                    ptype:'treeviewdragdrop' //插件类型
                    //appendOnly:true
                },
                listeners:{
                    drop:function(node,data,overModel,pos,opts){
                        console.info(overModel.get('text'));
                    },
                    beforedrop:function(node,data,overModel){
                        if(overModel.get('leaf'))
                            overModel.set('leaf',false)
                    }
                }
            },
            dockedItems:[
                {
	                xtype:'toolbar',
	                dock:'top',
	                items:[{
                        id:'collAll',
	                    text:'收起'
	                },{
                        id:'expandAll',
	                    text:'展开'
	                }]
                },{
                    xtype:'toolbar', 
                    dock:'left',
                    items:[{
	                    xtype:'button',
                        id:'add',
	                    text:'添加'
	                },{
	                    xtype:'button',
                        id:'edit',
	                    text:'修改'
	                },{
                        xtype:'button',
                        id:'remove',
                        text:'删除'
                    },{
                        xtype:'button',
                        id:'copy',
                        text:'复制'
                    },{
                        xtype:'button',
                        id:'paste',
                        text:'黏贴'
                    }]
                }],
            initComponent : function(){
		        this.callParent(arguments);
		    }
});