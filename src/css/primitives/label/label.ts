import {_composeClassNames} from '../../_composeClassNames'
import {_responsiveClassName} from '../../_responsiveClassName'
import {display} from '../../props/display'
import {flex} from '../../props/flex'
import {font} from '../../props/font'
import {textAlign} from '../../props/textAlign'
import {muted, root, sizes} from './label.css'
import type {LabelStyleProps} from './types'

/** @public */
export function label(props: LabelStyleProps): string | undefined {
  return _composeClassNames(
    props.className,
    root,
    props.muted && muted,
    _responsiveClassName(sizes, props.size ?? 1),
    display({display: 'block'}),
    flex(props),
    font(props),
    textAlign({textAlign: props.align}),
  )
}
