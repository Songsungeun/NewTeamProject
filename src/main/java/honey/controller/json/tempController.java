package honey.controller.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import honey.dao.tempDao;
import honey.vo.honey_boards;

@Controller
@RequestMapping("/mainpage/")
public class tempController {
  @Autowired tempDao tempdao;
  
  @RequestMapping(path="list",produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
  @ResponseBody
  public String list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="20") int length) throws Exception {
    
    HashMap<String,Object> result = new HashMap<>();
    try {
      HashMap<String,Object> map = new HashMap<>();
      map.put("startIndex", (pageNo - 1) * length);
      map.put("length", length);
      
      List<honey_boards> list = tempdao.selectList(map);
      result.put("state", "success");
      result.put("data", list);
    } catch (Exception e) {
      result.put("state", "fail");
      result.put("data", e.getMessage());
    }
    return new Gson().toJson(result);
  }
  @RequestMapping("list2")
  public ResponseEntity<String> list2(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="20") int length) throws Exception {
    
    HashMap<String,Object> map = new HashMap<>();
    map.put("startIndex", (pageNo - 1) * length);
    map.put("length", length);
    
    List<honey_boards> list = tempdao.selectList(map);
    
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Type", "text/plain;charset=UTF-8");
    
    return new ResponseEntity<>(
        "클라이언트에게 보낼 내용", 
        headers,
        HttpStatus.OK);
  }
  
  @RequestMapping(path="add", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
  @ResponseBody
  public String add(honey_boards board) throws Exception {
    // 성공하든 실패하든 클라이언트에게 데이터를 보내야 한다.
    HashMap<String,Object> result = new HashMap<>();
    
    try {
      tempdao.insert(board);
      result.put("state", "success");
      
    } catch (Exception e) {
      result.put("state", "fail");
      result.put("data", e.getMessage());
    }
    
    return new Gson().toJson(result);
  }
  
  @RequestMapping(path="detail", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
  @ResponseBody
  public String detail(int no) throws Exception {
    HashMap<String,Object> result = new HashMap<>();
    
    try {
      honey_boards board = tempdao.selectOne(no);
      
      if (board == null) 
        throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");
      
      result.put("state", "success");
      result.put("data", board);
      
    } catch (Exception e) {
      result.put("state", "fail");
      result.put("data", e.getMessage());
    }
    
    return new Gson().toJson(result);
  }
  
  @RequestMapping(path="update", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
  @ResponseBody
  public String update(honey_boards board) throws Exception {
    HashMap<String,Object> result = new HashMap<>();
    try {
      HashMap<String, Object> paramMap = new HashMap<>();
      paramMap.put("no", board.getNo());
      tempdao.update(board);
      result.put("state", "success");
    } catch (Exception e) {
      result.put("state", "fail");
      result.put("data", e.getMessage());
    }
    return new Gson().toJson(result);
  }
  
  @RequestMapping("delete")
  public String delete(int no) throws Exception {
    HashMap<String,Object> result = new HashMap<>();
    try {
      if (tempdao.delete(no) == 0) {
        throw new Exception("해당 게시물이 없거나 삭제 실패입니다.");
      }
      result.put("state", "success");
    } catch (Exception e) {
      result.put("state", "fail");
      result.put("data", e.getMessage());
    }
    return new Gson().toJson(result);
  }
} 
