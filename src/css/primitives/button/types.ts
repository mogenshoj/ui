import type {ThemeColorButtonModeKey, ThemeColorStateToneKey} from '@sanity/ui/theme'

import type {FlexStyleProps} from '../../props/flex'
import type {RadiusStyleProps} from '../../props/radius'
import type {WidthStyleProps} from '../../props/width'

/** @public */
export interface ButtonStyleProps extends FlexStyleProps, RadiusStyleProps, WidthStyleProps {
  className?: string
  mode?: ThemeColorButtonModeKey
  tone?: ThemeColorStateToneKey
}
