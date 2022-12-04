import { GeolocationResponse } from '@react-native-community/geolocation';

export const DEFAULT_GEO_POSITION: GeolocationResponse = {
   timestamp: 0,
   coords: {
      accuracy: 0,
      altitude: null,
      altitudeAccuracy: null,
      latitude: 0,
      longitude: 0,
      heading: null,
      speed: null,
   },
};
