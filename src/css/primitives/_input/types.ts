import type {FontTextSize, Space} from '@sanity/ui/theme'

import type {RadiusStyleProps} from '../../props/radius'
import type {WidthStyleProps} from '../../props/width'
import type {ResponsiveProp} from '../../types'

/** @public */
export interface InputStyleProps extends RadiusStyleProps, WidthStyleProps {
  border?: boolean
  fontSize?: ResponsiveProp<FontTextSize>
  gap?: ResponsiveProp<Space>
  padding?: ResponsiveProp<Space>
}
