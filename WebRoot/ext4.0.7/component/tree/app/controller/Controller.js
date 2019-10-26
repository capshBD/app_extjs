Ext.define('datao.controller.Controller',{
          extend:'Ext.app.Controller',
          init : function(){
		        this.control({
		            'menulist':{
		                boxready:function(t, e,Opts){
		                	console.info(t);
		                    tree = t;
		                },
		                beforeload:function(){
		                    Ext.apply(tree.getStore().proxy.extraParams,{
		                        node:'root'
		                    });
                         /* tree.getStore().setProxy({
                            type:'ajax',
                            url:pathUrl+'/menuInfo.action',
                            extraParams:{pid:tree.getRootNode().data.id}
                          });*/
		                }
		            },
                   'menulist button[id=collAll]':{
	                    click:function(b){
	                        b.ownerCt.ownerCt.collapseAll();
	                    }
                   },
                    'menulist button[id=expandAll]':{
                        click:function(b){
                            b.ownerCt.ownerCt.expandAll();
                        }
                   },
                    'menulist button[id=add]':{
                        click:function(){
                          /*  var checked=tree.getChecked();
                            if(checked.length!=1){
                                Ext.Msg.alert('警告','必选且只能选择一个节点');
                                return;
                            }
                           var rec= checked[0];
                           rec.set('leaf',false);
                           rec.appendChild([{
                            checked:true,
                            id:'FDI90_20_10',
                            text:'登录日志',
                            leaf:true
                           },{
                            checked:true,
                            id:'FDI90_20_20',
                            text:'操作日志',
                            leaf:true
                           }]);*/
                        }
                   },
                    'menulist button[id=remove]':{
                        click:function(b){
                            var checkeds=b.ownerCt.ownerCt.getChecked();
                            if(!checkeds.length){
                                Ext.Msg.alert('警告','至少选择一个');
                                return;
                            }
                            
                            var ids=[];
                           Ext.Array.each(checkeds,function(node){
                           		ids.push(node.data.id+',');
                           });
                           var dids=ids.join("");
                           Ext.Ajax.request({
                           	url:pathUrl+'/menuDel.action',
				            params:{ids:dids},
				            method:'POST',
				            timeout:30000,
				            success:function(response,option){
				                var data=Ext.JSON.decode(response.responseText);
				                Ext.MessageBox.alert('信息',data.info);
				                b.ownerCt.ownerCt.getRootNode().removeAll(false);
				                b.ownerCt.ownerCt.getStore().load();
				              }
				            })
                        }
                   },
                    'menulist button[id=copy]':{
                        click:function(b){
                            var nodes=b.ownerCt.ownerCt.getChecked();
                            if(!nodes.length){
                                Ext.Msg.alert('警告','至少选择一个');
                                return;
                            }
                            b.ownerCt.ownerCt.setCopyNodes(Ext.clone(nodes));
                            for(var i=0;i<nodes.length;i++){
                                nodes[i].data.checked=false;
                                nodes[i].updateInfo();
                            }
                        }
                   },
                    'menulist button[id=paste]':{
                        click:function(b){
                            var node=b.ownerCt.ownerCt.getChecked();
                            if(node.length!=1){
                                Ext.Msg.alert('警告','只能选择一个');
                                return;
                            }
                           var childNodes=b.ownerCt.ownerCt.getCopyNodes();
                           node[0].appendChild(childNodes);
                        }
                   },
                   'menulist':{
                        checkchange:function(node,checked){
                            node.cascadeBy(function(child){
                            	child.set('checked',checked);
                            });
                            if(node.parentNode&&!checked)
                            	node.parentNode.set('checked',false);
                            else if(node.parentNode&&checked){
                            	var childNodes=node.parentNode.childNodes;
                            	var pCheck=true;
                            	for (var i = 0; i < childNodes.length; i++) {
                            		if(!childNodes[i].get('checked')){
                            			pCheck=false;
                            			break;
                            		}
                            	}
                            	node.parentNode.set('checked',pCheck);
                            }
                        },
                    	'itemcontextmenu':function(view,record,item,index,e,eOpts){
                    		//禁用浏览器的右键相应事件  
					         e.preventDefault();  
					         e.stopEvent();
					         var menu=Ext.create('Ext.menu.Menu',{
					         	float:true,
					         	items:[{
					         		text:'修改',
					         		iconCls:'leaf', 
					         		handler:function(){
					         	     this.up("menu").destroy();
					         		 var win=Ext.create('datao.view.MenuEdit').show();
					         		 var dForm=win.down('form').getForm();
					         		 dForm.findField('id').setValue(record.data.id);
					         		 dForm.findField('id').setReadOnly(true);
					         		 dForm.findField('parentId').hide();
					         		 dForm.findField('text').setValue(record.data.text);
					         		 dForm.findField('type').setValue('update');
					              }  
					         	},{
					         		text:'添加',
					         		iconCls:'leaf',
					         		handler:function(){
					         	      this.up("menu").destroy();
					         		  var win=Ext.create('datao.view.MenuEdit').show();
                                      var dForm=win.down('form').getForm();
                                      dForm.findField('parentId').setValue(record.data.id);
                                      dForm.findField('parentId').setReadOnly(true);
					         		  dForm.findField('type').setValue('add');
					         		}
					         	
					         	}]
					         }).showAt(e.getXY());
                    	}
                   },
                   'menuedit button[id=save]':{
                   		click:function(b){
                   			 var form=b.up('window').down('form');
		           			   form.submit({
				                 	    clientValidation: true,
									    url: 'menuUpdate.action',
									    success: function(form, action) {
									    	if(action.result.success){
									    		Ext.Msg.alert('信息', action.result.info);
									    	    b.up('window').destroy();
									    	    Ext.getCmp('meuntreelist').getRootNode().removeAll(false);
									    	    Ext.getCmp('meuntreelist').getStore().load();
										      return;
									    	}
									    	Ext.Msg.alert('信息', action.result.info);
		
									    },
									    failure: function(form, action) {
									    	Ext.Msg.alert('失败', action.result.info);
									     }
				                    });
                   		}
                   },
                   'menuedit button[id=cancel]':{
                   		click:function(b){
                   			 b.up('window').destroy();
                   		}
                   }
		        });
		    },
          views:['MenuTree','MenuEdit'],
          stores:['MenuStore'],
          models:[]
})