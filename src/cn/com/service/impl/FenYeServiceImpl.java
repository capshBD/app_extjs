package cn.com.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.com.dao.FenYeDao;
import cn.com.service.FenYeService;

@Service
public class FenYeServiceImpl implements FenYeService {
	@Autowired
	private FenYeDao fenYeDao;

	@Override
	public List<Map<String, Object>> fenye(Map<String, Object> param)
			throws Exception {
		return fenYeDao.fenye(param);
	}

	@Override
	public Integer totalProperty() throws Exception {
		return fenYeDao.totalProperty();
	}

}
