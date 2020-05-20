import { Body, Controller, Get, Post, Render, Req, Res } from "@nestjs/common";
import {AppService} from './app.service';
import {ExplainRequest} from "./model/explain-request";
import {Explanation} from "./model/explanation";
import {supportedLanguages} from "./model/supported-languages";
import { ExplanationRes } from "./model/explanation-res";


@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @Render('index')
    async root() {

        const exampleCode = 'const helloWorld = \'Hello World\';';

        const explanation = await this.appService.formatCode({
                language: supportedLanguages.TYPESCRIPT,
                code: exampleCode
            })

        return {
            exampleCode: exampleCode,
            fmtExampleCode: explanation
        }
    }

    @Get('/explainer')
    @Render('explainer')
    explainer() {
        return {}
    }

    @Get('/example')
    @Render('example')
    example() {
        return {}
    }

    @Post('/explain')
    async formatCode(@Body() request: ExplainRequest): Promise<ExplanationRes> {
        const ex = await this.appService.formatCode(request)
        return new ExplanationRes(ex)
    }
}
