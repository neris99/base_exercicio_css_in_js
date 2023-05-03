import { FormEventHandler, useState } from 'react'
import { Form } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm: FormEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <input
        className="campo"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className="btnPesquisar" type="submit">
        Pesquisar
      </button>
    </Form>
  )
}

export default FormVagas
