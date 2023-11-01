import { useEffect, useState } from "react";
import avatar from "/avatar.webp"

function Main() {

  const [userInput, setUserInput] = useState("")

  const handleClick = (req, res) => {
    fetch( "./api", {
      method: "POST",
      body: JSON.stringify({
        email: userInput
      })
    })
    .then((res) => res.json()
    .catch((err) => {
      console.log(`Eror: ${err}`)
    }))
  }


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
                    onChange={ (e) => {
                      setUserInput(e.target.value)
                      /* console.log(e.target.value) */
                    } }
                  />
                  <button onClick={ handleClick }>Enviar</button>
                </div>
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
