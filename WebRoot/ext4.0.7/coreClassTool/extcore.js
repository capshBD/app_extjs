    Ext.define("Ext.myApp",{
        /*调用Ext.define函数用传入的配置对象会生成一个Ext.myApp函数 ，配置对象的属性除了extend和statics属性其他全部被设置到Ext.myApp函数的原型属性中 ，其中config配置的对象会自动在原型属性中添加get,set方法和apply方法；实例化的时候用传入构造函数的参数可以覆盖对象本地属性
        define函数内部会采用特定的Ext.Class配置实例化Ext.Class对象完成函数类的创建
    */
        extend:'Ext.window.Window',
        width:400,
        height:300,
        newtitle:'mytitle',
        config:{price:50},//简化get set方法
        setMytitle:function(){
            this.title=this.newtitle
        },
        title:'usacpt',
        initComponent:function(){
            this.setMytitle();
            this.callParent(arguments);
        },
        //定义静态方法
        statics: {
         method: function (x) {
             return x*x;
         }
     	}
    }) ;

Ext.onReady(function(){
    function callTest(){
        callTest2();

    }
    function callTest2() {
        console.info(callTest2.caller); //打印出callTest2这个函数是在哪个函数内调用它
    }
    var o={
        name:"mike",
        getName:function(){
            console.info(this.name);
        }
    };
    callTest();


    var fn=Ext.Function.alias(o,'getName');
    fn();

    Ext.get('btn').on('click',function(){
        var win=Ext.create('Ext.myApp',{width:800,height:600,price:600});
        console.info(win);
        win.show();
        console.info(win.getPrice());
    });

    console.info(Ext.myApp.method(6));

    Ext.define('person',{
        canSay:function(){
            console.info('saying');
        }

    });

    Ext.define('animal',{
        name:'dog',
        eat:function(){
            console.info('eating..');
        }
    });

    Ext.define('earth',{
        extend:'animal',
        mixins:{//多继承，把person函数的原型属性里面的内容复制到earth原型属性中来 并且earth原型属性中的mixins属性含有一个people的实例
            people:'person'
        },
        name:'xiaoming'
    });

    var e=Ext.create('earth');
    e.canSay();
    e.eat();
    console.info(e.name);
    console.info(e);

    Ext.define('Child',{
        name:'shinaian',
        play:function(){
            console.info('kool'+this.name);
        }
    })
    Ext.define('Mother', {
        requires: ['Child'], // 生成一个函数时，若Child函数不存在，则报错，可以用来确保哪些函数必须需要
        giveBirth: function() {
            return new Child();
        }
    });

    var mother=Ext.create('Mother');
    console.info(mother);
    mother.giveBirth().play();


    //override 没整明白
    /* Ext.define('My.app.Panel', {
         extend: 'Ext.panel.Panel',
         config:{name:'extnme',age:23},
         constructor: function (config) {
             this.setName(config.name);
             this.callParent(arguments); // 调用Ext.panel.Panel的构造
         },

         statics: {
             method: function () {
                 return 'abc';
             }
         }
     });

     Ext.define('My.app.PanelPart2', {
         override: 'My.app.Panel',

         constructor: function (config) {
             this.callParent(arguments); // 调用 My.app.Panel's 的构造
         }
     });
     var panelPart2=Ext.create('My.app.PanelPart2',{name:'extjsname',age:56});
     console.info(panelPart2.name);
     console.info(panelPart2);*/

    //记录器
    Ext.define('Logger', {
        singleton: true, //单例，Logger直接变成一个对象
        log: function(msg) {
            console.log(msg);
        }
    });
    console.info(Logger);


    Ext.define('chaper.ux.Tran',{
        goods:'iphone',
        buy:function(){
            console.info('buy...');
        }
    })
    Ext.define('chaper.ux.Stu',{
        name:'xiaoming',
        sex:'女',
        life:22,
        mixins:{Tran:'chaper.ux.Tran'},
        getInfo:function(){
            console.info(this.name+";"+this.life+";"
                +this.getHasTouchScreen()+";"+this.getOperatingSystem()+";"
                +this.getPrice()+";"+this.goods);
        },
        config: {
            hasTouchScreen: false,
            operatingSystem: 'Other',
            price: 500
        },
        trans:function(){
            this.mixins.Tran.buy.call(this);
        },
        constructor:function(config){
            this.initConfig(config); //不在config对象中的属性不会被设置到本地属性

        },
        initComponent:function(){
            this.callParent(arguments);
        }
    });

    var instance=Ext.create('chaper.ux.Stu',{name:'大猪',hasTouchScreen:true,price:300});
    console.info(instance);
    instance.getInfo();
    instance.buy();
    instance.trans();

})