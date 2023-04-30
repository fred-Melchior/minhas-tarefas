import BotaoAdd from '../../components/BotaoAdd/intex'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefa from '../../containers/ListaDeTarefa'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefa />
    <BotaoAdd />
  </>
)

export default Home
