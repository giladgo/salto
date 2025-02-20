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
/* eslint-disable max-len */
/* eslint-disable camelcase */
import {
  BuiltinTypes, createRefToElmWithValue, CORE_ANNOTATIONS, ElemID, ObjectType, createRestriction, ListType,
} from '@salto-io/adapter-api'
import * as constants from '../../../constants'
import { enums } from '../enums'

export const othercustomfieldInnerTypes: ObjectType[] = []

const othercustomfieldElemID = new ElemID(constants.NETSUITE, 'othercustomfield')
const othercustomfield_customfieldfilters_customfieldfilterElemID = new ElemID(constants.NETSUITE, 'othercustomfield_customfieldfilters_customfieldfilter')

const othercustomfield_customfieldfilters_customfieldfilter = new ObjectType({
  elemID: othercustomfield_customfieldfilters_customfieldfilterElemID,
  annotations: {
  },
  fields: {
    fldfilter: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
        [CORE_ANNOTATIONS.REQUIRED]: true,
      },
    }, /* Original description: This field accepts references to the following custom types:   transactioncolumncustomfield   transactionbodycustomfield   othercustomfield   itemoptioncustomfield   itemnumbercustomfield   itemcustomfield   entitycustomfield   customrecordcustomfield   crmcustomfield   For information about other possible values, see generic_standard_field. */
    fldfilterchecked: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    fldfiltercomparetype: {
      refType: createRefToElmWithValue(enums.generic_customfield_fldfiltercomparetype),
      annotations: {
      },
    }, /* Original description: For information about possible values, see generic_customfield_fldfiltercomparetype.   The default value is 'EQ'. */
    fldfiltersel: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was multi-select list */),
      annotations: {
      },
    }, /* Original description: You can specify multiple values by separating each value with a pipe (|) symbol.   This field accepts references to the following custom types:   scriptdeployment   workflowactionscript   workflowstatecustomfield   workflowcustomfield   workflow   scriptdeployment   usereventscript   transactioncolumncustomfield   transactionbodycustomfield   transactionForm   scriptdeployment   suitelet   scriptdeployment   scheduledscript   savedsearch   role   scriptdeployment   restlet   scriptdeployment   portlet   othercustomfield   scriptdeployment   massupdatescript   scriptdeployment   mapreducescript   itemoptioncustomfield   itemnumbercustomfield   itemcustomfield   entryForm   entitycustomfield   statuses   customtransactiontype   instance   customrecordcustomfield   customrecordtype   customvalue   crmcustomfield   scriptdeployment   clientscript   scriptdeployment   bundleinstallationscript   advancedpdftemplate   addressForm */
    fldfilterval: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING),
      annotations: {
      },
    },
    fldfilternotnull: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    fldfilternull: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    fldcomparefield: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
      },
    }, /* Original description: This field accepts references to the following custom types:   transactioncolumncustomfield   transactionbodycustomfield   othercustomfield   itemoptioncustomfield   itemnumbercustomfield   itemcustomfield   entitycustomfield   customrecordcustomfield   crmcustomfield   For information about other possible values, see generic_standard_field. */
  },
  path: [constants.NETSUITE, constants.TYPES_PATH, othercustomfieldElemID.name],
})

othercustomfieldInnerTypes.push(othercustomfield_customfieldfilters_customfieldfilter)

const othercustomfield_customfieldfiltersElemID = new ElemID(constants.NETSUITE, 'othercustomfield_customfieldfilters')

const othercustomfield_customfieldfilters = new ObjectType({
  elemID: othercustomfield_customfieldfiltersElemID,
  annotations: {
  },
  fields: {
    customfieldfilter: {
      refType: createRefToElmWithValue(new ListType(othercustomfield_customfieldfilters_customfieldfilter)),
      annotations: {
      },
    },
  },
  path: [constants.NETSUITE, constants.TYPES_PATH, othercustomfieldElemID.name],
})

othercustomfieldInnerTypes.push(othercustomfield_customfieldfilters)

const othercustomfield_roleaccesses_roleaccessElemID = new ElemID(constants.NETSUITE, 'othercustomfield_roleaccesses_roleaccess')

