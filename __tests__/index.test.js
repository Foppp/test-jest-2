import reverse from '../src/index.js';

describe ('reverse1', () => {
  test ('POlkokalk', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
  });
  test ('pomposhka', () => {
    expect(reverse('POPA')).toEqual('APOP');
    expect(reverse('MOLKA')).toEqual('AKLOM');
  });
})
