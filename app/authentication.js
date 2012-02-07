var everyauth = require('everyauth');
var config = require('config');
var crypto = require('crypto');
var request = require('request'); //for retrieving Facebook profile pic
var User = require('./models.js').user;

everyauth.facebook
    .appId(config.auth.facebook.appId)
    .appSecret(config.auth.facebook.appSecret)
    .handleAuthCallbackError(function(req){
        req.redirect('/');
        console.log('callback error');
    })
    .findOrCreateUser(function(session, accessToken, accessTokExtra, fbUserMetadata){
        var promise = this.Promise();
        User.findByAuthProvider('facebook', accessToken, function(err, usr){
            if (err){
                promise.fulfill([err]);
            }
            if (!usr){
                var url = 'https://graph.facebook.com/' + fbUserMetadata.username + '?fields=picture&access_token=' + accessToken;
                request(url, function(err, resp, body){
                    var profile_pic = {'picture' :'/images/user_001.jpg'};
                    if (resp.statusCode === 200){
                        profile_pic = JSON.parse(body);
                    }
                    var user = new User();
                    user.auth.facebook.accessToken = accessToken;
                    user.auth.facebook.userId = fbUserMetadata.id;
                    user.role = config.users.default_role;
                    user.email = fbUserMetadata.email;
                    user.profile_pic_url = profile_pic.picture;
                    user.name = fbUserMetadata.name;
                    user.profile_url = fbUserMetadata.link;
                    user.auth.facebook.metadata = fbUserMetadata;
                    user.save(function(err, done){
                        if (err){
                            promise.fulfill([err]);
                            return undefined;
                        }
                        session.user = done;
                        promise.fulfill(done);

                    });
                });
            } else{
                session.user = usr;
                promise.fulfill(usr);
            }
        });
        return promise;

    })
    .redirectPath(config.auth.facebook.redirectPath)
    .entryPath(config.auth.facebook.entryPath)
    .callbackPath(config.auth.facebook.callbackPath)
    .scope(config.auth.facebook.scope);

everyauth.twitter
    .consumerKey(config.auth.twitter.consumerKey)
    .consumerSecret(config.auth.twitter.consumerSecret)
    .findOrCreateUser(function(session, accessToken, accessTokenSecret, twitterUserMetadata){
        var promise = this.Promise();
        User.findByAuthProvider('twitter', accessToken, function(err, usr){
            if (err){
                promise.fulfill([err]);
            }
            if (!usr){
                var user = new User();
                user.auth.twitter.token = accessToken;
                user.auth.twitter.userId = twitterUserMetadata.id;
                user.auth.twitter.metadata = twitterUserMetadata;
                user.role = config.users.default_role;
                user.profile_pic_url = twitterUserMetadata.profile_image_url;
                user.name = twitterUserMetadata.screen_name;
                user.profile_url = "https://twitter.com/#!/" + twitterUserMetadata.screen_name;

                user.save(function(err, done){
                    if (err){
                        promise.fulfill([err]);
                        return undefined;
                    }
                    session.user = done;
                    promise.fulfill(done);

                });

            } else{
                session.user = usr;
                promise.fulfill(usr);
            }
        });
        return promise;

    })
    .redirectPath(config.auth.twitter.redirectPath)
    .entryPath(config.auth.twitter.entryPath)
    .callbackPath(config.auth.twitter.callbackPath);

function encryptPassword (psw, salt){
    var hash = crypto.createHash('md5');
    hash.update(psw + salt);
    hash.update(salt);
    return hash.digest('hex');
}

everyauth.everymodule.logoutPath('/logout');
module.exports = everyauth;
