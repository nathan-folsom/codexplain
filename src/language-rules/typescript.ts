import {Rule} from "../model/rule";

export const typescript: Rule[] = [
    {symbol: '=', regex: /=/g, class: 'operator'},
    {symbol: 'variable', regex: /\s*(const|let)\s+[a-zA-Z]+[a-zA-Z0-9]*[\s*=]/g, class: 'variable'},
    {symbol: 'string', regex: /'.*'/g, class: 'string'},
    {symbol: ';', regex: /;/g, class: 'semicolon'},
]