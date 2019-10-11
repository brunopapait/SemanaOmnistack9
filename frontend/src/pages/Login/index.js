import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) { //HISTORY = UTILIZADO PARA FAZER A NAVEGAÇÃO

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email }) // AGUARDAR A FINALIZACAO DA CHAMADA A API, 
        //PODE DEMORAR, E QUANDO DEVOLVER A RESPOSTA VAI ARMAZENAR A RESPOSTA NA VARIAVEL RESPONDE

        console.log(response);

        const { _id } = response.data;
        console.log(_id);

        localStorage.setItem('user', _id)
        history.push ('/dashboard');
    }


    return (
        <div>
            <p>Ofereça <strong>spot</strong> para programadores e encontre <strong>talentos</strong> para sua empresa. </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)} />

                <button className='btn' type="submit">Entrar</button>
            </form>
        </div>
    )
}    