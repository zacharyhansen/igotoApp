import { LinearProgressProps } from '@mui/material';
import { forwardRef } from 'react';
import VoyTypography from '../VoyTypography';
import VoyProgressRoot from './VoyProgressRoot';

export interface IVoyProgessProps extends LinearProgressProps {
  label?: boolean;
  styleVariant?: 'contained' | 'gradient';
}

const VoyProgress = forwardRef<HTMLDivElement, IVoyProgessProps>(
  ({ value, label, ...rest }, ref) => {
    return (
      <>
        {label && (
          <VoyTypography variant="button" fontWeight="medium" color="textColor">
            {value}%
          </VoyTypography>
        )}
        <VoyProgressRoot {...rest} ref={ref} value={value} />
      </>
    );
  }
);

export default VoyProgress;
