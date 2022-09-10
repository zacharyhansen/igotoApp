import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {
  validColorTypography,
  validFontWeight,
  validGradient,
  validPaletteColor,
  validTextTransform,
  validVerticalAlign
} from '../../../theme/base/colors';
import { useMemo } from 'react';

interface IVoyTypographyProps extends TypographyProps {
  color?: validColorTypography;
  textTransform?: validTextTransform;
  fontWeight?: validFontWeight;
  verticalAlign?: validVerticalAlign;
  textGradient?: boolean;
  opacity?: number;
  component?: React.ElementType;
}

const VoyTypography = styled(Typography)<IVoyTypographyProps>(
  ({
    theme,
    color = 'dark',
    fontWeight = false,
    textTransform = 'none',
    verticalAlign = 'unset',
    textGradient = false,
    opacity = 1
  }) => {
    const { palette, typography, functions } = theme;
    const { gradients, transparent } = palette;
    const {
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    } = typography;
    const { linearGradient } = functions;

    const _fontWeight = useMemo(() => {
      switch (fontWeight) {
        case 'light':
          return fontWeightLight;
        case 'regular':
          return fontWeightRegular;
        case 'medium':
          return fontWeightMedium;
        case 'medium':
          return fontWeightBold;
        default:
          return fontWeightRegular;
      }
    }, [fontWeight]);

    // styles for the typography with textGradient={true}
    const gradientStyles = () => ({
      backgroundImage:
        color !== 'inherit' &&
        color !== 'text' &&
        color !== 'white' &&
        gradients[color as validGradient]
          ? linearGradient(
              gradients[color as validGradient].main,
              gradients[color as validGradient].state
            )
          : linearGradient(gradients.dark.main, gradients.dark.state),
      display: 'inline-block',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: transparent.main,
      position: 'relative' as 'relative',
      zIndex: 1
    });

    return {
      opacity,
      textTransform,
      verticalAlign,
      textDecoration: 'none',
      color:
        color === 'inherit' || !palette[color as validPaletteColor]
          ? 'inherit'
          : palette[color as validPaletteColor].main,
      fontWeight: _fontWeight,
      ...(textGradient && gradientStyles())
    };
  }
);

export default VoyTypography;
