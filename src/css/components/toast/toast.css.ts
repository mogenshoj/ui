import {_style} from '../../_style.css'
import {layers} from '../../layers.css'

export const layer = _style(layers.components, {
  position: 'fixed',
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  maxWidth: `${420 / 16}rem`, // 420px
  width: '100%',
})

export const root = _style(layers.components, {
  pointerEvents: 'all',
  overflow: ['hidden', 'clip'],
})
