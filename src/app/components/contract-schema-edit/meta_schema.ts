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
            "defaultProperties": [
                'title',
                "properties"
            ],
            "properties": {
                "options": {
                    "properties": {
                        "collapsed": {
                            "type": "boolean"
                        },
                        "disable_collapse": {
                            "type": "boolean"
                        },
                        "disable_edit_json": {
                            "type": "boolean"
                        },
                        "disable_properties": {
                            "type": "boolean"
                        },
                        "remove_empty_properties": {
                            "type": "boolean"
                        },
                        "layout": {
                            "type": "string",
                            "enum": [
                                "grid"
                            ]
                        }
                    }
                },
                "type": {
                    "enum": [
                        "object"
                    ]
                },
                "default": {
                    "type": "object"
                },
                "properties": {
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                },
                "patternProperties": {
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                },
                "dependentSchemas": {
                    "type": "object",
                    "patternProperties": {
                        ".*": {
                            "$ref": "#/definitions/schema"
                        }
                    }
                },
                "additionalProperties": {
                    "type": "boolean"
                },
                "required": {
                    "type": "array",
                    "uniqueItems": true,
                    "format": "table",
                    "items": {
                        "type": "string",
                        "title": "property"
                    }
                },
                "format": {
                    "type": "string",
                    "enum": [
                        "grid"
                    ]
                }
            }
        }

        return objectDefinition;
    }

    getArryDefinition() {
        const arryDefinition = {
            "defaultProperties": [
                'title',
                "items"
            ],
            "format": "tabs",
            "properties": {
                "options": {
                    "properties": {
                        "collapsed": {
                            "type": "boolean"
                        },
                        "disable_array_add": {
                            "type": "boolean"
                        },
                        "disable_array_delete": {
                            "type": "boolean"
                        },
                        "disable_array_delete_all_rows": {
                            "type": "boolean"
                        },
                        "disable_array_delete_last_row": {
                            "type": "boolean"
                        },
                        "disable_array_reorder": {
                            "type": "boolean"
                        },
                        "disable_collapse": {
                            "type": "boolean"
                        }
                    }
                },
                "type": {
                    "enum": [
                        "array"
                    ]
                },
                "default": {
                    "type": "array",
                    "format": "tabs"
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
                "uniqueItems": {
                    "type": "boolean"
                },
                "minItems": {
                    "type": "integer",
                    "minimum": 1
                },
                "maxItems": {
                    "type": "integer",
                    "minimum": 1
                },
                "contains": {
                    "$ref": "#/definitions/schema"
                },
                "minContains": {
                    "type": "integer",
                    "minimum": 1
                },
                "maxContains": {
                    "type": "integer",
                    "minimum": 1
                },
                "additionalItems": {
                    "$ref": "#/definitions/schema"
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
                    "propertyOrder": 50,
                    "format": "table"
                },
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