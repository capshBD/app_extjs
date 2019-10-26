package cn.com.service;

import java.util.List;
import java.util.Map;

import cn.com.xml.Bank;
import cn.com.xml.Menu;

public interface MenuService {
	public List<Menu> getChildrenByParent(String pid) throws Exception;
	public List<Map<String,Object>> getBankOrg(Map<String,Object> map) throws Exception;
	public int getBankOrgCount(Map<String,Object> map) throws Exception;
	public void updateMenu(Map<String,Object> map) throws Exception;
	public int findMenuById (String id) throws Exception;
	public void delMenuById (String ids) throws Exception;
	public List<Bank> getBankTreeList (String pid) throws Exception;
}
