module.exports = {
  'database': {
    'host': 'localhost',
    'name': 'voluble_stage'
  },
  'session': {
    'secret': "$LKU789JO5(&$*(#(JOJOML:K%P$II#$W#kllfj-(**))))34u5934jioU&$#JFL"
  },
  'users':{
    'default_role':'user'
  },
  'server': {
    'port': 8000
  },
  'auth':{
      'facebook':{
          "appId":"364850843526918",
          "appSecret": "33c644ac40c987b2d3367f53da1ce472",
          "redirectPath": "/",
          "entryPath": "/auth/facebook",
          "callbackPath": "/auth/facebook/callback",
          "scope": "email,user_photos,read_stream,create_event,publish_stream"
      },
      "twitter":{
          "consumerKey":"JcSBvdSTXjqFSPw7UVG9Q",
          "consumerSecret":"omuSO8zQppPgXp1NZGL8Bw3FrcfekHkXM2FUWLhKMw",
          "accessTokenKey":"472151458-wLb7S1XskPX8TTx7t6g7skOImnvNHuH6tMQpXKSL",
          "accessTokenSecret":"kbOUeTs17t1HTj2sizxTiFQTA3uZtWi9gjvvkOWHu7w",
          "redirectPath": "/",
          "entryPath": "/auth/twitter",
          "callbackPath": "/auth/twitter/callback"
      }
      
  }
  
};
