import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';
import {
  validGradient,
  greyColor,
  greyColors,
  validBorderRadius,
  validBorderRadiusSet,
  validBoxShadows,
  validBoxShadowsSet,
  validColor,
  validColorsSet,
  validGradientsSet,
  validPaletteColor
} from '../../theme/base/colors';

interface IVoyBoxProps extends BoxProps {
  variant?: 'contained' | 'gradient';
  bgColor?: validColor;
  color?: validColor;
  opacity?: number;
  borderRadius?: validBorderRadius;
  shadow?: validBoxShadows;
}

const VoyBox = styled(Box)<IVoyBoxProps>(
  ({
    theme,
    variant = 'contained',
    bgColor = 'transparent',
    color = 'dark',
    opacity = 1,
    borderRadius = 'none',
    shadow = 'none'
  }) => {
    const { palette, functions, borders, boxShadows } = theme;
    const { gradients, white } = palette;
    const { linearGradient } = functions;
    const { borderRadius: radius } = borders;

    const [backgroundValue, colorValue, borderRadiusValue, boxShadowValue] =
      useMemo(() => {
        let backgroundValue = bgColor as any;
        if (variant === 'gradient') {
          backgroundValue = validGradientsSet.has(bgColor as validGradient)
            ? linearGradient(
                gradients[bgColor as validGradient].main,
                gradients[bgColor as validGradient].state
              )
            : white.main;
        } else if (validColorsSet.has(bgColor as validColor)) {
          backgroundValue = palette[bgColor as validPaletteColor]
            ? palette[bgColor as validPaletteColor].main
            : greyColors[bgColor as greyColor];
        } else {
          backgroundValue = bgColor;
        }
        let colorValue = color;
        if (validColorsSet.has(color as validColor)) {
          colorValue = palette[color as validPaletteColor]
            ? palette[color as validPaletteColor].main
            : greyColors[color as greyColor];
        }
        let borderRadiusValue = borderRadius;
        if (validBorderRadiusSet.has(borderRadius as validBorderRadius)) {
          borderRadiusValue = radius[borderRadius as validBorderRadius];
        }
        let boxShadowValue: any = boxShadows;
        if (validBoxShadowsSet.has(shadow as validBoxShadows)) {
          boxShadowValue = boxShadows[shadow as validBoxShadows];
        }
        return [backgroundValue, colorValue, borderRadiusValue, boxShadowValue];
      }, [bgColor, color, borderRadius, shadow]);

    return {
      opacity,
      background: backgroundValue,
      color: colorValue,
      borderRadius: borderRadiusValue,
      boxShadow: boxShadowValue
    };
  }
);

export default VoyBox;
