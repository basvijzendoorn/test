/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TickerWhereInput } from "./TickerWhereInput";
import { Type } from "class-transformer";
import { TickerOrderByInput } from "./TickerOrderByInput";

@ArgsType()
class TickerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TickerWhereInput,
  })
  @Field(() => TickerWhereInput, { nullable: true })
  @Type(() => TickerWhereInput)
  where?: TickerWhereInput;

  @ApiProperty({
    required: false,
    type: [TickerOrderByInput],
  })
  @Field(() => [TickerOrderByInput], { nullable: true })
  @Type(() => TickerOrderByInput)
  orderBy?: Array<TickerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TickerFindManyArgs as TickerFindManyArgs };
