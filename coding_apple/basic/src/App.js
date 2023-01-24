import "./App.css";
import { useState } from "react";

function App() {
  const [글제목, set글제목] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(0);
  const [content, setContent] = useState("");

  const coat = () => {
    const copy = [...글제목];
    copy[0] = "여자코트추천";
    set글제목(copy);
  };

  const sortTitle = () => {
    const copy = [...글제목];
    copy.sort();
    set글제목(copy);
  };

  return (
    <div className="App">
      <div className="blackNav">
        <h4 style={{ fontSize: "1.3rem" }}>손민혁 블로그임</h4>
      </div>
      <button onClick={coat}>여자코트 추천으로 바꿔줘</button>
      <button onClick={sortTitle}>가나다순으로 정렬해줘</button>

      {글제목.map((title, idx) => {
        return (
          <div className="list" key={idx}>
            <h4
              onClick={() => {
                setModal(idx + 1);
              }}
            >
              {글제목[idx]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  const copy = [...like];
                  copy[idx] = copy[idx] + 1;
                  setLike(copy);
                }}
              >
                🎇
              </span>
              {like[idx]}
            </h4>

            <p>1월 23일 발행</p>
            <button
              onClick={() => {
                const copy = [...글제목];
                copy.splice(idx, 1);
                set글제목(copy);
              }}
            >
              삭제하자 그냥
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const copy = [...글제목];
          copy.push(content);
          set글제목(copy);
        }}
      >
        글 하나 추가해줘
      </button>
      {modal ? <Modal modal={modal} coat={coat} 글제목={글제목} /> : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[props.modal - 1]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.coat}>글수정</button>
    </div>
  );
};
export default App;
