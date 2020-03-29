const generateUniqueUid = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
   it('should generate and unique ID', () => {
       const id = generateUniqueUid();
        expect(id).toHaveLength(8);
   });
});