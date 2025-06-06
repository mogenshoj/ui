import {Card, PortalProvider} from '@sanity/ui'
import {defaultTheme} from '@sanity/ui/css'
import {Decorator} from '@storybook/react-vite'
import {useState} from 'react'

import {ThemeColorSchemeKey} from '../../../dist/theme'

export const UIDecorator: Decorator = (storyFn, context) => {
  const scheme = (context.userGlobals.theme || 'light') as ThemeColorSchemeKey

  const [portalElement, setPortalElement] = useState<HTMLDivElement | null>(null)

  return (
    <PortalProvider element={portalElement}>
      <Card className={defaultTheme} padding={4} scheme={scheme} tone="default">
        {storyFn()}
        <div ref={setPortalElement} />
      </Card>
    </PortalProvider>
  )
}
