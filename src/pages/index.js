import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import { RiWhatsappFill, RiTelegramFill } from "react-icons/ri";

import { StaticImage } from "gatsby-plugin-image";
const Home = () => {
  return (
    <Layout>
      <Seo
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
      <section id="disclaimer">
        <p>
          <strong>Disclaimer:</strong> Eu utilizei, primordialmente, dois livros
          para consulta ao construir esse site. São eles:{" "}
          <a href="https://issuu.com/editoraftd/docs/bridges-ingles-mp-6_divulgacao_59f2c8c6110c27">
            Bridges
          </a>{" "}
          e{" "}
          <a href="https://www.edocente.com.br/pnld/2020/obra/time-to-share-6-ano-saraiva/">
            Time to Share
          </a>
          . Ambas as edições do 6º ao 9º ano obviamente. Se teu livro for
          diferente desses que mencionei, há a possibilidade de que o assunto
          que procuras estar em outro ano aqui no site. Ex.: estudo no 9º ano,
          quero o assunto <i>Linking Words</i>, mas não há esse assunto aqui no
          site... É porque esse assunto está coberto no 7º ano. Ficou claro?
          Qualquer dúvida, novamente, só entrar em contato pelos meios acima
          mencionados. Bons estudos!
        </p>
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
