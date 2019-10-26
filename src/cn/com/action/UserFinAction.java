package cn.com.action;

import java.util.List;

import cn.com.xml.SimpleJsonResult;
import cn.com.xml.UserFinfo;
import cn.com.xml.UserFinfoData;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class UserFinAction extends ActionSupport {
	private Object jsonResult;
	
	public Object getJsonResult() {
		return jsonResult;
	}

	public void setJsonResult(Object jsonResult) {
		this.jsonResult = jsonResult;
	}

	@Override
	public String execute() throws Exception {
		List<UserFinfo> datas=UserFinfoData.datas;
		SimpleJsonResult result=new SimpleJsonResult();
		result.setTotal(datas.size());
		result.setData(datas);
		result.setSuccess(true);
		setJsonResult(result);
		return SUCCESS;
	}
}
