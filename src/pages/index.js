import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { RiWhatsappFill, RiTelegramFill } from "react-icons/ri";

import { StaticImage } from "gatsby-plugin-image";
const Home = () => {
  return (
    <Layout>
      <SEO
        title="English?! Easy..."
        description="Site sobre tópicos gramaticais da língua inglesa do 6º ao 9º"
      />
      <h1>English?! Easy...</h1>
      <section id="site-desc">
        <p>
          Site feito para servir de consulta rápida com relação aos principais
          tópicos gramaticais da língua inglesa do Ensino Fundamental Maior.
          Totalmente dedicado aos meus alunos idos, aos que são e aos que serão.
          Se quiser dar alguma sugestão, fazer alguma crítica ou elogio, basta
          entrar em contato pelo{" "}
          <button>
            <a href="https://api.whatsapp.com/send?phone=5579988284730&text=Opa! Gostaria de falar sobre English?! Easy...">
              <RiWhatsappFill />
            </a>
          </button>{" "}
          ou pelo{" "}
          <button>
            <a href="https://telegram.me/jcgsr">
              <RiTelegramFill />
            </a>
          </button>{" "}
          .
        </p>
        <q>
          O site em si mesmo é tudo; se te agradar, fino aluno, pago-me da
          tarefa; se não te agradar, pago-te com um piparote, e até a próxima
          aula.
        </q>
      </section>
      <div id="brE-flag">
        <StaticImage
          alt="Bandeira britânica"
          src="../assets/img/brEflag.jpg"
          layout="constrained"
          placeholder="blurred"
        />
      </div>
    </Layout>
  );
};

export default Home;
