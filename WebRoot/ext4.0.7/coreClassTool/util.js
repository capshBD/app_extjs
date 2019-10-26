/**
 * Ext的相关获取对象方法
 * Ext.get() 	Ext.dom.Element.get 静态函数的别名 返回Ext.dom.Element类型的对象
 * Ext.fly()    Ext.dom.AbstractElement.fly 静态函数的别名
 * 上面两个构造函数貌似是Ext.util.Animate
 * Ext.getDom() 返回元素dom元素
 * Ext.getBody() 返回当前document的body对象当作Ext.Element。
 * Ext.getCmp() Ext.ComponentManagerView这个单例对象的get()方法的简写 返回ext的组件对象
 * Ext.core.Element.fly() 和 Ext.fly（）一样效果
 * Ext.select（） 	//类似于jquery的选择器 返回Ext.CompositeElement组合元素
 *
 * Ext.dom.Element对象常用方法
 * addKeyMap（） 为元素绑定一些事件 返回Ext.util.KeyMap
 */

Ext.onReady(function(){

	console.info(Ext.get('fy'));
	console.info(Ext.fly('fy'));
	console.info(Ext.getDom('fy'));
	console.info(Ext.getBody());
	var ele=Ext.core.Element.fly('fy');
	console.info(ele);

	ele.addClsOnOver('mouseon');

	var ds= Ext.select('label');
	ds.each(function(el){
		console.info(this==el); //this指的是El.Flyweight 的对象
		console.info(el); //el是El.Flyweight 的对象
		//el.highlight();
	});

	Ext.select('div').on('click',function(){
		//事件处理函数的this指的是原始dom对象
		console.info(this);
	})

    
    function myHandler(){
    	console.info(this.getAttribute('value'));
        this.dom.value=this.getAttribute('value')+"X";
    }
    
    var input=Ext.get('it');
    input.addKeyMap({
        key:Ext.EventObject.ENTER,
        ctrl:false,
        fn:myHandler,
        scope:input
    });
    
    //添加css样式
    Ext.util.CSS.createStyleSheet('.psy{color:pink}','pst');
    Ext.get('it').addClsOnOver('psy');
    
    //获取css样式
    var cssObj=Ext.util.CSS.getRule('.psy',true);
    console.info(cssObj.style.color);
    
    //把id为pst的样式表切换为制定样仪表
    Ext.get('bon').on('click',function(){
    	if(parseInt(Math.random()*100)%2==0)
    	    Ext.util.CSS.swapStyleSheet('pst','css/one.css');
    	  else
    	   Ext.util.CSS.swapStyleSheet('pst','css/two.css');
    });
    
    Ext.get('p').addClsOnOver('psy');
    
   var ppt=new Ext.util.ClickRepeater(Ext.get('pk'),{
    	delay:3000,
    	interval:4000,
    	stopDefault:true,
    	handler:function(){
    		console.info("单击我");
    	}
    });
    
    
     //可以做表单延迟验证
    var tk=new Ext.util.DelayedTask();
    //当el元素连续按下的间隔时间不超过500ms,不会验证
    Ext.get('ut').on('keypress',function(){
    	 tk.delay(500,function(){
    	 	if(this.getValue().length<10)
    	 	console.log('用户名长度不够');
    	 },this)
    });
    
   	 //集合类
    	var item1=new Ext.util.MixedCollection();
    	var obj1={name:'xiaoming'};
    	var obj2={name:'dahong'};
    	item1.add("obj1",obj1);
    	item1.add("obj2",obj2);
    	
    	var item2=new Ext.util.MixedCollection();
    	var arry=[obj1,obj2];
    	item2.addAll(arry);
    	console.info("item2"+item2);
    	item2.clear();
    	console.info("item2"+item2);
    	
    	var item3=item1.clone();
    	console.info(item3);
    	
    	console.info("包含对象"+item3.contains(obj2));
    	console.info("包含键"+item3.containsKey('obj1'));
    	console.info("包含键"+item3.containsKey('age'));
    	
    	item3.each(function(item){
    		console.info("遍历"+item.name)
    	});
    	
    	item3.on('add',function(index,o,key){
    		console.info("集合有了新成员"+" "+index+" "+o.name+" "+key);
    	});
    	
    	item3.add("obj3",{name:'meinv'});
    	console.info("last one "+item3.last().name);
    //定时器
    var runner=new Ext.util.TaskRunner();
    var task={
    	run:function(){
    		 Ext.core.Element.fly('clock').update(Ext.util.Format.date(new Date(),'Y-m-d h:i:s'));
    	},
    	 interval: 1000
    };
    runner.start(task);
})