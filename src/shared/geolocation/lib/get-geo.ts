import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

// get geo func here

export const geoGet = (): Promise<GeolocationResponse> => {
   return new Promise((res) => {
      Geolocation.getCurrentPosition((geo) => res(geo));
   });
};
