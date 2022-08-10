import React, { FunctionComponent } from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import VoyBox from '../muiStyled/VoyBox';
import VoyTypography from '../muiStyled/VoyTypography';
import Link from 'next/link';

export interface IBreadcrumbsProps {
  icon: JSX.Element;
  route: string[];
  light: boolean;
}

const Breadcrumbs: FunctionComponent<IBreadcrumbsProps> = ({
  icon = false,
  route,
  light
}) => {
  return (
    <VoyBox mr={{ xs: 0, xl: 8 }}>
      <MuiBreadcrumbs
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: ({ palette: { white, grey } }) =>
              light ? white.main : grey[600]
          }
        }}
      >
        <Link href="/">
          <VoyTypography
            variant="body2"
            color={light ? 'white' : 'dark'}
            opacity={light ? 0.8 : 0.5}
            sx={{ lineHeight: 0 }}
          >
            {icon}
          </VoyTypography>
        </Link>
        {route.map((el, i) =>
          i == route.length - 1 ? (
            <VoyTypography
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              color={light ? 'white' : 'dark'}
              sx={{ lineHeight: 0 }}
            >
              {el}
            </VoyTypography>
          ) : (
            <Link href={`/${el}`} key={el}>
              <VoyTypography
                variant="button"
                fontWeight="regular"
                textTransform="capitalize"
                color={light ? 'white' : 'dark'}
                opacity={light ? 0.8 : 0.5}
                sx={{ lineHeight: 0 }}
              >
                {el}
              </VoyTypography>
            </Link>
          )
        )}
      </MuiBreadcrumbs>
    </VoyBox>
  );
};

export default Breadcrumbs;
