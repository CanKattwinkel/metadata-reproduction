# MetadataReproduction

This repository showcases an issue that we experienced with NX, Nest and sequelize-typescript. As soon as any enum is
accessed that is imported from another file, sequelize-typescript is not receiving the appropriate metadata.

This is shown on basis of the `metadata-reproduction/apps/server/src/models/SomeModel.ts` file. First an enum is
imported from within the same file (1.), then this enum is imported from another file within that project (2.) and
finally there is an import from another project of the monorepo (3.).

The generated code is shown below. Even thought the enum is the same, the output differs for 1. and 2.+3.

```javascript
tslib_1.__decorate([
  sequelize_typescript_1.Column,
// 1. Based on the metadata the type was extracted correctly, thus I assume the metadata was generated correctly 
  tslib_1.__metadata("design:type", String)
], SomeModel.prototype, "propertySameFile", void 0);
tslib_1.__decorate([
  sequelize_typescript_1.Column,
// 2. This is already wrong, sequelize-metadata received a wrong type? 
  tslib_1.__metadata("design:type", typeof (_a = typeof project_enum_1.TestEnumProject !== "undefined" && project_enum_1.TestEnumProject) === "function" ? _a : Object)
], SomeModel.prototype, "propertyProject", void 0);
tslib_1.__decorate([
  sequelize_typescript_1.Column,
// 3. see above. 
  tslib_1.__metadata("design:type", typeof (_b = typeof core_1.TestEnum !== "undefined" && core_1.TestEnum) === "function" ? _b : Object)
], SomeModel.prototype, "propertyLibrary", void 0);
SomeModel = tslib_1.__decorate([
  sequelize_typescript_1.Table
], SomeModel);
exports.SomeModel = SomeModel;
```
