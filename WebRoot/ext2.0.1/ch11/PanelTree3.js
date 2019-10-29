Ext.onReady(
	function(){
		var root=new Ext.tree.TreeNode({
			id:'root',
			text:'bbs龙少'
		});
		var child1=new Ext.tree.TreeNode({
			id:'child1',
			text:'论坛首页',
			href:'http://www.hao123.com',
			hrefTarget:'_blank'
		});
		var child2=new Ext.tree.TreeNode({
			id:'child2',
			text:'登录',
			href:'http://www.baidu.com',
			hrefTarget:'_blank'
		});
		var child3=new Ext.tree.TreeNode({
			id:'child3',
			text:'注册',
			href:'http://www.qq.com',
			hrefTarget:'_blank'
		});
		
		root.appendChild(child1);
		root.appendChild(child2);
		root.appendChild(child3);
		
		var mytree=new Ext.tree.TreePanel({
			id:'mytree',
			renderTo:'pt',
			width:300,
			height:200,
			title:'bbs',
			root:root
		})
	}
);