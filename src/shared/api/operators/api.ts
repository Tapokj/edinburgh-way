import { createQuery } from '@farfetched/core';

// import Parse from 'fast-xml-parser';

export const getOperators = createQuery({
   handler: async () => {
      const response = await fetch('https://www.travelinedata.org.uk/noc/api/1.0/nocrecords.json');
      const xml = await response.json();
      console.log('xml', 'xml', xml);
      return { response: '' };
   },
});

