import { atom, selector } from "recoil";

export const ProblemTabsAtom = atom({
  key: "problemTabs",
  default: true,
});

export const codeNavTabSelected = atom({
  key: "codeNavSelected",
  default: true,
});

export const problemUnitsOpenAtom = atom({
  key: "problemUnitsOpen",
  default: {
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false,
    unit5: false,
    unit6: false,
    unit7: false,
  },
});
