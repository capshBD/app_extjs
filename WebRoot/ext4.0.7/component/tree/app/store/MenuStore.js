Ext.define('datao.store.MenuStore',{
            extend:'Ext.data.TreeStore',
            proxy:{
                type:'ajax',
                url:pathUrl+'/menuInfo.action'
                },
            reader : {
                type : 'json'
		       },
		    root: {
		         text: '树根',
		         id: 'root',
                 checked:false,
		         expanded: false,
		         type:'normal'
		    },
	autoLoad:true	   
});