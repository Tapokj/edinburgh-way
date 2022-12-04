import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { useStore } from 'effector-react';

import styled from 'styled-components/native';
import { $gelocation } from '../../../../../shared/geolocation';

export function Map() {
   const geo = useStore($gelocation);

   return (
      <MainMapContainer>
         <StyledMapView
            provider={PROVIDER_GOOGLE}
            region={{
               latitude: geo.coords.latitude,
               longitude: geo.coords.longitude,
               latitudeDelta: 0.015,
               longitudeDelta: 0.0121,
            }}
         />
      </MainMapContainer>
   );
}

const MainMapContainer = styled.View`
   height: 70%;
   width: 400px;
   /* justify-content: 'flex-end';
  align-items: 'center'; */
`;

const StyledMapView = styled(MapView)({
   ...StyleSheet.absoluteFillObject,
});
