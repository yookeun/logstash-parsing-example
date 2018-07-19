

###
DELETE simple-xml 

###
PUT simple-xml 
{
    "mappings": {
        "simplexml": {
            "properties": {
                "simpleInfo": {
                    "type": "nested",
                    "properties": {
                        "userName": {
                            "type": "keyword"
                        },
                        "age": {
                            "type": "integer"
                        },
                        "gender": {
                            "type": "keyword"
                        },
                        "regDate": {
                            "type": "date",
                            "format":"YYYY-MM-DD HH:mm:ss"
                        }
                    }
                }
            }

        }
    }
}

###
GET simple-xml/_search

###
GET simple-xml/_mapping