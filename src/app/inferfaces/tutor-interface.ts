interface ITutorInput {
  nome: string
  sobrenome: string
  email: string
  cpf: string
}

interface ITutorOutput extends ITutorInput {
  id: number
}

interface ITutorUpdateInput {
  nome?: string
  sobrenome?: string
  email?: string
  senha?: string
  cpf?: string
  celular?: string
}

interface ITutorUpdateOutput extends ITutorUpdateInput {
  id: number
}

export { ITutorInput, ITutorOutput, ITutorUpdateInput, ITutorUpdateOutput }