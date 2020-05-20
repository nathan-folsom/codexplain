import { Injectable } from '@nestjs/common';
import {ExplainRequest} from "./model/explain-request";
import {Explanation} from "./model/explanation";
import { ExplanationRes } from "./model/explanation-res";

@Injectable()
export class AppService {
  async formatCode(request: ExplainRequest): Promise<ExplanationRes> {
    const language = request.language;
    const rules = await import('./language-rules/' + language);
    const explanation = new Explanation(request.code, rules[language]);
    return explanation.toAPI();
  }
}
