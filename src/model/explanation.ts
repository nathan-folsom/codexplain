import {Rule} from "./rule";
import { ExplanationRes } from "./explanation-res";

export interface ExplanationConstructor {
    code: string;
    rules: Rule[];
    getFormattedCode(): void;
    toAPI(): ExplanationRes;
}

export class Explanation implements ExplanationConstructor {
    code: string;
    rules: Rule[];
    formattedCode: string;


    getFormattedCode(): void {
        this.rules.forEach((r) => {
            let matches = this.code.match(r.regex);
            if (matches) {
                matches = matches.map((m) => m.trim());
                matches.forEach((m) => {
                    this.code = this.code.replace(m, `<span class="${r.class}">${m}</span>`)
                })
            }
        })
        // TODO: Recognize variables after they are declared
        // TODO: separate variables and declarations
        this.formattedCode = this.code;
    }

    constructor(code: string, rules: Rule[]) {
        this.code = code;
        this.rules = rules;
        this.getFormattedCode()
    }

    toAPI(): ExplanationRes {
        return {code: this.formattedCode};
    }

}