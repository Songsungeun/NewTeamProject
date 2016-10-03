package honey.dao;

import java.util.List;
import java.util.Map;

import honey.vo.HoneyMain;



public interface HoneyMainDao {
  List<HoneyMain> selectList(Map<String, Object> paramMap) throws Exception;
  
  HoneyMain selectOne(int no) throws Exception;
  
  HoneyMain selectOneByPassword(Map<String, Object> paramMap) throws Exception;
  
  int insert(HoneyMain honeyMain) throws Exception;
  
  int update(HoneyMain honeyMain) throws Exception;
  
  int delete(int no) throws Exception;
  
}
