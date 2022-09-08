import StyleFunctions from '../../../theme/base/functions';
import { styled } from '@mui/material/styles';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { useMemo } from 'react';
import { validColor, validGradient } from '../../../theme/base/colors';

interface IVoyAvatarProps extends AvatarProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  bgColor?: validColor;
  shadow?: 'none' | 'sm' | 'none';
}
/**
 * Styled version of MUI avatar. Following nextjs recommended
 * image pattern, do not directly pass the src image to this component,
 * instead use the 'next/image' as child to render the image
 * TODO: 'src' type is still allowed even though its Omitted in the type declaration
 * this needs fixing
 */
const VoyAvatar = styled(Avatar)<IVoyAvatarProps>(
  ({ theme, size = 'md', bgColor = 'transparent', shadow = 'none' }) => {
    const { palette, functions, typography, boxShadows } = theme;
    const { gradients, transparent } = palette;
    const { pxToRem, linearGradient } = functions;
    const { size: fontSize, fontWeightBold } = typography;

    const backgroundValue = useMemo(
      () =>
        bgColor === 'transparent'
          ? transparent.main
          : linearGradient(
              gradients[bgColor as validGradient].main,
              gradients[bgColor as validGradient].state
            ),
      [bgColor]
    );

    const sizeParams = useMemo(() => {
      let sizeParams = {
        width: pxToRem(24),
        height: pxToRem(24),
        fontSize: StyleFunctions.pxToRem(20)
      };

      switch (size) {
        case 'xs':
          sizeParams = {
            width: pxToRem(24),
            height: pxToRem(24),
            fontSize: fontSize.xs
          };
          break;
        case 'sm':
          sizeParams = {
            width: pxToRem(36),
            height: pxToRem(36),
            fontSize: fontSize.sm
          };
          break;
        case 'lg':
          sizeParams = {
            width: pxToRem(58),
            height: pxToRem(58),
            fontSize: fontSize.sm
          };
          break;
        case 'xl':
          sizeParams = {
            width: pxToRem(74),
            height: pxToRem(74),
            fontSize: fontSize.md
          };
          break;
        case 'xxl':
          sizeParams = {
            width: pxToRem(110),
            height: pxToRem(110),
            fontSize: fontSize.md
          };
          break;
        default: {
          sizeParams = {
            width: pxToRem(48),
            height: pxToRem(48),
            fontSize: fontSize.md
          };
        }
      }
      return sizeParams;
    }, [size]);

    return {
      background: backgroundValue,
      fontWeight: fontWeightBold,
      boxShadow: boxShadows[shadow],
      ...sizeParams
    };
  }
);

export default VoyAvatar;
