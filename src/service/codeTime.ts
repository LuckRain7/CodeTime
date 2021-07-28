import { Provide } from "@midwayjs/decorator";

@Provide("CodeTimeService")
export class CodeTimeService {
  async dealString(_string): Promise<any> {

    
    const result = {text:'Hello World'};
    return await Promise.resolve(result);
  }
}