const othercustomfield_roleaccesses_roleaccess = new ObjectType({
  elemID: othercustomfield_roleaccesses_roleaccessElemID,
  annotations: {
  },
  fields: {
    role: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
        [CORE_ANNOTATIONS.REQUIRED]: true,
      },
    }, /* Original description: This field accepts references to the role custom type.   For information about other possible values, see customrecordtype_permittedrole. */
    accesslevel: {
      refType: createRefToElmWithValue(enums.generic_accesslevel_searchlevel),
      annotations: {
        [CORE_ANNOTATIONS.REQUIRED]: true,
      },
    }, /* Original description: For information about possible values, see generic_accesslevel_searchlevel.   The default value is '0'. */
    searchlevel: {
      refType: createRefToElmWithValue(enums.generic_accesslevel_searchlevel),
      annotations: {
        [CORE_ANNOTATIONS.REQUIRED]: true,
      },
    }, /* Original description: For information about possible values, see generic_accesslevel_searchlevel.   The default value is '0'. */
  },
  path: [constants.NETSUITE, constants.TYPES_PATH, othercustomfieldElemID.name],
})

othercustomfieldInnerTypes.push(othercustomfield_roleaccesses_roleaccess)

const othercustomfield_roleaccessesElemID = new ElemID(constants.NETSUITE, 'othercustomfield_roleaccesses')

const othercustomfield_roleaccesses = new ObjectType({
  elemID: othercustomfield_roleaccessesElemID,
  annotations: {
  },
  fields: {
    roleaccess: {
      refType: createRefToElmWithValue(new ListType(othercustomfield_roleaccesses_roleaccess)),
      annotations: {
      },
    },
  },
  path: [constants.NETSUITE, constants.TYPES_PATH, othercustomfieldElemID.name],
})

othercustomfieldInnerTypes.push(othercustomfield_roleaccesses)


