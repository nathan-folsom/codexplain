import {supportedLanguages} from "./supported-languages";

export class ExplainRequest {
    language: supportedLanguages;
    code: string
}