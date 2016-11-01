package honey.dao;

import java.util.List;
import java.util.Map;

import honey.vo.HoneyMain;
import honey.vo.UrlInfo;
import honey.vo.honey_boards;

public interface tempDao {
  List<HoneyMain> selectList(Map<String, Object> paramMap) throws Exception;
  List<HoneyMain> selectList1(Map<String, Object> paramMap) throws Exception;
  
  int insert(honey_boards board) throws Exception;
  honey_boards selectOne(int no) throws Exception;
  int update(honey_boards board) throws Exception;
  int delete(int no) throws Exception;
  int insertUrl(UrlInfo urlInfo) throws Exception;
  
}