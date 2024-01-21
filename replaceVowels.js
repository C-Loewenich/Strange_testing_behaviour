export function replaceVowels(string) {
    if (typeof string !== "string") {
        throw new TypeError("Argument must be a string")
    }

    const lowerCaseVowels = new Set(["a", "e", "i", "o", "u"]);
    const upperCaseVowels = new Set(["A", "E", "I", "O", "U"]);

    const replacedVowelsString = string
        .split("")
        .map(char => (lowerCaseVowels.has(char) ? "x" : upperCaseVowels.has(char) ? "X" : char))
        .join("");
    return replacedVowelsString;
};