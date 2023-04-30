import { useSelector } from 'react-redux'
import { MainContainer, Titulo } from '../../styles/index'
import { RootReducer } from '../../store'
import Tarefa from '../../components/Tarefa'

const ListaDeTarefa = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  const exibeFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) no total ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${valor} ${complementacao}`
    }
    return mensagem
  }

  const mensagem = exibeFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeTarefa
