package cn.com.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.com.dao.MenuDao;
import cn.com.service.MenuService;
import cn.com.xml.Bank;
import cn.com.xml.Menu;

@Service
public class MenuServiceImpl implements MenuService {
	@Autowired
	private MenuDao menuDao;
	
	@Override
	public List<Menu> getChildrenByParent(String pid) throws Exception {
		List<Menu> menus=menuDao.getChildrenByParent(pid);
		for (Menu menu : menus) {
			setChildrenMenu(menu);
		}
		return menus;
	}
	
	private void setChildrenMenu(Menu menu)throws Exception{
		if(!menu.isLeaf()){
			List<Menu>  children=menuDao.getChildrenByParent(menu.getId());
			menu.setChildren(children);
			for (Menu m : children) {
				setChildrenMenu(m);
			}
		}
			
		
	}

	@Override
	public List<Map<String, Object>> getBankOrg(Map<String,Object> map) throws Exception {
		return menuDao.getBankOrg(map);
	}

	@Override
	public int getBankOrgCount(Map<String, Object> map) throws Exception {
		return menuDao.getBankOrgCount(map);
	}

	@Override
	@Transactional
	public void updateMenu(Map<String, Object> map) throws Exception {
		menuDao.updateMenu(map);
		
	}

	@Override
	public int findMenuById(String id) throws Exception {
		return menuDao.findMenuById(id);
	}

	@Override
	@Transactional
	public void delMenuById(String ids) throws Exception {
		menuDao.delMenuById(ids);
	}

	@Override
	public List<Bank> getBankTreeList(String pid) throws Exception {
		return menuDao.getBankTreeList(pid);
	}

}
