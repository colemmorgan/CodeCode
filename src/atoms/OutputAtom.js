// src/atoms.js
import { PiConfettiThin } from 'react-icons/pi';
import { atom, selector } from 'recoil';

export const currentProblemIdAtom = atom({
  key: 'currentProblemIdAtom',
  default: '1',
});

export const outputAtom = atom({
  key: 'outputAtom',
  default: {id:null,outputs:[]},
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

export const submissionLoadingAtom = atom({
  key: 'submissionLoadingAtom',
  default: false
})

export const confettiAtom = atom({
  key:'confettiAtom',
  default: false,
})


