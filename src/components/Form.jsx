import { useForm } from "@formspree/react";


    const Form = () => {
        const [state, handleSubmit] = useForm("moqobvkk");
        if (state.succeeded) {
          return <div>Obrigado por se inscrever!</div>;
        }

        return (
            <form onSubmit={handleSubmit} className="form">
                        <input
                        placeholder="seu melhor e-mail"
                        type="email"
                        name="email"
                        id="email"
                        required
                        />
                        <button type="submit" disabled={state.submitting}>Enviar</button>
                    </form>
        )
}

export default Form