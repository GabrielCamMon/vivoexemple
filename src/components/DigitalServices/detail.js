// @flow
import * as React from 'react'

import {
  RowList,
  Row,
  Box,
  Stack,
  Text2,
  Text3,
  Text4,
  TextLink,
  ButtonPrimary,
  Circle,
  ButtonLayout,
  ButtonLink,
} from '@telefonica/mistica'

type Props = {
  selectedItem: Object,
  selectedItem: Function,
}

const DigitalServices = ({
  selectedItem,
  setSelectedItem,
}): React.Component<Props> => {
  return (
    <Box paddingTop={24} paddingBottom={24}>
      <Stack space={16}>
        <RowList>
          <Row
            title={<Text4 medium>{selectedItem.title}</Text4>}
            asset={<Circle size={40} backgroundImage={selectedItem.icon} />}
          />

          <Box paddingX={16} paddingY={32}>
            <Box>
              <Text3>
                <span style={{ fontWeight: '500' }}>{selectedItem.price}</span>
              </Text3>
            </Box>
            <Box>
              <Text2>
                <span style={{ fontWeight: '500' }}>
                  Assinatura contratada no plano:
                </span>
              </Text2>
            </Box>
            <Box>
              <Text2>
                <span style={{ fontWeight: '500', color: '#666666' }}>
                  Vivo Controle - (11) 99999-8888
                </span>
              </Text2>
            </Box>
            <Box>
              <Text2>
                <TextLink href="https://example.org">
                  <span style={{ fontWeight: '500', color: '#660099' }}>
                    Ver detalhes da compra
                  </span>
                </TextLink>
              </Text2>
            </Box>
          </Box>
        </RowList>

        {selectedItem.instruction && (
          <Box paddingX={16} paddingY={16}>
            <Stack space={16}>
              <Box>
                <Text4>Como usar</Text4>
              </Box>
              {selectedItem.instruction.map((e) => {
                return (
                  <Box key={e.title}>
                    <Text2>
                      <span style={{ color: '#595959' }}>{e.title}</span>
                      <Box paddingX={0} paddingY={16}>
                        <Stack space={4}>
                          {e.items.map((e, i) => (
                            <span key={i}>{`${i}. ${e}`}</span>
                          ))}
                        </Stack>
                      </Box>
                    </Text2>
                  </Box>
                )
              })}
            </Stack>
          </Box>
        )}
      </Stack>
      <ButtonLayout>
        <ButtonPrimary
          style={{ backgroundColor: '#660099' }}
          submit
          loadingText="Sending"
        >
          Ativar assinatura
        </ButtonPrimary>
        <ButtonLink
          onPress={() => {
            setSelectedItem(null)
          }}
        >
          <span style={{ color: '#660099' }}>Cancelar assinatura</span>
        </ButtonLink>
      </ButtonLayout>
    </Box>
  )
}

export default DigitalServices
