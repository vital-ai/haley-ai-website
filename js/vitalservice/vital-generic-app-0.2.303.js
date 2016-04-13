if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_generic_app_0_2_303_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-generic-app",
  "name" : "vital-generic-app-0.2.303",
  "vitalsignsVersion" : "0.2.303",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-generic-app#AppConfiguration",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-generic-app#AppConfiguration",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-generic-app#AppConfiguration",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-generic-app#AppConfiguration" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-generic-app#isInvitationCodeRequestsEnabled" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-generic-app#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasRandomCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasUsername" : {
        "type" : "string"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-generic-app#MailingList",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-generic-app#MailingList",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-generic-app#MailingList",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-generic-app#MailingList" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-generic-app#hasEmail" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#isMailgun" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-generic-app#MailingListMember",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-generic-app#MailingListMember",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-generic-app#MailingListMember",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-generic-app#MailingListMember" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-generic-app#hasDateSubscribed" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-generic-app#hasEmail" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasMailingListURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasOrganization" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasRandomCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#isEmailActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasAccountURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "accountURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasDateSubscribed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#MailingListMember" ],
    "shortName" : "dateSubscribed",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasEmail",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#MailingList", "http://vital.ai/ontology/vital-generic-app#MailingListMember" ],
    "shortName" : "email",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "loginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasMailingListURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#MailingListMember" ],
    "shortName" : "mailingListURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasOrganization",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#MailingListMember" ],
    "shortName" : "organization",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasRandomCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest", "http://vital.ai/ontology/vital-generic-app#MailingListMember" ],
    "shortName" : "randomCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "status",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasUsername",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "username",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#isEmailActive",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#MailingListMember" ],
    "shortName" : "emailActive",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#isInvitationCodeRequestsEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#AppConfiguration" ],
    "shortName" : "invitationCodeRequestsEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#isMailgun",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#MailingList" ],
    "shortName" : "mailgun",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_generic_app_0_2_303_schema);