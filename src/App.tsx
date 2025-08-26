import { IconDelete, IconSave } from "./icons/Icons";

function App() {
  function handleChangeMarkdown(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const markdownText = event.target.value;
    console.log("Markdown text changed:", markdownText);
    // Here you can add logic to process the markdown text
  }

  return (
    <div className="container">
      <header className="header">
        <span className="header__icon-nav"></span>
        <h1 className="header__title">Markdown</h1>
        <div className="sec-markdown">
          <span className="sec-markdown__icon">icon</span>
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
          ></textarea>
        </section>
        <hr className="main__line-center" />
        <section className="preview">
          <header className="preview__header">
            <h2 className="preview__title">Preview</h2>
          </header>
          <div className="preview__content">
            <p>Preview content will be rendered here.</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            autem repudiandae, ipsa iusto numquam at delectus illum molestias
            culpa doloremque maxime consectetur repellat voluptatum vitae
            laudantium beatae fugiat. Ratione, nulla. Aspernatur tenetur
            eligendi molestias cum architecto ut eaque, libero vero. Veritatis
            ut, tempora ea recusandae, porro, inventore illo aspernatur
            obcaecati ratione incidunt dolor dignissimos esse ab et mollitia
            soluta possimus! Esse velit dignissimos ad voluptates quidem
            mollitia officia asperiores nobis maiores, voluptatum sequi ducimus
            nesciunt aperiam, earum fugit ipsam, cum distinctio veritatis
            assumenda dicta in voluptas id repellendus. Vero, quia. Delectus
            minima explicabo, itaque nisi at dicta? Officiis excepturi fugiat
            magnam autem nam animi odit eos itaque, consequuntur exercitationem
            ex veritatis cupiditate aspernatur iusto vitae quis eveniet esse!
            Atque, reprehenderit. Unde libero in voluptate cumque voluptatem ad
            illo. Ab odit culpa cum! Iure molestiae excepturi ex, cupiditate
            vitae nemo, deserunt praesentium eum culpa vero eos ipsum, ab
            accusantium autem libero? Consectetur ea inventore aliquam corporis
            saepe architecto quos, nesciunt et nisi veniam! Rem ipsum recusandae
            itaque blanditiis, veniam voluptatem mollitia ratione? Temporibus ut
            aspernatur, molestiae earum excepturi nam nemo sit. Alias
            repudiandae corrupti reiciendis. Quos natus sapiente corrupti enim
            blanditiis, incidunt consequuntur maiores explicabo cum praesentium
            dolor repellendus? Non minus veniam neque optio earum. Enim
            reiciendis esse tempore quo natus! Culpa ut corporis laudantium
            recusandae unde reiciendis voluptatem possimus necessitatibus ad
            perferendis minus, esse omnis eaque officiis? Officia asperiores
            velit eligendi illo commodi, qui saepe voluptatum sunt, reiciendis,
            cupiditate repellendus! Unde earum tempora neque illo, quam
            obcaecati doloribus provident fugiat cumque? Quo quidem corrupti
            aliquam autem? Saepe, tempora autem ex perferendis vitae,
            consectetur quod veritatis voluptatibus expedita non corporis
            nostrum? Facere qui voluptate nulla ea a aspernatur fugiat fugit
            ratione magnam, officia mollitia numquam deleniti iure quos
            inventore eius deserunt obcaecati? Eligendi at non iure accusantium
            consequatur tempore dolore exercitationem?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure minima, nobis quas maiores voluptatum facere error mollitia magni perferendis, reprehenderit adipisci sint. Repellat nobis eligendi tempore voluptates, nisi iste.
            Quibusdam facilis pariatur odio culpa accusantium! Eveniet illum autem nam saepe eaque, odit animi sed optio quam repellendus dolore ipsam qui neque aut id rem vel suscipit alias facilis cumque!
            Aspernatur adipisci animi veniam nobis tenetur dignissimos eaque non quibusdam aut fuga possimus suscipit dolor, aperiam harum neque ducimus eveniet doloribus architecto a eum at, recusandae odit necessitatibus? Ut, nemo.
            Necessitatibus quasi in et ipsum inventore voluptate minus pariatur. Tenetur error quam tempore ipsa, amet optio? Minima, velit incidunt delectus unde exercitationem dolores accusamus ea maiores doloremque veniam enim inventore?
            Sunt, cumque. Voluptate, repellendus. Et quo ipsa error corrupti temporibus! Numquam cumque optio minus modi, repellat voluptas voluptatum similique maxime facere necessitatibus quisquam recusandae nam, et enim, rerum odit porro!
            Harum ut at, provident repudiandae fugit ducimus dolores doloremque, vel cupiditate ad minima soluta! Nesciunt assumenda minus aliquid, at dolor excepturi ipsam dolores voluptas quaerat officiis amet ullam hic quod!
            Fugit rerum error, eius mollitia est, deserunt repudiandae adipisci nam doloribus, blanditiis minima recusandae voluptas. Nam reiciendis nulla quidem soluta voluptates est eveniet eum nobis natus? Nulla odio quam eaque?
            Eligendi quo magni repellat doloribus voluptate error corporis quos minus, suscipit, enim saepe facere pariatur! Velit, quasi enim voluptas ratione fugit aperiam sit, veniam doloremque ipsam corporis eligendi obcaecati iste.
            Enim, reprehenderit? Eius odio id iusto a quos maiores eligendi consequuntur beatae optio dicta dolorum aut reprehenderit, consequatur minima expedita laudantium? Dolore suscipit voluptatum, rerum ratione expedita harum error maxime.
            Ipsam, iure ducimus dolor voluptatum vitae sint in quis aliquam incidunt eveniet culpa cupiditate nemo explicabo optio. Laboriosam, alias architecto optio velit maiores doloribus eius obcaecati blanditiis animi officiis fugiat?
            Sapiente facilis blanditiis nemo eligendi illo, mollitia delectus ratione omnis quasi beatae deleniti fuga eaque vitae quia, corrupti, dolore voluptas magni nihil iusto totam! Possimus perspiciatis maxime sit minus dolorum?
            Distinctio officia nisi error cumque nam, eligendi, aliquid, rem cupiditate fugiat quam ipsum exercitationem tempore nulla qui magni corporis dicta ipsam quas ab dolores dolor at ut magnam perferendis. Velit!
            Laboriosam vel esse deserunt, delectus voluptatem iste fuga ex sequi adipisci voluptas voluptatibus exercitationem provident sed at voluptates asperiores aperiam nulla corrupti odio tempore a? Voluptatum accusamus dolor repudiandae quae!
            Dolore mollitia ab quaerat repudiandae asperiores a id obcaecati officiis debitis enim cupiditate voluptates, fugiat deleniti sed qui, consequatur totam inventore eius, nam nostrum iusto fuga! Sed magnam aut incidunt?
            Quos fuga dolore maxime a voluptatibus? Beatae, iure vitae voluptatibus quae sunt nulla deleniti aperiam ad eos dicta repellat ipsa. Nobis iusto debitis rerum soluta saepe nesciunt sit vitae culpa.
            Iste molestiae eum quaerat. Esse ipsa eum illum fuga debitis officia vitae. Fugiat et quia qui necessitatibus itaque, ipsa, voluptatum commodi expedita animi molestias exercitationem aliquid voluptate recusandae, doloremque tenetur?
            In voluptatem animi deserunt molestiae consequuntur facilis laborum illum doloremque reiciendis deleniti? Cumque deleniti optio corporis animi quas id eum sed, odio doloribus quos distinctio aut officiis, blanditiis minus ut.
            Error modi excepturi eaque dolorem illo assumenda vitae architecto, ipsa nisi officia labore. Beatae quasi minus temporibus quam accusantium? Fuga veritatis aspernatur dignissimos rerum iste! Delectus ipsa quas facere ipsum.
            Dolor debitis neque a, omnis accusantium, minus corporis mollitia veritatis doloremque saepe nesciunt minima tempora provident consequuntur eaque nihil autem quasi id quibusdam? Id sit minima, fugiat illum optio aperiam.
            Esse dolore distinctio similique velit blanditiis! Accusamus quis debitis eveniet? Dolores commodi eligendi laudantium eum fugiat voluptatem illo deleniti tempora asperiores sunt, tempore ex quas in, repellat atque explicabo inventore.
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
