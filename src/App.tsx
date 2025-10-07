import { useState } from "react";
import { IconDelete, IconFile, IconSave, IconView } from "./icons/Icons";
import { marked } from "marked";

function App() {
  const [text, setText] = useState("");
  const [view, setView] = useState(false);

  function handleChangeMarkdown(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const markdownText = event.target.value;
    console.log("Markdown text changed:", markdownText);
    // Here you can add logic to process the markdown text
    setText(markdownText);
  }

  function handleClickIconView() {
    setView(!view);
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
        <section
          className="markdown"
          style={{
            flex: view ? 0 : 1,
            minWidth: view ? "0px" : "50%",
            opacity: view ? 0 : 1,
          }}
        >
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
        <section
          className="preview"
          style={{ flex: view ? 1 : 1, width: view ? "100%" : "50%" }}
        >
          <header className="preview__header">
            <h2 className="preview__title">Preview</h2>
            <span className="preview__icon" onClick={handleClickIconView}>
              <IconView />
            </span>
          </header>
          <div
            className="preview__content"
            dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
          ></div>
        </section>
      </main>
    </div>
  );
}

export default App;
