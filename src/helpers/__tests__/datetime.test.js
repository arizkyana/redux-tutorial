import { convertDateToString } from '../datetime';

describe('Testing DateTime', () => {
  test('failed convert date 2021-11-01 to 01/11/2021', () => {
    /**
     * 1. Tentukan skenario gagal di awal
     * 2. Kalo misalnya ada kegagalan, perbaiki dulu kode nya
     * 3. Kalo udah bener, pindahkan ke dalam modul (function terpisah)
     * 4. Test lagi kode yang sudah benar tadi
     */

    /**
     * 3A (Arrange, Action, Assert)
     */
    const sampleDate = '2021-11-01'; // Arrange

    const convertDate = convertDateToString(sampleDate); // Action
    console.log('result convertDate : ', convertDate); // Action

    expect(convertDate).toBe('01/11/2021'); // Assert
  });

  test('success convert date 2021-11-01 to 01/11/2021', () => {
    const convertDate = convertDateToString('2021-11-01');
    console.log('result convertDate : ', convertDate);
    expect(convertDate).toBe('01/11/2021');
  });
});
