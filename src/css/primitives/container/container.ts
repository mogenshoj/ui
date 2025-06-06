import {_composeClassNames} from '../../_composeClassNames'
import {margin} from '../../props/margin'
import {maxWidth} from '../../props/maxWidth'
import {width} from '../../props/width'
import {root} from './container.css'
import type {ContainerStyleProps} from './types'

/** @public */
export function container(props: ContainerStyleProps): string | undefined {
  return _composeClassNames(
    props.className,
    root,
    margin({marginX: 'auto'}),
    maxWidth({maxWidth: props.width}),
    width({width: 'fill'}),
  )
}
