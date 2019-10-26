package cn.com.action;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class BaseAction extends ActionSupport implements SessionAware,ServletRequestAware,ServletResponseAware{

	protected HttpServletRequest request;
	protected HttpServletResponse response;
	protected Map<String,Object> session;
	protected Object jsonResult;

	@Override
	public void setSession(Map<String, Object> session) {
			this.session=session;
	}

	@Override
	public void setServletResponse(HttpServletResponse response) {
			this.response=response;
	}

	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
	}

	public Object getJsonResult() {
		return jsonResult;
	}

	public void setJsonResult(Object jsonResult) {
		this.jsonResult = jsonResult;
	}
	
	/**
	 * 获取所有请求参数(忽略重复)
	 * @return
	 */
	protected Map<String, Object> getParameters() {
		 ActionContext context = ActionContext.getContext();
		Map<String, Object> parameters=new HashMap<String, Object>();
		Map<String, Object> map = context.getParameters();
		for (Entry<String, Object> entry : map.entrySet()) {
			String s = ((String[])entry.getValue())[0];
			if(s!=null&&!s.isEmpty()){
				parameters.put(entry.getKey(), s.trim());
			}else{
				parameters.put(entry.getKey(), "");
			}
		}
		return parameters;
	}
}
