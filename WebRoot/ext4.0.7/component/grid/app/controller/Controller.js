Ext.define('datao.controller.Controller',{
    extend:'Ext.app.Controller',
    init:function(){
    	//为页面的一些元素绑定事件
        this.control({
            'userlist button[id=remove]':{
                click:function(o){
                	//找一个容器上面这个组件在任何级别的xtype或类
                      var grid=o.findParentByType('gridpanel');
		                grid=o.ownerCt.ownerCt; //找它爷爷
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
                click:function(o,item,rowIndex,colIndex,e){//action列添加事件点击函数
                    console.info(rowIndex+" "+colIndex);
                }
            },
            'userlist button[id=cancel]':{
            	click:function(o){
            		var sm=o.ownerCt.ownerCt.getSelectionModel();
            		sm.deselect( 1, false );//取消选择索引1
            		//可以调用grid的SelectionModel的相关方法进行选中,取消,获取选中的对象,选择某些范围等操作
            		if(sm.getLastSelected())
            		console.info(sm.getLastSelected().get('bank_name'));//最后选择的
            		
            		console.info(sm.isSelected(3));//是否选择索引3
            		sm.selectRange(2,4,true);//选择索引1到4,追加,这样选择之后,无法取消选择?

            	}
            },
            //单元格选择模式的时候有用
           /* 'userlist':{
            	itemclick:function(view,rec,item){
            		var sm=view.getSelectionModel();
            		console.info(sm.getCurrentPosition());
            		
            		//sm.selectByPosition({ "row": 3, "column": 2 });//把某个单元格选中
            	}
            },*/
            /*'userlist':{
            	edit:function(editor,e,opts){
            		e.record.commit();
            	}
            },*/
             'userlist button[text=save]':{
                click:function(o){
		                var grid=o.ownerCt.ownerCt;
		                var store=grid.getStore();
		                store.each(function (model) {
							model.set('bank_name',model.get('bank_name')+'extjs4.1');
						});
					var records=store.getUpdatedRecords();//返回全部已经在Store中被更改但还未通过代理同步的数据实例.
					//console.info(records.length);//没有
					/*Ext.Array.each(records,function(model){
						console.info(model.get('bank_name'));
						model.commit();
					}) ;*/
                        store.sync();//数据与后台同步


                }
            }
        });
    },
    views:['List','PropertyList'],
    stores:['SaveLoanInfos'],
    models:['SaveLoanInfo']
});