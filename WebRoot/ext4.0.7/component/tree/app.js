Ext.onReady(function(){
    Ext.Loader.setConfig({
        enabled:true
    });
    
    Ext.application({
        name:'datao',
        appFolder:'app',
        launch:function(){
            Ext.create('Ext.container.Viewport',{
                layout:'auto',
                items:[{
                    xtype:'menulist',
                    title:'菜单树'
                }]
            });
        },
        controllers:['Controller']
    })
})