import Header from '../components/Header.jsx'

export default function Home() {
  return (
    <div>
      <Header />

      <div className='flex'>

        <img className="" src="/Ichigo.svg" alt="Imagem do Ichigo, de Bleach" />
        <div className=''>
          <h2 className='uppercase text-3xl'>História</h2>
          <p className='text-justfy'>Bleach conta a história de Kurosaki Ichigo, um adolescente estudante do ensino médio que tem uma vida normal até o dia em que recebe os poderes de um Shinigami, ou Ceifador de Almas, chamado Rukia Kuchiki. Rukia é enviada ao mundo dos vivos para caçar e purificar almas corrompidas conhecidas como Hollows, mas durante uma batalha com um Hollow de alto escalão, ela é gravemente ferida e é forçada a transferir seus poderes para Ichigo. Com seus novos poderes, Ichigo deve proteger os seres humanos dos Hollows e ajudar Rukia a recuperar seus poderes.</p>
        </div>

      </div>
      
    </div>
  )
}
