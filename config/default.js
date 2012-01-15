module.exports = {
  'application': {
    'name': 'Voluble',
    'environments': ['development', 'production', 'test']
  },
  'database': {
    'host': '127.0.0.1',
    'name': 'Voluble_dev'
  },
  'session': {
    'secret': "$LKU789JO534u5934jioU&$#JFL",
    'cookie': {
      'path': '/',
      'httpOnly': true,
      'maxAge': 60*60*1000 
    }
  },
  'server': {
    'port': 8000,

  },
  'auth':{
      'facebook':{
          "appId":"282172928498649",
          "appSecret": "37b2f0d758442c9c2327baeaa196d7d2",
          "redirectPath": "/",
          "entryPath": "/auth/facebook",
          "callbackPath": "/auth/facebook/callback",
          "scope": "email,user_photos,read_stream,create_event,publish_stream"
      },
      "twitter":{
          "consumerKey":"l2AbWf22A136POS9XWxQ",
          "consumerSecret":"glDqSvEHPBt9PpIE7E6Oz5z58x01ENv2t5hcAHCrw",
          "redirectPath": "/",
          "entryPath": "/auth/twitter",
          "callbackPath": "/auth/twitter/callback"
      }
      
  }
  
};


