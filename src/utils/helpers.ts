import * as R from 'ramda'

export const ScreenWidth = (window: Window) => {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
}

export const InRange = (x: number, min: number, max: number) => {
  return !max ? x > min : (x - min) * (x - max) <= 0
}

export const screenSizes = {
  default: { min: 0, max: 479 },
  xs: { min: 480, max: 767 },
  sm: { min: 768, max: 959 },
  md: { min: 960, max: 1279 },
  lg: { min: 1280, max: 2000 },
}

export const Breakpoints = [
  { name: 'default', min: 0, max: 480 },
  { name: 'xs', min: 480, max: 768 },
  { name: 'sm', min: 768, max: 960 },
  { name: 'md', min: 960, max: 1280 },
  { name: 'lg', min: 1280, max: 0 },
]

export const getBreakpoint = (screenWidth: number) => {
  const match = R.find((breakpoint) => {
    return InRange(screenWidth, breakpoint?.min, breakpoint?.max)
  }, Breakpoints)
  return match?.name || 'default'
}

export interface PropSet {
  default: { value: string | number }
  xs: { value: string | number }
  sm: { value: string | number }
  md: { value: string | number }
  lg: { value: string | number }
}

export const propForScreenSize = (size: number, propSet: PropSet) => {
  const breakpoint = getBreakpoint(size) as keyof PropSet
  const merged = R.mergeDeepRight(screenSizes, propSet)
  return merged[breakpoint]?.value
}

/**
 *
 * @param hex hex string
 * @param alpha opacity value
 * @returns
 */
export const hexToRgba = (hex: string = ''): any => {
  const [r, g, b] = hex?.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || []
  return [r, g, b, 230]
}

/**
 * @param string 'test string'
 * @returns 'test-string'
 */
export const kebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