export const othercustomfield = new ObjectType({
  elemID: othercustomfieldElemID,
  annotations: {
  },
  fields: {
    scriptid: {
      refType: createRefToElmWithValue(BuiltinTypes.SERVICE_ID),
      annotations: {
        [CORE_ANNOTATIONS.REQUIRED]: true,
        [constants.IS_ATTRIBUTE]: true,
        [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({ regex: '^custrecord[0-9a-z_]+' }),
      },
    }, /* Original description: This attribute value can be up to 40 characters long.   The default value is ‘custrecord’. */
    fieldtype: {
      refType: createRefToElmWithValue(enums.generic_customfield_fieldtype),
      annotations: {
        [CORE_ANNOTATIONS.REQUIRED]: true,
      },
    }, /* Original description: For information about possible values, see generic_customfield_fieldtype.   The default value is 'TEXT'. */
    label: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
        [CORE_ANNOTATIONS.REQUIRED]: true,
        [CORE_ANNOTATIONS.RESTRICTION]: createRestriction({ max_length: 200 }),
      },
    }, /* Original description: This field value can be up to 200 characters long.   This field accepts references to the string custom type. */
    rectype: {
      refType: createRefToElmWithValue(enums.generic_customrecordothercustomfield_rectype),
      annotations: {
        [CORE_ANNOTATIONS.REQUIRED]: true,
      },
    }, /* Original description: For information about possible values, see generic_customrecordothercustomfield_rectype. */
    selectrecordtype: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
      },
    }, /* Original description: This field is mandatory when the fieldtype value is equal to any of the following lists or values: SELECT, MULTISELECT.   This field accepts references to the following custom types:   customrecordtype   customlist   For information about other possible values, see generic_customfield_selectrecordtype. */
    applyformatting: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is T. */
    defaultchecked: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    defaultselection: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
      },
    }, /* Original description: This field accepts references to the following custom types:   scriptdeployment   workflowactionscript   workflowstatecustomfield   workflowcustomfield   workflow   scriptdeployment   usereventscript   transactioncolumncustomfield   transactionbodycustomfield   transactionForm   scriptdeployment   suitelet   scriptdeployment   scheduledscript   savedsearch   role   scriptdeployment   restlet   scriptdeployment   portlet   othercustomfield   scriptdeployment   massupdatescript   scriptdeployment   mapreducescript   itemoptioncustomfield   itemnumbercustomfield   itemcustomfield   entryForm   entitycustomfield   statuses   customtransactiontype   instance   customrecordcustomfield   customrecordtype   customvalue   crmcustomfield   scriptdeployment   clientscript   scriptdeployment   bundleinstallationscript   advancedpdftemplate   addressForm */
    defaultvalue: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING),
      annotations: {
      },
    },
    description: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING),
      annotations: {
      },
    },
    displaytype: {
      refType: createRefToElmWithValue(enums.generic_customfield_displaytype),
      annotations: {
      },
    }, /* Original description: For information about possible values, see generic_customfield_displaytype.   The default value is 'NORMAL'. */
    dynamicdefault: {
      refType: createRefToElmWithValue(enums.generic_customfield_dynamicdefault),
      annotations: {
      },
    }, /* Original description: For information about possible values, see generic_customfield_dynamicdefault. */
    help: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
      },
    }, /* Original description: This field accepts references to the string custom type. */
    linktext: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING),
      annotations: {
      },
    },
    minvalue: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING),
      annotations: {
      },
    },
    maxvalue: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING),
      annotations: {
      },
    },
    storevalue: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is T. */
    accesslevel: {
      refType: createRefToElmWithValue(enums.generic_accesslevel_searchlevel),
      annotations: {
      },
    }, /* Original description: For information about possible values, see generic_accesslevel_searchlevel.   The default value is '2'. */
    checkspelling: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    encryptatrest: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    displayheight: {
      refType: createRefToElmWithValue(BuiltinTypes.NUMBER),
      annotations: {
      },
    }, /* Original description: This field value must be greater than or equal to 0. */
    displaywidth: {
      refType: createRefToElmWithValue(BuiltinTypes.NUMBER),
      annotations: {
      },
    }, /* Original description: This field value must be greater than or equal to 0. */
    globalsearch: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    isformula: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    ismandatory: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    maxlength: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING),
      annotations: {
      },
    },
    onparentdelete: {
      refType: createRefToElmWithValue(enums.generic_customfield_onparentdelete),
      annotations: {
      },
    }, /* Original description: For information about possible values, see generic_customfield_onparentdelete. */
    searchcomparefield: {
      refType: createRefToElmWithValue(enums.generic_standard_field),
      annotations: {
      },
    }, /* Original description: For information about possible values, see generic_standard_field. */
    searchdefault: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
      },
    }, /* Original description: This field accepts references to the savedsearch custom type. */
    searchlevel: {
      refType: createRefToElmWithValue(enums.generic_accesslevel_searchlevel),
      annotations: {
      },
    }, /* Original description: For information about possible values, see generic_accesslevel_searchlevel.   The default value is '2'. */
    showhierarchy: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    showinlist: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    sourcefilterby: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
      },
    }, /* Original description: This field accepts references to the othercustomfield custom type.   For information about other possible values, see generic_standard_field. */
    sourcefrom: {
      refType: createRefToElmWithValue(enums.generic_standard_field),
      annotations: {
      },
    }, /* Original description: For information about possible values, see generic_standard_field. */
    sourcelist: {
      refType: createRefToElmWithValue(BuiltinTypes.STRING /* Original type was single-select list */),
      annotations: {
      },
    }, /* Original description: This field accepts references to the othercustomfield custom type.   For information about other possible values, see generic_standard_field. */
    applytoallforms: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    applytoselectedforms: {
      refType: createRefToElmWithValue(BuiltinTypes.BOOLEAN),
      annotations: {
      },
    }, /* Original description: The default value is F. */
    customfieldfilters: {
      refType: createRefToElmWithValue(othercustomfield_customfieldfilters),
      annotations: {
      },
    },
    roleaccesses: {
      refType: createRefToElmWithValue(othercustomfield_roleaccesses),
      annotations: {
      },
    },
  },
  path: [constants.NETSUITE, constants.TYPES_PATH, othercustomfieldElemID.name],
})
