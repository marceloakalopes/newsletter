
import Form from "./Form";
import avatar from "/avatar.webp";


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
                o melhor conteúdo sobre foco, produtivide e alta performance de
                graça toda semana na sua caixa de entrada
              </p>

              <label htmlFor="email">Email *</label>
              <Form />

            </div>
          </div>
        </div>
        <div className="even-columns | avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
    </main>
  </>
);
}

export default Main;
