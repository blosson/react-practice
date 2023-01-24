import React from "react";

export default function DiaryListItem({
  id,
  writer,
  content,
  emotion,
  created_date,
}) {
  return (
    <div className="DiaryItem">
      <div>작성자: {writer}</div>
      <div>감정점수: {emotion}</div>
      <div className="date">
        작성시각 {new Date(created_date).toLocaleString()}
      </div>
      <hr />
      <div className="content">내용: {content}</div>
    </div>
  );
}
