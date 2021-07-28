import { Inject, Controller, Provide, Get, Post } from "@midwayjs/decorator";
import { Context } from "egg";
import { ICodeTimeService } from "../interface";

@Provide()
@Controller("/codetime")
export class CodeTime {
  @Inject()
  ctx: Context;

  @Inject("CodeTimeService")
  CodeTimeService: ICodeTimeService;

  @Get("/")
  getCodeTime() {
    const { ctx } = this;
    return ctx.params;
  }

  @Post("/upload")
  async uploadCodeTime() {
    const { ctx } = this;
    const { content } = ctx.request.body;
    const dealResult = await this.CodeTimeService.dealString(content);
    return dealResult;
  }
}
