Ext.onReady(function(){
	// 建立一个store要使用的 model
	 Ext.define('User', {
	     extend: 'Ext.data.Model',
	     fields: [
	         {name: 'firstName', type: 'string'},
	         {name: 'lastName',  type: 'string'},
	         {name: 'age',       type: 'int'},
	         {name: 'eyeColor',  type: 'string'}
	     ],
	     changeField:function(){
	      var oldName=this.get('firstName');
	      oldName+='SIMTH';
	      this.set('firstName',oldName);
	     }
	 });
	 
	 var data={
	 	users:[{firstName:'liu',lastName:'bang',age:10,eyeColor:'red'},
	 		   {firstName:'xie',lastName:'xun',age:67,eyeColor:'blue'}]
	 }
	 
	 var store=new Ext.data.Store({
	 		model:'User', //引入DataModel
	 		data:data, //要加载的数据
	 		autoLoad: true,//如果data属性未定义, 并且autoLoad值为'true'或对象, 则此store的load方法将在创建后自动执行
	 		proxy:{ //配置proxy以及旗下的reader会自动创建此store的代理和读取器
	 			 type: 'memory',
	 			 reader: {
		             type: 'json',
		             root: 'users'
        			 }
	 		}
	 });

	 //遍历store 函数参数为每一个dataModel
	 store.each(function(model){
	 		model.changeField();
	 		console.info(model.get('firstName')+"|"+model.get('eyeColor'));
	 });
	 
	 
	 var toy=Ext.create('Ext.data.Store',{
	 	fields:[{name:'version',type:'int'}, //通过此种方式内部创建Model的实例
	 			{name:'size',type:'int'},
	 			{name:'name',type:'string'}],
	 	proxy:{
	 		type:'ajax',
	 		url:'store.jsp'
	 	}
	 });

	 toy.load(function(records,operation,success){
        toy.filter('version',2);//过滤掉version=2的,该操作不会对Ext.Array.each遍历产生影响
        
	 	Ext.Array.each(records,function(model){
	 		console.info(model.get('version')+":"+model.get('size'));
	 	});
        
	 });

	//store.find() 查找store下的dataModel的方法,返回找到的索引
	console.info(toy.find('name','tank',0,false,true,false));
})