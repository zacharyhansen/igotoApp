import chroma from 'chroma-js';

export interface IFunctions {
  pxToRem: (px: number, baseNumber?: number) => string;
  linearGradient: (color: string, colorState: string, angle?: number) => string;
  boxShadow: (
    offset: number[] | undefined,
    radius: number[] | undefined,
    color: string,
    opacity: number,
    inset?: string
  ) => string;
  rgba: (color: string, opacity: number) => string;
  hexToRgb: (color: string) => string;
}

const functions: IFunctions = {
  pxToRem: (px: number, baseNumber = 16) => {
    return `${px / baseNumber}rem`;
  },
  linearGradient: (color: string, colorState: string, angle = 310) => {
    return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
  },
  boxShadow: (
    offset: number[] = [],
    radius: number[] = [],
    color: string,
    opacity: number,
    inset = ''
  ) => {
    const [x, y] = offset;
    const [blur, spread] = radius;

    return `${inset} ${functions.pxToRem(x)} ${functions.pxToRem(
      y
    )} ${functions.pxToRem(blur)} ${functions.pxToRem(spread)} ${functions.rgba(
      color,
      opacity
    )}`;
  },
  rgba: (color: string, opacity: number) => {
    return `rgba(${functions.hexToRgb(color)}, ${opacity})`;
  },
  hexToRgb: (color: string) => {
    return chroma(color).rgb().join(', ');
  }
};

export default functions;
