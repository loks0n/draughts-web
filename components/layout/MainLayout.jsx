import { Grid, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Header } from '../header/Header';
import { LeftSidebarAdvert } from '../adverts/LeftSidebarAdvert';
import { RightSidebarAdvert } from '../adverts/RightSidebarAdvert';
import { TopBannerAdvert } from '../adverts/TopBannerAdvert';
import { BottomBannerAdvert } from '../adverts/BottomBannerAdvert';

export function MainLayout(props) {
  return (
    <Grid
      as="main"
      rowGap={[3, 4]}
      columnGap={[3, 4, 5, 6]}
      templateRows={['0 auto auto auto auto 0', '0 auto auto 0']}
      templateColumns={[
        '0 minmax(0, 1fr) 0',
        '0 minmax(4em, 1fr) min(78vh, 78vw) 0',
        '0 minmax(4em, 1fr) min(78vh, 78vw) minmax(4em, 1fr) 0',
      ]}
    >
      <GridItem colSpan={1} colStart={[2, 3, 3]} rowStart={2}>
        <Header />
      </GridItem>
      <GridItem colSpan={1} colStart={[2, 3]} rowStart={[4, 3]}>
        {props.children}
      </GridItem>
      <GridItem
        display={['block', 'none']}
        colSpan={2}
        colStart={2}
        rowStart={3}
      >
        <TopBannerAdvert />
      </GridItem>
      <GridItem
        display={['block', 'none']}
        colSpan={2}
        colStart={2}
        rowStart={6}
      >
        <BottomBannerAdvert />
      </GridItem>
      <GridItem
        display={['none', 'block']}
        colStart={2}
        rowSpan={[2, 3, 4]}
        rowStart={[3, 3, 2]}
      >
        <LeftSidebarAdvert />
      </GridItem>
      <GridItem
        display={['none', 'none', 'block']}
        colStart={5}
        rowSpan={[2, 2, 4]}
        rowStart={[3, 3, 2]}
      >
        <RightSidebarAdvert />
      </GridItem>
    </Grid>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
