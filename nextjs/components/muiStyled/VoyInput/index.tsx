import { forwardRef } from 'react';
import VoyInputIconBoxRoot from './VoyInputIconBoxRoot';
import VoyInputRoot from './VoyInputRoot';
import VoyInputWithIconRoot from './VoyInputWithIconRoot';
import VoyInputIconRoot from './VoyInputIconRoot';
interface IVoyInputProps {
  size: 'small' | 'medium' | 'large';
  icon: JSX.Element;
  iconDirection?: 'left' | 'right';
  error: boolean;
  success: boolean;
  disabled: boolean;
}

const VoyInput = forwardRef<HTMLDivElement, IVoyInputProps>(
  (
    { size, icon, success, iconDirection = 'left', error, disabled, ...rest },
    ref
  ) => {
    if (iconDirection === 'left') {
      return (
        <VoyInputWithIconRoot ref={ref} success error disabled>
          <VoyInputIconBoxRoot size={size}>
            <VoyInputIconRoot>{icon}</VoyInputIconRoot>
          </VoyInputIconBoxRoot>
          <VoyInputRoot
            {...rest}
            error
            disabled
            ownerState={{
              size,
              success,
              iconDirection
            }}
          />
        </VoyInputWithIconRoot>
      );
    } else if (icon && iconDirection === 'right') {
      return (
        <VoyInputWithIconRoot ref={ref} success error disabled>
          <VoyInputRoot
            {...rest}
            error
            disabled
            ownerState={{
              size,
              success,
              iconDirection
            }}
          />
          <VoyInputIconBoxRoot size={size}>
            <VoyInputIconRoot>{icon}</VoyInputIconRoot>
          </VoyInputIconBoxRoot>
        </VoyInputWithIconRoot>
      );
    } else {
      return (
        <VoyInputRoot
          {...rest}
          ref={ref}
          ownerState={{ size, success }}
          error
          disabled
        />
      );
    }
  }
);

export default VoyInput;
