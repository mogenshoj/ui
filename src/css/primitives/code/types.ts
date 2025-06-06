import type {FlexStyleProps} from '../../props/flex'
import type {FontStyleProps} from '../../props/font'
import type {ResponsiveProp} from '../../types'

/** @public */
export type CodeSize = number

/** @public */
export interface CodeStyleProps extends FlexStyleProps, Omit<FontStyleProps, 'align'> {
  className?: string
  size?: ResponsiveProp<CodeSize>
}
