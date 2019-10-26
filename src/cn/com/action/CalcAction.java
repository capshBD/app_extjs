package cn.com.action;


/*import org.apache.commons.jexl2.Expression;
import org.apache.commons.jexl2.JexlContext;
import org.apache.commons.jexl2.JexlEngine;
import org.apache.commons.jexl2.MapContext;*/


@SuppressWarnings("serial")
public class CalcAction extends BaseAction {
		@Override
		public String execute() throws Exception {
			/*String exp=request.getParameter("exp");
			
			JexlEngine jexl = new JexlEngine(); 
			Expression e = jexl.createExpression(exp); 
			JexlContext jc = new MapContext(); 
			Object o=e.evaluate(jc);
			System.out.println(o);
			setJsonResult(o);*/
			return SUCCESS;
		}
}
