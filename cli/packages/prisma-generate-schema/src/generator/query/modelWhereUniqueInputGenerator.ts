import { ModelInputObjectTypeGenerator, TypeFromModelGenerator } from '../generator'
import { IGQLType, IGQLField } from '../../datamodel/model'

export default class ModelWhereUniqueInputGenerator extends ModelInputObjectTypeGenerator {
  public getTypeName(input: IGQLType, args: {}) {
    return `${input.name}WhereUniqueInput`
  }
  public wouldBeEmpty(model: IGQLType, args: {}) {
    return !TypeFromModelGenerator.hasUniqueField(model.fields)
  }

  protected generateRelationFieldType(model: IGQLType, args: {}, field: IGQLField) {
    return null
  }
  protected generateScalarFieldType(model: IGQLType, args: {}, field: IGQLField) {
    if (field.isUnique) {
      return this.generators.scalarTypeGenerator.mapToScalarFieldTypeForceOptional(field)
    } else {
      return null
    }
  }
}