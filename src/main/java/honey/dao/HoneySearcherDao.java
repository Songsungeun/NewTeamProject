package honey.dao;

import java.util.List;
import java.util.Map;

import honey.vo.HoneyMembers;
import honey.vo.HoneySearchKeyword;

public interface HoneySearcherDao {
	List<HoneySearchKeyword> selectFromBoard(Map<String, Object> paramMap) throws Exception;
	List<HoneySearchKeyword> selectFromMembers(Map<String, Object> paramMap) throws Exception;
  List<HoneySearchKeyword> memberResultLengthList(String value) throws Exception;
  List<HoneySearchKeyword> boardResultLengthList(String value) throws Exception;
}