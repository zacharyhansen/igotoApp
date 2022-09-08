import Icon, { IconProps } from '@mui/material/Icon';
import { styled } from '@mui/material/styles';

interface IVoyInputIconRootProps extends IconProps {
  iconSize?: 'small' | 'medium' | 'large';
}

const VoyInputIconRoot = styled(Icon)<IVoyInputIconRootProps>(
  ({ theme, iconSize = 'medium' }) => {
    const { typography } = theme;
    const { fontWeightBold, size: fontSize } = typography;

    return {
      fontWeight: fontWeightBold,
      fontSize: iconSize === 'small' ? `${fontSize.md} !important` : undefined
    };
  }
);

export default VoyInputIconRoot;
