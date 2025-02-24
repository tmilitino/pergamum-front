import { type } from "os"

export class MetaSchma {

    getSchema() {
        const contract_schema = {
            definitions: this.getDefinetionSchema(),
            'title': 'New Schema Contract',
            'options': {
                'disable_collapse': true,
                'disable_edit_json': true,
                'disable_properties': true,
            },
            "$ref": "#/definitions/schema", 
            "properties": {
                "definitions": {
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                }
            }
        }

        return contract_schema
    }

    getDefinetionSchema() {
        const definitionsSchema = {
            "schemaArray": this.getSchemaArrayDefinition(),
            "string": this.getStringDefinition(),
            "integer": this.getIntegerDefinition(),
            "object": this.getObjectDefinition(),
            "array": this.getArryDefinition(),
            "schemaBase": this.getSchemaBaseDefinition(),
            "schema": this.getSchemaDefinition()
        }

        return definitionsSchema
    }

    getSchemaArrayDefinition() {
        const schemaArrayDefinition = {
            "type": "array",
            "minItems": 1,
            "maxItems": 1,
            "items": {
                "$ref": "#/definitions/schema"
            }
        }

        return schemaArrayDefinition
    }

    getStringDefinition() {
        const stringDefinition =
        {
            'options': {
                'disable_edit_json': true,
            },
            "properties": {
                "pattern": {
                    "type": "string",
                    "format": "regex",
                    "propertyOrder": 35
                },
                "type": {
                    "enum": [
                        "string"
                    ]
                },
                "enum": {
                    "items": {
                        "type": "string"
                    }
                },
            }
        }

        return stringDefinition
    }

    getIntegerDefinition() {
        const integerDefinition = {
            'options': {
                'disable_edit_json': true,
            },
            "properties": {
                "default": {
                    "type": "integer"
                },
                "minimum": {
                    "type": "number",
                    "propertyOrder": 25
                },
                "maximum": {
                    "type": "number",
                    "propertyOrder": 30
                },
                "type": {
                    "enum": [
                        "integer"
                    ]
                },
                "enum": {
                    "items": {
                        "type": "integer"
                    }
                }
            }
        }
        
        return integerDefinition
    }

    getObjectDefinition() {
        const objectDefinition = {
            'options': {
                'disable_edit_json': true,
            },
            "defaultProperties": [
                "properties"
            ],
            "properties": {
                "type": {
                    "enum": [
                        "object"
                    ]
                },
        
                "properties": {
                    "type": "object",
                    'options': {
                        'disable_edit_json': true,
                    },
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                },
            }
        }

        return objectDefinition;
    }

    getArryDefinition() {
        const arryDefinition = {
            'options': {
                'disable_edit_json': true,
            },
            "defaultProperties": [
                "items"
            ],
            "format": "tabs",
            "properties": {
                
                "type": {
                    "enum": [
                        "array"
                    ]
                },
                "items": {
                    "oneOf": [
                        {
                            "type": "array",
                            "$ref": "#/definitions/schemaArray",
                            "format": "tabs"
                        },
                        {
                            "$ref": "#/definitions/schema",
                        },
                    ]
                },
            }
        }

        return arryDefinition
    }

    getSchemaBaseDefinition() {
        const schemaBaseDefinition = {
            "type": "object",
            "defaultProperties": [
                "type"
            ],
            "required": ["type"],
            "properties": {
                "type": {
                    "propertyOrder": 1,
                    "type": "string",
                    "options": {
                        "hidden": true
                    }
                },
                "title": {
                    "type": "string",
                    "propertyOrder": 2
                },
                "description": {
                    "type": "string",
                    "propertyOrder": 4
                },
                "enum": {
                    "type": "array",
                    "minItems": 1,
                    "uniqueItems": true,
                    "propertyOrder": 5,
                    "format": "table"
                },
                "required":{
                    "type":"boolean",
                    default:true,
                    "propertyOrder": 6,
                }
            }
        }

        return schemaBaseDefinition
    }

    getSchemaDefinition() {
        const schemaDefinition = {
            "allOf": [
                {
                    "$ref": "#/definitions/schemaBase"
                }
            ],
            "options": {
                "keep_oneof_values": false
            },
            "default": {
                "type": "object"
            },
            "oneOf": [
                {
                    "title": "Object",
                    "additionalProperties": false,
                    "$ref": "#/definitions/object"
                },
                {
                    "title": "Array",
                    "additionalProperties": false,
                    "$ref": "#/definitions/array"
                },
                {
                    "title": "String",
                    "additionalProperties": false,
                    "$ref": "#/definitions/string"
                },
                {
                    "title": "Integer",
                    "additionalProperties": false,
                    "$ref": "#/definitions/integer"
                }
            ]
        }
        
        return schemaDefinition
    }
}