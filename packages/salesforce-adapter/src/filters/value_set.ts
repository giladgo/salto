import _ from 'lodash'
import wu from 'wu'
import { collections } from '@salto/lowerdash'
import {
  Element, Field, isObjectType, Change, getChangeElement,
  isField, isModificationDiff, ChangeDataType, isInstanceElement, ReferenceExpression,
} from 'adapter-api'
import { SaveResult } from 'jsforce'
import { FilterWith } from '../filter'
import { FIELD_ANNOTATIONS, VALUE_SET_FIELDS } from '../constants'
import { PicklistValue } from '../client/types'
import { Types, metadataType } from '../transformers/transformer'
import { GLOBAL_VALUE_SET, CUSTOM_VALUE } from './global_value_sets'

const { makeArray } = collections.array

/**
 * Adds inactive values after the deletion of the values in the following cases:
 *  - Global value set
 *  - Restricted custom value set
 */
const filterCreator = (): FilterWith<'onUpdate'> => ({
  onUpdate: async (before: Element, after: Element, changes: ReadonlyArray<Change>):
    Promise<SaveResult[]> => {
    const isRestrictedPicklistField = (
      changedElement: ChangeDataType
    ): changedElement is Field =>
      isField(changedElement)
      && ([
        Types.primitiveDataTypes.Picklist.elemID.getFullName(),
        Types.primitiveDataTypes.MultiselectPicklist.elemID.getFullName(),
      ]).includes(changedElement.type.elemID.getFullName())
      && Boolean(changedElement.annotations[FIELD_ANNOTATIONS.RESTRICTED])

    const isInstanceGlobalSetValue = (changedElement: ChangeDataType): boolean =>
      isInstanceElement(changedElement)
      && metadataType(changedElement) === GLOBAL_VALUE_SET

    const getRemovedCustomValues = (beforeValues: PicklistValue[], afterValues: PicklistValue[]):
    PicklistValue[] => {
      const afterCustomValuesFullNames = afterValues.map(v => v.fullName)
      const setCustomValueInactive = (value: PicklistValue): PicklistValue => {
        value.isActive = false
        return value
      }
      return beforeValues
        .filter(v => !afterCustomValuesFullNames.includes(v.fullName))
        .map(v => setCustomValueInactive(v))
    }

    const addRemovedCustomValues = (
      valuesAnnotations: PicklistValue[],
      beforeValues: PicklistValue[],
      afterValues: PicklistValue[]
    ): PicklistValue[] | undefined => {
      const valuesToAdd = getRemovedCustomValues(beforeValues, afterValues)
      if (!_.isEmpty(valuesAnnotations)) {
        valuesAnnotations.push(...valuesToAdd)
        return valuesAnnotations
      }
      return valuesToAdd
    }

    wu(changes)
      .forEach(c => {
        if (isModificationDiff(c)) {
          const changedElement = getChangeElement(c)
          if (isRestrictedPicklistField(changedElement)
            && isObjectType(after)
            && isObjectType(before)) {
            const beforeCustomValues = makeArray(
              c.data.before.annotations[FIELD_ANNOTATIONS.VALUE_SET]
            )
            const afterCustomValues = makeArray(
              c.data.after.annotations[FIELD_ANNOTATIONS.VALUE_SET]
            )
            const isGlobalValueSetPicklistField = (field: Field): boolean =>
              !_.isUndefined(field.annotations[VALUE_SET_FIELDS.VALUE_SET_NAME])

            const isStandardValueSetPicklistField = (field: Field): boolean =>
              field.annotations[FIELD_ANNOTATIONS.VALUE_SET] instanceof ReferenceExpression

            const field = after.fields[changedElement.name]
            if (!isGlobalValueSetPicklistField(field)
              && !(isStandardValueSetPicklistField(field))) {
              field.annotations[FIELD_ANNOTATIONS.VALUE_SET] = addRemovedCustomValues(
                field.annotations[FIELD_ANNOTATIONS.VALUE_SET],
                beforeCustomValues,
                afterCustomValues,
              )
            }
          }

          if (isInstanceGlobalSetValue(changedElement)
            && isInstanceElement(after) && isInstanceElement(before)) {
            const beforeCustomValues = makeArray(before.value[CUSTOM_VALUE])
            const afterCustomValues = makeArray(after.value[CUSTOM_VALUE])
            after.value[CUSTOM_VALUE] = addRemovedCustomValues(
              after.value[CUSTOM_VALUE],
              beforeCustomValues,
              afterCustomValues
            )
          }
        }
      })

    return []
  },
})

export default filterCreator
