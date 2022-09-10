import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { VoyPaletteColor } from '../../../theme';
import { validPaletteColor } from '../../../theme/base/colors';

export interface IVoyButtonProps extends ButtonProps {
  circular?: boolean;
  iconOnly?: boolean;
}

export default styled(Button)<IVoyButtonProps>(
  ({
    theme,
    size = 'medium',
    variant = 'contained',
    color = 'white',
    circular = false,
    iconOnly = false
  }) => {
    const { palette, functions, borders } = theme;
    const { white, dark, textColor, transparent, gradients } = palette;
    const { boxShadow, pxToRem, rgba } = functions;
    const { borderRadius } = borders;

    // styles for the button with variant="contained"
    const containedStyles = () => {
      // background color value
      const backgroundValue = palette[color as validPaletteColor]
        ? palette[color as validPaletteColor].main
        : white.main;

      // backgroundColor value when button is focused
      const focusedBackgroundValue = palette[color as validPaletteColor]
        ? (palette[color as validPaletteColor] as VoyPaletteColor).focus
        : white.focus;

      // boxShadow value
      const boxShadowValue = palette[color as validPaletteColor]
        ? boxShadow(
            [0, 0],
            [0, 3.2],
            palette[color as validPaletteColor].main,
            0.5
          )
        : boxShadow([0, 0], [0, 3.2], dark.main, 0.5);

      // color value
      let colorValue = white.main;

      if (color === 'white' || !palette[color as validPaletteColor]) {
        colorValue = textColor.main;
      } else if (color === 'light') {
        colorValue = gradients.dark.state;
      }

      // color value when button is focused
      let focusedColorValue = white.main;

      if (color === 'white') {
        focusedColorValue = textColor.main;
      } else if (color === 'primary' || color === 'error' || color === 'dark') {
        focusedColorValue = white.main;
      }

      return {
        background: backgroundValue,
        color: colorValue,

        '&:hover': {
          backgroundColor: backgroundValue
        },

        '&:focus:not(:hover)': {
          backgroundColor: focusedBackgroundValue,
          boxShadow: boxShadowValue
        },

        '&:disabled': {
          backgroundColor: backgroundValue,
          color: focusedColorValue
        }
      };
    };

    // styles for the button with variant="outlined"
    const outliedStyles = () => {
      // background color value
      const backgroundValue =
        color === 'white' ? rgba(white.main, 0.1) : transparent.main;

      // color value
      const colorValue = palette[color as validPaletteColor]
        ? palette[color as validPaletteColor].main
        : white.main;

      // boxShadow value
      const boxShadowValue = palette[color as validPaletteColor]
        ? boxShadow(
            [0, 0],
            [0, 3.2],
            palette[color as validPaletteColor].main,
            0.5
          )
        : boxShadow([0, 0], [0, 3.2], white.main, 0.5);

      // border color value
      let borderColorValue = palette[color as validPaletteColor]
        ? palette[color as validPaletteColor].main
        : rgba(white.main, 0.75);

      if (color === 'white') {
        borderColorValue = rgba(white.main, 0.75);
      }

      return {
        background: backgroundValue,
        color: colorValue,
        borderColor: borderColorValue,

        '&:hover': {
          background: transparent.main,
          borderColor: colorValue
        },

        '&:focus:not(:hover)': {
          background: transparent.main,
          boxShadow: boxShadowValue
        },

        '&:active:not(:hover)': {
          backgroundColor: colorValue,
          color: white.main,
          opacity: 0.85
        },

        '&:disabled': {
          color: colorValue,
          borderColor: colorValue
        }
      };
    };

    // styles for the button with variant="text"
    const textStyles = () => {
      // color value
      const colorValue = palette[color as validPaletteColor]
        ? palette[color as validPaletteColor].main
        : white.main;

      // color value when button is focused
      const focusedColorValue = palette[color as validPaletteColor]
        ? (palette[color as validPaletteColor] as VoyPaletteColor).focus
        : white.focus;

      return {
        color: colorValue,

        '&:hover': {
          color: focusedColorValue
        },

        '&:focus:not(:hover)': {
          color: focusedColorValue
        }
      };
    };

    // styles for the button with circular={true}
    const circularStyles = () => ({
      borderRadius: borderRadius.section
    });

    // styles for the button with iconOnly={true}
    const iconOnlyStyles = () => {
      // width, height, minWidth and minHeight values
      let sizeValue = pxToRem(38);

      if (size === 'small') {
        sizeValue = pxToRem(25.4);
      } else if (size === 'large') {
        sizeValue = pxToRem(52);
      }

      // padding value
      let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

      if (size === 'small') {
        paddingValue = pxToRem(4.5);
      } else if (size === 'large') {
        paddingValue = pxToRem(16);
      }

      return {
        width: sizeValue,
        minWidth: sizeValue,
        height: sizeValue,
        minHeight: sizeValue,
        padding: paddingValue,

        '& .material-icons': {
          marginTop: 0
        },

        '&:hover, &:focus, &:active': {
          transform: 'none'
        }
      };
    };

    return {
      ...(variant === 'contained' && containedStyles()),
      ...(variant === 'outlined' && outliedStyles()),
      ...(variant === 'text' && textStyles()),
      ...(circular && circularStyles()),
      ...(iconOnly && iconOnlyStyles())
    };
  }
);
