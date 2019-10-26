Ext.onReady(function(){
    var toolbar=new Ext.toolbar.Toolbar({
        renderTo:'toolbar',
        width:800,
        margin  : '5 0 0 5',//上 右 下 左
        listeners: {
            //con本toolbar组件，要comp添加的组件，num添加的索引，opts为一个Object类的对象 里面的add属性指向 本事件add函数
            add:function(con,comp,num,opts){
                console.info(opts);
            }
        },
        items:[{
            text:'打开文件',
            handler:function(btn){
                console.info(btn.text);
            }
        },{
            text:'添加新选项',
            handler:function(){
                Ext.Msg.prompt('添加','输入按钮',function(btn,text){
                    if(btn=='ok'){
                        addItems.push(toolbar.add({
                            text:text
                        }));
                    }
                })
            }

        },{
            text   : '删除最后插入的项',
            scope  : this,
            handler: function() {
                if (addItems.length) {
                    toolbar.remove(addItems.pop());
                } else if (toolbar.items.length) {
                    toolbar.remove(toolbar.items.last());
                } else {
                    alert('在工具栏上没有任何选项');
                }
            }

        }]
    });

    var addItems=[];
    toolbar.add([{
        text:'新建文件',
        handler:btnClick,
        iconCls:'create',
        menu:new Ext.menu.Menu({
            shadow:'drop',
            items:[{
                text:'word',
                menu:Ext.menu.Menu({
                    shadow:'drop',
                    items:[{
                        text:'color',
                        menu:new Ext.menu.ColorPicker()
                    },{
                        text:'date',
                        menu:new Ext.menu.DatePicker(),
                        icon:'ext4.0.7/resources/icon/time_date.gif'
                    }]

                })
            },{
                text:'excel'
            },{
                text:'ppt'
            }]
        })
    },{
        text:'保存文件',
        handler:btnClick
    },'-',{
        xtype:'textfield',
        hideLabel:true,
        width:100,
        emptyText: '输入搜索词'
    },'->','<a>百度</a>']);

    var enableBtn=new Ext.button.Button({
        text:'启动',
        disabled:true,
        scope:this,
        handler:function(){
            enableBtn.disable();
            toolbar.enable();
            disableBtn.enable();
        }
    });
    var disableBtn=new Ext.button.Button({
        text:'停止',
        scope:this,
        handler:function(){
            disableBtn.disable();
            toolbar.disable();
            enableBtn.enable();
        }
    });

    toolbar.add([enableBtn,disableBtn]);

    function btnClick(btn){
        console.info(btn.text);
        console.info(toolbar.draggable);
    }

    Ext.get('enable').on('click',function(){toolbar.enable()});
    Ext.get('disable').on('click',function(){toolbar.disable()});
})