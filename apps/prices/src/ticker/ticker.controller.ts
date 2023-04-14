import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TickerService } from "./ticker.service";
import { TickerControllerBase } from "./base/ticker.controller.base";

@swagger.ApiTags("tickers")
@common.Controller("tickers")
export class TickerController extends TickerControllerBase {
  constructor(protected readonly service: TickerService) {
    super(service);
  }
}
