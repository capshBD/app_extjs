/**
 * Ext的消息提示框
 * Ext.MessageBox（别名Msg）是Ext.window.MessageBox的一个单例对象
 *  常用方法：
 *  1 alert( String title, String msg, [Function fn], [Object scope] )
 *  2 prompt( String title, String msg, [Function fn], [Object scope], [Boolean/Number multiline], [String value] )  最后两个参数代表是否支持多行文本和默认值
 *  3.show( Object config ) 自定义显示配置
 */

Ext.onReady(function(){
   /* Ext.Msg.alert("提示","消息",function(id){
        console.info(this);
         console.info("click btn is "+id);
         this.dom.onclick=function(){
            console.info(this.innerHTML);
         }
    },Ext.get('dd'));*/
    
    //最后两个参数代表是否支持多行文本和默认值
    /*Ext.Msg.prompt('Name', 'Please enter your name:', function(btn, text){
	    if (btn == 'ok'){
	          console.info("好了");
        }
    },this,true,'请输入留言');*/
    
   /*var timer= Ext.Msg.show({
        title:'当前时间',
        width:300,
        msg:'时间是：',
        buttons:Ext.Msg.YESNO,
        fn:function(btn){
            if(btn=='yes')
            Ext.TaskManager.stop(t);
        }
        
    });
    
    var t={
        run:function(){
            timer.updateText('当前时间'+Ext.util.Format.date(new Date(),'Y-m-d g:i:s'));
        },
        interval:1000
    }
    Ext.TaskManager.start(t);*/
    
    var timer=Ext.Msg.show({
        title:'进度',
        width:300,
        msg:'当前进度：',
        progress:true,
        progressText:'已完成'
    });
       var index=0;
     var t={
        run:function(){
            timer.updateProgress(index/100,'已完成'+index+'%','加载中。。。');
            index+=5;
            if(index>100){
             Ext.TaskManager.stop(t);
             timer.close();
            // timer.destroy();
            }
        },
        interval:100
    }
    Ext.TaskManager.start(t);
    
    console.info("异步加载");
})