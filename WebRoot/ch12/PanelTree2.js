Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
		Ext.QuickTips.init();
		
		var root = new Ext.tree.TreeNode({
			id:"root",
			text:"根节点",
			checked:false,
			expanded:true,
			qtip:"根节点",
			singleClickExpand:true,
			icon:"folder.jpg"
		});
		
	   root.on('click',function(){
			root.getUI().getIconEl().src='folder2.jpg'
		});
		
		root.appendChild(new Ext.tree.TreeNode({
			id:"childNode",
			text:"静态子节点1",
			qtip:"静态子节点1",
			icon:"folder.jpg"
		}))
		
		root.appendChild(new Ext.tree.AsyncTreeNode({
			id:"childNode2",
			text:"静态子节点2",
			icon:"folder.jpg",
			loader:new Ext.tree.TreeLoader({
				dataUrl:"nodeServer.jsp"
			}),
			expanded:true,
			qtip:"静态子节点2"
		}))
		
		var mytree = new Ext.tree.TreePanel({
			renderTo:"pt",
			id:"mytree",
			title:"动态树",
			width:300,
			height:300,
			root:root,
			autoHeight:true,
			enableDD:true,
			useArrows:true,
			selModel:new Ext.tree.MultiSelectionModel(),
			bbar:[
				{
					text:"获得选择的节点",
					handler:function(){
						var sm = mytree.getSelectionModel();
						var sn = sm.getSelectedNodes();
						var length=sn.length;
						if(length != null) {
							alert(length);
						}else {
							alert("没有选择任何节点");
						}
					}
				}
			]
		});
		new Ext.tree.TreeEditor(mytree);            //可编辑的树
			new Ext.tree.TreeSorter(mytree,{		//按指定属性进行排序
			property:"id"
		});
	}
);