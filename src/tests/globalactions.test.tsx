import { isMobile, formatPhoneText } from '../lib/actions';

/**
 * TEST 1 - the function isMobile(?boolean)
 */
test('testFunction-isMobile', () => {
  // 1.1 - Test isMobile by display size
  global.innerWidth = 1920;
  const testDisplayDesktop = isMobile(true);
  global.innerWidth = 480; // Shrink the vw to 500px
  const testDisplayMobile = isMobile(true);

  // 1.2 - Test device kind
  const testUaWindowsNT = isMobile(false);
  Object.defineProperty(window.navigator, 'userAgent', { value: 'Windows Phone' });
  const testUaWindowsPhone = isMobile(false);

  // TEST 1 RESULTS
  expect(testDisplayDesktop).toBe(false); // display width is 1920px
  expect(testDisplayMobile).toBe(true); // display width is 480px
  expect(testUaWindowsNT).toBe(false); // OS is Windows
  expect(testUaWindowsPhone).toBe(true); // OS is Windows Phone
});

/**
 * TEST 2 - the function formatPhoneText(string)
 */
test('testFunction-formatPhoneText', () => {
  const testA = formatPhoneText('(406) 123-4567');        
  const testB = formatPhoneText('8325551234');            
  const testC = formatPhoneText('StringTest1234!!');      
  const testD = formatPhoneText('\'000-000-0000\r\n_t');
  const testE = formatPhoneText('我很没用。😔5555555');

  // TEST 2 RESULTS
  expect(testA).toBe('406-123-4567'); // input: (406) 123-4567
  expect(testB).toBe('832-555-1234'); // input: 8325551234
  expect(testC).toBe('123-4');        // input: StringTest1234!!
  expect(testD).toBe('000-000-0000'); // input: 000-000-0000\r\nAdditionalText
  expect(testE).toBe('555-555-5');    // input: 我很没用。😔5555555
})