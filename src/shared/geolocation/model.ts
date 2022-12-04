import { GeolocationResponse } from '@react-native-community/geolocation';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { geoGet } from './lib/get-geo';
import { DEFAULT_GEO_POSITION } from './lib/types';

export const $gelocation = createStore<GeolocationResponse>(DEFAULT_GEO_POSITION);

export const getGeoPosition = createEvent();
export const getGeoPositionFx = createEffect(geoGet);

sample({
   clock: getGeoPosition,
   target: getGeoPositionFx,
});

sample({
   clock: getGeoPositionFx.doneData,
   target: $gelocation,
});
