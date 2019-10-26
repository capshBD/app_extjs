/**
 * 全局Ext对象下面的一些单例对象的工具函数
 * 如 Ext.Object
 * Ext.Array
 * Ext.String
 * Ext.Function
 */
Ext.onReady(function(){
    var obj1={name:'zhangsan',age:11};
    
    /*var result=Ext.Object.chain(obj1); Ext 4.1版本才有
    console.info(result);
    console.info("新创建对象的原型属性name:"+result.name);*/
    
    var person = {
	    name: 'Jacky',
	    hairColor: 'black',
	    loves: ['food', 'sleeping', 'wife']
	};
	
    //each 变量当前对象 然后回调函数中暴露出三个属性 key、value、self 如果回调函数返回false则停止迭代
	Ext.Object.each(person, function(key, value, myself) {
	    console.log(key + ":" + value);
	
	    if (key === 'hairColor') {
	        return false; // 停止迭代
	    }
	});
    
    //将查询字符串转换回对象
	var obj2=Ext.Object.fromQueryString("some%20price=%24300"); // 返回 {'some price': '$300'}
    var obj3=Ext.Object.fromQueryString("colors=red&colors=green&colors=blue"); // 返回 {colors: ['red', 'green', 'blue']}
	console.info(obj2);
	console.info(obj3);
    
    //递归 封装对象属性和数组属性
    console.info(Ext.Object.fromQueryString(
    "username=Jacky&"+
    "dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&"+
    "hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&"+
    "hobbies[3][0]=nested&hobbies[3][1]=stuff", true));
    
    //将一个name - value对转换为一个对象数组，支持内部结构的转换，对构造查询字符串非常有用
    var objects = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
    console.info(objects);
	    objects = Ext.Object.toQueryObjects('dateOfBirth', {
	    day: 3,
	    month: 8,
	    year: 1987,
	    extra: {
	        hour: 4,
	        minute: 30
	    }
	}, true); // 递归
    console.info(objects); 
    
    //检查第一个数是否在后两个数之间
    console.info(Ext.Number.constrain(3, 1 , 20));
   // console.info(Ext.Number.randomInt(1,100));
    console.info(Ext.Number.toFixed(3.1415926,5));
    
    //裁剪，添加...显示
     console.info(Ext.String.ellipsis('www.bjsxt.com',8,true));
     
     //去掉数组中的空值
        var arr = [1,2,null,3,'',undefined,0];
        console.info(Ext.Array.clean(arr));
        
	  var arr1 = [1,2,3];
	  var arr2 = [2,5,6];
      //返回 A-B的差异集合，从A中减去所有B中存在的元素
	  console.info(Ext.Array.difference(arr1,arr2));
      
        var arry = [1,2,3,4,5];
        //截掉数组，从index=2开始，截2个
        console.info(Ext.Array.erase(arry , 2 , 2));
     
       var color="red";
      function getColor(name,age,param1,param2){
        console.info("bind:"+this.color);
          console.info("bind:"+name);
         console.info("bind:"+age);
          console.info("bind:"+param1);
          console.info("bind:"+param2);
      }
      
      var fobj={
        name:'flower',
        age:11,
        color:"green"
      }
     
      //第三个数组参数为传递给函数的实参，如果第四个参数为true，则三个数组参数追加到原来函数参数的后面,如果第四个参数为数字，则插入到指定位置
    //  Ext.Function.bind(getColor,fobj,['apple',12],true)(fobj.name,fobj.age);
      Ext.Function.bind(getColor,fobj,[45,'admin'],1)(fobj.name,fobj.age);//flower,45,admin,11
      
})