Ext.onReady(function(){
    Ext.override(Ext.grid.plugin.CellEditing, {
                    startEdit : function(record, columnHeader) {
                        if (columnHeader && columnHeader.isCheckerHd) {
                            return false;
                        }

                        return this.callOverridden(arguments);
                    }
                });
    Ext.Loader.setConfig({
        enabled:true
    });
    
    Ext.Loader.setPath('Ext.ux',pathUrl+'/ext4.0.7/ext4.0.7/ux');
    Ext.require(['Ext.ux.grid.FiltersFeature']);
    
    Ext.application({
        name:'datao',
        appFolder:'app',
        launch:function(){
            Ext.create('Ext.container.Viewport',{
                layout:'auto',
                items:[{
                    xtype:'userlist',
                    title:'viewPort'
                },{
                    xtype:'prolist'
                }]
            });
        },
        controllers:['Controller']
    })
})