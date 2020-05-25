// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function almostIncreasingSequence(sequence) {
  if (sequence.length === 2) {
    return true;
  }

  let elemsRemoved = 0;
  for (let i = 0; i < sequence.length; i += 1) {
    const one = sequence[i - 2];
    const two = sequence[i - 1];
    const three = sequence[i];
    const four = sequence[i + 1];

    if (three <= two) {
      elemsRemoved += 1;

      if (three <= one && four <= two) {
        return false;
      }
    }
  }

  return elemsRemoved <= 1;
}

it('', () => expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false));
it('', () => expect(almostIncreasingSequence([1, 3, 2])).toBe(true));
it('', () => expect(almostIncreasingSequence([1, 4, 10, 4, 2])).toBe(false));
it('', () => expect(almostIncreasingSequence([1, 2, 3, 4, 3, 6])).toBe(true));
