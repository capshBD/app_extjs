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
    //设置路径命名空间。设置 Ext.ux这个命名空间的路径为pathUrl+'/ext4.2.1/ext4.2.1/ux'
    Ext.Loader.setPath('Ext.ux',pathUrl+'/ext4.2.1/ext4.2.1/ux');
    //需要动态加载这个命名空间下的grid包下的FiltersFeature.js文件,FiltersFeature.js文件有uses属性又需要动态加载其他js文件
    Ext.require(['Ext.ux.grid.FiltersFeature']); //Ext.Loader.require的别名

    /*
    加载 Ext.app.Application 类，并在页面准备好之后与给定的配置启动它
    先加载到Controller文件,在定义Controller类的时候再加载其他模块文件,所有模块准备完毕后,调用launch方法构造页面后,在调用
    Controller类的对象执行init方法执行初始化绑定事件等操作
    * */
    Ext.application({
        name:'datao', //加载js文件的类的包前缀名,后面必须加上model,view,store或controller标识是哪种模块才能正确加载
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
        controllers:['Controller'] //Controllers是绑定application在一起的粘合剂,controllers包含的类会被动态加载
    })
})