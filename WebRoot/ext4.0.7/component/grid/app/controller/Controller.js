Ext.define('datao.controller.Controller',{
    extend:'Ext.app.Controller',
    init:function(){
        this.control({
            'userlist button[id=remove]':{
                click:function(o){
                      var grid=o.findParentByType('gridpanel');
		                grid=o.ownerCt.ownerCt;
		                var store=grid.getStore();
		                var data=grid.getSelectionModel().getSelection();
		                if(!data.length){
		                    Ext.Msg.alert('warning','没有选择');
		                    return;
		                  }
		               Ext.Array.each(data,function(model){
		                console.info(model.get('bank_name'));
		                store.remove(model);
		               }) ;
                }
            },
            'userlist actioncolumn':{
                click:function(o,item,rowIndex,colIndex,e){
                    console.info(rowIndex+" "+colIndex);
                }
            },
            'userlist button[id=cancel]':{
            	click:function(o){
            		var sm=o.ownerCt.ownerCt.getSelectionModel();
            		sm.deselect( 1, false );//取消选择索引1
            		
            		if(sm.getLastSelected())
            		console.info(sm.getLastSelected().get('bank_name'));//最后选择的
            		
            		console.info(sm.isSelected(3));//是否选择索引3
            		sm.selectRange(2,4,true);//选择索引1到4,追加
            	}
            },
            //单元格选择模式的时候有用
            'userlist':{
            	itemclick:function(view,rec,item){
            		var sm=view.getSelectionModel();
            		console.info(sm.getCurrentPosition());
            		
            		//sm.selectByPosition({ "row": 3, "column": 2 });//把某个单元格选中
            	}
            },
            /*'userlist':{
            	edit:function(editor,e,opts){
            		e.record.commit();
            	}
            },*/
             'userlist button[text=save]':{
                click:function(o){
		                var grid=o.ownerCt.ownerCt;
		                var store=grid.getStore();
                        store.sync();//数据与后台同步
		                var records=store.getUpdatedRecords();
		               Ext.Array.each(records,function(model){
		               		model.commit();
		               }) ;
                }
            }
        });
    },
    views:['List','PropertyList'],
    stores:['SaveLoanInfos'],
    models:['SaveLoanInfo']
});