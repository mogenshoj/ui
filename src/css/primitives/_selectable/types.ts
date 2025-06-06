import type {ThemeColorStateToneKey} from '@sanity/ui/theme'

import type {RadiusStyleProps} from '../../props/radius'

/** @internal */
export interface SelectableStyleProps extends RadiusStyleProps {
  className?: string
  tone?: ThemeColorStateToneKey
}
