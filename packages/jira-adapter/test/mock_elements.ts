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

import { ObjectType, ElemID, BuiltinTypes, MapType, InstanceElement } from '@salto-io/adapter-api'
import { elements as elementsUtils } from '@salto-io/adapter-components'
import { JIRA } from '../src/constants'

const { ADDITIONAL_PROPERTIES_FIELD } = elementsUtils.swagger

const boardLocationType = new ObjectType({
  elemID: new ElemID(JIRA, 'Board_location'),
  fields: {
    projectId: { refType: BuiltinTypes.NUMBER },
    [ADDITIONAL_PROPERTIES_FIELD]: { refType: new MapType(BuiltinTypes.UNKNOWN) },
  },
})

const boardType = new ObjectType({
  elemID: new ElemID(JIRA, 'Board'),
  fields: {
    self: { refType: BuiltinTypes.STRING },
    location: { refType: boardLocationType },
  },
})

const projectType = new ObjectType({
  elemID: new ElemID(JIRA, 'Project'),
  fields: {
    self: { refType: BuiltinTypes.STRING },
  },
})

export const mockTypes = {
  Board: boardType,
  Project: projectType,
}

export const mockInstances = {
  Board: new InstanceElement(
    'my_board',
    mockTypes.Board,
    {
      self: 'https://test.atlassian.net/rest/agile/1.0/board/1',
      location: {
        projectId: 10000,
        [ADDITIONAL_PROPERTIES_FIELD]: {
          self: 'https://ori-salto-test.atlassian.net/rest/api/2/project/10000',
        },
      },
    }
  ),
  Project: new InstanceElement(
    'my_project',
    mockTypes.Project,
    {
      self: 'https://ori-salto-test.atlassian.net/rest/api/3/project/10000',
    }
  ),
}
