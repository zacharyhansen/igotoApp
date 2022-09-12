import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { validGradient, validPaletteColor } from 'theme/base/colors';
import { IVoyProgessProps } from '.';

export default styled(LinearProgress)<IVoyProgessProps>(
  ({ theme, color, value, styleVariant }) => {
    const { palette, functions } = theme;

    const { textColor, gradients } = palette;
    const { linearGradient } = functions;

    // background value
    let backgroundValue;

    if (styleVariant === 'gradient') {
      backgroundValue = gradients[color as validGradient]
        ? linearGradient(
            gradients[color as validGradient].main,
            gradients[color as validGradient].state
          )
        : linearGradient(gradients.info.main, gradients.info.state);
    } else {
      backgroundValue = palette[color as validPaletteColor]
        ? palette[color as validPaletteColor].main
        : palette.info.main;
    }

    return {
      '& .MuiLinearProgress-bar': {
        background: backgroundValue,
        width: `${value}%`,
        color: textColor.main
      }
    };
  }
);
