// @flow
import * as React from 'react'

import {
  RowList,
  Row,
  NegativeBox,
  Stack,
  Title1,
  Circle,
} from '@telefonica/mistica'

type Props = {
  settings: Object,
  setSelectedItem: Function,
}

const Master = ({ settings, setSelectedItem }): React.Component<Props> => {
  return (
    <Stack space={32}>
      {settings.map((category) => (
        <Stack key={category.categoryName} space={8}>
          <Title1>{category.categoryName}</Title1>
          <NegativeBox>
            <RowList>
              {category.settings.map((setting) => (
                <Row
                  headline={
                    <span style={{ color: '#FF9900' }}>{setting.headline}</span>
                  }
                  key={setting.title}
                  title={setting.title}
                  asset={<Circle size={40} backgroundImage={setting.icon} />}
                  onPress={() => {
                    setSelectedItem(setting)
                  }}
                />
              ))}
            </RowList>
          </NegativeBox>
        </Stack>
      ))}
    </Stack>
  )
}

export default Master
