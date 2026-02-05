import "./Title.css";

export default function Title({ title, text, type, span, line, type2 }) {
  return (
    <>
      <h2 className={`title-text ${type2}`}>
        {" "}
        {title}
        <span id="logo-span">{span}</span>
      </h2>
      <div className={line}></div>
      <p className={`${type}`}>{text}</p>
    </>
  );
}
