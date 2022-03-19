import React, { useState } from "react";

import Layout from "../components/Layout";

import Seo from "../components/Seo";

const Calculadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const total1 = num1 + num2;
  const med1 = total1 / 2;
  return (
    <Layout>
      <Seo
        title="Calculadora de Média"
        ddescription="Página para calcular as médias escolares"
      />
      <h1>Calculadora de Média</h1>
      <main className="card">
        <p>
          Caro aluno(a), para saberes tua média (1ª nota + 2ª nota ÷ 2), basta
          informares tuas notas nos campo respectivos. Lembrando duas coisas:
          para essa simples calculadora, a média é <strong>5.0</strong> e já
          deixei as notas com <strong>0.0</strong> para não teres o trabalho de
          digitar 😁. Boa sorte!
        </p>
        <p>
          Ah, e se preferires, podes baixar o{" "}
          <button className="btn-app">
            {" "}
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.jcgsr.mediaEscolar"
            >
              app
            </a>{" "}
          </button>{" "}
          também 👍.
        </p>
        <hr />
        <section className="calculadora-campo">
          <label>Nota 1: </label>
          <input
            type="number"
            autoFocus
            value={num1}
            onChange={e => setNum1(parseFloat(e.target.value))}
          />
          <label>Nota 2: </label>
          <input
            type="number"
            autoFocus
            value={num2}
            onChange={e => setNum2(parseFloat(e.target.value))}
          />
          <p>
            Média: <span id="media-resul">{med1}</span>
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default Calculadora;
