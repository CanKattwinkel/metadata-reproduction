import { Column, Model, Table } from 'sequelize-typescript';
import { TestEnum } from '@metadata-reproduction/core';
import { TestEnumProject } from '../project-enum';


export enum TestEnumSameFile {
  A = 'a',
  B = 'b',
}


@Table
export class SomeModel extends Model {
  // 1. an enum consumed from the same file works well.
  // the metadata is created correctly and applied
  @Column
  propertySameFile: TestEnumSameFile;



  // 2. this already is a problem and the type is forwarded wrongly to the underlying function `getSequelizeTypeByDesignType` (sequelize-typescript#model-service.ts)
  // that consumes via `Reflect.getMetadata('design:type', target, propertyName);`
  @Column
  propertyProject: TestEnumProject;


  // 3. this is also a problem
  @Column
  propertyLibrary: TestEnum;
}
