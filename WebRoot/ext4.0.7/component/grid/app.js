/**
 * Ext.Loader 单例
 */
Ext.onReady(function(){
    //重写Ext.grid.plugin.CellEditing类的startEdit方法
    Ext.override(Ext.grid.plugin.CellEditing, {
                    startEdit : function(record, columnHeader) {
                        if (columnHeader && columnHeader.isCheckerHd) {
                            return false;
                        }

                        return this.callOverridden(arguments);
                    }
                });
    //配置加载器
    Ext.Loader.setConfig({
        enabled:true
    });
    //设置路径命名空间。设置 Ext.ux这个命名空间的路径为pathUrl+'/ext4.0.7/ext4.0.7/ux'
    Ext.Loader.setPath('Ext.ux',pathUrl+'/ext4.0.7/ext4.0.7/ux');
    //需要这个命名空间下的grid包下的FiltersFeature.js文件
    Ext.require(['Ext.ux.grid.FiltersFeature']); //Ext.Loader.require的别名

    //加载 Ext.app.Application 类，并在页面准备好之后与给定的配置启动它
    Ext.application({
        name:'datao', //加载js文件的类的包前缀名
        appFolder:'app', //通过appFolder找到需要加载js文件的根目录
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