import './home.css'
import { FaLinkedin, FaGithub, FaInstagram, FaHeadphonesAlt } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { FiCoffee } from 'react-icons/fi';
import { MdAttachMoney } from 'react-icons/md';
import { AiOutlineBug } from 'react-icons/ai';

function Home() {
  return (

    <div>
      <header>
        <div>
          <a href='https://www.linkedin.com/in/progthiago/' target='_blank' rel='noopener noreferrer'> <FaLinkedin/> </a>
          <a href='https://github.com/thiago-albuquerque' target='_blank' rel='noopener noreferrer'> <FaGithub/> </a>
          <a href='https://www.instagram.com/garotoqprograma/?hl=pt-br' target='_blank' rel='noopener noreferrer'> <FaInstagram/> </a>
        </div>
      </header>

        {/* Apresentação */}
        <div className='container-apresentacao'>
          <div>
            <h1>Bem vindo(a)!</h1>
          </div>

          <div className='info-perfil'>
            <div>
              <img className='img-perfil' src={ require('./Assets/perfil.png') } alt=''/>
            </div>

            <div >
              <h2>Me chamo Thiago</h2>
              <h5>E sou apaixonado por:</h5>

              <ul className='container-lista'>
                <li> <FiCoffee className='icon-perfil'/> Café</li>
                <li> <FaHeadphonesAlt className='icon-perfil'/> Música</li>
                <li> <MdAttachMoney className='icon-perfil'/> Finanças e...</li>
                <li> <AiOutlineBug className='icon-perfil'/> Criar bugs enquanto programo</li>
              </ul>
            </div>
          </div>
        </div>

      {/* Skills */}
      <section className='secao-skills'>
        <h1>Skills</h1>

        <div className='container-skills'>
          <article className='container-soft'>
            <h3>Soft Skills:</h3>

            <ul>
              <li>Boa Comunicação</li>
              <li>Resiliência</li>
              <li>Criatividade</li>
              <li>Atitude</li>
              <li>Constante busca pelo Desenvolvimento Pessoal</li>
            </ul>
          </article>

          <article className='container-hard'>
            <h3>Hard Skills:</h3>

            <div className='item-skill'>
              <div className='hard-item'>
                <h6>HTML5</h6>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html5' />
              </div>            
           
              <div className='hard-item'>
                <h6>CSS3</h6>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css3' />
              </div>
           
              <div className='hard-item'>
                <h6>Javascript</h6>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript' />
              </div>
           
              <div className='hard-item'>
                <h6>React</h6>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react' />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Projetos */}
      <section className='secao-projetos'>
        <h1>Projetos</h1>

        <div className='container-projetos'>
          <article className='item'>
            <img className='img-item' src={ require('./Assets/travel.png') } alt='cafe gif'/>

            <h3>Travel</h3>
            <h6>Site de hotelaria.</h6>

            <a href='https://travelhotel.vercel.app/' target={'_blank'} rel='noopener noreferrer'>Acessar</a>
          </article>
          
          <article className='item'>
            <img className='img-item' src={ require('./Assets/cinemando.png') } alt='cafe gif'/>

            <h3>Cinemando</h3>
            <h6>Site com informações de filmes.</h6>

            <a href='https://cinemando-trailer.netlify.app/' target={'_blank'} rel='noopener noreferrer'>Acessar</a>
          </article> 

          <article className='item'>
            <img className='img-item' src={ require('./Assets/electric.png') } alt='electric car'/>

            <h3>Electric</h3>
            <h6> Site de aluguel de carros elétricos.</h6>

            <a href='https://electric-car-rentals.vercel.app/' target={'_blank'} rel='noopener noreferrer'>Acessar</a>
          </article>
          
          <article className='item'>
            <img className='img-item' src={ require('./Assets/minhas-tarefas.png') } alt='to do list'/>

            <h3>Minhas Tarefas</h3>
            <h6>Gerenciamento de tarefas.</h6>

            <a href='https://minhastarefass.vercel.app/' target={'_blank'} rel='noopener noreferrer'>Acessar</a>
          </article>
          
          <article className='item'>
            <img className='img-item' src={ require('./Assets/gif-cafe.gif') } alt='cafe'/>

            <h3>Desenvolvendo</h3>
            <h6>Em breve...</h6>

            <a target={'_blank'} rel='noopener noreferrer'>Breve...</a>
          </article>
        </div>
      </section>

      {/* Objetivos */}
      <section className='secao-objetivos'>
        <h1>O que faço hoje...</h1>
        <p>
          Atualmente estou estudando desenvolvimento front-end.<br/>
          Meu foco, dentro dessa área, está sendo aprender Javascript e React.<br/>
          Aproveito todo tempo que tenho para praticar essas habilidades e assim poder um dia me tornar um desenvolvedor de ponta.<br/><br/>
          Meus próximos passos serão aprender React Native e após, Node Js.<br/>
          Entendo que um bom profissional se desenvolve com o tempo, com muito planejamento, resiliência e paciência.
        </p>
      </section>

      {/* Botão scrooll */}
      <div className='scrooll-top'>
            <button onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }} >
                <IoMdRocket/>
            </button>            
        </div>
    </div>
  )
}

export default Home;
