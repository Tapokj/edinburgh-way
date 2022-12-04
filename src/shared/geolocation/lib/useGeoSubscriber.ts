import { useEffect } from 'react';
import { getGeoPosition } from '../model';

export function useGeoSubscriber() {
   useEffect(() => {
      getGeoPosition();
   });
}
