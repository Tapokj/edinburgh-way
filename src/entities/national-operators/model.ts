import { createEvent, sample } from 'effector';
import { nationalOperatorsApi } from 'src/shared/api/operators';

export const getOperators = createEvent();

sample({
   clock: getOperators,
   target: nationalOperatorsApi.getOperators.start,
});
