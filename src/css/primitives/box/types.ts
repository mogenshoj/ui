import type {AlignItemsStyleProps} from '../../props/alignItems'
import type {BorderStyleProps} from '../../props/border'
import type {BoxSizingStyleProps} from '../../props/boxSizing'
import type {DisplayStyleProps} from '../../props/display'
import type {FlexStyleProps} from '../../props/flex'
import type {FlexDirectionStyleProps} from '../../props/flexDirection'
import type {FlexWrapStyleProps} from '../../props/flexWrap'
import type {GapStyleProps} from '../../props/gap'
import type {GridAutoColumnsStyleProps} from '../../props/gridAutoColumns'
import type {GridAutoFlowStyleProps} from '../../props/gridAutoFlow'
import type {GridAutoRowsStyleProps} from '../../props/gridAutoRows'
import type {GridColumnStyleProps} from '../../props/gridColumn'
import type {GridColumnEndStyleProps} from '../../props/gridColumnEnd'
import type {GridColumnStartStyleProps} from '../../props/gridColumnStart'
import type {GridRowStyleProps} from '../../props/gridRow'
import type {GridRowEndStyleProps} from '../../props/gridRowEnd'
import type {GridRowStartStyleProps} from '../../props/gridRowStart'
import type {GridTemplateColumnsStyleProps} from '../../props/gridTemplateColumns'
import type {GridTemplateRowsStyleProps} from '../../props/gridTemplateRows'
import type {HeightStyleProps} from '../../props/height'
import type {InsetStyleProps} from '../../props/inset'
import type {JustifyContentStyleProps} from '../../props/justifyContent'
import type {MarginStyleProps} from '../../props/margin'
import type {MaxWidthStyleProps} from '../../props/maxWidth'
import type {MinHeightStyleProps} from '../../props/minHeight'
import type {MinWidthStyleProps} from '../../props/minWidth'
import type {OverflowStyleProps} from '../../props/overflow'
import type {PaddingStyleProps} from '../../props/padding'
import type {PointerEventsStyleProps} from '../../props/pointerEvents'
import type {PositionStyleProps} from '../../props/position'
import type {RadiusStyleProps} from '../../props/radius'
import type {ShadowStyleProps} from '../../props/shadow'
import type {TextAlignStyleProps} from '../../props/textAlign'
import type {WidthStyleProps} from '../../props/width'

/** @public */
export interface BoxStyleProps
  extends AlignItemsStyleProps,
    BorderStyleProps,
    DisplayStyleProps,
    FlexDirectionStyleProps,
    FlexStyleProps,
    FlexWrapStyleProps,
    GapStyleProps,
    GridAutoColumnsStyleProps,
    GridAutoFlowStyleProps,
    GridAutoRowsStyleProps,
    GridColumnEndStyleProps,
    GridColumnStartStyleProps,
    GridColumnStyleProps,
    GridRowEndStyleProps,
    GridRowStartStyleProps,
    GridRowStyleProps,
    GridTemplateColumnsStyleProps,
    GridTemplateRowsStyleProps,
    HeightStyleProps,
    InsetStyleProps,
    JustifyContentStyleProps,
    MarginStyleProps,
    MaxWidthStyleProps,
    MinHeightStyleProps,
    MinWidthStyleProps,
    OverflowStyleProps,
    PaddingStyleProps,
    PointerEventsStyleProps,
    PositionStyleProps,
    RadiusStyleProps,
    ShadowStyleProps,
    TextAlignStyleProps,
    WidthStyleProps {
  className?: string
  muted?: boolean
  outline?: 'none'
  sizing?: BoxSizingStyleProps['boxSizing']
}
