import {_composeClassNames} from '../../_composeClassNames'
import {alignItems} from '../../props/alignItems'
import {border} from '../../props/border'
import {boxSizing} from '../../props/boxSizing'
import {display} from '../../props/display'
import {flex} from '../../props/flex'
import {flexDirection} from '../../props/flexDirection'
import {flexWrap} from '../../props/flexWrap'
import {gap} from '../../props/gap'
import {gridAutoColumns} from '../../props/gridAutoColumns'
import {gridAutoFlow} from '../../props/gridAutoFlow'
import {gridAutoRows} from '../../props/gridAutoRows'
import {gridColumn} from '../../props/gridColumn'
import {gridColumnEnd} from '../../props/gridColumnEnd'
import {gridColumnStart} from '../../props/gridColumnStart'
import {gridRow} from '../../props/gridRow'
import {gridRowEnd} from '../../props/gridRowEnd'
import {gridRowStart} from '../../props/gridRowStart'
import {gridTemplateColumns} from '../../props/gridTemplateColumns'
import {gridTemplateRows} from '../../props/gridTemplateRows'
import {height} from '../../props/height'
import {inset} from '../../props/inset'
import {justifyContent} from '../../props/justifyContent'
import {margin} from '../../props/margin'
import {maxWidth} from '../../props/maxWidth'
import {minHeight} from '../../props/minHeight'
import {minWidth} from '../../props/minWidth'
import {outline} from '../../props/outline'
import {overflow} from '../../props/overflow'
import {padding} from '../../props/padding'
import {pointerEvents} from '../../props/pointerEvents'
import {position} from '../../props/position'
import {radius} from '../../props/radius'
import {shadow} from '../../props/shadow'
import {textAlign} from '../../props/textAlign'
import {width} from '../../props/width'
import {muted, root} from './box.css'
import type {BoxStyleProps} from './types'

/** @public */
export function box(props: BoxStyleProps): string | undefined {
  return _composeClassNames(
    props.className,
    root,
    props.muted && muted,
    alignItems(props),
    border(props),
    boxSizing({boxSizing: props.sizing}),
    display(props),
    height(props),
    flex(props),
    flexDirection(props),
    flexWrap(props),
    gap(props),
    gridAutoColumns(props),
    gridAutoFlow(props),
    gridAutoRows(props),
    gridColumn(props),
    gridColumnEnd(props),
    gridColumnStart(props),
    gridRow(props),
    gridRowEnd(props),
    gridRowStart(props),
    gridTemplateColumns(props),
    gridTemplateRows(props),
    inset(props),
    justifyContent(props),
    margin(props),
    maxWidth(props),
    minHeight(props),
    minWidth(props),
    overflow(props),
    padding(props),
    pointerEvents(props),
    position(props),
    outline(props),
    radius(props),
    shadow(props),
    textAlign(props),
    width(props),
  )
}
