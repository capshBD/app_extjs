Ext.onReady(function(){
	var bankStore=Ext.create('Ext.data.TreeStore',{
	        proxy : {
	                type : 'ajax',
	                url : pathUrl+'/menuBank.action',//请求
	                reader : {
	                    type : 'json',
	                    root : 'bankList'//数据
	                },
	                //传参
	                extraParams : {
	                    pid : '000000'
	                }
	            },
		        root : {
		        	id:'000000',
		            text : '重庆农村商业银行',
		            expanded : false         
		        }
		
	});
	
	Ext.define('MyBankTreeList',{
		extend:'Ext.form.field.ComboBox',
		expand:function(){//重写父类的expand方法
			if(!this.menu){ //创建一个window并添加treepanel子组件,并把它设为customBankTree的menu属性
					var tree=Ext.widget('treepanel',{
						frame:true,
						autoScroll:true,
						border:false,
						height:290,
						title:'机构树',
						store:bankStore,
						listeners:{
							beforeitemexpand:function(o){
								if(o.raw)
									//在某个节点扩展之前 设置treeStore的参数 远程加载节点数据
								this.getStore().proxy.extraParams={pid:o.raw.id};
							},
							itemclick:function(v,r,i){
								showMenu.hide();//选中某个节点之后 让menu隐藏
								Ext.getCmp('customBankTree').setValue(r.get('text'));
							}
						}
					});
				var showMenu=new Ext.Window({
		            closable:false,
		            border:false,
		            resizable:false,
		            draggable:false,
		            width:200,
		            height:290,
		            items:[tree],
		            listeners:{
		                deactivate:function(){
		                    this.hide();
		                }
		            }
                });
                
                this.menu=showMenu; 
			}
		
			if(this.menu.isHidden()){
		        this.menu.setPosition([this.getPosition()[0]+100,this.getPosition()[1]+25]);
		        this.menu.show();
	        }else{
	        	 this.menu.hide();
	        }
		},
		constructor:function(defaultValue){
			this.superclass.constructor.call(this,{//调用父类combobox的配置属性
					id:'customBankTree',
					queryMode:'local',
			        editable:false,
			        fieldLabel:'机构',
			        triggerAction:'all',
			        value:defaultValue||'总行',
			        anchor:'95%'
			})
		
		}
	});
	
	Ext.widget('form',{
		width:300,
        height:350,
        bodyStyle:'padding:5 5 5 5',
        frame:true,
        title:'登录表单',
        renderTo:Ext.getBody(),
        buttonAlign:'center',
		defaults:{
            labelSeparator:':',
            labelWidth:20,
            allowBlank:false,
            msgTarget:'side',
            labelAlign:'left'
        },
        items:[new MyBankTreeList()]
	});
	

})

