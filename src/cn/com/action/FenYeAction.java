package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.json.annotations.JSON;
import cn.com.service.FenYeService;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class FenYeAction extends ActionSupport{
	
	private FenYeService fenYeService;
	private List<Map<String, Object>> results;
	private Integer totalProperty;
	
	@JSON(serialize=false)
	public FenYeService getFenYeService() {
		return fenYeService;
	}
	@Resource
	public void setFenYeService(FenYeService fenYeService) {
		this.fenYeService = fenYeService;
	}

	public List<Map<String, Object>> getResults() {
		return results;
	}

	public void setResults(List<Map<String, Object>> results) {
		this.results = results;
	}

	public Integer getTotalProperty() {
		return totalProperty;
	}

	public void setTotalProperty(Integer totalProperty) {
		this.totalProperty = totalProperty;
	}

	public String fenye() throws Exception {
		HttpServletRequest request=ServletActionContext.getRequest();
		int start=Integer.valueOf(request.getParameter("start"));
		int limit=Integer.valueOf(request.getParameter("limit"));
		Map<String, Object> param=new HashMap<String,Object>();
		param.put("start",start);
		param.put("limit",limit);
		results=fenYeService.fenye(param);
		totalProperty=fenYeService.totalProperty();
		return "success";
	}
}
