function Main() {
  return (
    <>
      <main>
        <div className="container">
          <div className="even-columns">
            <div className="even-columns | text">
              <h1>para uma vida mais produtiva</h1>
              <div className="fit">
                <p>
                  o melhor conteúdo sobre foco, produtivide e alta performance
                  de graça toda semana na sua caixa de entrada
                </p>
                <label htmlFor="email">Email *</label>
                <div className="form">
                  <input
                    placeholder="seu melhor e-mail"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <button>Enviar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="even-columns | avatar">
            <img src="\avatar.webp" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
