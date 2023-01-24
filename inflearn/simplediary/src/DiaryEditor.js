import { useState, useRef } from "react";

const DiaryEditor = () => {
  const writerInput = useRef();
  const contentInput = useRef();

  const [info, setInfo] = useState({
    writer: "",
    content: "",
    emotion: 1,
  });

  const infoChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  const infoSubmit = (e) => {
    console.log(info);
    if (info.writer.length < 1) {
      // alert("작성자 이름 입력해라");
      writerInput.current.focus();
      return;
    }
    if (info.content.length < 10) {
      contentInput.current.focus();
      return;
    }
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h4>오늘의 일기</h4>
      <div>
        <input
          name="writer"
          ref={writerInput}
          onChange={infoChange}
          type="text"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          onChange={infoChange}
          name="content"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        오늘의 감정점수 :
        <select name="emotion" value={info.emotion} onChange={infoChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <button onClick={infoSubmit}>Save Diary</button>
    </div>
  );
};

export default DiaryEditor;
