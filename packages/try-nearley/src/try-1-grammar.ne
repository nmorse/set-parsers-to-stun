## paste into https://omrelli.ug/nearley-playground/
# Try #1

try1 -> programList {% (pl) => {
    return {pounce : pl[0].filter(i => i !== null) };
 } %}

programList ->  optS | optS word anotherWord:* optS {% ([_, f, r]) => {
    let rest = r.map(ele => {
        if (ele && ele.length && typeof ele !== 'string') {
            return ele[0];
        }
        return ele;
    });
    if (f && f.length) {
        if (f[0].length) {
            return [...f[0], ...rest];
        }
        return [...f, ...rest];
    } 
    return [f, ...rest];
    } %}

optS -> [\s\n\t]:* {% () => null %}
reqS -> [\s\n\t]:+ {% () => null %}

word -> string | list {% ([word]) => {
    if (word === null) {
        return '';
    }
    if (typeof word === 'string') {
        return word;
    }
    if (word.list) {
        return [[word.list]];
    }
    if (word === null) {
        return [];
    }
    return word[0];
} %}

anotherWord -> reqS word {% ([_, terms]) => {
    if (terms && terms.length) {
        return terms[0];
    }
    if (terms && terms.list) {
        return terms;
    }
    return {anotherWord: "unexpected", terms}
} %}


list -> "[" programList "]" {% ([_, items]) => {
    return {list: items};
} %}

string -> [0-9]:* ([a-zA-Z\~\!\@\$\%\^\&\*\_\=\+\/\\\?\,\<\>\;\:] [0-9\-\.]:* ):+ {% ([pre, nonNum]) => {
    const part2 = nonNum.map(ele => {
        return ele[0] + ele[1].join("");
    });
    return `${pre.join("")}${part2.join("")}`;
} %}
