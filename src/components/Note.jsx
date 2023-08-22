function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" onDoubleClick={handleClick}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default Note;
