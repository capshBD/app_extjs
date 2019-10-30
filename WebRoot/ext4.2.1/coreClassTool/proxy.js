/*
内存代理：用数据和数据模型类创建数据代理对象
方法 1.update
     2. read
ajax代理：向服务端请求数据
常用配置：url 远程服务器地址
        model 使用的数据模型
        reader 默认传入一个jsonReader对象
        pageParam ，startParam，limitParam传入的分页参数的参数名，和Operation的分页参数对应
        sortParam ，filterParam 传入的排序和过滤参数的参数名，和Operation的排序和过滤参数对应
       还可以自定义实现排序信息转码方法 - 将sorters转换为"name#ASC,age#DESC"
     encodeSorters: function(sorters) {
         var length   = sorters.length,
             sortStrs = [],
             sorter, i;

         for (i = 0; i < length; i++) {
             sorter = sorters[i];

             sortStrs[i] = sorter.property + '#' + sorter.direction
         }

         return sortStrs.join(",");
     }
     发送请求的时候会生成一下url参数信息
     ?sortBy=name#ASC,age#DESC

  ajax代理请求的Operation对象配置：
  action :read 动作 ，执行什么样的操作
  page  start limit  向服务端请求数据的url的分页参数
  sorters filters 向服务端请求数据的排序和过滤信息
  比如：
  sorters: [
        new Ext.util.Sorter({
            property : 'name',
            direction: 'ASC'
        }),
        new Ext.util.Sorter({
            property : 'age',
            direction: 'DESC'
        })
    ],
    filters: [
        new Ext.util.Filter({
            property: 'eyeColor',
            value   : 'brown'
        })
    ]

发送请求的时候会生成一下url参数信息：
?sort=[{"property":"name","direction":"ASC"},{"property":"age","direction":"DESC"}]&filter=[{"property":"eyeColor","value":"brown"}]
proxy对象一般被配置到DataModel中

*/
Ext.onReady(function(){
	Ext.regModel('Animal',{
		fields:[
			{name:'name',type:'string'},
			{name:'age',type:'int'}]
	})
	
	var animalData=[
	{name:'cat',age:10},
	{name:'dog',age:22}];
	//内存代理
	var memoryProxy=Ext.create('Ext.data.proxy.Memory',{
		data:animalData, //数据参数, 用来设置Reader.
		model:Animal
	});

	animalData.push({name:'pig',age:33});
	//查询 this指的是回调函数callback里面的this指向哪个对象
	memoryProxy.read(new Ext.data.Operation(),function(result){
		console.info(result); //result既是操作完成之后的Operation对象
		var datas=result.resultSet.records;
		Ext.Array.each(datas,function(model){
				console.info(model.data.name);
		});
	},this);
	
	Ext.regModel('Car',{
		fields:[{name:'type',type:'string'}]
	});
	
	var ajaxProxy=new Ext.data.proxy.Ajax({
		url:'proxy.jsp',
		model:'Car',
		reader:'json',
		limitParam:'indexLimit'
	});
	ajaxProxy.doRequest(new Ext.data.Operation({
		 action:'read',
		 limit:10,
		 start:1,
		 sorters:[
		 	new Ext.util.Sorter({
		 		property:'type',
		 		direction:'DESC'
		 	})
		 ]
		}),function(o){
		var text=o.response.responseText;
		console.info(Ext.JSON.decode(text)['type']);
	});
});