// src/atoms.js
import { atom, selector } from 'recoil';

export const currentProblemIdAtom = atom({
  key: 'currentProblemIdAtom',
  default: '1',
});

export const outputAtom = atom({
  key: 'outputAtom',
  default: [],
});

export const codeAtom = atom({
  key: 'codeAtom',
  default: '',
});

export const resetOutputSelector = selector({
  key: 'resetOutputSelector',
  get: ({ get }) => get(outputAtom),
  set: ({ set }) => set(outputAtom, ''),
});
