import "../public/styles/diaryEntry.css";

function ViewEntry({ date, subject, content, entryNo, id, goBack }) {
  return (
    <>
      <div className="back-btn" onClick={goBack}>
        ⬅ Back
      </div>
      <div className="diaryEntry">
        <p>
          <strong>Date:</strong> {new Date(date).toDateString()}
        </p>
        <p>
          <strong>Entry No.:</strong> {entryNo}
        </p>
        <h2>{subject}</h2>
        <span className="content-area">
          <p>{content}</p>
        </span>
      </div>
    </>
  );
}

export default ViewEntry;
