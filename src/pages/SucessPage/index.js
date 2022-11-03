// @ flow
import * as React from 'react'

import Sucess from '../../components/common/Sucess'

const SucessPage = (): React.Component => {
  return (
    <div>
      <Sucess
        title="Deu certo!"
        description="Você cancelou sua assinatura. Seu acesso ainda está disponível e expira ao longo do dia 16/06/22."
        descriptionButton="Ok, entendi"
        actionButton={() => {}}
      />
    </div>
  )
}
export default SucessPage
