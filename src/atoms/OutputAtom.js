// src/atoms.js
import { PiConfettiThin } from 'react-icons/pi';
import { atom, selector } from 'recoil';

export const currentProblemIdAtom = atom({
  key: 'currentProblemIdAtom',
  default: '1',
});

export const outputAtom = atom({
  key: 'outputAtom',
  default: [],
});

export const runCodeOutputAtom = atom({
  key: 'runCodeOutput',
  default: [],
});

export const codeAtom = atom({
  key: 'codeAtom',
  default: '',
});

export const codeErrorAtom = atom({
  key: 'codeErrorAtom',
  default: false,
})

export const confettiAtom = atom({
  key:'confettiAtom',
  default: false,
})

export const resetOutputSelector = selector({
  key: 'resetOutputSelector',
  get: ({ get }) => get(outputAtom),
  set: ({ set }) => set(outputAtom, ''),
});
