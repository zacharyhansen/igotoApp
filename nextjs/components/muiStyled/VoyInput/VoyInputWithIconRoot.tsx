import { styled } from '@mui/material/styles';

interface IVoyInputWithIconRootProps {
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
}

const VoyInputWithIconRoot = styled('div')<IVoyInputWithIconRootProps>(
  ({ theme, error, success, disabled }) => {
    const { palette, functions, borders } = theme;
    const { inputColors, grey, white } = palette;
    const { pxToRem } = functions;
    const { borderRadius, borderWidth } = borders;

    // border color value
    let borderColorValue = inputColors.borderColor.main;

    if (error) {
      borderColorValue = inputColors.error;
    } else if (success) {
      borderColorValue = inputColors.success;
    }

    return {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: disabled ? grey[200] : white.main,
      border: `${borderWidth[1]} solid`,
      borderRadius: borderRadius.md,
      borderColor: borderColorValue,

      '& .MuiInputBase-input': {
        height: pxToRem(20)
      }
    };
  }
);

export default VoyInputWithIconRoot;
