/*
*                      Copyright 2021 Salto Labs Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { ChangeValidator, getChangeElement, Element, ElemID, SaltoErrorSeverity, isReferenceExpression } from '@salto-io/adapter-api'
import { walkOnElement, WalkOnFunc, WALK_NEXT_STEP } from '@salto-io/adapter-utils'
import { values, collections } from '@salto-io/lowerdash'
import { expressions } from '@salto-io/workspace'

const { awu } = collections.asynciterable

const getUnresolvedReferences = (element: Element): ElemID[] => {
  const unresolvedReferences: ElemID[] = []
  const func: WalkOnFunc = ({ value }) => {
    if (isReferenceExpression(value) && value.value instanceof expressions.UnresolvedReference) {
      unresolvedReferences.push(value.elemID)
      return WALK_NEXT_STEP.SKIP
    }
    return WALK_NEXT_STEP.RECURSE
  }
  walkOnElement({ element, func })
  return unresolvedReferences
}


export const changeValidator: ChangeValidator = async changes => (
  awu(changes)
    .map(getChangeElement)
    .map(async element => {
      const unresolvedReferences = getUnresolvedReferences(element)
      if (unresolvedReferences.length === 0) {
        return undefined
      }
      return ({
        elemID: element.elemID,
        severity: 'Error' as SaltoErrorSeverity,
        message: 'Element has unresolved references',
        detailedMessage: `Element ${element.elemID.getFullName()} contains unresolved references: ${unresolvedReferences.map(e => e.getFullName()).join(', ')}`,
      })
    })
    .filter(values.isDefined)
    .toArray()
)
