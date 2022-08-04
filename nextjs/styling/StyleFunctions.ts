import chroma from 'chroma-js';

export default class StyleFunctions {
  public static pxToRem(px: number, baseNumber = 16) {
    return `${px / baseNumber}rem`;
  }

  public static linearGradient(color: string, colorState: string, angle = 310) {
    return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
  }

  public static boxShadow(
    offset: number[] = [],
    radius: number[] = [],
    color: string,
    opacity: number,
    inset = ''
  ) {
    const [x, y] = offset;
    const [blur, spread] = radius;

    return `${inset} ${StyleFunctions.pxToRem(x)} ${StyleFunctions.pxToRem(
      y
    )} ${StyleFunctions.pxToRem(blur)} ${StyleFunctions.pxToRem(
      spread
    )} ${StyleFunctions.rgba(color, opacity)}`;
  }

  public static rgba(color: string, opacity: number) {
    return `rgba(${StyleFunctions.hexToRgb(color)}, ${opacity})`;
  }

  public static hexToRgb(color: string) {
    return chroma(color).rgb().join(', ');
  }
}
