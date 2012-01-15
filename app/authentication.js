var everyauth = require( 'everyauth' );
var CONFIG = require( 'config' );
var crypto = require( 'crypto' );
var request = require( 'request' ); //for retrieving Facebook profile pic

everyauth.facebook
    .appId( CONFIG.auth.facebook.appId )
    .appSecret( CONFIG.auth.facebook.appSecret )
    .handleAuthCallbackError( function (req, res) {
        console.log( 'callback error' );
    } )
    .findOrCreateUser( function (session, accessToken, accessTokExtra, fbUserMetadata) {
        var promise = this.Promise();
        User.findOne( {oauth_token : accessToken}, {only : ['id', 'role', 'user_name', 'profile_pic_url']}, function (err, user) {
            if (err) {
                promise.fulfill( [err] );
            }

            if (user === undefined) {
                var url = 'https://graph.facebook.com/' + fbUserMetadata.username + '?fields=picture&access_token=' + accessToken;
                request( url, function (err, resp, body) {
                    var profile_pic = {'picture' : 'defaultpic.jpg'};
                    if (resp.statusCode === 200) {
                        profile_pic = JSON.parse( body );
                    }
                    User.create( {
                        'oauth_token' : accessToken,
                        'user_name' : fbUserMetadata.name,
                        'role' : CONFIG.App.User.default_role,
                        'email' : fbUserMetadata.email,
                        'profile_pic_url' : profile_pic.picture

                    }, function (err, newUser) {
                        if (err) {
                            promise.fulfill( [err] );
                        } else {
                            var newUsr = newUser.rows[0];
                            var usr = {
                                'id' : newUsr.id,
                                'user_name' : newUsr.user_name,
                                'role' : newUsr.role,
                                'profile_pic_url' : newUsr.profile_pic_url
                            };
                            session.info = usr;
                            promise.fulfill( usr );
                        }
                    } )

                } );

            } else {
                session.info = user;
                promise.fulfill( user );
            }
        } );
        return promise;

    } )
    .redirectPath( CONFIG.auth.facebook.redirectPath )
    .entryPath( CONFIG.auth.facebook.entryPath )
    .callbackPath( CONFIG.auth.facebook.callbackPath )
    .scope( CONFIG.auth.facebook.scope );

everyauth.twitter
    .consumerKey( CONFIG.auth.twitter.consumerKey )
    .consumerSecret( CONFIG.auth.twitter.consumerSecret )
    .findOrCreateUser( function (session, accessToken, accessTokenSecret, twitterUserMetadata) {
        console.log( arguments );
        process.exit( 1 );

    } )
    .redirectPath( CONFIG.auth.twitter.redirectPath )
    .entryPath( CONFIG.auth.twitter.entryPath )
    .callbackPath( CONFIG.auth.twitter.callbackPath );

function encryptPassword (psw, salt) {
    var hash = crypto.createHash( 'md5' );
    hash.update( psw + salt );
    hash.update( salt );
    return hash.digest( 'hex' );
}

/*
 everyauth.password
 .loginWith('email')
 .getLoginPath(CONFIG.Views.login_path)
 .postLoginPath(CONFIG.Views.login_path)
 .loginView(CONFIG.Views.login)
 .authenticate(function (login, password, request) {
 var errors = [];
 if (!login) errors.push(CONFIG.Phrases.empty_email);
 if (!password) errors.push(CONFIG.Phrases.empty_password);
 if (errors.length) return errors;


 var promise = this.Promise();
 var secretPsw = encryptPassword(password, CONFIG.Session.salt);
 User.findOne({login:login, password:secretPsw}, {only:['id', 'role', 'user_name', 'profile_pic_url']}, function (err, user) {
 if (err) {
 promise.fulfill([err]);
 } else {
 if (user === undefined) {
 promise.fulfill([CONFIG.Phrases.login_and_psw_pair_not_found]);
 } else {
 promise.fulfill(user);
 }
 }
 });
 return promise;
 })
 .loginSuccessRedirect(CONFIG.Views.login_success_path)
 .getRegisterPath(CONFIG.Views.register_path)// Uri path to the registration page
 .postRegisterPath(CONFIG.Views.register_path)// The Uri path that your registration form POSTs to
 .registerView(CONFIG.Views.register, {layout:true})
 .validateRegistration(function (newUserAttributes) {
 var errors = [];
 if (!newUserAttributes.email) {
 errors.push(CONFIG.Phrases.empty_email);
 }
 if (!newUserAttributes.password) {
 errors.push(CONFIG.Phrases.empty_password);
 }
 if (errors.length > 0) {
 return errors;
 } else {
 var promise = this.Promise();
 User.findOne({'email':newUserAttributes.email}, {only:['email']}, function (err, email) {
 if (err) {
 promise.fulfill([err]);
 } else {
 if (email !== undefined) {
 promise.fulfill([CONFIG.Phrases.email_already_taken]);
 } else {
 promise.fulfill(newUserAttributes);
 }
 }
 });
 return promise;
 }

 })
 .registerUser(function (newUserAttributes) {
 var secretPsw = encryptPassword(newUserAttributes.password, CONFIG.Session.salt);
 var promise = this.Promise();
 User.create({'login':newUserAttributes.email, 'email':newUserAttributes.email, 'password':secretPsw}, {only:['id', 'role', 'user_name']}, function (err, User) {
 if (err) {
 promise.fulfill([err]);
 } else {
 var newUser = User.rows[0];
 var usr = {
 'id':newUser.id,
 'login':newUser.email
 };
 promise.fulfill(usr);
 }
 });
 return promise;
 })
 .registerSuccessRedirect(CONFIG.Views.login_success_path); // Where to redirect to after a successful registration
 */
module.exports = everyauth;
