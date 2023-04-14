import { Module } from "@nestjs/common";
import { TickerModuleBase } from "./base/ticker.module.base";
import { TickerService } from "./ticker.service";
import { TickerController } from "./ticker.controller";

@Module({
  imports: [TickerModuleBase],
  controllers: [TickerController],
  providers: [TickerService],
  exports: [TickerService],
})
export class TickerModule {}
