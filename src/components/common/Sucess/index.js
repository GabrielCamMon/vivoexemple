// @ flow
import * as React from 'react'
import { SuccessFeedbackScreen, ButtonPrimary } from '@telefonica/mistica'

type Props = {
  title: string,
  description?: string,
  descriptionButton: string,
  actionButton: Function,
}

const Sucess = (props): React.Component<Props> => {
  return (
    <SuccessFeedbackScreen
      title={props.title}
      description={props.description}
      primaryButton={
        <ButtonPrimary onPress={props.actionButton}>
          {props.descriptionButton}
        </ButtonPrimary>
      }
    />
  )
}
export default Sucess
