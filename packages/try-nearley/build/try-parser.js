// Generated automatically by nearley, version 2.19.7
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "try1", "symbols": ["programList"], "postprocess": (pl) => {
           return {pounce : pl[0].filter(i => i !== null) };
        } },
    {"name": "programList", "symbols": ["optS"]},
    {"name": "programList$ebnf$1", "symbols": []},
    {"name": "programList$ebnf$1", "symbols": ["programList$ebnf$1", "anotherWord"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "programList", "symbols": ["optS", "word", "programList$ebnf$1", "optS"], "postprocess":  ([_, f, r]) => {
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
        } },
    {"name": "optS$ebnf$1", "symbols": []},
    {"name": "optS$ebnf$1", "symbols": ["optS$ebnf$1", /[\s\n\t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "optS", "symbols": ["optS$ebnf$1"], "postprocess": () => null},
    {"name": "reqS$ebnf$1", "symbols": [/[\s\n\t]/]},
    {"name": "reqS$ebnf$1", "symbols": ["reqS$ebnf$1", /[\s\n\t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "reqS", "symbols": ["reqS$ebnf$1"], "postprocess": () => null},
    {"name": "word", "symbols": ["string"]},
    {"name": "word", "symbols": ["list"], "postprocess":  ([word]) => {
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
        } },
    {"name": "anotherWord", "symbols": ["reqS", "word"], "postprocess":  ([_, terms]) => {
            if (terms && terms.length) {
                return terms[0];
            }
            if (terms && terms.list) {
                return terms;
            }
            return {anotherWord: "unexpected", terms}
        } },
    {"name": "list", "symbols": [{"literal":"["}, "programList", {"literal":"]"}], "postprocess":  ([_, items]) => {
            return {list: items};
        } },
    {"name": "string$ebnf$1", "symbols": []},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string$ebnf$2$subexpression$1$ebnf$1", "symbols": []},
    {"name": "string$ebnf$2$subexpression$1$ebnf$1", "symbols": ["string$ebnf$2$subexpression$1$ebnf$1", /[0-9\-\.]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string$ebnf$2$subexpression$1", "symbols": [/[a-zA-Z\~\!\@\$\%\^\&\*\_\=\+\/\\\?\,\<\>\;\:]/, "string$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "string$ebnf$2", "symbols": ["string$ebnf$2$subexpression$1"]},
    {"name": "string$ebnf$2$subexpression$2$ebnf$1", "symbols": []},
    {"name": "string$ebnf$2$subexpression$2$ebnf$1", "symbols": ["string$ebnf$2$subexpression$2$ebnf$1", /[0-9\-\.]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string$ebnf$2$subexpression$2", "symbols": [/[a-zA-Z\~\!\@\$\%\^\&\*\_\=\+\/\\\?\,\<\>\;\:]/, "string$ebnf$2$subexpression$2$ebnf$1"]},
    {"name": "string$ebnf$2", "symbols": ["string$ebnf$2", "string$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": ["string$ebnf$1", "string$ebnf$2"], "postprocess":  ([pre, nonNum]) => {
            const part2 = nonNum.map(ele => {
                return ele[0] + ele[1].join("");
            });
            return `${pre.join("")}${part2.join("")}`;
        } }
]
  , ParserStart: "try1"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
