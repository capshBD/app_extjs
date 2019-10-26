/*
  单行数据模型的创建
  1.继承  extend:'Ext.data.Model' ，并定义fields[] 字段对象数组
  2.注册方式 Ext.regModel ,可以自定义方法和验证器

  实例化单行数据模型
  1.Ext.create 方式，传入字段值的配置对象
  2.Ext.ModelMgr.create方式 ，这种类名在后面
  获取或设置值 set(field) 或get(field)
  发送数据 save() post ajax请求 把这个对象的字段数据当作json参数

  获取模型构造函数 可以调用load方法加载远程数据 get请求,把参数字符串当作url拼接参数
  Ext.ModelMgr.getModel(ClassName)
 */

Ext.onReady(function(){
		//扩展validations
        Ext.data.validations.lengthMessage='长度不对';
        Ext.apply(Ext.data.validations,{
            age:function(config,value){
                var min=config.min,max=config.max;
                if(min<=value&&value<=max)
                    return true;
                 return false;
            },
            ageMessage:'age error'
        });
        
     //继承方式定义Model
    Ext.define('User',{
        extend:'Ext.data.Model',
        fields:[
        {name:'name',type:'auto'},
        {name:'age',type:'int'}
        ]
    });
    
    //注册方式定义Model
   Ext.regModel('Person',{
      fields:[
        {name:'name',type:'auto'},
        {name:'age',type:'int'}
        ],
    changeName: function() {
        var oldName = this.get('name'),
            newName = oldName + " The Barbarian";

        this.set('name', newName);
    },
     validations:[{type:'length',field:'name',mix:2,max:6},
                  {type:'age',field:'age',min:0,max:80}]
   }) ;
   
   //Ext.create实例化
   var u=Ext.create('User',{name:'yangguo',age:22});
   var p=Ext.create('Person',{name:'wangchong',age:45});
   console.info(u.get('name'));
   console.info(p.get('age'));
   
   //Ext.ModelMgr.create实例化
   var pr=Ext.ModelMgr.create({name:'gongsu',age:120},'Person');
   console.info(pr.get('name'));
   pr.changeName();
   console.info(pr.get('name'));
   
   //验证model有效性
   var errors=pr.validate();
   errors.each(function(v){
    console.info(v);
   },this)
   
   console.info(User.getName());//获取类名
   
   //代理
    Ext.regModel('House',{
      fields:[
        {name:'name',type:'auto'},
        {name:'age',type:'int'}
        ],
        proxy:{
            type:'ajax',
            url:'data.jsp'
        }
   });
   
   var house=Ext.create("House",{
			   	name:'袁绍',
			   	age:55
  		 });

   house.save();//向代理服务器发送数据 ajax请求
    house.set('name','万恶的');
    house.save(); //PUT请求

    house.destroy();//DELETE请求
    console.info(house.get('name'));
   
   //获取模型类
    var hr=Ext.ModelMgr.getModel('House');
    //加载远程数据 内部获取数据完成之后 会调用传入对象的success方法 传入实例化好的House实例和Ext.data.Operation操作对象
	hr.load(10, {
	    scope: this,
	    failure: function(record, operation) {
	        
	    },
	    success: function(record, operation) {
            console.info(record);
            console.info(record instanceof House);
            console.info(operation);
	    },
	    callback: function(record, operation) {
	    }
	});


    Ext.define('Product', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'id',      type: 'int'},
            {name: 'user_id', type: 'int'},
            {name: 'name',    type: 'string'}
        ]
    });

    //定义这个对象的的时候Ext.data.association.HasMany的实例会为User原型添加一个products方法
    Ext.regModel('User',{
        fields: [
            {name: 'id',   type: 'int'},
            {name: 'name', type: 'string'}
        ],
        hasMany: {model: 'Product', name: 'products'}
    });

    //首先，我们加载一个id为1的User
    var user = Ext.create('User', {id: 1, name: 'Ed'});
    console.info(user);

    //user.products 函数由association自动创建，并且返回一个Store的实例，
    //所建的store自动作用于id为1的User中的Products
    var products=user.products();
    console.info(products);

    //我们仍然可以拥有所有的Store的一般方法，例如可以轻易的给User加一个Product
    //为了节省内存和处理时间，新的Store只有在第一次调用products()时实例化， 所以第二次调用products()时返回的是相同的store实例.
    products.add({
        name: 'Another Product',
        id:12,
        user_id:1
    });

    products.sync();

    products.each(function(record){
        console.info(record.get('name'));
    });


    Ext.define('Search', {
        extend: 'Ext.data.Model',
        fields: [
            'id', 'query'
        ],

        hasMany: {
            model: 'Tweet',
            name : 'tweets',
            filterProperty: 'query'
        }
    });

    Ext.define('Tweet', {
        extend: 'Ext.data.Model',
        fields: [
            'id', 'text', 'from_user'
        ]
    });

    //返回一个filterProperty的store过滤器
    var store = new Search({id:'1',query: 'Sencha Touch'}).tweets();
    store.add({id:'1',text: 'configparam',from_user:'http'});
    store.add({id:'2',text: 'easyUI',from_user:'asp'});
    store.add({id:'3',text: 'yhooh',from_user:'ftp'});

    store.sync();

    store.each(function(model){
        console.info(model.get('text'));
    });

    /**
     * DataModel实例可以创建一对多,一对一等关系
     * 一个DataModel实例调用配置的hasMany的name方法时,会实例化一个Store,这个Store对象用户存放另一个DataModel实例的集合
     */

    Ext.define('Address', {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'id',     type: 'int' },
            { name: 'number', type: 'string' },
            { name: 'street', type: 'string' },
            { name: 'city', type: 'string' },
            { name: 'zip', type: 'string' }
        ]
    });

    Ext.define('Person', {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'id',   type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'address_id', type: 'int'}
        ],
        // 我们可以在模型上用hasOne快捷定义一个hasOne关联
        associations: { type: 'hasOne', model: 'Address'}
    });


    Ext.regModel('Group',{
        fields:['id','parent_id','name'],
        proxy:{
            type:'ajax',
            url: 'association.json',
            reader:{
                type: 'json',
                root: 'groups'//从groups属性中读取
            }
        },
        associations:[{
            type:'hasMany',
            model:'Group',
            primaryKey: 'id',
            foreignKey: 'parent_id',
            autoLoad:true,
            associationKey: 'child_groups' //子的数据从child_groups属性读取
        },{
            type: 'belongsTo',
            model: 'Group',
            primaryKey: 'id',
            foreignKey: 'parent_id',
            associationKey: 'parent_group' // 从parent_group读取父数据
        }]
    });

    var group=Ext.ModelMgr.getModel('Group');
    group.load(10,{
        scope: this,
        failure: function(record, operation) {

        },
        //返回3层对象 首先自身的DataModel对象 其次调用getGroup()方法返回父的DataModel对象 ,再次调用groups()方法返回Store对象
        success: function(record, operation) {
            console.info(record.getGroup().get('name'));
            record.groups().each(function(model){
                console.info(model.get('name'));
            });
        },
        callback: function(record, operation) {
        }
    });
})