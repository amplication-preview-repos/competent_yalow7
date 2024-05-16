/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReferralWhereInput } from "./ReferralWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReferralListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReferralWhereInput,
  })
  @ValidateNested()
  @Type(() => ReferralWhereInput)
  @IsOptional()
  @Field(() => ReferralWhereInput, {
    nullable: true,
  })
  every?: ReferralWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReferralWhereInput,
  })
  @ValidateNested()
  @Type(() => ReferralWhereInput)
  @IsOptional()
  @Field(() => ReferralWhereInput, {
    nullable: true,
  })
  some?: ReferralWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReferralWhereInput,
  })
  @ValidateNested()
  @Type(() => ReferralWhereInput)
  @IsOptional()
  @Field(() => ReferralWhereInput, {
    nullable: true,
  })
  none?: ReferralWhereInput;
}
export { ReferralListRelationFilter as ReferralListRelationFilter };
