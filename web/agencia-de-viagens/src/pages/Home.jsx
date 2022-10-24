import React from 'react'
import "./homeCSS.css"
import CarrosselI from "../assets/img-carrossel/img-1-carrossel.jpg";
import CarroselII from "../assets/img-carrossel/img-2-carrossel.jpg";
import CarrosselIII from "../assets/img-carrossel/img-3-carrossel1.jpg";
import iconCetificado from "../assets/certificate-svgrepo-com.svg";
import Londres from "../assets/img-cards/londres.png";
export default function Home() {
  return (
    <>
    <section className="container-fluid jumbosection">
      {/* <!-- CONTEUDO DA PAGINA -------------------------------------------------------------------------------> */}
      
      {/* <!-- adicionando carrossel de imagens e explicação  -------> */}
      <main className="main">
        
        {/* <!-- jumbotron com carrossel de informação principais ----------> */}
        <div className="p-md-7 carrossel carrosseljumbo">
          <div className="container-fluid ">
           
            {/* <!-- titulo --> */}
            <h3 className="titulo linha">Venha Viajar conosco!</h3>
            <p>experimente visitar os lugares onde seu filme foi gravado!</p>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>

              {/* <!-- imagens do carrossel --> */}
              {/* <!-- imagem 1 --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="img-carrossel d-block" src={CarrosselI} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Resolva vivenciar suas obras favoritas</h5>
                    <p>Visitando os locais que elas foram <strong>inspiradas</strong></p>
                  </div>
                </div>

                {/* <!-- imagem 2 --> */}
                <div className="carousel-item">
                  <img className="img-carrossel d-block" src={CarroselII} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Com <strong>preço acessível</strong></h5>
                    <p><strong>Chame sua familia</strong> para realizar esse sonho com você!</p>
                  </div>
                </div>

                {/* <!-- imagem 3 --> */}
                <div className="carousel-item">
                  <img className="img-carrossel d-block" src={CarrosselIII} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>E com uma Experiencia <strong>única</strong></h5>
                    <p>Nós mesmos planejamos uma rotina de viagem perfeita!</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>


            {/* <!-- iniciando formulario -------------------> */}
            <div>
              <form name="frmCadastro" className="cadastro-rapido" action="Cadastrando" method="POST">
                
                {/* <!-- titulo --> */}
                <h3 className="titulo linha">Cadastre seu destino!</h3>

                <div className="div-form">


 					{/* <!-- CPF --> */}
                  <div className="input cad-rap-input">
                  					{/* <!-- com  -> "required" <-  não ha necessidade de criar um arquivo js so para validar --> */}
                    <input name="cpf" type="text" placeholder="CPF" required />
                    <small id="emailHelpId" className="form-text text-muted small-texto">CPF</small>
                  </div>
                  
                  {/* <!-- Origem --> */}
                  <div className="input cad-rap-input">
                    <input name="origem" type="text" placeholder="Origem" required />
                    <small id="emailHelpId" className="form-text text-muted small-texto">Origem</small>
                  </div>

                  {/* <!-- Data da ida --> */}
                  <div className="input cad-rap-input">
                    <input name="dataIda" type="date" required />
                    <small id="emailHelpId" className="form-text text-muted small-texto">Data de Ida</small>
                  </div>

                  {/* <!-- Data da volta --> */}
                  <div className="input cad-rap-input">
                    <input name="dataVolta" type="date" required />
                    <small id="emailHelpId" className="form-text text-muted small-texto">Data de Volta</small>
                  </div>

                  {/* <!-- Botão --> */}
                  <input type="submit" value="Vamos la!" />
                </div>
              </form>
            </div>
          </div>
        </div>

      </main>
    </section>


    <section className="container section-apresentacao">
      {/* <!-- explicação da agencia --------------> */}

      <div className="container explicacao">

        {/* <!-- Titulo Principal --> */}
        <h1 className="titulo">Nos conheça!</h1>

        <div className="row">
          <div className="col-sm col-text">
            
            {/* <!-- Titulo Secundario --> */}
            <h3 className="titulo">Nosso objetivo</h3>
            <p className="lorem">
              nosssa agência foi criada com o intúito de realizar os sonhos dos nossos clientes: <br/> <br/>
              <strong>Descobrir e Visitar o locais em que seu filme e ou obra foi inspirado ou gravada!</strong>
            </p>
          </div>
          <div className="col-sm col-text">
            
            {/* <!-- Titulo Secundario --> */}
            <h3 className="titulo">Benefícios</h3>
            <p className="lorem">
              Lorem ipsum, dolor sit amet <strong>consectetur adipisicing elit.</strong> Fugit facilis in commodi, aut
              repellat omnis aliquam aliquid iste reiciendis minima a nesciunt nemo nihil consectetur vero possimus
              blanditiis dolores ex.
            </p>
            <div className="svg">
              <img src={iconCetificado} alt="" width="100px"/>
            </div>
          </div>
          <div className="col-sm col-text">
            
            {/* <!-- Titulo Secundario --> */}
            <h3 className="titulo">Seguros</h3>
            <p className="lorem">
              Lorem ipsum, dolor sit amet <strong>numquam eveniet reprehenderit voluptate voluptates vel, quisquam laborum porro!</strong> Fugit facilis in commodi, aut repellat omnis aliquam aliquid iste reiciendis minima a nesciunt nemo <strong>consectetur adipisicing elit.</strong> nihil consectetur vero possimus
              blanditiis dolores ex.
            </p>
          </div>
        </div>
      </div>


	</section>
        {/* <!-- NOVIDADES --> */}
        <section className="container-fluid novidades">
        <div>
          <div className="row texto-novidades">
            <div className="col-lg">
              <h1 className="titulo ">Veja o mais novo destino que adicionamos!</h1>
              <p className="lorem parag-novidade">Aproveitando o sucesso da série Sandman, resolvemos adicionar um destino especial para você conhecer e com um <strong className="ligh-strong">SUPER DESCONTÃO!!</strong></p>
            </div>
            <div className="col-sm-4">
              <div className="card text-start card-detalhes">
                <img className="card-img-top" src={Londres} alt="castle ward" height="200px"/>
                <div className="card-body corpo-card">
                  <a className="link-card card-titulo" href="#">
                    <h4 className="card-title  titulo titulo-card">Grande Londres</h4>
                  </a>
                  <small className="text-muted">Inglaterra</small>
                  <div className="avaliação">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--cor-det)" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <hr/>
                  <p className="desconto">5.000,00</p>
                  <p>R$3.500,00</p>
                  <hr/>
                  <p className="card-text">
                    visite essa fabulosa e linda cidade onde o senhor dos sonhos apareceu <strong>Sandman.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}
