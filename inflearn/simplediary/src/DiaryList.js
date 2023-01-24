import React from "react";
import DiaryListItem from "./DiaryListItem";

export default function DiaryList({ info }) {
  // console.log(info);
  return (
    <div className="DiaryList">
      <h4>Diary List</h4>
      <div>{info.length}개의 일기가 있습니다.</div>
      <div>
        {info.map((i, idx) => {
          return <DiaryListItem {...i} key={idx} />;
        })}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  info: [],
};
