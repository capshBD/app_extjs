Ext.onReady(function(){
    var winGroup=new Ext.WindowGroup();
    for (var index = 0; index < 5; index++) {
       winGroup.register(
       new Ext.window.Window({
            width:300,
            height:200,
            title:'窗口'+index,
            id:'win_'+index,
            plain:true,
            closeAction:'hide',
            renderTo:Ext.getBody()
        }).show()); 
    }
    
    Ext.create('Ext.button.Button',{
          text: '全部隐藏',
          renderTo: Ext.getBody(),
          handler:function(){
            winGroup.hideAll();
          }
    });
    Ext.create('Ext.button.Button',{
          text: '把第三个置顶',
          renderTo: Ext.getBody(),
          handler:function(){
            winGroup.bringToFront('win_3');
          }
    });
    Ext.create('Ext.button.Button',{
          text: '全部显示',
          renderTo: Ext.getBody(),
          handler:function(){
            winGroup.each(function(cmp){
                cmp.show();
            })
          }
    });
    Ext.create('Ext.button.Button',{
          text: '把第五个置底',
          renderTo: Ext.getBody(),
          handler:function(){
            winGroup.sendToBack('win_4');
          }
    });
})