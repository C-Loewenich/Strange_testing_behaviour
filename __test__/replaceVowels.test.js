import { replaceVowels } from "../replaceVowels.js";
import { describe, it, expect } from "vitest";

describe("replaceVowels function", () => {

    const testData = [
        ["replace (eo)", "hello", "hxllx"],
        ["replace (o)", "world", "wxrld"],
        ["replace (oai)", "programming", "prxgrxmmxng"],
        ["replace all", "aeiou", "xxxxx"],
        ["replace all", "AEIOU", "XXXXX"],
        ["replace non", "xyz", "xyz"],
        ["replace non", "XyZ", "XyZ"],
        ["replace (Ae)", "Abe", "Xbx"],
        ["replace non (empty string)", "''", "''"],
        ["replace (aaee)", "aaxxee", "xxxxxx"],
        ["replace non", "xxx", "xxx"],
    ]
    
    it("should throw TypeError if argument is not a string", () => {
        expect(() => replaceVowels(123)).toThrow(TypeError);
        expect(() => replaceVowels(1.5)).toThrow(TypeError);
        expect(() => replaceVowels(undefined)).toThrow(TypeError);
        expect(() => replaceVowels(null)).toThrow(TypeError);
        expect(() => replaceVowels(true)).toThrow(TypeError);
        expect(() => replaceVowels(false)).toThrow(TypeError);
    });


    it.each(testData)("should %s in the string %s returning %s", (vowels, input, output) => {
        expect(replaceVowels(input)).toBe(output)
    });
    
});

