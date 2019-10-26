/**
 * 数据读取器 reader
 * jsonReader 默认
 * XmlReader 读取xml
 * ArrayReader 读取数组
 * reader对象一般被配置到proxy对象中
 */

Ext.onReady(function(){
    var userData={
        total:200,
        user:[{auditer:'xiaoA',info:{
            userID:1,
            name:'周扛枪',
            orders:[{oid:'001',price:23.5},
                    {oid:'002',price:13.6}]
            }
        },{
            auditer:'xiaoB',info:{
            userID:2,
            name:'明道与',
            orders:[{oid:'003',price:55.5},
                    {oid:'004',price:63.6}]
            }
        }]
    };
    
    Ext.regModel('User',{
        fields:[{name:'userID',type:'int'},
                {name:'name',type:'string'}],
         hasMany:{model:'order'}
    });
    
      Ext.regModel('order',{
         fields:[{name:'oid',type:'string'},
                 {name:'price',type:'auto'}
         ],
         belongsTo:{type:'belongsTo',model:'User'}
      });
      
      var mproxy=Ext.create('Ext.data.proxy.Memory',{
        model:'User',
        data:userData,
        reader:{
            type:'json',
            root:'user', //从返回json数据中的那个属性取值作为数据列表
            implicitIncludes:true,//设为true，则自动解析响应对象中嵌套在其他models的models
            totalProperty:'total', //从返回json数据中的那个属性取值作为数据列表总数
            record:'info' //每条数据列表取哪个属性作为model对应模型
        }
      });
      
      mproxy.read(new Ext.data.Operation(),function(result){
        var datas=result.resultSet.records;
        //console.info(datas);
        console.info(result.resultSet.total);
        Ext.Array.each(datas,function(model){
                console.info(model.get('name'));
        });
        
        var user=datas[0];
        var orders=user.orders();//每个dataModel的orders（）方法，返回store
        orders.each(function(order){
            console.info(order.get('oid')+"|"+order.get('price'));
        });
      },this);
      
      Ext.regModel('Cup',{
        fields:[{name:'capacity',type:'string'}],
        proxy:{
               type:'ajax',
               url:'cup.xml',
               reader:{
	                type:'xml',
	                record:'cup'
                }}
      });
      
      var cup=Ext.ModelMgr.getModel('Cup');
      cup.load(1,{
        success:function(model){
            console.info(model.get('capacity'));
        }
      })
      
       Ext.regModel('Enter',{
        fields:['action','type'],
        proxy:{
               type:'ajax',
               url:'readerWriter.jsp',
               reader:{
                    type:'array'
                }}
      });
      
      var cup=Ext.ModelMgr.getModel('Enter');
      cup.load(1,{
        success:function(model){
            console.info(model.get('action'));
        }
      })
        
})