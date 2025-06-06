import type {FlexStyleProps} from '../../props/flex'
import type {FontStyleProps} from '../../props/font'
import type {MaxWidthStyleProps} from '../../props/maxWidth'
import type {TextAlignStyleProps} from '../../props/textAlign'
import type {ResponsiveProp} from '../../types'

/** @public */
export type TextSize = number

/** @public */
export interface TextStyleProps extends FlexStyleProps, FontStyleProps, MaxWidthStyleProps {
  /**
   * @deprecated Will be removed in next major version
   */
  accent?: boolean
  align?: TextAlignStyleProps['textAlign']
  className?: string
  muted?: boolean
  size?: ResponsiveProp<TextSize>
}
