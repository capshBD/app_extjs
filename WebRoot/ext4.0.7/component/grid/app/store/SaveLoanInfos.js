    Ext.define('datao.store.SaveLoanInfos',{
        extend:'Ext.data.Store',
        model:'datao.model.SaveLoanInfo',
        proxy:{
            type:'ajax',
            url:pathUrl+'/userFinfo.action',
            reader:{
                type:'json',
                root:'data',
                totalProperty:'total'
            }
        },
        groupField:'sex', //以sex分组
        autoLoad:true
    });