// @ flow
import * as React from 'react'
import {
  MasterDetailLayout,
  Box,
  Text2,
  ResponsiveLayout,
} from '@telefonica/mistica'

import { settings } from '../../__test__/__mocks__/DigitalServices/settingsData'
import Master from '../../components/DigitalServices/master'
import Detail from '../../components/DigitalServices/detail'

const DigitalServices = (): React.Component => {
  const [selectedItem, setSelectedItem] = React.useState(null)
  return (
    <ResponsiveLayout>
      <Box paddingY={24}>
        <MasterDetailLayout
          isOpen={!!selectedItem}
          master={
            <Master
              settings={settings}
              setSelectedItem={(e) => {
                setSelectedItem(e)
              }}
            />
          }
          detail={
            selectedItem ? (
              <Detail
                selectedItem={selectedItem}
                setSelectedItem={(e) => setSelectedItem(e)}
              />
            ) : (
              <Text2 regular>Select one of the sections from the sidebar</Text2>
            )
          }
        />
      </Box>
    </ResponsiveLayout>
  )
}
export default DigitalServices
