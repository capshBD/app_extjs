/**
 * Ext中的有些组件或构造函数继承Ext.util.Observable（可被观察的对象）
 * 可以为自定义的继承于Ext.util.Observable的对象
 * 调用addEvents（）添加事件
 * 调用addListener（）添加对应的事件处理函数
 * 当某个特定动作发生时 调用此对象的fireEvent(eventName,params)->对应的事件处理函数(params)
 */
Ext.onReady(function(){
    Ext.define('Child',{
        extend:'Ext.util.Observable',
        constructor:function(){
            this.callParent(arguments);//4.2.1中先要调用此方法
            this.state='hungry';
            this.setMilk=function(milk){
                this.fireEvent('eat',milk);
            };
            this.addEvents({'eat':true}); //为此Observable对象添加一个事件
            this.addListener('eat',function(milk){ //为此Observable对象添加一个事件处理函数
                if(this.state=='hungry')
                    this.drink(milk);
                 else
                 console.info('I dont drink');
                    
            });
            this.drink=function(milk){
                console.info('I drink '+milk);
            };
        }
    });
    
    var child=Ext.create('Child');
    child.setMilk("hahaha");
    //捕获特定Observable的事件。在事件触发前，所有的事件将被传给提供的函数， 函数的形式为事件名+事件的标准签名。提过提供的函数返回false, 事件将不会触发。
    Ext.util.Observable.capture(child,function(eventname){
        if(eventname=='eat'){
            console.info('you can not drink this');
            return false;
        }else{
            return true;
        }
    });
    
    child.setMilk('san lu milk');//不会再触发
    
     var child2=Ext.create('Child');
     
     Ext.define('Father',{
         extend:'Ext.util.Observable',
         constructor:function(config){
          this.listeners=config.listeners;
          this.superclass.constructor.call(this,config);
        }
     });
     
     var f=Ext.create('Father',{});
     //从指定的Observable接替选定的事件就好像事件是this触发的。
     f.relayEvents(child2,['eat']);
     //Father添加eat事件处理函数
     f.on('eat',function(){
        console.info('go to Hospital');
     });
     child2.setMilk('duyao'); //child触发事件的时候father的eat事件也会被触发
    
    Ext.create('Ext.toolbar.Toolbar',{
        renderTo:Ext.getBody(),
        width:500,
        items:[
            {xtype:'button',id:'save',text:'save'},
            {xtype:'button',id:'delete',text:'delete'},
            {xtype:'button',text:'destroy',handler:function(){
                  var c=Ext.getCmp('delete')
                  if(c)
                  c.destroy();
                }
            }]
    });
    
    //delete这个button组件管理着save这个button的事件生命 delete这个button也是一个Observable的实例
    //在销毁的时候会清除它管理的组件的相关监听函数
    Ext.getCmp('delete').addManagedListener(Ext.getCmp('save'),'click',function(){
        alert('save operation');
        
    });

    // Ext.EventManager为页面元素添加事件
    Ext.EventManager.addListener('bon','click',function(e){
        console.info(e.getX());
        console.info(e.F12);
    });

    //Ext dom对象添加事件
    Ext.get('bn').on('click',function(e){
        console.info(e.getX());
    });
})