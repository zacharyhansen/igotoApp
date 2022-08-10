import { styled } from '@mui/material/styles';

interface IVoyInputIconBoxRootProps {
  size?: 'small' | 'medium' | 'large';
}

const VoyInputIconBoxRoot = styled('div')<IVoyInputIconBoxRootProps>(
  ({ theme, size }) => {
    const { palette, functions } = theme;
    const { dark } = palette;
    const { pxToRem } = functions;

    return {
      lineHeight: 0,
      padding:
        size === 'small'
          ? `${pxToRem(4)} ${pxToRem(10)}`
          : `${pxToRem(8)} ${pxToRem(10)}`,
      width: pxToRem(39),
      height: '100%',
      color: dark.main
    };
  }
);

export default VoyInputIconBoxRoot;
