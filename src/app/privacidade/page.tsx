import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidade | RB Digital",
  description:
    "Politica de privacidade da RB Digital - Rede Brasilia News LTDA.",
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
          Politica de Privacidade
        </h1>

        <div className="space-y-8 text-[#C8CDD5] leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-white font-heading text-xl font-semibold mb-3">
              1. Informacoes Gerais
            </h2>
            <p>
              Esta Politica de Privacidade descreve como a RB Digital, marca
              pertencente a Rede Brasilia News LTDA (CNPJ 43.209.040/0001-50),
              coleta, utiliza e protege as informacoes pessoais dos usuarios
              deste site.
            </p>
          </section>

          <section>
            <h2 className="text-white font-heading text-xl font-semibold mb-3">
              2. Dados Coletados
            </h2>
            <p>
              Ao utilizar nosso site e preencher formularios, podemos coletar as
              seguintes informacoes: nome, empresa, numero de WhatsApp, tipo de
              projeto, objetivo, prazo desejado, faixa de investimento e
              descricao da ideia.
            </p>
            <p className="mt-2">
              Tambem podemos coletar dados de navegacao como endereco IP,
              navegador utilizado, paginas acessadas e tempo de permanencia.
            </p>
          </section>

          <section>
            <h2 className="text-white font-heading text-xl font-semibold mb-3">
              3. Uso dos Dados
            </h2>
            <p>Os dados coletados sao utilizados para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder solicitacoes de contato e orcamento</li>
              <li>Elaborar propostas comerciais</li>
              <li>Melhorar a experiencia de navegacao</li>
              <li>Comunicar sobre servicos e projetos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-heading text-xl font-semibold mb-3">
              4. Compartilhamento de Dados
            </h2>
            <p>
              Nao compartilhamos, vendemos ou alugamos suas informacoes pessoais
              a terceiros, exceto quando necessario para cumprimento de
              obrigacoes legais.
            </p>
          </section>

          <section>
            <h2 className="text-white font-heading text-xl font-semibold mb-3">
              5. Seguranca
            </h2>
            <p>
              Adotamos medidas tecnicas e organizacionais para proteger seus
              dados pessoais contra acesso nao autorizado, perda ou destruicao.
            </p>
          </section>

          <section>
            <h2 className="text-white font-heading text-xl font-semibold mb-3">
              6. Seus Direitos
            </h2>
            <p>
              De acordo com a Lei Geral de Protecao de Dados (LGPD), voce tem
              direito a acessar, corrigir, excluir ou solicitar a portabilidade
              de seus dados pessoais. Para exercer esses direitos, entre em
              contato pelo WhatsApp: +55 38 99162-1135.
            </p>
          </section>

          <section>
            <h2 className="text-white font-heading text-xl font-semibold mb-3">
              7. Contato
            </h2>
            <p>
              Para duvidas sobre esta Politica de Privacidade, entre em contato:
            </p>
            <p className="mt-2">
              <strong className="text-white">Rede Brasilia News LTDA</strong>
              <br />
              CNPJ: 43.209.040/0001-50
              <br />
              Valparaiso de Goias — GO
              <br />
              WhatsApp: +55 38 99162-1135
            </p>
          </section>

          <section>
            <h2 className="text-white font-heading text-xl font-semibold mb-3">
              8. Atualizacoes
            </h2>
            <p>
              Esta politica pode ser atualizada periodicamente. Recomendamos a
              consulta regular desta pagina.
            </p>
            <p className="mt-4 text-[#6F7785] text-xs">
              Ultima atualizacao: Janeiro de 2025
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(200,205,213,0.08)]">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`}
            className="text-[#0B3D91] hover:text-[#1252B5] transition-colors text-sm font-medium"
          >
            Voltar ao inicio
          </a>
        </div>
      </div>
    </main>
  );
}
