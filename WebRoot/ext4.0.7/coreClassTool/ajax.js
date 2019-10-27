/**
 * Ext.Ajax是Ext.data.Connection的一个单例
 * 常用方法
 * abort: 终止一个没有完成的请求
 * isLoading 判断指定的ajax是否正在执行
 * parseStatus 返回请求响应的代码
 */
Ext.onReady(function(){
        Ext.Ajax.request({
            url:'ajax.jsp',
            params:{id:'01'},
            method:'POST',
            timeout:30000,
            form:'ajaxform',
            success:function(response,option){
                var data=Ext.JSON.decode(response.responseText);
                console.info(data.saley);
            }
        });
        
        Ext.get('button').on('click',function(){
            //返回Ext.dom.Element对象 返回ElementLoader 方便我们重新构建页面
          Ext.get('label').getLoader().load({
            url:'ajaxt.jsp',
            renderer:function(render,response,request){
                var time=response.responseText;
                time=Ext.util.Format.date(new Date(),'Y-m-d H:i:s');
                //返回原始dom对象
                Ext.getDom('label').innerHTML=time;
            }
          })
            
        });
        
        Ext.get('btn').on('click',function(){
            //自动刷新 每5s发送一次ajax请求
          Ext.get('le').getLoader().startAutoRefresh(5000,{
            url:'ajaxj.jsp',
            renderer:function(render,response,request){
                var num=response.responseText;
                Ext.getDom('le').innerHTML=num;
            }
          })
            
        });
        
        Ext.get('sp').on('click',function(){
            //停止自动刷新
          Ext.get('le').getLoader().stopAutoRefresh();
        });
        
        var procObj= Ext.get('pc');
        var cityObj=Ext.get('cy');
         var domObj=cityObj.dom;
        procObj.on('change',function(e,select){
        
            var cparm=select.options[select.selectedIndex].value;
            console.info(cparm);
            if(cparm==0){
            while(domObj.options.length>1){
                        domObj.options.remove(domObj.options.length-1);
                    }
               return;
            }  
            Ext.Ajax.request({
                url:'ajaxs.jsp',
                params:{id:cparm},
                method:'POST',
                success:function(response,option){
                    var datas=Ext.JSON.decode(response.responseText);
                   
                    while(domObj.options.length>1){
                        domObj.options.remove(domObj.options.length-1);
                    }
                    console.info(domObj);
                   Ext.Array.each(datas,function(data){
                    domObj.add(new Option(data.id,data.name));
                   })
                    
                }
            })
        })
})