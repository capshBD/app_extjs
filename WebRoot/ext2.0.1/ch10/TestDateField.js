Ext.override(Ext.form.DateField, {   
                initDisabledDays : function(){   
                    if(this.disabledDates){   
                        var dd = this.disabledDates;   
                        var re = "(?:";   
                        for(var i = 0; i < dd.length; i++){   
                            re += this.formatDate(dd[i]);   
                            if(i != dd.length-1) re += "|";   
                        }   
                        this.ddMatch = new RegExp(re + ")");   
                    }   
        }   
});



Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Ext/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var formPanle = new Ext.FormPanel({
			renderTo:"TestDateField",
			title:"formPanel",
			width:400,
			height:300,
			labelSeparator:"：",
			labelAlign:"right",
			frame:true,
			items:[
				new Ext.form.DateField({
					id:"date",
					name:"date",
					fieldLabel:"请选择日期",
					width:200,
					format:"Y年m月d日",
					minValue:"01/01/2009",
					maxVaue:"12/31/2009",
					minText:"选择的日期必须小于{0}",
					maxText:"选择的日期必须大于{0}",
					disabledDates:["2009年05月21日","2009年05月22日"],
					disabledDatesText:"今天放假，不能输入该日期",
					disabledDays:[0,6],
					disabledDaysText:"今天是周末，不能输入该日期"
				})
			]
		});
	}
);