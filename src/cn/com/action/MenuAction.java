package cn.com.action;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import cn.com.service.MenuService;

@SuppressWarnings("serial")
public class MenuAction  extends BaseAction{
	@Autowired
	private MenuService menuService;
	private String node;
	
	public void setNode(String node) {
		this.node = node;
	}
	
	@Override
	public String execute() throws Exception {
		setJsonResult(menuService.getChildrenByParent(node));
		return SUCCESS;
	}
	
	public String menuDel()throws Exception {
		Map result=new  HashMap();
		String ids=getParameters().get("ids").toString();
		ids=ids.substring(0,ids.lastIndexOf(","));
		ids=ids.replaceAll(",", "','");
		ids="'"+ids+"'";
		System.out.println(ids);
		try {
			menuService.delMenuById(ids);
		} catch (Exception e) {
			result.put("success", false);
			result.put("info",e.getMessage());
			setJsonResult(result);
			return SUCCESS;
		}
		result.put("success", true);
		result.put("info","删除成功");
		setJsonResult(result);
		return SUCCESS;
	}
	
	public String menuUpdate()throws Exception {
		Map result=new  HashMap();
		Map<String,Object> params=getParameters();
		if(params.get("type").equals("add")){
			int count=menuService.findMenuById(params.get("id").toString());
			if(count>0){
				result.put("success", false);
				result.put("info","改id已经存在");
				setJsonResult(result);
				return SUCCESS;
			}
				
		}
		try {
			menuService.updateMenu(getParameters());
		} catch (Exception e) {
			result.put("success", false);
			result.put("info",e.getMessage());
			setJsonResult(result);
			return SUCCESS;
		}
		
		result.put("success", true);
		result.put("info", "更新成功");
		setJsonResult(result);
		
		return SUCCESS;
	}
	
	public String getBankOrg() throws Exception {
		Map<String,Object> params=getParameters();
		Map result=new  HashMap();
		result.put("total", menuService.getBankOrgCount(params));
		result.put("data",menuService.getBankOrg(params));
		setJsonResult(result);
		return SUCCESS;
	}
	
	public String getBankList() throws Exception {
		Map result=new  HashMap();
		result.put("bankList",menuService.getBankTreeList(getParameters().get("pid").toString()));
		setJsonResult(result);
		return SUCCESS;
	}
}
