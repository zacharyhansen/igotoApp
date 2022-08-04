import StyleFunctions from '../../../styling/StyleFunctions';
import { styled } from '@mui/material/styles';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { colorGradients } from '../../../styling/colors';
import { baseProperties } from '../../../styling/typography';
import boxShadows from '../../../styling/boxShadows';

type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type bgColor = 'transparent' | 'primary';

type shadow = 'none' | 'sm';

export const VoyAvatar = styled(Avatar)<
  AvatarProps & { size: size; bgColor?: bgColor; shadow?: shadow }
>(({ theme, size = 'md', bgColor = 'transparent', shadow = 'none' }) => {
  const { typography, palette } = theme;
  const { pxToRem } = StyleFunctions;
  const { fontWeightBold, fontSize } = typography;

  // backgroundImage value
  const backgroundValue =
    bgColor === 'transparent'
      ? 'transparent'
      : StyleFunctions.linearGradient(
          colorGradients[bgColor].main,
          colorGradients[bgColor].state
        );

  // size value
  let sizeValue = {
    width: pxToRem(24),
    height: pxToRem(24),
    fontSize: StyleFunctions.pxToRem(20)
  };

  switch (size) {
    case 'xs':
      sizeValue = {
        width: pxToRem(24),
        height: pxToRem(24),
        fontSize: baseProperties.fontSizeXS
      };
      break;
    case 'sm':
      sizeValue = {
        width: pxToRem(36),
        height: pxToRem(36),
        fontSize: baseProperties.fontSizeSM
      };
      break;
    case 'md':
      sizeValue = {
        width: pxToRem(36),
        height: pxToRem(36),
        fontSize: baseProperties.fontSizeSM
      };
      break;
    case 'lg':
      sizeValue = {
        width: pxToRem(58),
        height: pxToRem(58),
        fontSize: baseProperties.fontSizeSM
      };
      break;
    case 'xl':
      sizeValue = {
        width: pxToRem(74),
        height: pxToRem(74),
        fontSize: baseProperties.fontSizeMD
      };
      break;
    case 'xxl':
      sizeValue = {
        width: pxToRem(110),
        height: pxToRem(110),
        fontSize: baseProperties.fontSizeMD
      };
      break;
    default: {
      sizeValue = {
        width: pxToRem(48),
        height: pxToRem(48),
        fontSize: baseProperties.fontSizeMD
      };
    }
  }

  return {
    background: backgroundValue,
    fontWeight: fontWeightBold,
    boxShadow: boxShadows[shadow],
    ...sizeValue
  };
});
