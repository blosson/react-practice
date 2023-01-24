import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const info = [
    {
      id: 1,
      writer: "Son",
      content: "블로쏜의 일기입니다~~~~",
      emotion: 3,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      writer: "Son2",
      content: "코린이는 힘들어영 ㅎㅎㅎㅎㅎ",
      emotion: 3,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      writer: "Son3",
      content:
        "빨리 유럽 여행가고 싶다! 근데 Anka나 Marie를 만날 수 있을지 모르겠다.",
      emotion: 3,
      created_date: new Date().getTime(),
    },
  ];
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor />
      <DiaryList info={info} />
    </div>
  );
}

export default App;
