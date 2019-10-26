package cn.com.dao;

import java.util.List;
import java.util.Map;


public interface FenYeDao {
	List<Map<String, Object>> fenye(Map<String, Object> param)throws Exception;
	Integer totalProperty()throws Exception;
}
