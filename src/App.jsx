import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="promotion" id='home'>
        <p>CUPOM COM <span className="p-black">50% DE DESCONTO</span> 10 PRIMEIROS: <span className="p-black">EASY50</span></p>
      </div>

      <header>
        <div className="menu-content">
          <img className="logo" src="https://vicctorneve.github.io/site-Easymoney/assets/image/favicon.png" alt="imagem da logo da easymoney" />
          <input type="checkbox" id="checkbox-menu" role="button" aria-label="Abrir Menu" aria-expanded="false" />
          <label className="btn-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </label>
          <nav className="menu">
            <ul >
              <li><a href="#sobre">Easymoney</a></li>
              <li><a href="#feedback">Feedbacks</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#faq">Faq</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <!--SOBRE--> */}
      <section className="container-sobre" id="sobre">
        <article className="container-principal">
          <div className="title">
            <h1>BOT 24h on-line com sinais <span className="p-red"> <strong>CRASH</strong></span>
              e
              <span className="p-red"> <strong>DOUBLE</strong></span> na Blaze com +90% de assertividade! </h1>
          </div>
          <div className="container-video">
            <div className="embed">
              <iframe title="video explicativo sobre a EasyMoney" src="https://www.youtube.com/embed/FOCu8BRypVM"></iframe>
            </div>
          </div>
        </article>
        <img src="https://vicctorneve.github.io/site-Easymoney/assets/image/img1.png" alt="imagem garantia" />
        <a href="#" id="btntoplanos"><button className="decrease">Quero receber sinais</button></a>

      </section>

      <section className="container-depoimentos" id="feedback" >
        <h2>Vejam alguns depoimentos dos nossos clientes</h2>
        <ul className="depoimentos-flex" data-anime>
          <li className="depoimento grow" id="feedback1"></li>
          <li className="depoimento grow" id="feedback2"></li>
          <li className="depoimento grow" id="feedback3"></li>
          <li className="depoimento grow" id="feedback4"></li>
          <li className="depoimento grow" id="feedback5"></li>
          <li className="depoimento grow" id="feedback6"></li>
          <li className="depoimento grow" id="feedback7"></li>
          <li className="depoimento grow" id="feedback8"></li>
          <li className="depoimento grow" id="feedback9"></li>
        </ul>
      </section>

      
     <section id="feedback">
     <div id="testimonial" className="testimonial-area style-two">
        <div id="container-general" className="ready anim-section-features anim-section-desc anim-section-quote">
          <div className="row">
          </div>
          <section id="section-quote">
            <div className="col-lg-12 col-sm-12">
              <div className="dreamit-section-title white text-center">
                {/* <h5>// CLIENT TESTIMONIAL</h5> */}
                <h1>O que diz nosso Cliente</h1>
              </div>
            </div>
            {/* <!--Left Bubble Images--> */}
            <div className="container-pe-quote left">
              <div className="pp-quote li-quote-1" data-textquote="quote-text-1">
                <div className="img animated bounce"></div>
              </div>
              <div className="pp-quote li-quote-2" data-textquote="quote-text-2">
                <div className="img animated bounce"></div>
              </div>
              <div className="pp-quote li-quote-3" data-textquote="quote-text-3">
                <div className="img animated bounce"></div>
              </div>
            </div>
            {/* <!--Left Bubble Images--> */}

            {/* <!--Center Testimonials--> */}
            <div className="container-quote carousel-on">
              {/* <!--Testimonial 1--> */}
              <div className="quote quote-text-3 hide-bottom" data-ppquote="li-quote-3">
                <div className="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div className="container-info">
                  <div className="name">Tom Abel De /</div>
                  <div className="job">Digital Marketing</div>
                </div>
              </div>
              {/* <!--Testimonial 2--> */}
              <div className="quote quote-text-4 show" data-ppquote="li-quote-4">
                <div className="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div className="container-info">
                  <div className="name">Sanuka Santa /</div>
                  <div className="job">To To Company</div>
                </div>
              </div>
              {/* <!--Testimonial 3--> */}
              <div className="quote hide-bottom quote-text-5" data-ppquote="li-quote-5">
                <div className="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div className="container-info">
                  <div className="name">Grégoire Pasquet /</div>
                  <div className="job">Solf Solution</div>
                </div>
              </div>
              {/* <!--Testimonial 4--> */}
              <div className="quote hide-bottom quote-text-6" data-ppquote="li-quote-6">
                <div className="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div className="container-info">

                  <div className="name">Nicolas Puran /</div>
                  <div className="job">CEO Founder</div>
                </div>
              </div>
              {/* <!--Testimonial 5--> */}
              <div className="quote hide-bottom quote-text-8" data-ppquote="li-quote-8">
                <div className="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div className="container-info">

                  <div className="name">Charles Jadran /</div>
                  <div className="job">Web Development</div>
                </div>
              </div>
              {/* <!--Testimonial 6--> */}
              <div className="quote quote-text-1 hide-bottom" data-ppquote="li-quote-1">
                <div className="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div className="container-info">
                  <div className="name">Bertier Luyt /</div>
                  <div className="job">Managing Director</div>
                </div>
              </div>
              {/* <!--Testimonial 7--> */}
              <div className="quote quote-text-2 hide-bottom" data-ppquote="li-quote-2">
                <div className="pp"></div>
                <p>Dramatically communicate high-payoff infrastructures without ubiquitous best practices. Interactively
                  synthesize innovative best practices with at go forward methods of empowerment. Proactively</p>
                <div className="container-info">
                  <div className="name">Darpon Abir Khan /</div>
                  <div className="job">Founder Officience</div>
                </div>
              </div>
            </div>
            {/* <!--Right Bubble Images--> */}
            <div className="container-pe-quote right">
              <div className="pp-quote li-quote-4 active" data-textquote="quote-text-4">
                <div className="img animated bounce"></div>
              </div>
              <div className="pp-quote li-quote-5" data-textquote="quote-text-5">
                <div className="img animated bounce"></div>
              </div>
              <div className="pp-quote li-quote-6" data-textquote="quote-text-6">
                <div className="img animated bounce"></div>
              </div>
              <div className="pp-quote li-quote-8" data-textquote="quote-text-8">
                <div className="img animated bounce"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
     </section>

      <section className="container-planos" id="planos">
        <article className="title" data-anime="up">
          <img src="https://vicctorneve.github.io/site-Easymoney/assets/image/logo-EasyMoney.png" alt="" />
          <h1>Planos Vip</h1>
          <p>Sinais 24 horas</p>
        </article>
        <div className="container-cards-planos">
          <div className="card-planos" data-anime="right">
            <h2>Plano Bronze</h2>
            <p className="subtitle">Popular</p>
            <ul className="descricao">
              <li>Bot para crash</li>
              <li>24H Online</li>
              <li>Suporte</li>
              <li>Videos tutoriais</li>
              <li>Planilha de gerenciamento</li>
            </ul>
            <p className="valor">R$ 79,90 / Mensal</p>
            <a href="#home" ><button className="decrease" >Comprar</button></a>
            <p className="adesao">+ R$ 79,90 taxa de adesão</p>
          </div>
          <div className="card-planos" data-anime="right">
            <h2>Plano Prata</h2>
            <p className="subtitle">Mais assinado</p>
            <ul className="descricao">
              <li>Bot para double</li>
              <li>24H Online</li>
              <li>Suporte</li>
              <li>Videos tutoriais</li>
              <li>Planilha de gerenciamento</li>
            </ul>
            <p className="valor">R$ 79,90 / Mensal</p>
            <a href="#home" ><button className="decrease">Comprar</button></a>
            <p className="adesao">+ R$ 79,90 taxa de adesão</p>
          </div>
          <div className="card-planos" data-anime="left">
            <h2>Plano Ouro</h2>
            <p className="subtitle">Popular</p>
            <ul className="descricao">
              <li>Bot para crash e double</li>
              <li>24H Online</li>
              <li>Suporte</li>
              <li>Videos tutoriais</li>
              <li>Planilha de gerenciamento</li>
            </ul>
            <p className="valor">R$ 139,90 / Mensal</p>
            <a href="#home" ><button className="decrease">Comprar</button></a>
            <p className="adesao">+ R$ 158,00 taxa de adesão</p>
          </div>
          <div className="card-planos" data-anime="left">
            <h2>Plano Premium</h2>
            <p className="subtitle">Popular</p>
            <ul className="descricao">
              <li>Bot para crash e double</li>
              <li>24H Online</li>
              <li>Suporte</li>
              <li>Videos tutoriais</li>
              <li>Planilha de gerenciamento</li>
            </ul>
            <p className="valor">R$ 359,90 / Mensal</p>
            <a href="#home" ><button className="decrease">Comprar</button></a>
            <p className="adesao">+ Sem taxa de adesão</p>
          </div>
        </div>
      </section>


      <section className="container-faq" id="faq">
        <article className="faq" id="faq">
          <h1 data-anime="right">Perguntas Frequentes - FAQ</h1>
          <div className="container-perguntas" data-anime="left">

            <div className="pergunta" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">

              <p>
                <div className="flex" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                  O pagamento é seguro ?
                  <img src="https://vicctorneve.github.io/site-Easymoney/assets/image/img-faq.png" alt="simbolo de mais(+)" />
                </div>

              </p>
              <div className="collapse" id="collapseExample1">
                <div className="card card-body">
                  <p>Usamos a HUBLA e a KIWIFY como gateway de pagamentos (que é uma plataforma sólida e reconhecida).</p>

                </div>
              </div>
            </div>

            <div className="pergunta" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">

              <p>
                <div className="flex" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                  Quais são as formas de pagamento ?
                  <img src="https://vicctorneve.github.io/site-Easymoney/assets/image/img-faq.png" alt="simbolo de mais(+)" />
                </div>

              </p>
              <div className="collapse" id="collapseExample2">
                <div className="card card-body">
                  <p>
                    Utilizamos o PIX, Cartão de crédito e boleto.
                  </p>

                </div>
              </div>
            </div>

            <div className="pergunta" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">

              <p>
                <div className="flex" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                  Posso usar o robô no meu celular ?
                  <img src="https://vicctorneve.github.io/site-Easymoney/assets/image/img-faq.png" alt="simbolo de mais(+)" />

                </div>

              </p>
              <div className="collapse" id="collapseExample3">
                <div className="card card-body">
                  <p>
                    Sim. É possível receber os sinais pelo seu celular, basta baixar o app do Telegram.
                  </p>

                </div>
              </div>
            </div>

            <div className="pergunta" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">

              <p>
                <div className="flex" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                  O bot funciona 24h ?
                  <img src="https://vicctorneve.github.io/site-Easymoney/assets/image/img-faq.png" alt="simbolo de mais(+)" />

                </div>

              </p>
              <div className="collapse" id="collapseExample4">
                <div className="card card-body">
                  <p>
                    Nosso robô funciona todos os dias, 24 horas por dia. São mais de 700 sinais diários.
                  </p>

                </div>
              </div>
            </div>

            <div className="pergunta" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">

              <p>
                <div className="flex" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">
                  Posso parcelar a compra ?
                  <img src="https://vicctorneve.github.io/site-Easymoney/assets/image/img-faq.png" alt="simbolo de mais(+)" />

                </div>

              </p>
              <div className="collapse" id="collapseExample5">
                <div className="card card-body">
                  <p>
                    Apenas o plano vitalício pode-se parcelar em até 12x.
                  </p>

                </div>
              </div>
            </div>

            <div className="pergunta" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6">

              <p>
                <div className="flex" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6">
                  Tenho suporte para me auxiliar ?
                  <img src="https://vicctorneve.github.io/site-Easymoney/assets/image/img-faq.png" alt="simbolo de mais(+)" />

                </div>

              </p>
              <div className="collapse" id="collapseExample6">
                <div className="card card-body" id="resposta6">
                  <p>
                    Sim. Contamos com suporte de segunda a sexta. Caso tenha dúvidas entre em contato pelo Instagram ou Telegram.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </article>
        <script src="js/script-faq.js"></script>
      </section>

      <footer>
        <div className="container-redes-sociais">
          <h1>Redes Sociais</h1>
          <div className="flex">
            <a href="https://www.instagram.com/raul_sigoli/" target="_blank">
              <div className="rede-social instagram decrease"></div>
            </a>
            <a href="https://t.me/raul_sigoli" target="_blank">
              <div className="rede-social telegram decrease"></div>
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <div className="rede-social youtube decrease"></div>
            </a>
          </div>
        </div>
        <p className="direitos">Ⓒ Copyright - Raul Sigoli</p>
      </footer>


    </>
  )
}

export default App
