import type {FlexStyleProps} from '../../props/flex'
import type {FontStyleProps} from '../../props/font'
import type {TextAlignStyleProps} from '../../props/textAlign'
import type {ResponsiveProp} from '../../types'

/** @public */
export type HeadingSize = number

/** @public */
export interface HeadingStyleProps extends FontStyleProps, FlexStyleProps {
  /** @deprecated No longer in use */
  accent?: boolean
  align?: TextAlignStyleProps['textAlign']
  className?: string
  muted?: boolean
  size?: ResponsiveProp<HeadingSize>
}
