package cn.com.service;

import java.util.List;
import java.util.Map;

public interface FenYeService {
	List<Map<String, Object>> fenye(Map<String, Object> param)throws Exception;
	Integer totalProperty()throws Exception;
}
