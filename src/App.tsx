import { useState } from "react";
import { IconDelete, IconFile, IconSave } from "./icons/Icons";

function App() {
  const [text, setText] = useState("");

  function handleChangeMarkdown(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const markdownText = event.target.value;
    console.log("Markdown text changed:", markdownText);
    // Here you can add logic to process the markdown text
    setText(markdownText);
  }

  return (
    <div className="container">
      <header className="header">
        <span className="header__icon-nav"></span>
        <h1 className="header__title">Markdown</h1>
        <div className="sec-markdown">
          <span className="sec-markdown__icon">
            <IconFile />
          </span>
          <label className="sec-markdown__label" htmlFor="inp-mark">
            <span className="sec-markdown__title">Document Name</span>
            <input
              className="sec-markdown__inp"
              type="text"
              name="inp-mark"
              id="inp-mark"
              value={"document.md"}
            />
          </label>
        </div>
        <div className="sec-btns">
          <button className="btn btn--del">
            <IconDelete />
          </button>
          <button className="btn btn--save">
            <IconSave /> Save Change
          </button>
        </div>
      </header>

      <main className="main">
        <section className="markdown">
          <header className="markdown__header">
            <h2 className="markdown__title">Markdown</h2>
          </header>
          <textarea
            name="markdown-text"
            id="markdown-text"
            className="markdown__content"
            onChange={handleChangeMarkdown}
            autoFocus
          ></textarea>
        </section>
        <hr className="main__line-center" />
        <section className="preview">
          <header className="preview__header">
            <h2 className="preview__title">Preview</h2>
          </header>
          <div className="preview__content">{text}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
