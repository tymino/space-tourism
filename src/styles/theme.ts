import { ITheme } from '../types/theme'

const ANIMATION_DURATION = '0.4s'

export const theme: ITheme = {
  fontBellefair: 'Bellefair, sans-serif',
  fontBarlow: 'Barlow, sans-serif',
  fontBarlowCondensed: 'Barlow Condensed, sans-serif',
  colorDark: '#0b0d17',
  colorGray: '#383b4b',
  colorText: '#ffffff',
  colorTextOpacity: '#ffffff7f',
  colorBackNav: '#ffffff10',
  colorDescribeText: '#d0d6f9',
  colorInvisible: '#00000000',
  transitionTime: ANIMATION_DURATION,

  animationDuration: ANIMATION_DURATION,
  animationOverlayOpacity: '0.6',
  animationMenuPosRight: '-100%',
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
