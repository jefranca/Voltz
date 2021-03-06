export default {
    "openapi": "3.0.0",
    "info":{
        "title": "Voltz Tools",
        "description": "API to save tools to help at work",
        "version":"1.0.1"
    },
    "servers":[{
        "url": "http://localhost:3000",
        "description":"Development API"
    },
    {
        "url":"",
        "description":"Heroku"
    }],
    "paths":{
        "/tools":
            {
                "post":{
                    "summary": "Send new Tools",
                    "requestBody":{
                        "content":{
                            "application/json":{
                                "schema":{
                                    "$ref": "#/components/schemas/NewTool"
                                },
                                "examples":{
                                    "tools":{
                                        "value":{
                                            "title": "hotel",
                                            "link": "https://github.com/typicode/hotel",
                                            "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box",
                                            "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses":{
                        "400":{
                            "description":"Validation Error"
                        },
                        "409":{
                            "description":"Tool already Exists"
                        },
                        "201":{
                            "description":"New Tool added"
                        }
                    }
                },
                "get":{
                    "summary": "List all Tools",
                    "responses":{
                        "200":{
                            "description":"List All Tools",
                            "content":{
                                "application/json":{
                                    "schema":{
                                        "type":"object",
                                        "$ref":"#/components/schemas/Tool"
                                    },
                                    "examples":{
                                        "tools":{
                                            "value":[
                                                {
                                                  "id": 1,
                                                  "title": "Notion",
                                                  "link": "https://notion.so",
                                                  "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                                                  "tags": [
                                                    "organization",
                                                    "planning",
                                                    "collaboration",
                                                    "writing",
                                                    "calendar"
                                                  ]
                                                },
                                                {
                                                  "id": 2,
                                                  "title": "json.server",
                                                  "link": "https://github.com/typicode/json-server",
                                                  "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding cha tags:",
                                                  "tags": [
                                                    "api",
                                                    "json",
                                                    "schema",
                                                    "node",
                                                    "github",
                                                    "rest"
                                                  ]
                                                },
                                                {
                                                  "id": 3,
                                                  "title": "fastify",
                                                  "link": "https://www.fastify.io/",
                                                  "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                                                  "tags": [
                                                    "web",
                                                    "framework",
                                                    "node",
                                                    "http2",
                                                    "https",
                                                    "localhost"
                                                  ]
                                                }
                                              ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "tools/{id}":{
                "delete":{  
                    "summary":"Delete one tool",
                    "parameters":[{
                        "name":"id",
                        "in":"path",
                        "description":"must be a number",
                        "required":"true"
                    }],
                    "responses":{
                        "200":{
                            "description":"tool deleted"
                        },
                        "404":{
                            "description":"No id parameter has been send"
                        },
                        "400":{
                            "description":"Tool does not exist"
                        }
                    }
                }
            }

            
            
    },
    "components":{
        "schemas":{
            "NewTool":{
                "type":"object",
                "properties":{
                    "title":{
                        "type":"string"
                    },
                    "link":{
                        "type":"string"
                    },
                    "description":{
                        "type":"string"
                    },
                    "tags":{
                        "type":"array",
                        "items":{
                            "type":"string"
                        }
                    }
                }
            },
            "Tool":{
                "type":"array",
                "items":{
                    "type":"object",
                    "properties":{
                        "id":{
                            "type":"number"
                        },
                        "title":{
                            "type":"string"
                        },
                        "link":{
                            "type":"string"
                        },
                        "description":{
                            "type":"string"
                        },
                        "tags":{
                            "type":"array",
                            "items":{
                                "type":"string"
                            }
                        }
                    }
                }
            }
        }
    }
    
}