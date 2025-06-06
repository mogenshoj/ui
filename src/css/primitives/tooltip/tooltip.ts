import {_composeClassNames} from '../../_composeClassNames'
// import {_scopeClassNames} from '../../_scopeClassNames'
import {root} from './tooltip.css'
import type {TooltipStyleProps} from './types'

/** @public */
export function tooltip(props: TooltipStyleProps): string | undefined {
  // return _scopeClassNames('tooltip')
  return _composeClassNames(props.className, root)
}
