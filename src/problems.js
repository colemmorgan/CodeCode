import { StringIteration } from "./problems/basic-iteration/StringIteration";
import { ArrayIteration } from "./problems/basic-iteration/ArrayIteration";
import { ObjectIteration } from "./problems/basic-iteration/ObjectIteration";
import { CurrencyFormatting } from "./problems/string-manipulation/CurrencyFormatting";
import { ProperCaseFormatting } from "./problems/string-manipulation/ProperCaseFormatting";
import { ShortScaleFormatting } from "./problems/string-manipulation/ShortScaleFormatting";
import { NonMutatingArrayReversal } from "./problems/no-mutation/NonMutatingArrayReversal";
import { NonMutatingObjectMerge } from "./problems/no-mutation/NonMutatingObjectMerge";
import { NonMutatingStringReplacement } from "./problems/no-mutation/NonMutatingStringReplacement";
import { FilterEvenNumbers } from "./problems/hof/FilterEvenNumbers";
import { FindFirstNegative } from "./problems/hof/FindFirstNegative";
import { MapToSquareValues } from "./problems/hof/MapToSquareValues";
import { ReduceToSum } from "./problems/hof/ReduceToSum";
import { CountNestedObjectKeys } from "./problems/advanced-iteration/CountNestedObjectKeys";
import { FlattenNestedArray } from "./problems/advanced-iteration/FlattenNestedArray";
import { AccessNestedProperties } from "./problems/advanced-iteration/NestedProperties";
import { CaesarCipher } from "./problems/js-algorithms/CeasarCipher";
import { CountDuplicates } from "./problems/js-algorithms/CountingDuplicate";
import { FibSeq } from "./problems/js-algorithms/FibSeq";
import { WordFrequencyCounter } from "./problems/final-unit/WordFreq";

const problems = {
    "caesar-cipher": CaesarCipher,
    "basic-string-iteration": StringIteration,
    "basic-array-iteration": ArrayIteration,
    "basic-object-iteration": ObjectIteration,
    "usd-currency-formatting": CurrencyFormatting,
    "proper-case-formatting": ProperCaseFormatting,
    "short-scale-formatting": ShortScaleFormatting,
    "non-mutating-array-reversal": NonMutatingArrayReversal,
    "non-mutating-object-merge": NonMutatingObjectMerge,
    "string-replacement": NonMutatingStringReplacement,
    "filter-even-numbers": FilterEvenNumbers,
    "find-first-negative": FindFirstNegative,
    "map-to-square-values": MapToSquareValues,
    "reduce-to-sum": ReduceToSum,
    "count-nested-object-keys": CountNestedObjectKeys,
    "flatten-nested-array": FlattenNestedArray,
    "access-nested-properties": AccessNestedProperties,
    "count-duplicates": CountDuplicates,
    "fibonacci-sequence": FibSeq,
    "word-frequency-counter": WordFrequencyCounter,
};

export default problems;