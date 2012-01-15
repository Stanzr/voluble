/*1325802562,169776069*/

if (window.CavalryLogger) {
    CavalryLogger.start_js( ["fbhRl"] );
}

window.__DEV__ = window.__DEV__ || 0;
if (!window.skipDomainLower && document.domain.toLowerCase().match( /(^|\.)facebook\..*/ )) {
    document.domain = window.location.hostname.replace( /^.*(facebook\..*)$/i, '$1' );
}
function bagofholding () {
}
function bagof (a) {
    return function () {
        return a;
    };
}
if (!Date.now) {
    Date.now = function now () {
        return new Date().getTime();
    };
}
if (!Array.isArray) {
    Array.isArray = function (a) {
        return Object.prototype.toString.call( a ) == '[object Array]';
    };
}
Env = window.Env || {};
Env.start = Env.start || Date.now();
document.documentElement.className = document.documentElement.className.replace( 'no_js', '' );
window.require || (function () {
    var z = {}, x = {}, o = 0, y = this, j = 1, m = 2, k = 'special', d = 'exports', c = 'dependencies', h = 'module', n = 'waiting', e = 'factory', l = undefined, b = 'define', f = 'global', i = 'require', g = 'requireLazy', a = 'context';

    function za (zj) {
        var zl = z[zj], ze, zi;
        if (zl[n] && zl[k] & m) {
            r();
        }
        if (!zl[d]) {
            var zg = zl[d] = {}, zh = zl[e];
            if (Object.prototype.toString.call( zh ) === '[object Function]') {
                var zd = [], zf = zl[c], zk = zf.length;
                if (zl[k] & m) {
                    zk = Math.min( zk, zh.length );
                }
                for (zi = 0; zi < zk; zi++) {
                    ze = zf[zi];
                    zd.push( ze === h ? zl : (ze === d ? zg : za( ze )) );
                }
                var zm = zh.apply( zl[a] || y, zd );
                if (zm) {
                    zl[d] = zm;
                }
            } else {
                zl[d] = zh;
            }
        }
        return zl[d];
    }

    function v (zh, zf, zg, ze, zd) {
        if (zf === l) {
            zf = [];
            zg = zh;
            zh = t();
        } else if (zg === l) {
            zg = zf;
            zf = zh;
            zh = t();
        }
        if (z[zh]) {
            return;
        }
        var zi = {id : zh};
        zi[e] = zg;
        zi[c] = zf;
        zi[a] = zd;
        zi[k] = ze;
        z[zh] = zi;
        p( zh );
    }

    function zb (ze, zf, zd) {
        v( ze, zf, l, j, zd );
    }

    function r () {
        var ze = {}, zd;
        for (zd in x) {
            if (z[zd] && !ze[zd] && z[zd][k] & m) {
                s( {}, zd, ze );
            }
        }
    }

    function s (zg, zd, zh) {
        zh[zd] = 1;
        var zf = x[zd], ze;
        if (!zf) {
            return;
        }
        zg[zd] = 1;
        for (ze in zf) {
            if (!z[ze][k] & m) {
                continue;
            }
            if (zg[ze]) {
                delete zf[ze];
                z[ze][n]--;
                if (!z[ze][n]) {
                    u( ze );
                }
            } else {
                s( zg, ze, zh );
            }
        }
        zg[zd] = 0;
    }

    function t () {
        return '__mod__' + o++;
    }

    function p (zf) {
        var zg = z[zf];
        var zh = 0;
        for (var ze = 0; ze < zg[c].length; ze++) {
            var zd = zg[c][ze];
            if (!z[zd] || z[zd][n]) {
                x[zd] || (x[zd] = {});
                x[zd][zf] = 1;
                zh++;
            }
        }
        zg[n] = zh;
        if (!zh) {
            u( zf );
        }
    }

    function u (ze) {
        var zf = z[ze];
        if (zf[k] & j) {
            za( ze );
        }
        var zg = x[ze];
        if (zg) {
            delete x[ze];
            for (var zd in zg) {
                if (!--z[zd][n]) {
                    u( zd );
                }
            }
        }
    }

    function q (ze, zd) {
        z[ze] = {id : ze};
        z[ze][d] = zd;
    }

    q( h, 0 );
    q( d, 0 );
    q( b, v );
    q( f, y );
    q( i, za );
    q( g, zb );
    v.amd = {};
    y[b] = v;
    y[i] = za;
    y[g] = zb;
    za.ensure = zb;
    var zc = false;
    var w = function (zg, ze, zf, zd) {
        v( zg, ze, zf, zd || m );
        if (z[zg][n] && !zc) {
            zc = setTimeout( function () {
                r();
                zc = false;
            }, 9 );
        }
    };
    y.__d = function (zg, ze, zf, zd) {
        ze = [f, i, g, h, d].concat( ze );
        w( zg, ze, zf, zd );
    };
    y.__e = function (zg, ze, zf, zd) {
        ze = [f, i, h, d].concat( ze );
        w( zg, ze, zf, zd );
    };
})();
__e( "hasArrayNature", [], function (b, e, d, a) {
    function c (f) {
        return (!!f && (typeof f == 'object' || typeof f == 'function') && ('length' in f) && !('setInterval' in f) && (Object.prototype.toString.call( f ) === "[object Array]" || ('callee' in f) || ('item' in f)));
    }

    d.exports = c;
} );
__e( "ArrayUtils", ["hasArrayNature", "ArrayUtils"], function (c, f, e, b) {
    var d = f( "hasArrayNature" );
    var a = {createFrom : function (h) {
        if (!d( h )) {
            return [h];
        }
        if (h.item) {
            var g = h.length, i = new Array( g );
            while (g--) {
                i[g] = h[g];
            }
            return i;
        }
        return Array.prototype.slice.call( h );
    }};
    e.exports = a;
} );
__e( "copyProperties", [], function (c, e, d, b) {
    function a (g, h) {
        g = g || {};
        h = h || {};
        for (var f in h) {
            g[f] = h[f];
        }
        if (h.hasOwnProperty && h.hasOwnProperty( 'toString' ) && (typeof h.toString != 'undefined') && (g.toString !== h.toString)) {
            g.toString = h.toString;
        }
        return g;
    }

    d.exports = a;
} );
__e( "util", [], function (b, d, c, a) {
    if (typeof console == 'undefined') {
        b.console = {log : bagofholding, info : bagofholding, warn : bagofholding, debug : bagofholding, dir : bagofholding, error : bagofholding};
    }
    b.Util = c.exports = b.console;
}, 3 );
__e( "arbiter", ["ArrayUtils", "copyProperties", "hasArrayNature", "util"], function (g, j, i, f) {
    var b = j( 'ArrayUtils' );
    var e = j( 'copyProperties' );
    var h = j( 'hasArrayNature' );
    var c = j( 'util' );
    var d = null;

    function k (l) {
        d = l;
    }

    if (!window.async_callback) {
        window.async_callback = function (l, m) {
            return l;
        };
    }
    function a () {
        e( this, {_listeners : [], _events : {}, _callbacks : {}, _last_id : 1, _listen : {}, _index : {}} );
        e( this, a );
        delete this.setErrorHandler;
    }

    e( a, {SUBSCRIBE_NEW : 'new', SUBSCRIBE_ALL : 'all', BEHAVIOR_EVENT : 'event', BEHAVIOR_PERSISTENT : 'persistent', BEHAVIOR_STATE : 'state', LIVEMESSAGE : 'livemessage', BOOTLOAD : 'bootload', FUNCTION_EXTENSION : 'function_ext', setErrorHandler : k, subscribe : function (v, m, t) {
        if (!v || v.length == 0) {
            return null;
        }
        v = b.createFrom( v );
        var l = a._getInstance( this );
        l._listeners.push( {callback : m, types : v} );
        var s = l._listeners.length - 1;
        for (var o = 0; o < v.length; o++) {
            if (l._index[v[o]]) {
                l._index[v[o]].push( s );
            } else {
                l._index[v[o]] = [s];
            }
        }
        t = t || a.SUBSCRIBE_ALL;
        if (t == a.SUBSCRIBE_ALL) {
            var n, u, r;
            for (var p = 0; p < v.length; p++) {
                u = v[p];
                if (u in l._events) {
                    for (var q = 0; q < l._events[u].length; q++) {
                        n = l._events[u][q];
                        r = l._fireCallback( m, u, n );
                        if (r === false) {
                            l._events[u].splice( q, 1 );
                            q--;
                        }
                    }
                }
            }
        }
        return {subscriberID : s};
    }, unsubscribe : function (p) {
        var l = a._getInstance( this );
        var n = l._listeners[p.subscriberID];
        if (!n) {
            return;
        }
        for (var o = 0; o < n.types.length; o++) {
            var q = n.types[o];
            if (l._index[q]) {
                for (var m = 0; m < l._index[q].length; m++) {
                    if (l._index[q][m] == p.subscriberID) {
                        l._index[q].splice( m, 1 );
                        if (l._index[q].length == 0) {
                            delete l._index[q];
                        }
                        break;
                    }
                }
            }
        }
        delete l._listeners[p.subscriberID];
    }, inform : function (w, n, m) {
        var x = h( w );
        w = b.createFrom( w );
        var l = a._getInstance( this );
        var t = {};
        m = m || a.BEHAVIOR_EVENT;
        for (var p = 0; p < w.length; p++) {
            var u = w[p], o = null;
            if (m == a.BEHAVIOR_PERSISTENT) {
                o = l._events.length;
                if (!(u in l._events)) {
                    l._events[u] = [];
                }
                l._events[u].push( n );
                l._events[u]._stateful = false;
            } else if (m == a.BEHAVIOR_STATE) {
                o = 0;
                l._events[u] = [n];
                l._events[u]._stateful = true;
            } else if (u in l._events) {
                l._events[u]._stateful = false;
            }
            window.ArbiterMonitor && ArbiterMonitor.record( 'event', u, n, l );
            var s;
            if (l._index[u]) {
                var v = b.createFrom( l._index[u] );
                for (var q = 0; q < v.length; q++) {
                    var r = l._listeners[v[q]];
                    if (r) {
                        s = l._fireCallback( r.callback, u, n );
                        if (s === false) {
                            if (o !== null) {
                                l._events[u].splice( o, 1 );
                            }
                            break;
                        }
                    }
                }
            }
            l._updateCallbacks( u, n );
            window.ArbiterMonitor && ArbiterMonitor.record( 'done', u, n, l );
            t[u] = s;
        }
        return x ? t : t[w[0]];
    }, query : function (m) {
        var l = a._getInstance( this );
        if (!(m in l._events)) {
            return null;
        }
        if (l._events[m].length) {
            return l._events[m][0];
        }
        return null;
    }, _instance : null, _getInstance : function (l) {
        if (l instanceof a) {
            return l;
        }
        if (!a._instance) {
            a._instance = new a();
        }
        return a._instance;
    }, registerCallback : function (m, o) {
        var s, n = 0, l = a._getInstance( this ), r = false;
        if (typeof m == 'function') {
            s = l._last_id;
            l._last_id++;
            r = true;
        } else {
            if (!l._callbacks[m]) {
                return null;
            }
            s = m;
        }
        if (h( o )) {
            var t = {};
            for (var q = 0; q < o.length; q++) {
                t[o[q]] = 1;
            }
            o = t;
        }
        for (var u in o) {
            try {
                if (l.query( u )) {
                    continue;
                }
            }
            catch (p) {
            }
            n += o[u];
            if (l._listen[u] === undefined) {
                l._listen[u] = {};
            }
            l._listen[u][s] = (l._listen[u][s] || 0) + o[u];
        }
        if (n == 0 && r) {
            l._fireCallback( m );
            return null;
        }
        if (!r) {
            l._callbacks[s].depnum += n;
        } else {
            l._callbacks[s] = {callback : async_callback( m, 'arbiter' ), depnum : n};
        }
        return s;
    }, _updateCallbacks : function (o, n) {
        if (n === null || !this._listen[o]) {
            return;
        }
        for (var m in this._listen[o]) {
            this._listen[o][m]--;
            if (this._listen[o][m] <= 0) {
                delete this._listen[o][m];
            }
            this._callbacks[m].depnum--;
            if (this._callbacks[m].depnum <= 0) {
                var l = this._callbacks[m].callback;
                delete this._callbacks[m];
                this._fireCallback( l );
            }
        }
    }, _fireCallback : function (m) {
        var l = Array.prototype.slice.call( arguments, 1 );
        if (/nocatch/.test( location.search )) {
            return m.apply( null, l );
        }
        try {
            return m.apply( null, l );
        }
        catch (n) {
            if (d) {
                d( n );
            }
        }
    }} );
    g.Arbiter = i.exports = a;
}, 3 );
__e( "isEmpty", [], function (b, e, d, a) {
    function c (g) {
        if (g instanceof Array) {
            return g.length === 0;
        } else if (g instanceof Object) {
            for (var f in g) {
                return false;
            }
            return true;
        } else {
            return !g;
        }
    }

    d.exports = c;
} );
__e( "bootloader", ["ArrayUtils", "arbiter", "util", "isEmpty"], function (x, za, z, w) {
    var b = za( 'ArrayUtils' );
    var a = za( 'arbiter' );
    var d = za( 'util' );
    var y = za( 'isEmpty' );
    var f = {};
    var k = null;
    var p = {};
    var n = {};
    var h = {};
    var i = {};
    var t = [];
    var l = null;
    var q = {};
    var j = {};
    var g = false;
    var v = [];
    var e = 5000;

    function o (zk, zh, zf, zc) {
        if (zk == 'js') {
            var zg = document.createElement( 'script' );
            zg.src = zh;
            zg.type = 'text/javascript';
            zg.async = true;
            var zb = function () {
                c.done( [zf] );
            };
            zg.onload = zg.onerror = zb;
            zg.onreadystatechange = function () {
                if (this.readyState in {loaded : 1, complete : 1}) {
                    zb();
                }
            };
            zc.appendChild( zg );
        } else if (zk == 'css') {
            if (document.createStyleSheet) {
                var zi = t, zj = -1;
                for (var zd = 0; zd < zi.length; zd++) {
                    if (zi[zd].imports.length < 25) {
                        zj = zd;
                        break;
                    }
                }
                if (zj == -1) {
                    zi.push( document.createStyleSheet() );
                    zj = zi.length - 1;
                }
                zi[zj].addImport( zh );
                i[zf] = {tagIdx : zj, href : zh};
            } else {
                var ze = document.createElement( 'link' );
                ze.rel = "stylesheet";
                ze.type = "text/css";
                ze.media = "all";
                ze.href = zh;
                i[zf] = {link : ze};
                zc.appendChild( ze );
            }
            s( zf );
        }
    }

    function r () {
        var ze;
        var zb = [];
        var zf = Date.now();
        if (zf >= k) {
            for (ze in f) {
                zb.push( ze );
            }
            if (window.logJSError) {
                if (Math.random() < .01) {
                    logJSError( 'bootloader', {error : 'CSS timeout', extra : {name : zb.join( ',' )}} );
                }
            }
        } else {
            for (ze in f) {
                var zg = f[ze];
                var zh = window.getComputedStyle ? window.getComputedStyle( zg, null ) : zg.currentStyle;
                if (zh && parseInt( zh.height, 10 ) > 1) {
                    zb.push( ze );
                }
            }
        }
        if (!y( zb )) {
            for (var zd = 0; zd < zb.length; zd++) {
                var zc = f[zb[zd]];
                zc.parentNode.removeChild( zc );
                delete f[zb[zd]];
            }
            k = zf + e;
            c.done( zb, true );
        }
        return y( f );
    }

    function s (zd) {
        var zb = 'bootloader_' + zd.replace( /[^a-z0-9]/ig, '_' );
        var ze = document.createElement( 'meta' );
        ze.id = zb;
        c.getHardpoint().appendChild( ze );
        k = Date.now() + e;
        var zf = y( f );
        f[zd] = ze;
        if (zf) {
            var zc = setInterval( function _poll () {
                if (r()) {
                    zc && clearInterval( zc );
                }
            }, 20, false );
        }
    }

    function u (ze) {
        if (ze in i) {
            var zc = i[ze], zd = zc.link;
            if (zd) {
                zd.parentNode.removeChild( zd );
            } else {
                var zf = t[zc.tagIdx];
                for (var zb = 0; zb < zf.imports.length; zb++) {
                    if (zf.imports[zb].href == zc.href) {
                        zf.removeImport( zb );
                        break;
                    }
                }
            }
            delete i[ze];
            delete p[ze];
            a.inform( a.BOOTLOAD + '/' + ze, null, a.BEHAVIOR_STATE );
        }
    }

    function m (zd, zb) {
        if (!g) {
            v.push( [zd, zb] );
            return;
        }
        zd = b.createFrom( zd );
        var zg = [];
        for (var ze = 0; ze < zd.length; ++ze) {
            if (!zd[ze]) {
                continue;
            }
            var zc = h[zd[ze]];
            if (!!zc) {
                for (var zf = 0; zf < zc.length; ++zf) {
                    zg.push( zc[zf] );
                }
            }
        }
        c.loadResources( zg, zb );
    }

    var c = {configurePage : function (zb) {
        var zh = {};
        var zg = c.resolveResources( zb );
        var zc;
        for (zc = 0; zc < zg.length; zc++) {
            zh[zg[zc].src] = zg[zc];
            c.requested( zg[zc].name );
            s( zg[zc].name );
        }
        var ze = document.getElementsByTagName( 'link' );
        for (zc = 0; zc < ze.length; ++zc) {
            if (ze[zc].rel != 'stylesheet') {
                continue;
            }
            for (var zd in zh) {
                if (ze[zc].href.indexOf( zd ) !== -1) {
                    var zf = zh[zd].name;
                    i[zf] = {link : ze[zc]};
                    if (zh[zd].permanent) {
                        n[zf] = true;
                    }
                    delete zh[zd];
                    break;
                }
            }
        }
    }, loadModules : function (zc, zb) {
        zc = b.createFrom( zc );
        m( zc, function inject_module_callback () {
            var ze = [];
            for (var zd = 0; zd < zc.length; zd++) {
                ze.push( za( zc[zd] ) );
            }
            zb.apply( this, ze );
        } );
    }, loadComponents : function (zc, zb) {
        m( zc, zb );
    }, loadResources : function (zk, zc, zj, zn) {
        var zf;
        zk = c.resolveResources( b.createFrom( zk ) );
        if (zj) {
            var zh = {};
            for (zf = 0; zf < zk.length; ++zf) {
                zh[zk[zf].name] = true;
            }
            for (var zg in p) {
                if (!(zg in n) && !(zg in zh) && !(zg in j)) {
                    u( zg );
                }
            }
            j = {};
        }
        var zo = [];
        var zi = [];
        for (zf = 0; zf < zk.length; ++zf) {
            var zl = zk[zf];
            if (zl.permanent) {
                n[zl.name] = true;
            }
            var zm = a.BOOTLOAD + '/' + zl.name;
            if (a.query( zm ) !== null) {
                continue;
            }
            if (!zl.nonblocking) {
                zi.push( zm );
            }
            if (!p[zl.name]) {
                c.requested( zl.name );
                zo.push( zl );
                window.CavalryLogger && CavalryLogger.getInstance().measureResources( zl, zn );
            }
        }
        if (zc) {
            zc = a.registerCallback( zc, zi );
        }
        var ze = document.documentMode || +(/MSIE.(\d+)/.exec( navigator.userAgent ) || [])[1];
        var zd = c.getHardpoint();
        var zb = ze ? zd : document.createDocumentFragment();
        for (zf = 0; zf < zo.length; ++zf) {
            o( zo[zf].type, zo[zf].src, zo[zf].name, zb );
        }
        if (zd !== zb) {
            zd.appendChild( zb );
        }
        return zc;
    }, requestResource : function (ze, zd, zc) {
        var zb = c.getHardpoint();
        o( ze, zd, zc, zb );
    }, done : function (zf, zc) {
        c.requested( zf );
        if (!zc) {
            var ze = {sender : this};
            a.inform( a.BOOTLOAD, ze, a.BEHAVIOR_EVENT );
        }
        for (var zb = 0; zb < zf.length; ++zb) {
            var zd = zf[zb];
            a.inform( a.BOOTLOAD + '/' + zd, true, a.BEHAVIOR_STATE );
        }
    }, requested : function (zc) {
        zc = b.createFrom( zc );
        for (var zb = 0; zb < zc.length; ++zb) {
            p[zc[zb]] = true;
        }
    }, enableBootload : function (zc) {
        for (var zd in zc) {
            if (!h[zd]) {
                h[zd] = zc[zd];
            }
        }
        if (!g) {
            g = true;
            for (var zb = 0; zb < v.length; zb++) {
                c.loadComponents.apply( null, v[zb] );
            }
            v = [];
        }
    }, getHardpoint : function () {
        if (!l) {
            var zb = document.getElementsByTagName( 'head' );
            l = zb.length && zb[0] || document.body;
        }
        return l;
    }, setResourceMap : function (zc) {
        if (!zc) {
            return;
        }
        for (var zb in zc) {
            if (!zc[zb].name) {
                zc[zb].name = zb;
            }
            q[zb] = zc[zb];
        }
    }, resolveResources : function (zd) {
        if (!zd) {
            return [];
        }
        var zc = [];
        for (var zb = 0; zb < zd.length; ++zb) {
            if (typeof zd[zb] == 'string') {
                if (zd[zb] in q) {
                    zc.push( q[zd[zb]] );
                }
            } else {
                zc.push( zd[zb] );
            }
        }
        return zc;
    }, loadEarlyResources : function (zd) {
        var zb;
        c.setResourceMap( zd );
        var zc = [];
        for (zb in zd) {
            zc.push( q[zb] );
        }
        c.loadResources( zc );
        for (zb in zd) {
            var ze = q[zb];
            if (!ze.permanent) {
                j[ze.name] = ze;
            }
        }
    }, isDisplayJS : function (zb) {
        if (typeof zb == 'string') {
            zb = q[zb];
        }
        return zb.displayjs;
    }};
    x.Bootloader = z.exports = c;
}, 3 );
__e( "Env", ["copyProperties", "Env"], function (d, f, e, c) {
    var b = f( "copyProperties" );
    var a = {start : Date.now()};
    if (d.Env) {
        b( a, d.Env );
        d.Env = undefined;
    }
    e.exports = a;
} );
__e( "onload", ["arbiter", "copyProperties"], function (l, u, m, k) {
    var a = u( 'arbiter' );
    var c = a.BEHAVIOR_STATE;
    var h = function (v) {
        window.CavalryLogger && CavalryLogger.getInstance().setTimeStamp( v );
    };
    var b = {ONLOAD : 'onload/onload', ONLOAD_CALLBACK : 'onload/onload_callback', ONLOAD_DOMCONTENT : 'onload/dom_content_ready', ONLOAD_DOMCONTENT_CALLBACK : 'onload/domcontent_callback', ONBEFOREUNLOAD : 'onload/beforeunload', ONUNLOAD : 'onload/unload'};

    function g () {
        return !window.loading_page_chrome;
    }

    function q (v) {
        if (window.loaded && typeof _runHook != 'undefined') {
            _runHook( v, 'onlateloadhooks' );
        } else {
            d( 'onloadhooks', v );
        }
    }

    function n (v) {
        if (window.afterloaded && typeof _runHook != 'undefined') {
            setTimeout( function () {
                _runHook( v, 'onlateafterloadhooks' );
            }, 0 );
        } else {
            d( 'onafterloadhooks', v );
        }
    }

    function o (v, w) {
        if (w === undefined) {
            w = g();
        }
        w ? d( 'onbeforeleavehooks', v ) : d( 'onbeforeunloadhooks', v );
    }

    function s (v) {
        if (!window.onunload) {
            window.onunload = function () {
                a.inform( b.ONUNLOAD, true, c );
            };
        }
        d( 'onunloadhooks', v );
    }

    function p (v) {
        d( 'onleavehooks', v );
    }

    function d (w, v) {
        window[w] = (window[w] || []).concat( v );
    }

    function t (v) {
        window[v] = [];
    }

    function f () {
        a.inform( b.ONLOAD_DOMCONTENT, true, c );
    }

    function e () {
        var v = document, z = window;
        if (v.addEventListener) {
            var za = /AppleWebKit.(\d+)/.exec( navigator.userAgent );
            if (za && za[1] < 525) {
                var y = setInterval( function () {
                    if (/loaded|complete/.test( v.readyState )) {
                        f();
                        clearInterval( y );
                    }
                }, 10 );
            } else {
                v.addEventListener( "DOMContentLoaded", f, true );
            }
        } else {
            var x = 'javascript:void(0)';
            if (z.location.protocol == 'https:') {
                x = '//:';
            }
            v.write( '<script onreadystatechange="if (this.readyState==\'complete\') {' + 'this.parentNode.removeChild(this);_domcontentready();}" ' + 'defer="defer" src="' + x + '"><\/script\>' );
        }
        var w = z.onload;
        z.onload = function () {
            h( 't_layout' );
            w && w();
            a.inform( b.ONLOAD, true, c );
        };
        z.onbeforeunload = function () {
            var zb = {};
            a.inform( b.ONBEFOREUNLOAD, zb, c );
            if (!zb.warn) {
                a.inform( 'onload/exit', true );
            }
            return zb.warn;
        };
    }

    var r = a.registerCallback( function () {
        h( 't_onload' );
        a.inform( b.ONLOAD_CALLBACK, true, c );
    }, [b.ONLOAD] );
    var j = a.registerCallback( function () {
        h( 't_domcontent' );
        a.inform( b.ONLOAD_DOMCONTENT_CALLBACK, true, c );
    }, [b.ONLOAD_DOMCONTENT] );
    if (!window._eventHandlersBootstrapped) {
        _eventHandlersBootstrapped = true;
        e();
    }
    m.exports = {Event : b, runOnload : q, runAfterload : n, runOnleave : p};
    var i = u( 'copyProperties' );
    i( l, {OnloadEvent : b, onloadRegister : q, onafterloadRegister : n, onleaveRegister : p, onbeforeunloadRegister : o, onunloadRegister : s, domcontent_callback : j, onload_callback : r, _domcontentready : f, removeHook : t, _addHook : d} );
}, 3 );
__e( "EagleEye", ["arbiter", "bootloader", "Env", "onload", "util"], function (o, v, s, n) {
    var a = v( 'arbiter' );
    var c = v( 'bootloader' );
    var e = v( 'Env' );
    var f = v( 'onload' );
    var h = v( 'util' );
    var y = '_e_';
    var za = (window.name || '').toString();
    if (za.length == 7 && za.substr( 0, 3 ) == y) {
        za = za.substr( 3 );
    } else {
        za = window._EagleEyeSeed;
        if (window == window.top) {
            window.name = y + window._EagleEyeSeed;
        }
    }
    var w = (window.location.protocol == 'https:' && document.cookie.match( /\bcsm=1/ )) ? '; secure' : '';
    var t = y + za + '_';
    var m = new Date( Date.now() + 604800000 ).toGMTString();
    var k = window.location.hostname.replace( /^.*(facebook\..*)$/i, '$1' );
    var l = '; expires=' + m + ';path=/; domain=' + k + w;
    var j = 0;
    var u;
    var z = window._EagleEyeSessionStorage && window.sessionStorage;
    var q = document.cookie.length;
    var r = false;
    var x = Date.now();

    function p (ze) {
        var zb = 2166136261;
        for (var zc = 0, zd = ze.length; zc < zd; ++zc) {
            zb = (zb ^ ze.charCodeAt( zc )) * 16777619;
        }
        zb += zb << 13;
        zb ^= zb >> 7;
        zb += zb << 3;
        zb ^= zb >> 17;
        zb += zb << 5;
        return (zb | 0) + 2147483648;
    }

    function i (zb) {
        return t + (j++) + '=' + encodeURIComponent( zb ) + l;
    }

    function b () {
        var zb = [];
        var ze = false;
        var zd = 0;
        var zc = 0;
        this.isEmpty = function () {
            return !zb.length;
        };
        this.enqueue = function (zg, zf) {
            if (zf) {
                zb.unshift( zg );
            } else {
                zb.push( zg );
            }
        };
        this.dequeue = function () {
            zb.shift();
        };
        this.peek = function () {
            return zb[0];
        };
        this.clear = function (zh) {
            q = Math.min( q, document.cookie.length );
            if (!r && (new Date() - x > 60000)) {
                r = true;
            }
            var zf = !zh && (document.cookie.search( y ) >= 0);
            var zr = !!e.cookie_header_limit;
            var zm = e.cookie_count_limit || 19;
            var zn = e.cookie_header_limit || 3950;
            var zk = zm - 5;
            var zl = zn - 1000;
            while (!this.isEmpty()) {
                var zg = i( this.peek() );
                if (zr && (zg.length > zn || (r && zg.length + q > zn))) {
                    this.dequeue();
                    continue;
                }
                if ((zf || zr) && ((document.cookie.length + zg.length > zn) || (document.cookie.split( ';' ).length > zm))) {
                    break;
                }
                document.cookie = zg;
                zf = true;
                this.dequeue();
            }
            var zo = Date.now();
            if (zh || !ze && zf && ((zc > 0) && (Math.min( 10 * Math.pow( 2, zc - 1 ), 60000 ) + zd < zo)) && a.query( f.Event.ONLOAD ) && (!this.isEmpty() || (document.cookie.length > zl) || (document.cookie.split( ';' ).length > zk))) {
                var zq = new Image();
                var zp = this;
                var zi = window._EagleEyeDomain || e.tracking_domain || '';
                ze = true;
                zq.onload = function _EagleEye_logged () {
                    ze = false;
                    zc = 0;
                    zp.clear();
                };
                zq.onerror = zq.onabort = function _EagleEye_error () {
                    ze = false;
                    zd = Date.now();
                    zc++;
                };
                var zj = e.fb_isb ? '&fb_isb=' + e.fb_isb : '';
                var zs = '&__user=' + e.user;
                zq.src = zi + '/ajax/nectar.php?asyncSignal=' + (Math.floor( Math.random() * 10000 ) + 1) + zj + zs + '&' + (!zh ? '' : 's=') + zo;
            }
        };
    }

    u = new b();
    if (z) {
        var g = function () {
            var zd = 0;
            var zf = zd;

            function zc () {
                var zh = sessionStorage.getItem( '_e_ids' );
                if (zh) {
                    var zg = (zh + '').split( ';' );
                    if (zg.length == 2) {
                        zd = parseInt( zg[0], 10 );
                        zf = parseInt( zg[1], 10 );
                    }
                }
            }

            function ze () {
                var zg = zd + ';' + zf;
                sessionStorage.setItem( '_e_ids', zg );
            }

            function zb (zg) {
                return '_e_' + ((zg !== undefined) ? zg : zd++);
            }

            this.isEmpty = function () {
                return zf === zd;
            };
            this.enqueue = function (zi, zg) {
                var zh = zg ? zb( --zf ) : zb();
                sessionStorage.setItem( zh, zi );
                ze();
            };
            this.dequeue = function () {
                this.isEmpty();
                sessionStorage.removeItem( zb( zf ) );
                zf++;
                ze();
            };
            this.peek = function () {
                var zg = sessionStorage.getItem( zb( zf ) );
                return zg ? (zg + '') : zg;
            };
            this.clear = u.clear;
            zc();
        };
        u = new g();
    }
    var d = {log : function (ze, zb, zc) {
        if (e.no_cookies) {
            return;
        }
        var zf = [za, Date.now(), ze].concat( zb );
        zf.push( zf.length );
        function zd () {
            var zh = JSON.stringify( zf );
            try {
                u.enqueue( zh, !!zc );
                u.clear( !!zc );
            }
            catch (zg) {
                if (z && (zg.code === 1000)) {
                    u = new b();
                    z = false;
                    zd();
                }
            }
        }

        if (window.JSON) {
            zd();
        } else {
            c.loadComponents( 'json', zd );
        }
    }, createLogger : function (zd, zb) {
        zb = (zb === undefined) ? 1 : zb;
        var zc = function (ze, zf) {
            if (zc.enabled) {
                d.log( zd, ze, zf );
            }
        };
        zc.enabled = false;
        zc._key = (e.user || Math.random()) + zd;
        zc.enabled = (p( zc._key ) % 65535 / 65535) <= zb;
        return zc;
    }, getSessionID : function () {
        return za;
    }};
    o.EagleEye = s.exports = d;
}, 3 );
__e( "setUECookie", ["Env"], function (c, e, d, b) {
    var a = e( "Env" );

    function f (h) {
        if (!a.no_cookies) {
            var g = 0;
            if (c.afterloaded) {
                g = 2;
            } else if (c.loaded) {
                g = 1;
            }
            document.cookie = "act=" + encodeURIComponent( h + ":" + g ) + "; path=/; domain=" + window.location.hostname.replace( /^.*(\.facebook\..*)$/i, '$1' );
        }
    }

    d.exports = f;
} );
__e( "json", [], function (global, require, module, exports) {
    if (!this.JSON) {
        this.JSON = {};
    }
    (function () {
        function f (n) {
            return n < 10 ? '0' + n : n;
        }

        if (typeof Date.prototype.toJSON !== 'function') {
            Date.prototype.toJSON = function (key) {
                return isFinite( this.valueOf() ) ? this.getUTCFullYear() + '-' + f( this.getUTCMonth() + 1 ) + '-' + f( this.getUTCDate() ) + 'T' + f( this.getUTCHours() ) + ':' + f( this.getUTCMinutes() ) + ':' + f( this.getUTCSeconds() ) + 'Z' : null;
            };
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {'\b' : '\\b', '\t' : '\\t', '\n' : '\\n', '\f' : '\\f', '\r' : '\\r', '"' : '\\"', '\\' : '\\\\'}, rep;

        function quote (string) {
            escapable.lastIndex = 0;
            return escapable.test( string ) ? '"' + string.replace( escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt( 0 ).toString( 16 )).slice( -4 );
            } ) + '"' : '"' + string + '"';
        }

        function str (key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
                value = value.toJSON( key );
            }
            if (typeof rep === 'function') {
                value = rep.call( holder, key, value );
            }
            switch (typeof value) {
                case 'string':
                    return quote( value );
                case 'number':
                    return isFinite( value ) ? String( value ) : 'null';
                case 'boolean':
                case 'null':
                    return String( value );
                case 'object':
                    if (!value) {
                        return 'null';
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply( value ) === '[object Array]') {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str( i, value ) || 'null';
                        }
                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join( ',\n' + gap ) + '\n' + mind + ']' : '[' + partial.join( ',' ) + ']';
                        gap = mind;
                        return v;
                    }
                    if (rep && typeof rep === 'object') {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            k = rep[i];
                            if (typeof k === 'string') {
                                v = str( k, value );
                                if (v) {
                                    partial.push( quote( k ) + (gap ? ': ' : ':') + v );
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.hasOwnProperty.call( value, k )) {
                                v = str( k, value );
                                if (v) {
                                    partial.push( quote( k ) + (gap ? ': ' : ':') + v );
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join( ',\n' + gap ) + '\n' + mind + '}' : '{' + partial.join( ',' ) + '}';
                    gap = mind;
                    return v;
            }
        }

        if (typeof JSON.stringify !== 'function') {
            JSON.stringify = function (value, replacer, space) {
                var i;
                gap = '';
                indent = '';
                if (typeof space === 'number') {
                    for (i = 0; i < space; i += 1) {
                        indent += ' ';
                    }
                } else if (typeof space === 'string') {
                    indent = space;
                }
                rep = replacer;
                if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                    throw new Error( 'JSON.stringify' );
                }
                return str( '', {'' : value} );
            };
        }
        if (typeof JSON.parse !== 'function') {
            JSON.parse = function (text, reviver) {
                var j;

                function walk (holder, key) {
                    var k, v, value = holder[key];
                    if (value && typeof value === 'object') {
                        for (k in value) {
                            if (Object.hasOwnProperty.call( value, k )) {
                                v = walk( value, k );
                                if (v !== undefined) {
                                    value[k] = v;
                                } else {
                                    delete value[k];
                                }
                            }
                        }
                    }
                    return reviver.call( holder, key, value );
                }

                text = String( text );
                cx.lastIndex = 0;
                if (cx.test( text )) {
                    text = text.replace( cx, function (a) {
                        return '\\u' + ('0000' + a.charCodeAt( 0 ).toString( 16 )).slice( -4 );
                    } );
                }
                if (/^[\],:{}\s]*$/.test( text.replace( /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@' ).replace( /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']' ).replace( /(?:^|:|,)(?:\s*\[)+/g, '' ) )) {
                    j = eval( '(' + text + ')' );
                    return typeof reviver === 'function' ? walk( {'' : j}, '' ) : j;
                }
                throw new SyntaxError( 'JSON.parse' );
            };
        }
        JSON.stringify = function (old) {
            return function () {
                var s = old.apply( this, arguments );
                return s ? s.replace( /[%\u2028\u2029]/g, function (m) {
                    var s = m.charCodeAt( 0 ).toString( 16 );
                    return '\\u0000'.substring( 0, 6 - s.length ) + s;
                } ) : s;
            };
        }( JSON.stringify );
    }());
    if (!global.JSON) {
        global.JSON = JSON;
    }
}, 3 );
__e( "collectDataAttributes", ["json"], function (c, e, d, b) {
    e( "json" );
    function a (j, n) {
        var l = {};
        var i = {};
        var m = n.length;
        var k;
        for (k = 0; k < m; ++k) {
            l[n[k]] = {};
            i[n[k]] = 'data-' + n[k];
        }
        while (j) {
            if (j.getAttribute) {
                for (k = 0; k < m; ++k) {
                    var h = j.getAttribute( i[n[k]] );
                    if (h) {
                        var g = JSON.parse( h );
                        for (var f in g) {
                            if (l[n[k]][f] === undefined) {
                                l[n[k]][f] = g[f];
                            }
                        }
                    }
                }
            }
            j = j.parentNode;
        }
        return l;
    }

    d.exports = a;
} );
__e( "ClickRef", ["arbiter", "EagleEye", "copyProperties", "setUECookie", "collectDataAttributes"], function (f, i, h, e) {
    var a = i( "arbiter" );
    var b = i( "EagleEye" );
    var d = i( "copyProperties" );
    var j = i( "setUECookie" );
    var c = i( "collectDataAttributes" );

    function g () {
        function m (r) {
            if (!!r) {
                var q = {profile_minifeed : 1, info_tab : 1, gb_content_and_toolbar : 1, gb_muffin_area : 1, ego : 1, bookmarks_menu : 1, jewelBoxNotif : 1, jewelNotif : 1, BeeperBox : 1, navSearch : 1};
                for (var p = r; p && p != document.body; p = p.parentNode) {
                    if (!p.id || typeof p.id !== 'string') {
                        continue;
                    }
                    if (p.id.substr( 0, 8 ) == 'pagelet_') {
                        return p.id.substr( 8 );
                    }
                    if (p.id.substr( 0, 8 ) == 'box_app_') {
                        return p.id;
                    }
                    if (q[p.id]) {
                        return p.id;
                    }
                }
            }
            return '-';
        }

        function l (p) {
            return (p.getAttribute && (p.getAttribute( 'ajaxify' ) || p.getAttribute( 'data-endpoint' )) || p.action || p.href || p.name);
        }

        function n (q) {
            if (!ge( 'content' )) {
                return [0, 0, 0, 0];
            }
            var p = $( 'content' );
            var r = window.Vector2 ? Vector2.getEventPosition( q ) : {x : 0, y : 0};
            return [r.x, r.y, p.offsetLeft, p.clientWidth];
        }

        function o (q, p) {
            if (p == 'FORCE') {
                return true;
            }
            if (p == 'INDIRECT') {
                return false;
            }
            return (q && l( q ));
        }

        function k (za, w, event, s) {
            var y = (!window.ArbiterMonitor) ? 'r' : 'a', v = [0, 0, 0, 0], z, t, u;
            if (!!event) {
                z = event.type;
                if (z == 'click' && ge( 'content' )) {
                    v = n( event );
                }
                var q = 0;
                event.ctrlKey && (q += 1);
                event.shiftKey && (q += 2);
                event.altKey && (q += 4);
                event.metaKey && (q += 8);
                if (q) {
                    z += q;
                }
            }
            if (!!w) {
                t = l( w );
            }
            var p = [];
            if (window.ArbiterMonitor) {
                u = ArbiterMonitor.getInternRef( w );
                p = ArbiterMonitor.getActFields();
            }
            var r = c( w, ['ft', 'gt'] );
            d( r.ft, s.ft || {} );
            d( r.gt, s.gt || {} );
            if (r.gt.ua_id) {
                za.set_ua_id( r.gt.ua_id );
            }
            if (typeof(r.ft.ei) === 'string') {
                delete r.ft.ei;
            }
            var x = [za._ue_ts, za._ue_count, t || '-', za._context, z || '-', u || m( w ), y, window.URI ? URI.getRequestURI( true, true ).getUnqualifiedURI().toString() : location.pathname + location.search + location.hash, r].concat( v ).concat( p );
            return x;
        }

        a.subscribe( "UserAction/new", function (r, q) {
            if (o( q.node, q.mode )) {
                var p = k( q.ua, q.node, q.event, q.extra_data );
                j( q.ua.ue );
                b.log( 'act', p );
            }
        } );
    }

    h.exports = {init : g};
} );
__e( "click-ref", ["ClickRef"], function (a, b) {
    b( 'ClickRef' ).init();
}, 3 );
__e( "htmlspecialchars", [], function (b, e, d, a) {
    function c (f) {
        if (typeof(f) == 'undefined' || f === null || !f.toString) {
            return '';
        }
        if (f === false) {
            return '0';
        } else if (f === true) {
            return '1';
        }
        return f.toString().replace( /&/g, '&amp;' ).replace( /"/g, '&quot;' ).replace( /'/g, '&#039;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' );
    }

    d.exports = c;
} );
__e( "dom-core", ["htmlspecialchars"], function (d, g, f, b) {
    var e = g( 'htmlspecialchars' );
    var a = function (h) {
        return typeof h == 'string' ? document.getElementById( h ) : h;
    };
    var c = a;
    d.ge = b.ge = c;
    d.$ = b.$ = a;
}, 3 );
__e( "css-core", ["dom-core"], function (d, f, e, c) {
    var a = f( 'dom-core' ).$;
    var b = {hasClass : function (h, g) {
        h = a( h );
        return (' ' + h.className + ' ').indexOf( ' ' + g + ' ' ) > -1;
    }, addClass : function (h, g) {
        h = a( h );
        if (g && !b.hasClass( h, g )) {
            h.className = h.className + ' ' + g;
        }
        return h;
    }, removeClass : function (h, g) {
        h = a( h );
        if (b.hasClass( h, g )) {
            h.className = h.className.replace( new RegExp( '(^|\\s)' + g + '(?:\\s|$)', 'g' ), '$1' ).replace( /\s+/g, ' ' ).replace( /^\s*|\s*$/g, '' );
        }
        return h;
    }, toggleClass : function (h, g) {
        return b.conditionClass( h, g, !b.hasClass( h, g ) );
    }, conditionClass : function (i, h, g) {
        return (g ? b.addClass : b.removeClass)( i, h );
    }, show : function (g) {
        b.removeClass( g, 'hidden_elem' );
    }, hide : function (g) {
        b.addClass( g, 'hidden_elem' );
    }, conditionShow : function (h, g) {
        b.conditionClass( h, 'hidden_elem', !g );
    }};
    d.CSS = e.exports = b;
}, 3 );
__e( "parent", ["css-core"], function (d, f, e, c) {
    var a = f( 'css-core' );
    var b = {byTag : function (g, h) {
        h = h.toUpperCase();
        while (g && g.nodeName != h) {
            g = g.parentNode;
        }
        return g;
    }, byClass : function (h, g) {
        while (h && !a.hasClass( h, g )) {
            h = h.parentNode;
        }
        return h;
    }, byAttribute : function (h, g) {
        while (h && (!h.getAttribute || !h.getAttribute( g ))) {
            h = h.parentNode;
        }
        return h;
    }};
    d.Parent = e.exports = b;
}, 3 );
__e( "trackReferrer", ["parent"], function (c, e, d, b) {
    var a = e( "parent" );

    function f (g, k) {
        g = a.byAttribute( g, 'data-referrer' );
        if (g) {
            var j = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec( k )[1] || '';
            if (!j) {
                return;
            }
            var i = j + '|' + g.getAttribute( 'data-referrer' );
            var h = new Date();
            h.setTime( Date.now() + 1000 );
            document.cookie = "x-src=" + encodeURIComponent( i ) + "; " + "expires=" + h.toGMTString() + ";path=/; domain=" + window.location.hostname.replace( /^.*(\.facebook\..*)$/i, '$1' );
        }
        return g;
    }

    d.exports = f;
} );
__e( "referrer-tracker", ["trackReferrer"], function (a, b) {
    a.trackReferrer = b( 'trackReferrer' );
}, 3 );
__e( "UserNoOp", [], function (d, f, e, c) {
    var a = function () {
    };
    var b = function () {
        return this;
    };
    a.prototype = {add_event : b, add_data : b, set_ua_id : b, set_namespace : b};
    e.exports = a;
} );
__e( "mixins", ["arbiter"], function (d, f, e, c) {
    var a = f( 'arbiter' );
    var b = {Arbiter : {_getArbiterInstance : function () {
        return this._arbiter || (this._arbiter = new a());
    }, inform : function (i, h, g) {
        return this._getArbiterInstance().inform( i, h, g );
    }, subscribe : function (i, g, h) {
        return this._getArbiterInstance().subscribe( i, g, h );
    }, unsubscribe : function (g) {
        this._getArbiterInstance().unsubscribe( g );
    }}};
    d.Mixins = e.exports = b;
}, 3 );
__e( "bind", [], function (c, e, d, b) {
    function a (i, h) {
        var f = Array.prototype.slice.call( arguments, 2 );

        function g () {
            var k = i || (this == window ? false : this), j = f.concat( Array.prototype.slice.call( arguments ) );
            if (typeof(h) == "string") {
                if (k[h]) {
                    return k[h].apply( k, j );
                }
            } else {
                return h.apply( k, j );
            }
        }

        g.toString = function () {
            if (typeof(h) == "string") {
                return "bound lazily: " + i[h];
            }
            return "bound: " + h;
        };
        return g;
    }

    d.exports = a;
    c.bind = a;
}, 3 );
__e( "function-extensions", ["ArrayUtils", "mixins", "bind", "copyProperties"], function (f, h, g, e) {
    var a = h( 'ArrayUtils' );
    var b = h( 'mixins' );
    var c = h( 'bind' );
    var d = h( 'copyProperties' );
    Function.mixin = function () {
        for (var j = 1, i = arguments.length; j < i; ++j) {
            d( arguments[0], b[arguments[j]] || arguments[j] );
        }
    };
    Function.prototype.bind = function (j) {
        var i = [j, this].concat( Array.prototype.slice.call( arguments, 1 ) );
        return c.apply( null, i );
    };
    Function.prototype.curry = Function.prototype.bind.bind( null, null );
    Function.prototype.shield = function (j) {
        if (typeof this != 'function') {
            throw new TypeException();
        }
        var i = this.bind.apply( this, a.createFrom( arguments ) );
        return function () {
            return i();
        };
    };
    Function.prototype.defer = function (j, i) {
        if (typeof this != 'function') {
            throw new TypeError();
        }
        j = j || 0;
        return setTimeout( this, j, i );
    };
}, 3 );
__e( "FunctionUtils", [], function (b, e, d, a) {
    function c (i, k, g, f) {
        var j;
        var h = function () {
            var l = arguments;
            var m = this;
            var n = function () {
                j = null;
                i.apply( m, l );
            };
            g && h.reset();
            if (g || !j) {
                j = setTimeout( n, k, f );
            }
        };
        h.reset = function () {
            j && clearTimeout( j );
            j = null;
        };
        return h;
    }

    d.exports = {debounce : function (g, h, f) {
        return c( g, h, true, f );
    }, throttle : function (g, h, f) {
        return c( g, h, false, f );
    }};
} );
__e( "userAction", ["function-extensions", "arbiter", "EagleEye", "FunctionUtils", "copyProperties", "hasArrayNature"], function (h, n, j, g) {
    n( "function-extensions" );
    var a = n( "arbiter" );
    var b = n( "EagleEye" );
    var c = n( "FunctionUtils" );
    var f = n( "copyProperties" );
    var i = n( "hasArrayNature" );

    function d (t, s, q) {
        var r = t + '/' + s;
        f( this, {ue : r, _ua_id : null, _ts : t, _ns : null, _start_ts : t, _prev_event : 's', _ue_ts : t, _ue_count : s, _context : q, _data_version : 1, _event_version : 2, _info_version : 1} );
        if (d.enable.report) {
            b.log( 'uan', [t, s] );
        }
        this._report = c.debounce( function report () {
            if (!d.enable.report) {
                return;
            }
            var u = [this._info_version, this.ue, this._ns, this._ua_id];
            b.log( 'uai', u );
        }.bind( this ), 100 );
    }

    var e = [];
    d.enable = function (r) {
        if (!r) {
            return;
        }
        if (!i( r )) {
            r = [r];
        }
        for (var q = 0; q < r.length; q++) {
            d.enable[r[q]] = true;
        }
    };
    f( d.prototype, {set_ua_id : function (q) {
        this._ua_id = q;
        this._report();
        return this;
    }, set_namespace : function (q) {
        this._ns = q;
        this._report();
        return this;
    }, add_event : function (s, t) {
        if (!d.enable.events) {
            return this;
        }
        t = t || 0;
        var v = (Date.now() - t);
        var q = v - this._ts;
        var u = v - this._ue_ts;
        var r = [this._event_version, this.ue, this._ns, this._ua_id, this._prev_event, s, q, u];
        b.log( 'uae', r );
        this._ts = v;
        this._prev_event = s;
        return this;
    }, add_data : function (q) {
        if (!d.enable.data) {
            return this;
        }
        var r = [this._data_version, this.ue, q];
        b.log( 'uad', r );
        return this;
    }} );
    var o = 0;
    var m = 0;
    var l = null;
    var k = null;

    function p (q, u, event, t, r) {
        var x = Date.now();
        var w = x + '/' + o;
        r = r || {};
        if (!u && event) {
            u = event.getTarget();
        }
        var s = 50;
        if (u && l) {
            if (x - m < s && u == l && t != "FORCE") {
                return e[e.length - 1];
            }
        }
        if (!window.addEventListener && document.createEventObject) {
            event = document.createEventObject( event );
        }
        l = u;
        k = event;
        var v = new d( x, o, q );
        e.push( v );
        while (e.length > 10) {
            e.shift();
        }
        a.inform( "UserAction/new", {ua : v, node : u, mode : t, event : event, extra_data : r} );
        m = x;
        o++;
        return v;
    }

    a.subscribe( "UserAction/enable", function (r, q) {
        d.enable( q );
    } );
    j.exports = p;
} );
__e( "UserAction", ["UserNoOp", "userAction"], function (a, b) {
    a.UserNoOp = b( 'UserNoOp' );
    a.user_action = a.user_action || b( 'userAction' );
    a.report_data = a.report_data || function (c, d) {
        user_action( c, null, null, 'FORCE', d );
    };
}, 3 );
!function () {
    if (window.__primer) {
        return;
    }
    window.__primer = true;
    var a = null;
    var c = /async(?:-post)?|dialog(?:-pipe|-post)?|theater|toggle/;
    document.documentElement.onclick = function (f) {
        f = f || window.event;
        a = f.target || f.srcElement;
        var g = Parent.byTag( a, 'A' );
        if (!g) {
            return;
        }
        var d = g.getAttribute( 'ajaxify' );
        var h = g.href;
        var m = d || h;
        if (m) {
            var l = user_action( 'a', g, f ).set_namespace( 'primer' );
            if (window.ArbiterMonitor) {
                ArbiterMonitor.initUA( l, [g] );
            }
        }
        if (d && h && !(/#$/).test( h )) {
            var i = f.which && f.which != 1;
            var j = f.altKey || f.ctrlKey || f.metaKey || f.shiftKey;
            if (i || j) {
                return;
            }
        }
        trackReferrer( g, m );
        var e = ['dialog'];
        var k = g.rel && g.rel.match( c );
        k = k && k[0];
        switch (k) {
            case 'dialog-pipe':
                e.push( 'ajaxpipe' );
            case 'dialog':
            case 'dialog-post':
                Bootloader.loadComponents( e, function () {
                    Dialog.bootstrap( m, null, k == 'dialog', null, null, g );
                } );
                break;
            case 'async':
            case 'async-post':
                Bootloader.loadComponents( 'async', function () {
                    AsyncRequest.bootstrap( m, g );
                } );
                break;
            case 'theater':
                Bootloader.loadComponents( 'PhotoSnowbox', function () {
                    PhotoSnowbox.bootstrap( m, g );
                } );
                break;
            case 'toggle':
                CSS.toggleClass( g.parentNode, 'openToggler' );
                Bootloader.loadComponents( 'Toggler', function () {
                    Toggler.bootstrap( g );
                } );
                break;
            default:
                return;
        }
        return false;
    };
    document.documentElement.onsubmit = function (d) {
        d = d || window.event;
        var e = d.target || d.srcElement;
        if (e && e.nodeName == 'FORM' && e.getAttribute( 'rel' ) == 'async') {
            var g = user_action( 'f', e, d ).set_namespace( 'primer' );
            if (window.ArbiterMonitor) {
                ArbiterMonitor.initUA( g, [e] );
            }
            var f = a;
            Bootloader.loadComponents( 'dom-form', function () {
                Form.bootstrap( e, f );
            } );
            return false;
        }
    };
    var b = null;
    document.documentElement.onmouseover = function (d) {
        d = d || window.event;
        b = d.target || d.srcElement;
        var e = Parent.byAttribute( b, 'data-hover' );
        if (!e) {
            return;
        }
        switch (e.getAttribute( 'data-hover' )) {
            case 'tooltip':
                Bootloader.loadComponents( 'Tooltip', function () {
                    Tooltip.process( e, b );
                } );
                break;
        }
    };
}();
__e( "Class", ["function-extensions", "arbiter", "bind"], function (n, p, o, m) {
    p( 'function-extensions' );
    var a = p( 'arbiter' );
    var l = p( 'bind' );
    var h = {};
    var d = null;
    var b = {extend : function (q, r) {
        if (!d) {
            d = a.subscribe( a.BOOTLOAD, j );
        }
        if (typeof r == 'string') {
            i( q, r );
        } else {
            c( q, r );
        }
    }, mixin : function (s, r) {
        var q = Array.prototype.slice.call( arguments );
        q[0] = q[0].prototype;
        Function.mixin.apply( Function, q );
    }};

    function i (r, s) {
        r.__class_extending = true;
        var q = a.registerCallback( l( null, c, r, s ), [a.FUNCTION_EXTENSION + '/' + s, a.BOOTLOAD] );
        if (q !== null) {
            h[s] = true;
        }
    }

    function j () {
        for (var q in h) {
            if (!!n[q]) {
                delete h[q];
                if (!n[q].__class_extending) {
                    a.inform( a.FUNCTION_EXTENSION + '/' + q, true, a.BEHAVIOR_STATE );
                } else {
                    n[q].__class_name = q;
                }
            }
        }
    }

    function c (q, s) {
        delete q.__class_extending;
        s = typeof s == 'string' ? n[s] : s;
        var t = g( s, 0 );
        var r = g( q, t.prototype.__level + 1 );
        r.parent = t;
        if (!!q.__class_name) {
            a.inform( a.FUNCTION_EXTENSION + '/' + q.__class_name, true, a.BEHAVIOR_STATE );
        }
    }

    function g (s, q) {
        if (s._metaprototype) {
            return s._metaprototype;
        }
        var r = new Function();
        r.construct = e;
        r.prototype.construct = k( s, q, true );
        r.prototype.__level = q;
        r.base = s;
        s.prototype.parent = r;
        s._metaprototype = r;
        return r;
    }

    function e (q) {
        f( q.parent );
        var t = [];
        var s = q;
        while (s.parent) {
            var r = new s.parent();
            t.push( r );
            r.__instance = q;
            s = s.parent;
        }
        q.parent = t[1];
        t.reverse();
        t.pop();
        q.__parents = t;
        q.__instance = q;
        return q.parent.construct.apply( q.parent, arguments );
    }

    function f (t) {
        if (t.initialized) {
            return;
        }
        var q = t.base.prototype;
        if (t.parent) {
            f( t.parent );
            var u = t.parent.prototype;
            for (var r in u) {
                if (r != '__level' && r != 'construct' && q[r] === undefined) {
                    q[r] = t.prototype[r] = u[r];
                }
            }
        }
        t.initialized = true;
        var s = t.prototype.__level;
        for (var r in q) {
            if (r != 'parent') {
                q[r] = t.prototype[r] = k( q[r], s );
            }
        }
    }

    function k (s, r, t) {
        if (typeof s != 'function' || s.__prototyped) {
            return s;
        }
        var q = function () {
            var w = this.__instance;
            if (w) {
                var x = w.parent;
                w.parent = r ? w.__parents[r - 1] : null;
                var u = arguments;
                if (t) {
                    u = [];
                    for (var v = 1; v < arguments.length; v++) {
                        u.push( arguments[v] );
                    }
                }
                var y = s.apply( w, u );
                w.parent = x;
                return y;
            } else {
                return s.apply( this, arguments );
            }
        };
        q.__prototyped = true;
        return q;
    }

    n.Class = o.exports = b;
}, 3 );
__e( "array-extensions", ["arbiter", "copyProperties"], function (d, g, e, c) {
    var a = g( 'arbiter' );
    var b = g( 'copyProperties' );

    function f (h) {
        return function () {
            if (this === d) {
                throw new TypeError();
            }
            return h.apply( this, arguments );
        };
    }

    b( Array.prototype, {map : function (i, h) {
        if (this === d || typeof i != 'function') {
            throw new TypeError();
        }
        var j;
        var k = this.length;
        var l = new Array( k );
        for (j = 0; j < k; ++j) {
            if (j in this) {
                l[j] = i.call( h, this[j], j, this );
            }
        }
        return l;
    }, forEach : function (i, h) {
        this.map( i, h );
    }, filter : f( function (i, h) {
        if (typeof i != 'function') {
            throw new TypeError();
        }
        var j, m, k = this.length, l = [];
        for (j = 0; j < k; ++j) {
            if (j in this) {
                m = this[j];
                if (i.call( h, m, j, this )) {
                    l.push( m );
                }
            }
        }
        return l;
    } ), every : f( function (i, h) {
        if (typeof i !== 'function') {
            throw new TypeError();
        }
        var l = new Object( this );
        var k = l.length;
        for (var j = 0; j < k; j++) {
            if (j in l) {
                if (!i.call( h, l[j], j, l )) {
                    return false;
                }
            }
        }
        return true;
    } ), some : f( function (i, h) {
        if (typeof i !== 'function') {
            throw new TypeError();
        }
        var l = new Object( this );
        var k = l.length;
        for (var j = 0; j < k; j++) {
            if (j in l) {
                if (i.call( h, l[j], j, l )) {
                    return true;
                }
            }
        }
        return false;
    } ), reduce : null, reduceRight : null, sort : f( Array.prototype.sort ), reverse : f( Array.prototype.reverse ), concat : f( Array.prototype.concat ), slice : f( Array.prototype.slice ), indexOf : f( Array.prototype.indexOf || function (j, h) {
        var i = this.length;
        h |= 0;
        if (h < 0) {
            h += i;
        }
        for (; h < i; h++) {
            if (h in this && this[h] === j) {
                return h;
            }
        }
        return -1;
    } ), contains : function (h) {
        return this.indexOf( h ) != -1;
    }, remove : function (i) {
        var h = this.indexOf( i );
        if (h != -1) {
            this.splice( h, 1 );
        }
    }} );
    Array.prototype.each = Array.prototype.forEach;
    a.inform( 'fbjs/prototypes' );
}, 3 );
__e( "event-form-bubbling", [], function (b, d, c, a) {
    b.Event = b.Event || function () {
    };
    Event.__inlineSubmit = function (f, event) {
        var e = Event.__getHandler && Event.__getHandler( f, 'submit' );
        return e ? null : Event.__bubbleSubmit( f, event );
    };
    Event.__bubbleSubmit = function (e, event) {
        if (document.documentElement.attachEvent) {
            var f;
            while (f !== false && (e = e.parentNode)) {
                f = e.onsubmit ? e.onsubmit( event ) : Event.__fire && Event.__fire( e, 'submit', event );
            }
            return f;
        }
    };
}, 3 );
__e( "DataStore", [], function (i, k, j, h) {
    var f = {};
    var c = {};
    var g = 1;
    var b = 1;

    function d (l) {
        var m;
        if (typeof l == 'string') {
            m = 'str_' + l;
        } else {
            m = 'elem_' + (l.__FB_TOKEN || (l.__FB_TOKEN = [g++]))[0];
            c[m] = l;
        }
        return f[m] || (f[m] = {});
    }

    function e (l) {
        if (!l.nodeName) {
            return false;
        }
        try {
            if (null != l.offsetParent) {
                return false;
            }
        }
        catch (m) {
        }
        if (document.documentElement.contains) {
            return !document.documentElement.contains( l );
        } else {
            return (document.documentElement.compareDocumentPosition( l ) & b);
        }
    }

    var a = {set : function (n, m, o) {
        var l = d( n );
        l[m] = o;
        return n;
    }, get : function (p, o, n) {
        var m = d( p ), q = m[o];
        if (typeof q === 'undefined' && p.getAttribute) {
            var l = p.getAttribute( 'data-' + o );
            q = (null === l) ? undefined : l;
        }
        if ((n !== undefined) && (q === undefined)) {
            q = m[o] = n;
        }
        return q;
    }, remove : function (n, m) {
        var l = d( n ), o = l[m];
        delete l[m];
        return o;
    }, cleanup : function () {
        var m, l;
        for (m in c) {
            l = c[m];
            if (e( l )) {
                delete f[m];
                delete c[m];
            }
        }
    }};
    j.exports = a;
} );
__e( "ObjectUtils", ["copyProperties", "hasArrayNature"], function (d, g, f, c) {
    var b = g( "copyProperties" );
    var e = g( "hasArrayNature" );
    var a = {object : function (i) {
        var h = new Function();
        h.prototype = i;
        return new h();
    }, isScalar : function (h) {
        return (/string|number|boolean/).test( typeof h );
    }, getKeys : function (j) {
        var i = [];
        for (var h in j) {
            i.push( h );
        }
        return i;
    }, getValues : function (i) {
        var j = [];
        for (var h in i) {
            j.push( i[h] );
        }
        return j;
    }, countKeys : function (j) {
        var h = 0;
        for (var i in j) {
            h++;
        }
        return h;
    }, areEqual : function (h, i) {
        return JSON.stringify( h ) == JSON.stringify( i );
    }, merge : function () {
        var i = {};
        for (var h = 0; h < arguments.length; h++) {
            b( i, arguments[h] );
        }
        return i;
    }, coalesce : function () {
        for (var h = 0; h < arguments.length; ++h) {
            if (arguments[h] != null) {
                return arguments[h];
            }
        }
        return null;
    }, createFrom : function (j, l) {
        var k = {};
        var i = e( l );
        if (typeof l == 'undefined') {
            l = true;
        }
        for (var h = j.length; h--;) {
            k[j[h]] = i ? l[h] : l;
        }
        return k;
    }};
    f.exports = a;
} );
__e( "ua", [], function (b, d, c, a) {
    var e = {ie : function () {
        return e._populate() || this._ie;
    }, ie64 : function () {
        return e.ie() && this._win64;
    }, firefox : function () {
        return e._populate() || this._firefox;
    }, opera : function () {
        return e._populate() || this._opera;
    }, safari : function () {
        return e._populate() || this._safari;
    }, chrome : function () {
        return e._populate() || this._chrome;
    }, windows : function () {
        return e._populate() || this._windows;
    }, osx : function () {
        return e._populate() || this._osx;
    }, linux : function () {
        return e._populate() || this._linux;
    }, iphone : function () {
        return e._populate() || this._iphone;
    }, _populated : false, _populate : function () {
        if (e._populated) {
            return;
        }
        e._populated = true;
        var i = navigator.userAgent;
        var f = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec( i );
        var h = /(Mac OS X)|(Windows)|(Linux)/.exec( i );
        var g = /\b(iPhone|iP[ao]d)/.exec( i );
        e._win64 = !!(/Win64/.exec( i ));
        if (f) {
            e._ie = f[1] ? parseFloat( f[1] ) : NaN;
            if (e._ie && document.documentMode) {
                e._ie = document.documentMode;
            }
            e._firefox = f[2] ? parseFloat( f[2] ) : NaN;
            e._opera = f[3] ? parseFloat( f[3] ) : NaN;
            e._safari = f[4] ? parseFloat( f[4] ) : NaN;
            if (e._safari) {
                f = /(?:Chrome\/(\d+\.\d+))/.exec( i );
                e._chrome = f && f[1] ? parseFloat( f[1] ) : NaN;
            } else {
                e._chrome = NaN;
            }
        } else {
            e._ie = e._firefox = e._opera = e._chrome = e._safari = NaN;
        }
        if (h) {
            if (h[1]) {
                var j = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec( i );
                e._osx = j ? parseFloat( j[1].replace( '_', '.' ) ) : true;
            } else {
                e._osx = false;
            }
            e._windows = !!h[2];
            e._linux = !!h[3];
        } else {
            e._osx = e._windows = e._linux = false;
        }
        e._iphone = g;
    }};
    b.ua = c.exports = e;
}, 3 );
__e( "SystemEvents", ["arbiter", "Env", "ua", "util", "copyProperties"], function (s, w, u, r) {
    var a = w( 'arbiter' );
    var c = w( 'Env' );
    var y = w( 'ua' );
    var e = w( 'util' );
    var q = w( 'copyProperties' );
    var d = new a();
    var g = [], b = 1000;
    setInterval( function () {
        for (var z = 0; z < g.length; z++) {
            g[z]();
        }
    }, b, false );
    function i () {
        return (/c_user=(\d+)/.test( document.cookie ) && RegExp.$1) || 0;
    }

    var m = c.user;
    var l = navigator.onLine;
    g.push( function () {
        var z = navigator.onLine;
        if (l != z) {
            d.inform( d.ONLINE, z, a.BEHAVIOR_STATE );
            l = z;
        }
    } );
    var p = m;
    g.push( function () {
        var z = i();
        if (p != z) {
            d.inform( d.USER, z, a.BEHAVIOR_STATE );
            p = z;
        }
    } );
    var n = Date.now();

    function f () {
        var zb = Date.now();
        var z = zb - n;
        var za = z < 0 || z > 10000;
        n = zb;
        if (za) {
            d.inform( d.TIME_TRAVEL, z );
        }
        return za;
    }

    g.push( f );
    function v (z) {
        var za = z ? {line : z.lineNumber || z.line, message : z.message, name : z.name, script : z.fileName || z.sourceURL, stack : z.stackTrace || z.stack} : {};
        if (y.chrome() && z.stack && /(\w{3,5}:\/\/[^:]+):(\d+)/.test( z.stack )) {
            za.script = RegExp.$1;
            za.line = parseInt( RegExp.$2, 10 );
        }
        for (var zb in za) {
            if (za[zb] == null) {
                delete za[zb];
            }
        }
        return za;
    }

    var h = null;
    var o = false;

    function x (za, z) {
        if (y.ie()) {
            return za;
        }
        if (/nocatch/.test( location.search )) {
            return za;
        }
        return function () {
            if (o) {
                return za.apply( this, arguments );
            }
            try {
                o = true;
                var res = za.apply( this, arguments );
                o = false;
                return res;
            }
            catch (zb) {
                o = false;
                h = d.normalizeError( zb );
                if (z) {
                    z( h );
                }
                throw zb;
            }
        };
    }

    function t (z) {
        if (z instanceof Error) {
            z = v( z );
        }
        d.inform( d.ERROR, z );
    }

    function j (zb, zc, za) {
        var z = h || {message : zb, script : zc, line : za};
        h = null;
        z.script = z.script || zc;
        z.line = z.line || za;
        t( z );
    }

    function k () {
        window.onerror = j;
    }

    a.setErrorHandler( d.informError );
    k();
    g.push( k );
    s.SystemEvents = u.exports = q( d, {USER : 'SystemEvents/USER', ONLINE : 'SystemEvents/ONLINE', TIME_TRAVEL : 'SystemEvents/TIME_TRAVEL', ERROR : 'SystemEvents/ERROR', trapError : x, normalizeError : v, informError : t, isPageOwner : function (z) {
        return z || i() == m;
    }, checkTimeTravel : f} );
}, 3 );
__e( "string-extensions", ["arbiter"], function (c, e, d, b) {
    var a = e( 'arbiter' );
    String.prototype.trim = function () {
        if (this == window) {
            return null;
        }
        return this.replace( /^\s*|\s*$/g, '' );
    };
    b.trim = c.trim = function (g) {
        try {
            return String( g.toString() ).trim();
        }
        catch (f) {
            return '';
        }
    };
    String.prototype.startsWith = function (f) {
        if (this == window) {
            return null;
        }
        return this.substring( 0, f.length ) == f;
    };
    String.prototype.endsWith = function (f) {
        if (this == window) {
            return null;
        }
        return this.length >= f.length && this.substring( this.length - f.length ) == f;
    };
    String.prototype.split = (function (f) {
        return function (m, j) {
            var g = "";
            if (m === null || j === null) {
                return [];
            } else if (typeof m == 'string') {
                return f.call( this, m, j );
            } else if (m === undefined) {
                return [this.toString()];
            } else if (m instanceof RegExp) {
                if (!m._2 || !m._1) {
                    g = m.toString().replace( /^[\S\s]+\//, "" );
                    if (!m._1) {
                        if (!m.global) {
                            m._1 = new RegExp( m.source, "g" + g );
                        } else {
                            m._1 = 1;
                        }
                    }
                }
                separator1 = m._1 === 1 ? m : m._1;
                var n = (m._2 ? m._2 : m._2 = new RegExp( "^" + separator1.source + "$", g ));
                if (j === undefined || j < 0) {
                    j = false;
                } else {
                    j = Math.floor( j );
                    if (!j) {
                        return [];
                    }
                }
                var k, l = [], i = 0, h = 0;
                while ((j ? h++ <= j : true) && (k = separator1.exec( this ))) {
                    if ((k[0].length === 0) && (separator1.lastIndex > k.index)) {
                        separator1.lastIndex--;
                    }
                    if (separator1.lastIndex > i) {
                        if (k.length > 1) {
                            k[0].replace( n, function () {
                                for (var o = 1; o < arguments.length - 2; o++) {
                                    if (arguments[o] === undefined) {
                                        k[o] = undefined;
                                    }
                                }
                            } );
                        }
                        l = l.concat( this.substring( i, k.index ), (k.index === this.length ? [] : k.slice( 1 )) );
                        i = separator1.lastIndex;
                    }
                    if (k[0].length === 0) {
                        separator1.lastIndex++;
                    }
                }
                return (i === this.length) ? (separator1.test( "" ) ? l : l.concat( "" )) : (j ? l : l.concat( this.substring( i ) ));
            } else {
                return f.call( this, m, j );
            }
        };
    })( String.prototype.split );
    a.inform( 'fbjs/prototypes' );
}, 3 );
__e( "evalGlobal", [], function (c, e, d, b) {
    function a (h) {
        if ('string' != typeof(h)) {
            throw new Error( 'JS sent to eval_global is not a string.  Only strings ' + 'are permitted.' );
        } else if ('' == h) {
            return;
        }
        var i = document.createElement( 'script' );
        i.type = 'text/javascript';
        try {
            i.appendChild( document.createTextNode( h ) );
        }
        catch (f) {
            i.text = h;
        }
        var g = (document.getElementsByTagName( "head" )[0] || document.documentElement);
        g.appendChild( i );
        g.removeChild( i );
    }

    d.exports = a;
} );
__e( "dom-html", ["function-extensions", "string-extensions", "ArrayUtils", "ua", "copyProperties", "evalGlobal"], function (f, h, g, e) {
    h( 'function-extensions' );
    h( 'string-extensions' );
    var a = h( 'ArrayUtils' );
    var i = h( 'ua' );
    var c = h( 'copyProperties' );
    var d = h( 'evalGlobal' );

    function b (j) {
        if (j && j.__html) {
            j = j.__html;
        }
        if (!(this instanceof b)) {
            if (j instanceof b) {
                return j;
            }
            return new b( j );
        }
        this._content = j;
        this._defer = false;
        this._extra_action = '';
        this._nodes = null;
        this._inline_js = bagofholding;
        this._ie_clone_bug = false;
        return this;
    }

    b.isHTML = function (j) {
        return j && (j instanceof b || j.__html !== undefined);
    };
    b.replaceJSONWrapper = function (j) {
        return j && j.__html !== undefined ? new b( j.__html ) : j;
    };
    c( b.prototype, {toString : function () {
        var j = this._content || '';
        if (this._extra_action) {
            j += '<script type="text/javascript">' + this._extra_action + '</scr' + 'ipt>';
        }
        return j;
    }, setAction : function (j) {
        this._extra_action = j;
        return this;
    }, getAction : function () {
        this._fillCache();
        var j = function () {
            this._inline_js();
            d( this._extra_action );
        }.bind( this );
        if (this.getDeferred()) {
            return j.defer.bind( j );
        } else {
            return j;
        }
    }, setDeferred : function (j) {
        this._defer = !!j;
        return this;
    }, getDeferred : function () {
        return this._defer;
    }, getContent : function () {
        return this._content;
    }, getNodes : function () {
        this._fillCache();
        return this._nodes;
    }, getRootNode : function () {
        return this.getNodes()[0];
    }, ieCloneBug : function () {
        this._fillCache();
        return this._ie_clone_bug;
    }, _fillCache : function () {
        if (null !== this._nodes) {
            return;
        }
        var m = this._content;
        if (!m) {
            this._nodes = [];
            return;
        }
        m = m.replace( /(<(\w+)[^>]*?)\/>/g, function (u, v, w) {
            return w.match( /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i ) ? u : v + '></' + w + '>';
        } );
        var q = m.trim().toLowerCase(), t = document.createElement( 'div' ), k = false;
        var s = (!q.indexOf( '<opt' ) && [1, '<select multiple="multiple" class="__WRAPPER">', '</select>']) || (!q.indexOf( '<leg' ) && [1, '<fieldset class="__WRAPPER">', '</fieldset>']) || (q.match( /^<(thead|tbody|tfoot|colg|cap)/ ) && [1, '<table class="__WRAPPER">', '</table>']) || (!q.indexOf( '<tr' ) && [2, '<table><tbody class="__WRAPPER">', '</tbody></table>']) || ((!q.indexOf( '<td' ) || !q.indexOf( '<th' )) && [3, '<table><tbody><tr class="__WRAPPER">', '</tr></tbody></table>']) || (!q.indexOf( '<col' ) && [2, '<table><tbody></tbody><colgroup class="__WRAPPER">', '</colgroup></table>']) || null;
        if (null === s) {
            t.className = '__WRAPPER';
            if (i.ie()) {
                s = [0, '<span style="display:none">&nbsp;</span>', ''];
                k = true;
            } else {
                s = [0, '', ''];
            }
        }
        t.innerHTML = s[1] + m + s[2];
        while (s[0]--) {
            t = t.lastChild;
        }
        if (k) {
            t.removeChild( t.firstChild );
        }
        t.className != '__WRAPPER';
        if (0 !== t.getElementsByTagName( 'option' ).length || 0 !== t.getElementsByTagName( 'object' ).length) {
            this._ie_clone_bug = true;
        }
        if (i.ie()) {
            var r;
            if (!q.indexOf( '<table' ) && -1 == q.indexOf( '<tbody' )) {
                r = t.firstChild && t.firstChild.childNodes;
            } else if (s[1] == '<table>' && -1 == q.indexOf( '<tbody' )) {
                r = t.childNodes;
            } else {
                r = [];
            }
            for (var o = r.length - 1; o >= 0; --o) {
                if (r[o].nodeName && r[o].nodeName.toLowerCase() == 'tbody' && r[o].childNodes.length == 0) {
                    r[o].parentNode.removeChild( r[o] );
                }
            }
        }
        var p = t.getElementsByTagName( 'script' );
        var j = [];
        for (var n = 0; n < p.length; n++) {
            if (p[n].src) {
                j.push( Bootloader.requestResource.bind( Bootloader, 'js', p[n].src ) );
            } else {
                j.push( d.bind( null, p[n].innerHTML ) );
            }
        }
        for (var n = p.length - 1; n >= 0; n--) {
            p[n].parentNode.removeChild( p[n] );
        }
        var l = function () {
            for (var u = 0; u < j.length; u++) {
                j[u]();
            }
        };
        this._nodes = a.createFrom( t.childNodes );
        this._inline_js = l;
    }} );
    f.HTML = g.exports = b;
}, 3 );
__e( "Intl", [], function (c, f, d, b) {
    function a (g) {
        if (typeof g != 'string') {
            return false;
        }
        return g.match( new RegExp( a.punct_char_class + '[' + ')"' + "'" + '\u00BB' + '\u0F3B' + '\u0F3D' + '\u2019' + '\u201D' + '\u203A' + '\u3009' + '\u300B' + '\u300D' + '\u300F' + '\u3011' + '\u3015' + '\u3017' + '\u3019' + '\u301B' + '\u301E' + '\u301F' + '\uFD3F' + '\uFF07' + '\uFF09' + '\uFF3D' + '\s' + ']*$' ) );
    }

    a.punct_char_class = '[' + '.!?' + '\u3002' + '\uFF01' + '\uFF1F' + '\u0964' + '\u2026' + '\u0EAF' + '\u1801' + '\u0E2F' + '\uFF0E' + ']';
    function e (m) {
        var k, j = m, l = window.intl_locale_rewrites, h, i;
        try {
            if (l) {
                var pats = [], reps = [];
                for (var p in l.patterns) {
                    var pat = p, rep = l.patterns[p];
                    for (h in l.meta) {
                        k = new RegExp( h.slice( 1, -1 ), 'g' );
                        pat = pat.replace( k, l.meta[h] );
                        rep = rep.replace( k, l.meta[h] );
                    }
                    pats[pats.length] = pat;
                    reps[reps.length] = rep;
                }
                for (var ii = 0; ii < pats.length; ii++) {
                    k = new RegExp( pats[ii].slice( 1, -1 ), 'g' );
                    if (reps[ii] == 'javascript') {
                        i = m.match( k );
                        h = i && i[0];
                        if (h) {
                            m = m.replace( k, h.slice( 1 ).toLowerCase() );
                        }
                    } else {
                        m = m.replace( k, reps[ii] );
                    }
                }
            }
        }
        catch (g) {
            m = j;
        }
        k = new RegExp( '\x01', 'g' );
        m = m.replace( k, '' );
        return m;
    }

    d.exports = {endsInPunct : a, phonologicalRules : e};
} );
__e( "_tx", ["Intl"], function (d, f, e, c) {
    var a = f( 'Intl' );

    function b (k, g) {
        if (!g) {
            return k;
        }
        var j;
        for (var i in g) {
            if (a.endsInPunct( g[i] )) {
                j = new RegExp( '\\{' + i + '\\}' + a.endsInPunct.punct_char_class + '*', 'g' );
            } else {
                j = new RegExp( '\\{' + i + '\\}', 'g' );
            }
            var h = '\x01';
            k = k.replace( j, h + g[i] + h );
        }
        k = a.phonologicalRules( k );
        return k;
    }

    e.exports = b;
} );
__e( "tx", ["_tx"], function (c, e, d, b) {
    var a = e( '_tx' );

    function f (h, g) {
        if (typeof _string_table == 'undefined') {
            return;
        }
        h = _string_table[h];
        return a( h, g );
    }

    d.exports = f;
} );
__e( "dom", ["ArrayUtils", "css-core", "dom-html", "ObjectUtils", "dom-core", "copyProperties", "ua", "tx", "_tx"], function (m, o, n, k) {
    var c = o( 'ArrayUtils' );
    var d = o( 'css-core' );
    var f = o( 'dom-html' );
    var g = o( 'ObjectUtils' );
    var a = o( 'dom-core' ).$;
    var j = o( 'copyProperties' );
    var l = o( 'dom-core' ).ge;
    var q = o( 'ua' );
    var p = o( 'tx' );
    var h = o( '_tx' );

    function i (r) {
        function s (t) {
            return e.create( 'div', {}, t ).innerHTML;
        }

        return function (w, t) {
            var u = {};
            if (t) {
                for (var v in t) {
                    u[v] = s( t[v] );
                }
            }
            return f( r( w, u ) );
        };
    }

    var e = {find : function (r, t) {
        var s = e.scry( r, t );
        return s[0];
    }, scry : function (za, zm) {
        if (!za || !za.getElementsByTagName) {
            return [];
        }
        var zn = zm.split( ' ' );
        var u = [za];
        var z = !!za.documentElement;
        for (var zd = 0; zd < zn.length; zd++) {
            if (u.length == 0) {
                break;
            }
            if (zn[zd] == '') {
                continue;
            }
            var zl = zn[zd];
            var zj = [];
            var zu = false;
            if (zl.charAt( 0 ) == '^') {
                if (zd == 0) {
                    zu = true;
                    zl = zl.slice( 1 );
                } else {
                    return [];
                }
            }
            zl = zl.replace( /\./g, ' .' );
            zl = zl.replace( /\#/g, ' #' );
            zl = zl.replace( /\[/g, ' [' );
            var zq = zl.split( ' ' );
            var zr = zq[0] || '*';
            var ze = zq[1] && zq[1].charAt( 0 ) == '#';
            if (ze) {
                var y = l( zq[1].slice( 1 ), true );
                if (y && ('*' == zr || y.tagName.toLowerCase() == zr)) {
                    for (var zh = 0; zh < u.length; zh++) {
                        if (zu && e.contains( y, u[zh] )) {
                            zj = [y];
                            break;
                        } else if (document == u[zh] || e.contains( u[zh], y )) {
                            zj = [y];
                            break;
                        }
                    }
                }
            } else {
                var zt = [];
                var t = u.length;
                for (var zf = 0; zf < t; zf++) {
                    if (zu) {
                        var zb = [];
                        var x = u[zf].parentNode;
                        var r = zr == '*';
                        while (e.isElementNode( x )) {
                            if (r || x.tagName.toLowerCase() == zr) {
                                zb.push( x );
                            }
                            x = x.parentNode;
                        }
                    } else {
                        var zb = u[zf].getElementsByTagName( zr );
                    }
                    var zc = zb.length;
                    for (var zi = 0; zi < zc; zi++) {
                        zt.push( zb[zi] );
                    }
                }
                for (var zo = 1; zo < zq.length; zo++) {
                    var zp = zq[zo];
                    var zg = zp.charAt( 0 ) == '.';
                    var v = zp.substring( 1 );
                    for (var zf = 0; zf < zt.length; zf++) {
                        var zs = zt[zf];
                        if (!zs) {
                            continue;
                        }
                        if (zg) {
                            if (!d.hasClass( zs, v )) {
                                delete zt[zf];
                            }
                            continue;
                        } else {
                            var w = zp.slice( 1, zp.length - 1 );
                            if (w.indexOf( '=' ) == -1) {
                                if (zs.getAttribute( w ) === null) {
                                    delete zt[zf];
                                    continue;
                                }
                            } else {
                                var zk = w.split( '=' );
                                var s = zk[0];
                                var zv = zk[1];
                                zv = zv.slice( 1, zv.length - 1 );
                                if (zs.getAttribute( s ) != zv) {
                                    delete zt[zf];
                                    continue;
                                }
                            }
                        }
                    }
                }
                for (var zf = 0; zf < zt.length; zf++) {
                    if (zt[zf]) {
                        zj.push( zt[zf] );
                        if (zu) {
                            break;
                        }
                    }
                }
            }
            u = zj;
        }
        return u;
    }, getText : (function () {
        var r = document.createElement( 'div' ), s = r.textContent != null ? 'textContent' : 'innerText';
        return function (t) {
            if (!t) {
                return '';
            } else if (e.isTextNode( t )) {
                return t.data;
            } else {
                return t[s];
            }
        };
    })(), getSelection : function () {
        var s = window.getSelection, r = document.selection;
        if (s) {
            return s() + '';
        } else if (r) {
            return r.createRange().text;
        }
        return null;
    }, create : function (t, r, s) {
        t = document.createElement( t );
        if (r) {
            r = j( {}, r );
            if (r.style) {
                j( t.style, r.style );
                delete r.style;
            }
            for (var u in r) {
                if (u.toLowerCase().indexOf( 'on' ) == 0) {
                    if (!(typeof r[u] != 'function')) {
                        if (window.Event && Event.listen) {
                            Event.listen( t, u.substr( 2 ), r[u] );
                        } else {
                            t[u] = r[u];
                        }
                    }
                    delete r[u];
                }
            }
            j( t, r );
        }
        if (s != undefined) {
            e.setContent( t, s );
        }
        return t;
    }, prependContent : function (t, s) {
        if (!e.isNode( t )) {
            throw new Error( 'DOM.prependContent: reference element is not a node' );
        }
        var r = function (u) {
            if (t.firstChild) {
                t.insertBefore( u, t.firstChild );
            } else {
                t.appendChild( u );
            }
        };
        return e._addContent( s, r, t );
    }, insertAfter : function (t, s) {
        if (!e.isNode( t ) || !t.parentNode) {
            throw new Error( 'DOM.insertAfter: reference element is not a node' );
        }
        var r = function (u) {
            if (t.nextSibling) {
                t.parentNode.insertBefore( u, t.nextSibling );
            } else {
                t.parentNode.appendChild( u );
            }
        };
        return e._addContent( s, r, t.parentNode );
    }, insertBefore : function (s, t) {
        if (!e.isNode( t ) || !t.parentNode) {
            throw new Error( 'DOM.insertBefore: reference element is not a node or ' + 'does not have a parent.' );
        }
        var r = function (u) {
            t.parentNode.insertBefore( u, t );
        };
        return e._addContent( s, r, t.parentNode );
    }, setContent : function (s, r) {
        if (!e.isNode( s )) {
            throw new Error( 'DOM.setContent: reference element is not a node' );
        }
        e.empty( s );
        return e.appendContent( s, r );
    }, appendContent : function (t, s) {
        if (!e.isNode( t )) {
            throw new Error( 'DOM.appendContent: reference element is not a node' );
        }
        var r = function (u) {
            t.appendChild( u );
        };
        return e._addContent( s, r, t );
    }, replace : function (t, s) {
        if (!e.isNode( t ) || !t.parentNode) {
            throw new Error( 'DOM.replace: reference element must be a node with a' + ' parent' );
        }
        var r = function (u) {
            t.parentNode.replaceChild( u, t );
        };
        return e._addContent( s, r, t.parentNode );
    }, remove : function (r) {
        r = a( r );
        if (r.parentNode) {
            r.parentNode.removeChild( r );
        }
    }, empty : function (r) {
        r = a( r );
        while (r.firstChild) {
            e.remove( r.firstChild );
        }
    }, contains : function (s, r) {
        s = l( s );
        r = l( r );
        if (!s || !r) {
            return false;
        } else if (s === r) {
            return true;
        } else if (e.isTextNode( s )) {
            return false;
        } else if (e.isTextNode( r )) {
            return e.contains( s, r.parentNode );
        } else if (s.contains) {
            return s.contains( r );
        } else if (s.compareDocumentPosition) {
            return !!(s.compareDocumentPosition( r ) & 16);
        } else {
            return false;
        }
    }, getRootElement : function () {
        var r = null;
        if (window.Quickling && Quickling.isActive()) {
            r = l( 'content' );
        }
        return r || document.body;
    }, isNode : function (r) {
        return !!(r && (typeof Node == 'object' ? r instanceof Node : typeof r == "object" && typeof r.nodeType == 'number' && typeof r.nodeName == 'string'));
    }, isNodeOfType : function (s, t) {
        var u = c.createFrom( t ).join( '|' ).toUpperCase().split( '|' );
        var r = g.createFrom( u );
        return e.isNode( s ) && s.nodeName in r;
    }, isElementNode : function (r) {
        return e.isNode( r ) && r.nodeType == 1;
    }, isTextNode : function (r) {
        return e.isNode( r ) && r.nodeType == 3;
    }, _addContent : function (u, r, zd) {
        u = f.replaceJSONWrapper( u );
        if (u instanceof f && -1 == u.toString().indexOf( '<scr' + 'ipt' ) && '' == zd.innerHTML) {
            var x = q.ie();
            if (!x || (x > 7 && !e.isNodeOfType( zd, ['table', 'tbody', 'thead', 'tfoot', 'tr', 'select', 'fieldset'] ))) {
                var y = x ? "<em style=\"display:none;\">&nbsp;</em>" : "";
                zd.innerHTML = y + u;
                x && zd.removeChild( zd.firstChild );
                return c.createFrom( zd.childNodes );
            }
        } else if (e.isTextNode( zd )) {
            zd.data = u;
            return [u];
        }
        var za, v = [], s = [];
        var w = document.createDocumentFragment();
        if (!(u instanceof Array)) {
            u = [u];
        }
        for (var z = 0; z < u.length; z++) {
            za = f.replaceJSONWrapper( u[z] );
            if (za instanceof f) {
                s.push( za.getAction() );
                var zc = za.getNodes(), t;
                for (var zb = 0; zb < zc.length; zb++) {
                    t = (q.safari() || (q.ie() && za.ieCloneBug())) ? zc[zb] : zc[zb].cloneNode( true );
                    v.push( t );
                    w.appendChild( t );
                }
            } else if (g.isScalar( za )) {
                var ze = document.createTextNode( za );
                v.push( ze );
                w.appendChild( ze );
            } else if (e.isNode( za )) {
                v.push( za );
                w.appendChild( za );
            } else if (!(za instanceof Array)) {
                za !== null;
            }
        }
        r( w );
        for (var z = 0; z < s.length; z++) {
            s[z]();
        }
        return v;
    }, getDocumentScrollElement : function (r) {
        r = r || document;
        if (d.hasClass( r.documentElement, 'wrapped' )) {
            var s = r.getElementById( 'body' );
            if (s) {
                return s;
            }
        }
        return !(q.chrome() || q.safari()) && r.compatMode === 'CSS1Compat' ? r.documentElement : r.body;
    }, tx : i( p ), _tx : i( h )};

    function b (t, r, s) {
        if (typeof r != 'object' || e.isNode( r ) || r instanceof Array || f.isHTML( r )) {
            s = r;
            r = null;
        }
        return e.create( t, r, s );
    }

    m.$N = e.$N = b;
    m.DOM = n.exports = e;
}, 3 );
__e( "event-extensions", ["event-form-bubbling", "DataStore", "ObjectUtils", "parent", "copyProperties", "userAction", "SystemEvents", "dom"], function (l, r, p, k) {
    r( 'event-form-bubbling' );
    var d = r( 'DataStore' );
    var f = r( 'ObjectUtils' );
    var g = r( 'parent' );
    var j = r( 'copyProperties' );
    var t = r( 'userAction' );
    var h = r( 'SystemEvents' );
    var c = r( 'dom' );
    Event.DATASTORE_KEY = 'Event.listeners';
    if (!Event.prototype) {
        Event.prototype = {};
    }
    function b (v, w, u) {
        this.target = v;
        this.type = w;
        this.data = u;
    }

    b.prototype = {getData : function () {
        this.data = this.data || {};
        return this.data;
    }, stop : function () {
        this.cancelBubble = true;
        this.stopPropagation && this.stopPropagation();
        return this;
    }, prevent : function () {
        this.returnValue = false;
        this.preventDefault && this.preventDefault();
        return this;
    }, kill : function () {
        this.stop().prevent();
        return false;
    }, getTarget : function () {
        var u = this.target || this.srcElement;
        return u ? $( u ) : null;
    }};
    function a (u) {
        if (u instanceof b) {
            return u;
        }
        u = u || window.event || {};
        if (!u._inherits_from_prototype) {
            for (var w in Event.prototype) {
                try {
                    u[w] = Event.prototype[w];
                }
                catch (v) {
                }
            }
        }
        return u;
    }

    j( Event.prototype, {_inherits_from_prototype : true, getRelatedTarget : function () {
        var u = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
        return u ? $( u ) : null;
    }, getModifiers : function () {
        var u = {control : !!this.ctrlKey, shift : !!this.shiftKey, alt : !!this.altKey, meta : !!this.metaKey};
        u.access = ua.osx() ? u.control : u.alt;
        u.any = u.control || u.shift || u.alt || u.meta;
        return u;
    }} );
    j( Event.prototype, b.prototype );
    j( Event, {listen : function (v, zf, x, zb) {
        if (typeof v == 'string') {
            v = $( v );
        }
        if (typeof zb == 'undefined') {
            zb = Event.Priority.NORMAL;
        }
        if (typeof zf == 'object') {
            var w = {};
            for (var ze in zf) {
                w[ze] = Event.listen( v, ze, zf[ze], zb );
            }
            return w;
        }
        if (zf.match( /^on/i )) {
            throw new TypeError( "Bad event name `" + event + "': use `click', not `onclick'." );
        }
        if (v.nodeName == 'LABEL' && zf == 'click') {
            var za = v.getElementsByTagName( 'input' );
            v = za.length == 1 ? za[0] : v;
        } else if (v === window && zf === 'scroll') {
            var zd = c.getDocumentScrollElement();
            if (zd !== document.documentElement && zd !== document.body) {
                v = zd;
            }
        }
        var y = d.get( v, m, {} );
        if (s[zf]) {
            var u = s[zf];
            zf = u.base;
            x = u.wrap( x );
        }
        i( v, zf );
        var zg = y[zf];
        if (!(zb in zg)) {
            zg[zb] = [];
        }
        var z = zg[zb].length, zc = new e( x, zg[zb], z );
        zg[zb].push( zc );
        return zc;
    }, stop : function (u) {
        return a( u ).stop();
    }, prevent : function (u) {
        return a( u ).prevent();
    }, kill : function (u) {
        return a( u ).kill();
    }, getKeyCode : function (event) {
        event = a( event );
        if (!event) {
            return false;
        }
        switch (event.keyCode) {
            case 63232:
                return 38;
            case 63233:
                return 40;
            case 63234:
                return 37;
            case 63235:
                return 39;
            case 63272:
            case 63273:
            case 63275:
                return null;
            case 63276:
                return 33;
            case 63277:
                return 34;
        }
        if (event.shiftKey) {
            switch (event.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null;
            }
        }
        return event.keyCode;
    }, getPriorities : function () {
        if (!q) {
            var u = f.getValues( Event.Priority );
            u.sort( function (v, w) {
                return v - w;
            } );
            q = u;
        }
        return q;
    }, fire : function (x, z, u) {
        var v = new b( x, z, u );
        var y;
        do {
            var w = Event.__getHandler( x, z );
            if (w) {
                y = w( v );
            }
            x = x.parentNode;
        } while (x && y !== false && !v.cancelBubble);
        return y !== false;
    }, __fire : function (u, w, event) {
        var v = Event.__getHandler( u, w );
        if (v) {
            return v( a( event ) );
        }
    }, __getHandler : function (u, v) {
        return d.get( u, Event.DATASTORE_KEY + v );
    }} );
    var q = null, m = Event.DATASTORE_KEY;
    var n = function (u) {
        return function (v) {
            if (!c.contains( this, v.getRelatedTarget() )) {
                return u.call( this, v );
            }
        };
    };
    var s = {mouseenter : {base : 'mouseover', wrap : n}, mouseleave : {base : 'mouseout', wrap : n}};
    var i = function (u, za) {
        var v = 'on' + za;
        var y = o.bind( u );
        var x = d.get( u, m );
        if (za in x) {
            return;
        }
        x[za] = {};
        if (u.addEventListener) {
            u.addEventListener( za, y, false );
        } else if (u.attachEvent) {
            u.attachEvent( v, y );
        }
        d.set( u, m + za, y );
        if (u[v]) {
            var z = u === document.documentElement ? Event.Priority._BUBBLE : Event.Priority.TRADITIONAL;
            var w = u[v];
            u[v] = null;
            Event.listen( u, za, w, z );
        }
        if (u.nodeName === 'FORM' && za === 'submit') {
            Event.listen( u, za, Event.__bubbleSubmit.curry( u ), Event.Priority._BUBBLE );
        }
    };
    var o = function (event) {
        event = a( event );
        var zb = event.type;
        if (!d.get( this, m )) {
            throw new Error( "Bad listenHandler context." );
        }
        var zc = d.get( this, m )[zb];
        if (!zc) {
            throw new Error( "No registered handlers for `" + zb + "'." );
        }
        if (zb == 'click') {
            var w = g.byTag( event.getTarget(), 'a' );
            var zd = t( 'click', w, event ).set_namespace( 'evt_ext' );
            if (window.ArbiterMonitor) {
                ArbiterMonitor.initUA( zd, [w] );
            }
        }
        var y = Event.getPriorities();
        for (var x = 0; x < y.length; x++) {
            var z = y[x];
            if (z in zc) {
                var u = zc[z];
                for (var v = 0; v < u.length; v++) {
                    if (!u[v]) {
                        continue;
                    }
                    var za = u[v].fire( this, event );
                    if (za === false) {
                        return event.kill();
                    } else if (event.cancelBubble) {
                        event.stop();
                    }
                }
            }
        }
        return event.returnValue;
    };
    Event.Priority = {URGENT : -20, TRADITIONAL : -10, NORMAL : 0, _BUBBLE : 1000};
    function e (v, u, w) {
        this._handler = v;
        this._container = u;
        this._index = w;
    }

    e.prototype = {remove : function () {
        delete this._handler;
        delete this._container[this._index];
    }, fire : function (u, event) {
        var v = h.trapError( this._handler, function (w) {
            w.event_type = event.type;
            w.dom_element = u.name || u.id;
            w.category = 'eventhandler';
        } );
        return v.call( u, event );
    }};
    l.$E = k.$E = a;
}, 3 );
__e( "css", ["dom", "css-core", "copyProperties"], function (e, g, f, d) {
    var b = g( 'dom' );
    var a = g( 'css-core' );
    var c = g( 'copyProperties' );
    c( a, {shown : function (h) {
        return !a.hasClass( h, 'hidden_elem' );
    }, toggle : function (h) {
        a.conditionShow( h, !a.shown( h ) );
    }, setClass : function (i, h) {
        $( i ).className = h || '';
        return i;
    }, setStyle : function (h, i, j) {
        switch (i) {
            case 'opacity':
                h.style.opacity = j;
                h.style.filter = j !== '' ? 'alpha(opacity=' + j * 100 + ')' : '';
                break;
            case 'float':
                h.style.cssFloat = h.style.styleFloat = j;
                break;
            default:
                i = i.replace( /-(.)/g, function (k, l) {
                    return l.toUpperCase();
                } );
                h.style[i] = j;
        }
        return h;
    }, getStyle : function (i, k) {
        i = $( i );
        k = k.replace( /-(.)/g, function (l, m) {
            return m.toUpperCase();
        } );
        function j (l) {
            return l.replace( /([A-Z])/g, '-$1' ).toLowerCase();
        }

        if (window.getComputedStyle) {
            var h = window.getComputedStyle( i, null );
            if (h) {
                return h.getPropertyValue( j( k ) );
            }
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            var h = document.defaultView.getComputedStyle( i, null );
            if (h) {
                return h.getPropertyValue( j( k ) );
            }
            if (k == "display") {
                return "none";
            }
        }
        if (i.currentStyle) {
            return i.currentStyle[k];
        }
        return i.style && i.style[k];
    }, getStyleFloat : function (h, i) {
        return parseFloat( a.getStyle( h, i ), 10 );
    }, getOpacity : function (h) {
        h = $( h );
        var i = a.getStyle( h, 'filter' );
        var j = null;
        if (i && (j = /(\d+(?:\.\d+)?)/.exec( i ))) {
            return parseFloat( j.pop() ) / 100;
        } else if (i = a.getStyle( h, 'opacity' )) {
            return parseFloat( i );
        } else {
            return 1;
        }
    }, isFixed : function (h) {
        while (h && h !== document.documentElement) {
            if (a.getStyle( h, 'position' ) === 'fixed') {
                return true;
            }
            h = h.parentNode;
        }
        return false;
    }, getScrollParent : (function () {
        function h (i, k) {
            var j = a.getStyle( i, k );
            return (j === 'auto' || j === 'scroll');
        }

        return function (i) {
            if (!i) {
                return null;
            }
            while (i !== document.body) {
                if (h( i, 'overflow' ) || h( i, 'overflowY' ) || h( i, 'overflowX' )) {
                    return i;
                }
                i = i.parentNode;
            }
            return window;
        };
    })()} );
    f.exports = a;
}, 3 );
__e( "AsyncDOM", ["css", "dom", "onload"], function (f, h, g, e) {
    var b = h( "css" );
    var c = h( "dom" );
    var d = h( "onload" );
    var a = {invoke : function (n, p) {
        for (var l = 0; l < n.length; ++l) {
            var m = n[l];
            var i = m[0];
            var q = m[1];
            var o = m[2];
            var j = m[3];
            p = (o && p) || document.documentElement;
            var k = c.scry( p, q )[0];
            switch (i) {
                case 'eval':
                    (new Function( j )).apply( k );
                    break;
                case 'hide':
                    b.hide( k );
                    break;
                case 'show':
                    b.show( k );
                    break;
                case 'setContent':
                    c.setContent( k, j );
                    break;
                case 'appendContent':
                    c.appendContent( k, j );
                    break;
                case 'prependContent':
                    c.prependContent( k, j );
                    break;
                case 'insertAfter':
                    c.insertBefore( k, j );
                    break;
                case 'insertBefore':
                    c.insertBefore( j, k );
                    break;
                case 'remove':
                    c.remove( k );
                    break;
                case 'replace':
                    c.replace( k, j );
                    break;
                default:
            }
        }
    }};
    g.exports = a;
} );
__e( "AsyncResponse", ["Env", "copyProperties", "tx"], function (e, g, f, d) {
    var b = g( "Env" );
    var c = g( "copyProperties" );
    e.tx = g( "tx" );
    function a (i, h) {
        c( this, {error : 0, errorSummary : null, errorDescription : null, onload : null, replay : false, payload : h || null, request : i || null, silentError : false, is_last : true} );
        return this;
    }

    c( a, {defaultErrorHandler : function (i) {
        try {
            if (!i.silentError) {
                a.verboseErrorHandler( i );
            } else {
                i.logErrorByGroup( 'silent', 10 );
            }
        }
        catch (h) {
            alert( i );
        }
    }, verboseErrorHandler : function (i) {
        try {
            var summary = i.getErrorSummary();
            var desc = i.getErrorDescription();
            i.logErrorByGroup( 'popup', 10 );
            if (i.silentError && desc == '') {
                desc = "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.";
            }
            Bootloader.loadComponents( 'dialog', function () {
                new Dialog().setTitle( summary ).setBody( desc ).setButtons( [Dialog.OK] ).setModal( true ).setCausalElement( this.relativeTo ).show();
            } );
        }
        catch (h) {
            alert( i );
        }
    }} );
    c( a.prototype, {getRequest : function () {
        return this.request;
    }, getPayload : function () {
        return this.payload;
    }, getError : function () {
        return this.error;
    }, getErrorSummary : function () {
        return this.errorSummary;
    }, setErrorSummary : function (h) {
        h = (h === undefined ? null : h);
        this.errorSummary = h;
        return this;
    }, getErrorDescription : function () {
        return this.errorDescription;
    }, getErrorIsWarning : function () {
        return this.errorIsWarning;
    }, logError : function (h, j) {
        if (window.send_error_signal) {
            var i = {err_code : this.error, vip : (b.vip || '-')};
            if (j !== undefined) {
                i.duration = j.duration;
                i.xfb_ip = j.xfb_ip;
            }
            var k = this.request.getURI();
            i.path = k || '-';
            i.aid = this.request.userActionID;
            if (k && k.indexOf( 'scribe_endpoint.php' ) != -1) {
                h = 'async_error_double';
            }
            send_error_signal( h, JSON.stringify( i ) );
        }
    }, logErrorByGroup : function (i, h) {
        if (Math.floor( Math.random() * h ) == 0) {
            if (this.error == 1357010 || this.error < 15000) {
                this.logError( 'async_error_oops_' + i );
            } else {
                this.logError( 'async_error_logic_' + i );
            }
        }
    }} );
    f.exports = a;
} );
__e( "cookie", ["Env"], function (d, f, e, c) {
    var b = f( 'Env' );
    var a = {set : function (g, h, j, k, l) {
        if (b.no_cookies && g != 'tpa') {
            return;
        }
        var i;
        if (j) {
            var m = new Date();
            i = new Date();
            i.setTime( m.getTime() + j );
        }
        document.cookie = g + "=" + encodeURIComponent( h ) + "; " + (j ? "expires=" + i.toGMTString() + "; " : "") + "path=" + (k || '/') + "; domain=" + window.location.hostname.replace( /^.*(\.facebook\..*)$/i, '$1' ) + (l ? "; secure" : "");
    }, clear : function (g) {
        document.cookie = g + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; " + "path=/; domain=" + window.location.hostname.replace( /^.*(\.facebook\..*)$/i, '$1' );
    }, get : function (j) {
        var k = j + "=";
        var h = document.cookie.split( ';' );
        for (var i = 0; i < h.length; i++) {
            var g = h[i];
            while (g.charAt( 0 ) == ' ') {
                g = g.substring( 1, g.length );
            }
            if (g.indexOf( k ) === 0) {
                return decodeURIComponent( g.substring( k.length, g.length ) );
            }
        }
        return null;
    }};
    e.exports = a;
    d.getCookie = a.get;
    d.setCookie = a.set;
    d.clearCookie = a.clear;
}, 3 );
__e( "JSCC", ["array-extensions", "util", "isEmpty"], function (f, k, j, d) {
    k( "array-extensions" );
    var b = k( "util" );
    var h = k( "isEmpty" );
    var e = {};
    var i = {};

    function c (m) {
        var n;
        var l = false;
        return function () {
            if (!l) {
                n = m();
                l = true;
            }
            return n;
        };
    }

    function g (l, n) {
        if (h( l )) {
            return;
        }
        for (var m in l) {
            e[m] = c( l[m] );
            if (n) {
                if (!i[n]) {
                    i[n] = [];
                }
                i[n].push( m );
            }
        }
    }

    var a = {get : function (l) {
        !e[l];
        return e[l]();
    }, init : function (l) {
        g( l );
    }, initForPagelet : function (m, l) {
        g( l, m );
    }, clearForPagelet : function (n) {
        if (i[n]) {
            for (var l = 0; l < i[n].length; l++) {
                var m = i[n][l];
                delete e[m];
            }
            delete i[n];
        }
    }};
    j.exports = a;
} );
__e( "uri", ["dom", "copyProperties"], function (e, g, f, d) {
    var a = g( 'dom' );
    var c = g( 'copyProperties' );

    function b (h) {
        if (!(this instanceof b)) {
            return new b( h || window.location.href );
        }
        this.parse( h || '' );
    }

    c( b, {getRequestURI : function (h, i) {
        h = h === undefined || h;
        if (h && window.PageTransitions && PageTransitions.isInitialized()) {
            return PageTransitions.getCurrentURI( !!i ).getQualifiedURI();
        } else {
            return new b( window.location.href );
        }
    }, getMostRecentURI : function () {
        if (window.PageTransitions && PageTransitions.isInitialized()) {
            return PageTransitions.getMostRecentURI().getQualifiedURI();
        } else {
            return new b( window.location.href );
        }
    }, getNextURI : function () {
        if (window.PageTransitions && PageTransitions.isInitialized()) {
            return PageTransitions.getNextURI().getQualifiedURI();
        } else {
            return new b( window.location.href );
        }
    }, expression : /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/, arrayQueryExpression : /^(\w+)((?:\[\w*\])+)=?(.*)/, explodeQuery : function (n) {
        if (!n) {
            return {};
        }
        var o = {};
        n = n.replace( /%5B/ig, '[' ).replace( /%5D/ig, ']' );
        n = n.split( '&' );
        for (var i = 0, k = n.length; i < k; i++) {
            var l = n[i].match( b.arrayQueryExpression );
            if (!l) {
                var q = n[i].split( '=' );
                o[b.decodeComponent( q[0] )] = q[1] === undefined ? null : b.decodeComponent( q[1] );
            } else {
                var j = l[2].split( /\]\[|\[|\]/ ).slice( 0, -1 );
                var m = l[1];
                var r = b.decodeComponent( l[3] || '' );
                j[0] = m;
                var p = o;
                for (var h = 0; h < j.length - 1; h++) {
                    if (j[h]) {
                        if (p[j[h]] === undefined) {
                            if (j[h + 1] && !j[h + 1].match( /^\d+$/ )) {
                                p[j[h]] = {};
                            } else {
                                p[j[h]] = [];
                            }
                        }
                        p = p[j[h]];
                    } else {
                        if (j[h + 1] && !j[h + 1].match( /^\d+$/ )) {
                            p.push( {} );
                        } else {
                            p.push( [] );
                        }
                        p = p[p.length - 1];
                    }
                }
                if (p instanceof Array && j[j.length - 1] === '') {
                    p.push( r );
                } else {
                    p[j[j.length - 1]] = r;
                }
            }
        }
        return o;
    }, implodeQuery : function (m, l, h) {
        l = l || '';
        if (h === undefined) {
            h = true;
        }
        var n = [];
        if (m === null || m === undefined) {
            n.push( h ? b.encodeComponent( l ) : l );
        } else if (m instanceof Array) {
            for (var j = 0; j < m.length; ++j) {
                try {
                    if (m[j] !== undefined) {
                        n.push( b.implodeQuery( m[j], l ? (l + '[' + j + ']') : j ) );
                    }
                }
                catch (i) {
                }
            }
        } else if (typeof(m) == 'object') {
            if (a.isNode( m )) {
                n.push( '{node}' );
            } else {
                for (var k in m) {
                    try {
                        if (m[k] !== undefined) {
                            n.push( b.implodeQuery( m[k], l ? (l + '[' + k + ']') : k ) );
                        }
                    }
                    catch (i) {
                    }
                }
            }
        } else if (h) {
            n.push( b.encodeComponent( l ) + '=' + b.encodeComponent( m ) );
        } else {
            n.push( l + '=' + m );
        }
        return n.join( '&' );
    }, encodeComponent : function (k) {
        var j = String( k ).split( /([\[\]])/ );
        for (var h = 0, i = j.length; h < i; h += 2) {
            j[h] = encodeURIComponent( j[h] );
        }
        return j.join( '' );
    }, decodeComponent : function (h) {
        return decodeURIComponent( h.replace( /\+/g, ' ' ) );
    }, INVALID_DOMAIN : 'invalid.invalid', sanitizeDomain : function (h) {
        var i = new RegExp( '[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f' + '\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF' + '\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]' );
        if (i.test( h )) {
            return b.INVALID_DOMAIN;
        } else {
            return h;
        }
    }} );
    c( b.prototype, {parse : function (i) {
        var h = i.toString().match( b.expression );
        c( this, {protocol : h[3] || '', domain : b.sanitizeDomain( h[4] || '' ), port : h[6] || '', path : h[7] || '', query_s : h[9] || '', fragment : h[11] || ''} );
        return this;
    }, setProtocol : function (h) {
        this.protocol = h;
        return this;
    }, getProtocol : function () {
        return this.protocol;
    }, setQueryData : function (h) {
        this.query_s = b.implodeQuery( h );
        return this;
    }, addQueryData : function (h) {
        return this.setQueryData( c( this.getQueryData(), h ) );
    }, removeQueryData : function (i) {
        if (!(i instanceof Array)) {
            i = [i];
        }
        var k = this.getQueryData();
        for (var h = 0, j = i.length; h < j; ++h) {
            delete k[i[h]];
        }
        return this.setQueryData( k );
    }, getQueryData : function () {
        return b.explodeQuery( this.query_s );
    }, setFragment : function (h) {
        this.fragment = h;
        return this;
    }, getFragment : function () {
        return this.fragment;
    }, setDomain : function (h) {
        this.domain = b.sanitizeDomain( h );
        return this;
    }, getDomain : function () {
        return this.domain;
    }, setPort : function (h) {
        this.port = h;
        return this;
    }, getPort : function () {
        return this.port;
    }, setPath : function (h) {
        this.path = h;
        return this;
    }, getPath : function () {
        return this.path.replace( /^\/+/, '/' );
    }, isEmpty : function () {
        return !(this.path || this.protocol || this.domain || this.port || this.query_s || this.fragment);
    }, toString : function () {
        var h = '';
        this.protocol && (h += this.protocol + '://');
        this.domain && (h += this.domain);
        this.port && (h += ':' + this.port);
        if (this.domain && !this.path) {
            h += '/';
        }
        this.path && (h += this.path);
        this.query_s && (h += '?' + this.query_s);
        this.fragment && (h += '#' + this.fragment);
        return h;
    }, valueOf : function () {
        return this.toString();
    }, isFacebookURI : function () {
        if (!b._facebookURIRegex) {
            b._facebookURIRegex = new RegExp( '(^|\\.)facebook\\.com([^.]*)$', 'i' );
        }
        return (!this.domain || b._facebookURIRegex.test( this.domain ));
    }, isQuicklingEnabled : function () {
        return window.Quickling && Quickling.isActive() && Quickling.isPageActive( this );
    }, getRegisteredDomain : function () {
        if (!this.domain) {
            return '';
        }
        if (!this.isFacebookURI()) {
            return null;
        }
        var i = this.domain.split( '.' );
        var h = i.indexOf( 'facebook' );
        return i.slice( h ).join( '.' );
    }, getUnqualifiedURI : function () {
        return new b( this ).setProtocol( null ).setDomain( null ).setPort( null );
    }, getQualifiedURI : function () {
        var i = new b( this );
        if (!i.getDomain()) {
            var h = b();
            i.setProtocol( h.getProtocol() ).setDomain( h.getDomain() ).setPort( h.getPort() );
        }
        return i;
    }, isSameOrigin : function (h) {
        var i = h || window.location.href;
        if (!(i instanceof b)) {
            i = new b( i.toString() );
        }
        if (this.getProtocol() && this.getProtocol() != i.getProtocol()) {
            return false;
        }
        if (this.getDomain() && this.getDomain() != i.getDomain()) {
            return false;
        }
        return true;
    }, go : function (h) {
        goURI( this, h );
    }, setSubdomain : function (i) {
        var j = new b( this ).getQualifiedURI();
        var h = j.getDomain().split( '.' );
        if (h.length <= 2) {
            h.unshift( i );
        } else {
            h[0] = i;
        }
        return j.setDomain( h.join( '.' ) );
    }, getSubdomain : function () {
        if (!this.getDomain()) {
            return '';
        }
        var h = this.getDomain().split( '.' );
        if (h.length <= 2) {
            return '';
        } else {
            return h[0];
        }
    }, setSecure : function (h) {
        return this.setProtocol( h ? 'https' : 'http' );
    }, isSecure : function () {
        return this.getProtocol() == 'https';
    }} );
    e.URI = f.exports = b;
}, 3 );
__e( "goURI", [], function (b, e, d, a) {
    function c (g, f) {
        g = g.toString();
        if (!f && b.PageTransitions && PageTransitions.isInitialized()) {
            PageTransitions.go( g );
        } else if (window.location.href == g) {
            window.location.reload();
        } else {
            window.location.href = g;
        }
    }

    d.exports = c;
} );
__e( "invokeCallbacks", [], function (b, e, d, a) {
    function c (g, i) {
        if (g) {
            for (var h = 0; h < g.length; h++) {
                try {
                    (new Function( g[h] )).apply( i );
                }
                catch (f) {
                }
            }
        }
    }

    d.exports = c;
} );
__e( "AsyncRequest", ["array-extensions", "event-extensions", "json", "AsyncDOM", "AsyncResponse", "bootloader", "cookie", "css-core", "dom", "Env", "JSCC", "parent", "uri", "util", "bind", "copyProperties", "evalGlobal", "goURI", "invokeCallbacks", "isEmpty"], function (global, require, module, exports) {
    require( "array-extensions" );
    require( "event-extensions" );
    require( "json" );
    var AsyncDOM = require( "AsyncDOM" );
    var AsyncResponse = require( "AsyncResponse" );
    var Bootloader = require( "bootloader" );
    var Cookie = require( "cookie" );
    var CSS = require( "css-core" );
    var DOM = require( "dom" );
    var Env = require( "Env" );
    var JSCC = require( "JSCC" );
    var Parent = require( "parent" );
    var URI = require( "uri" );
    var Util = require( "util" );
    var bind = require( "bind" );
    var copyProperties = require( "copyProperties" );
    var evalGlobal = require( "evalGlobal" );
    var goURI = require( "goURI" );
    var invokeCallbacks = require( "invokeCallbacks" );
    var isEmpty = require( "isEmpty" );

    function AsyncRequest (uri) {
        var dispatchResponse = bind( this, function (asyncResponse) {
            try {
                this.clearStatusIndicator();
                if (!this.isRelevant()) {
                    invokeErrorHandler( 1010 );
                    return;
                }
                if (this.initialHandler( asyncResponse ) !== false) {
                    clearTimeout( this.timer );
                    if (asyncResponse.jscc_map) {
                        var jscc_map = eval( asyncResponse.jscc_map );
                        JSCC.init( jscc_map );
                    }
                    if (this.handler) {
                        try {
                            var suppress_onload = this.handler( asyncResponse );
                        }
                        catch (exception) {
                            asyncResponse.is_last && this.finallyHandler( asyncResponse );
                            throw exception;
                        }
                    }
                    if (suppress_onload !== AsyncRequest.suppressOnloadToken) {
                        var domOps = asyncResponse.domops;
                        if (domOps) {
                            AsyncDOM.invoke( domOps, this.getRelativeTo() );
                        }
                        asyncResponse.jscalls && invokeCallbacks( [asyncResponse.jscalls] );
                        var onload = asyncResponse.onload;
                        if (onload) {
                            for (var ii = 0; ii < onload.length; ii++) {
                                try {
                                    (new Function( onload[ii] )).apply( this );
                                }
                                catch (exception) {
                                }
                            }
                        }
                        if (this.lid) {
                            Arbiter.inform( 'tti_ajax', {s : this.lid, d : [this._sendTimeStamp || 0, (this._sendTimeStamp && this._responseTime) ? (this._responseTime - this._sendTimeStamp) : 0]}, Arbiter.BEHAVIOR_EVENT );
                        }
                        var onafterload = asyncResponse.onafterload;
                        if (onafterload) {
                            for (var ii = 0; ii < onafterload.length; ii++) {
                                try {
                                    (new Function( onafterload[ii] )).apply( this );
                                }
                                catch (exception) {
                                }
                            }
                        }
                    }
                    asyncResponse.is_last && this.finallyHandler( asyncResponse );
                }
            }
            catch (exception) {
            }
        } );
        var dispatchErrorResponse = bind( this, function (asyncResponse, isTransport) {
            try {
                this.clearStatusIndicator();
                var async_error = asyncResponse.getError();
                if (this._sendTimeStamp) {
                    var _duration = Date.now() - this._sendTimeStamp;
                    var xfb_ip = this._xFbServer || '-';
                    asyncResponse.logError( 'async_error', {duration : _duration, xfb_ip : xfb_ip} );
                } else {
                    asyncResponse.logError( 'async_error' );
                }
                if ((!this.isRelevant()) || async_error === 1010) {
                    return;
                }
                if (async_error == 1357008 || async_error == 1357007 || async_error == 1442002 || async_error == 1357001) {
                    var is_confirmation = false;
                    if (async_error == 1357008 || async_error == 1357007) {
                        is_confirmation = true;
                    }
                    var payload = asyncResponse.getPayload();
                    this._displayServerDialog( payload.__dialog, is_confirmation );
                } else if (this.initialHandler( asyncResponse ) !== false) {
                    clearTimeout( this.timer );
                    try {
                        if (isTransport) {
                            this.transportErrorHandler( asyncResponse );
                        } else {
                            this.errorHandler( asyncResponse );
                        }
                    }
                    catch (exception) {
                        this.finallyHandler( asyncResponse );
                        throw exception;
                    }
                    this.finallyHandler( asyncResponse );
                }
            }
            catch (exception) {
            }
        } );
        var _interpretTransportResponse = bind( this, function () {
            if (this.getOption( 'suppressEvaluation' )) {
                var r = new AsyncResponse( this, this.transport );
                return {asyncResponse : r};
            }
            var _sendError = function (p, error_code, str) {
                if (!window.send_error_signal) {
                    return;
                }
                if (this._xFbServer) {
                    error_code = '1008_' + error_code;
                } else {
                    error_code = '1012_' + error_code;
                }
                send_error_signal( 'async_xport_resp', error_code + ':' + (this._xFbServer || '-') + ':' + p.getURI() + ':' + str.length + ':' + str.substr( 0, 1600 ) );
            };
            var shield = "for (;;);";
            var shieldlen = shield.length;
            var text = this.transport.responseText;
            if (text.length <= shieldlen) {
                _sendError( this, 'empty', text );
                return {transportError : 'Response too short on async to ' + this.getURI()};
            }
            var offset = 0;
            while (text.charAt( offset ) == " " || text.charAt( offset ) == "\n") {
                offset++;
            }
            offset && text.substring( offset, offset + shieldlen ) == shield;
            var safeResponse = text.substring( offset + shieldlen );
            try {
                var response = eval( '(' + safeResponse + ')' );
            }
            catch (exception) {
                _sendError( this, 'excep', text );
                return {transportError : 'eval() failed on async to ' + this.getURI()};
            }
            return interpretResponse( response );
        } );
        var interpretResponse = bind( this, function (response) {
            if (response.redirect) {
                return {redirect : response.redirect};
            }
            var r = new AsyncResponse( this );
            if (response.__ar != 1) {
                r.payload = response;
            } else {
                copyProperties( r, response );
                if (response.tplts) {
                    if (window.DynaTemplate) {
                        DynaTemplate.registerTemplates( response.tplts );
                    }
                }
            }
            return {asyncResponse : r};
        } );
        var invokeResponseHandler = bind( this, function (interp) {
            if (typeof(interp.redirect) != 'undefined') {
                (function () {
                    this.setURI( interp.redirect ).send();
                }).bind( this ).defer();
                return;
            }
            if (this.handler || this.errorHandler || this.transportErrorHandler) {
                if (typeof(interp.asyncResponse) != 'undefined') {
                    var r = interp.asyncResponse;
                    if (!this.isRelevant()) {
                        invokeErrorHandler( 1010 );
                        return;
                    }
                    if (r.inlinejs) {
                        evalGlobal( r.inlinejs );
                    }
                    if (r.lid) {
                        this._responseTime = Date.now();
                        if (window.CavalryLogger) {
                            this.cavalry = CavalryLogger.getInstance( r.lid );
                        }
                        this.lid = r.lid;
                    }
                    if (r.getError() && !r.getErrorIsWarning()) {
                        var fn = dispatchErrorResponse;
                    } else {
                        var fn = dispatchResponse;
                    }
                    Bootloader.setResourceMap( r.resource_map );
                    if (r.bootloadable) {
                        Bootloader.enableBootload( r.bootloadable );
                    }
                    fn = fn.shield( null, r );
                    fn = fn.defer.bind( fn );
                    var is_transitional = false;
                    if (this.preBootloadHandler) {
                        is_transitional = this.preBootloadHandler( r );
                    }
                    r.css = r.css || [];
                    r.js = r.js || [];
                    Bootloader.loadResources( r.css.concat( r.js ), fn, is_transitional, this.getURI() );
                } else if (typeof(interp.transportError) != 'undefined') {
                    if (this._xFbServer) {
                        invokeErrorHandler( 1008 );
                    } else {
                        invokeErrorHandler( 1012 );
                    }
                } else {
                    invokeErrorHandler( 1007 );
                }
            }
        } );
        var invokeErrorHandler = bind( this, function (explicitError) {
            try {
                if (!window.loaded && !this.getOption( 'handleErrorAfterUnload' )) {
                    return;
                }
            }
            catch (ex) {
                return;
            }
            var r = new AsyncResponse( this );
            var err;
            try {
                err = explicitError || this.transport.status || 1004;
            }
            catch (ex) {
                err = 1005;
            }
            if (this._requestAborted) {
                err = 1011;
            }
            try {
                if (this.responseText == '') {
                    err = 1002;
                }
            }
            catch (ignore) {
            }
            if (this.transportErrorHandler) {
                var desc, summary;
                var silent = true;
                if (false === navigator.onLine) {
                    summary = "No network connection";
                    desc = "Your browser appears to be offline. Please check your Internet connection and try again.";
                    err = 1006;
                } else if (err >= 300 && err <= 399) {
                    summary = "Redirection";
                    desc = "Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload. ";
                    redir_url = this.transport.getResponseHeader( "Location" );
                    if (redir_url) {
                        goURI( redir_url, true );
                    }
                    silent = true;
                } else {
                    summary = "Oops!";
                    desc = "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.";
                }
                !this.getOption( 'suppressErrorAlerts' );
                copyProperties( r, {error : err, errorSummary : summary, errorDescription : desc, silentError : silent} );
                dispatchErrorResponse( r, true );
            }
        } );
        var handleResponse = function (response) {
            var asyncResponse = this.interpretResponse( response );
            this.invokeResponseHandler( asyncResponse );
        };
        var onStateChange = function () {
            try {
                if (this.transport.readyState == 4) {
                    AsyncRequest._inflightPurge();
                    try {
                        if (typeof(this.transport.getResponseHeader) != 'undefined' && this.transport.getResponseHeader( 'X-FB-Server' )) {
                            this._xFbServer = this.transport.getResponseHeader( 'X-FB-Server' );
                        }
                    }
                    catch (ex) {
                    }
                    if (this.transport.status >= 200 && this.transport.status < 300) {
                        invokeResponseHandler( _interpretTransportResponse() );
                    } else if (ua.safari() && (typeof(this.transport.status) == 'undefined')) {
                        invokeErrorHandler( 1002 );
                    } else if (window.Env && window.Env.retry_ajax_on_network_error && this.transport.status in {0 : 1, 12029 : 1, 12030 : 1, 12031 : 1, 12152 : 1} && this.remainingRetries > 0) {
                        --this.remainingRetries;
                        delete this.transport;
                        this.send( true );
                        return;
                    } else {
                        invokeErrorHandler();
                    }
                    if (this.getOption( 'asynchronous' ) !== false) {
                        delete this.transport;
                    }
                }
            }
            catch (exception) {
                try {
                    if (!window.loaded) {
                        return;
                    }
                }
                catch (ex) {
                    return;
                }
                delete this.transport;
                if (this.remainingRetries > 0) {
                    --this.remainingRetries;
                    this.send( true );
                } else {
                    !this.getOption( 'suppressErrorAlerts' );
                    if (window.send_error_signal) {
                        send_error_signal( 'async_xport_resp', '1007:' + (this._xFbServer || '-') + ':' + this.getURI() + ':' + exception.message );
                    }
                    invokeErrorHandler( 1007 );
                }
            }
        };
        var onJSONPResponse = function (data, more_chunked_response) {
            var is_first = (this.is_first === undefined);
            this.is_first = is_first;
            if (this.transportIframe && !more_chunked_response) {
                if (this.cavalry) {
                    this.cavalry.collectBrowserTiming( this.transportIframe.contentWindow );
                }
                (function (x) {
                    document.body.removeChild( x );
                }).bind( null, this.transportIframe ).defer();
            }
            if (ua.ie() >= 9 && window.JSON) {
                data = window.JSON.parse( window.JSON.stringify( data ) );
            }
            var r = this.interpretResponse( data );
            r.asyncResponse.is_first = is_first;
            r.asyncResponse.is_last = !more_chunked_response;
            this.invokeResponseHandler( r );
            return more_chunked_response;
        };
        copyProperties( this, {onstatechange : onStateChange, onjsonpresponse : onJSONPResponse, invokeResponseHandler : invokeResponseHandler, interpretResponse : interpretResponse, handleResponse : handleResponse, transport : null, method : 'POST', uri : '', timeout : null, timer : null, initialHandler : bagofholding, handler : null, errorHandler : null, transportErrorHandler : null, timeoutHandler : null, finallyHandler : bagofholding, serverDialogCancelHandler : bagofholding, relativeTo : null, statusElement : null, statusClass : '', data : {}, file : null, context : {}, readOnly : false, writeRequiredParams : ['post_form_id'], remainingRetries : 0, option : {asynchronous : true, suppressErrorHandlerWarning : false, suppressEvaluation : false, suppressErrorAlerts : false, retries : 0, jsonp : false, bundle : false, useIframeTransport : false, tfbEndpoint : true, handleErrorAfterUnload : false}, userActionID : '-'} );
        this.errorHandler = AsyncResponse.defaultErrorHandler;
        this.transportErrorHandler = bind( this, 'errorHandler' );
        if (uri != undefined) {
            this.setURI( uri );
        }
        return this;
    }

    Arbiter.subscribe( "page_transition", function (type, message) {
        AsyncRequest._id_threshold = message.id;
    } );
    copyProperties( AsyncRequest, {receiveJSONPResponse : function (id, data, more_chunked_response) {
        if (this._JSONPReceivers[id]) {
            if (!this._JSONPReceivers[id]( data, more_chunked_response )) {
                delete this._JSONPReceivers[id];
            }
        } else if (window.logJSError && !more_chunked_response) {
            var uri = (data.payload && data.payload.uri) || '';
            logJSError( 'ajax', {error : 'UnexpectedJsonResponse', extra : {id : id, uri : uri}} );
        }
    }, _bundleRequest : function (request) {
        if (request.getOption( 'jsonp' ) || request.getOption( 'useIframeTransport' )) {
            request.setOption( 'bundle', false );
            return false;
        } else if (!request.uri.isFacebookURI()) {
            request.setOption( 'bundle', false );
            return false;
        } else if (!request.getOption( 'asynchronous' )) {
            request.setOption( 'bundle', false );
            return false;
        }
        var path = request.uri.getPath();
        if (!AsyncRequest._bundleTimer) {
            AsyncRequest._bundleTimer = setTimeout( function () {
                AsyncRequest._sendBundledRequests();
            }, 0 );
        }
        AsyncRequest._allBundledRequests.push( [path, request] );
        return true;
    }, _sendBundledRequests : function () {
        clearTimeout( AsyncRequest._bundleTimer );
        AsyncRequest._bundleTimer = null;
        var bundled_requests = AsyncRequest._allBundledRequests;
        AsyncRequest._allBundledRequests = [];
        if (bundled_requests.length == 1) {
            var request = bundled_requests[0][1];
            request.setOption( 'bundle', false ).send();
            return request;
        }
        if (bundled_requests.length === 0) {
            return null;
        }
        var data = [];
        for (var ii = 0; ii < bundled_requests.length; ii++) {
            data.push( [bundled_requests[ii][0], URI.implodeQuery( bundled_requests[ii][1].data )] );
        }
        var query_data = {data : data};
        var request = new AsyncRequest();
        request.setURI( '/ajax/proxy.php' ).setData( query_data ).setMethod( 'POST' ).setInitialHandler( bagof( true ) ).setAllowCrossPageTransition( true ).setHandler(
            function (r) {
                var payload = r.getPayload();
                var responses = payload.responses;
                if (responses.length != bundled_requests.length) {
                    return;
                } else {
                    for (var ii = 0; ii < bundled_requests.length; ii++) {
                        var path = bundled_requests[ii][0];
                        var request = bundled_requests[ii][1];
                        request.id = this.id;
                        if (responses[ii][0] != path) {
                            request.invokeResponseHandler( {transportError : 'Wrong response order in bundled request to ' + path} );
                            continue;
                        }
                        var asyncResponse = request.interpretResponse( responses[ii][1] );
                        request.invokeResponseHandler( asyncResponse );
                    }
                }
            } ).setTransportErrorHandler(
            function (response) {
                var paths = [];
                var interp = {transportError : response.errorDescription};
                for (var ii = 0; ii < bundled_requests.length; ii++) {
                    var path = bundled_requests[ii][0];
                    var request = bundled_requests[ii][1];
                    paths.push( path );
                    request.id = this.id;
                    request.invokeResponseHandler( interp );
                }
            } ).send();
        return request;
    }, bootstrap : function (href, elem, is_post) {
        var method = 'GET';
        var readonly = true;
        var data = {};
        if (is_post || elem && (elem.rel == 'async-post' || elem.getAttribute && elem.getAttribute( 'forcemethod' ) == 'post')) {
            method = 'POST';
            readonly = false;
            if (href) {
                href = URI( href );
                data = href.getQueryData();
                href.setQueryData( {} );
            }
        }
        var status_elem = Parent.byClass( elem, 'stat_elem' ) || elem;
        if (status_elem && CSS.hasClass( status_elem, 'async_saving' )) {
            return false;
        }
        var async = new AsyncRequest( href ).setReadOnly( readonly ).setMethod( method ).setData( data ).setNectarModuleDataSafe( elem ).setRelativeTo( elem ).setHandler(
            function (response) {
                Event.fire( elem, 'success', {response : response} );
            } ).setErrorHandler( function (response) {
                if (Event.fire( elem, 'error', {response : response} ) !== false) {
                    AsyncResponse.defaultErrorHandler( response );
                }
        } );
        if (status_elem) {
            async.setStatusElement( status_elem );
            var status_class = status_elem.getAttribute( 'data-status-class' );
            status_class && async.setStatusClass( status_class );
        }
        async.send();
        return false;
    }, post : function (href, data) {
        new AsyncRequest( href ).setReadOnly( false ).setMethod( 'POST' ).setData( data ).send();
        return false;
    }, getLastId : function () {
        return AsyncRequest._last_id;
    }, _JSONPReceivers : {}, _allBundledRequests : [], _bundleTimer : null, suppressOnloadToken : {}, _last_id : 2, _id_threshold : 2, _inflight : [], _inflightAdd : bagofholding, _inflightPurge : bagofholding, _inflightEnable : function () {
        if (ua.ie()) {
            copyProperties( AsyncRequest, {_inflightAdd : function (ar) {
                this._inflight.push( ar );
            }, _inflightPurge : function () {
                AsyncRequest._inflight = AsyncRequest._inflight.filter( function (ar) {
                    return ar.transport && ar.transport.readyState < 4;
                } );
            }} );
            onunloadRegister( function () {
                AsyncRequest._inflight.each( function (ar) {
                    if (ar.transport && ar.transport.readyState < 4) {
                        ar.transport.abort();
                        delete ar.transport;
                    }
                } );
            } );
        }
    }} );
    copyProperties( AsyncRequest.prototype, {setMethod : function (m) {
        this.method = m.toString().toUpperCase();
        return this;
    }, getMethod : function () {
        return this.method;
    }, setData : function (obj) {
        this.data = obj;
        return this;
    }, setFile : function (file) {
        this.file = file;
        return this;
    }, getData : function () {
        return this.data;
    }, setContextData : function (key, value, enabled) {
        enabled = enabled === undefined ? true : enabled;
        if (enabled) {
            this.context['_log_' + key] = value;
        }
        return this;
    }, _setUserActionID : function () {
        var ue = window.ArbiterMonitor && ArbiterMonitor.getUE() || '-';
        this.userActionID = (window.EagleEye && EagleEye.getSessionID() || '-') + '/' + ue;
    }, setURI : function (uri) {
        var uri_obj = URI( uri );
        if (this.getOption( 'useIframeTransport' ) && !uri_obj.isFacebookURI()) {
            return this;
        }
        if (!this.getOption( 'jsonp' ) && !this.getOption( 'useIframeTransport' ) && !uri_obj.isSameOrigin()) {
            return this;
        }
        this._setUserActionID();
        if (!uri || uri_obj.isEmpty()) {
            if (window.send_error_signal && window.get_error_stack) {
                var data = {err_code : 1013, vip : '-', duration : 0, xfb_ip : '-', path : window.location.href, aid : this.userActionID};
                send_error_signal( 'async_error', JSON.stringify( data ) );
                send_error_signal( 'async_xport_stack', '1013:' + window.location.href + '::' + get_error_stack() );
            }
            return this;
        }
        this.uri = uri_obj;
        return this;
    }, getURI : function () {
        return this.uri.toString();
    }, setInitialHandler : function (fn) {
        this.initialHandler = fn;
        return this;
    }, setHandler : function (fn) {
        if (!(typeof(fn) != 'function')) {
            this.handler = fn;
        }
        return this;
    }, getHandler : function () {
        return this.handler;
    }, setErrorHandler : function (fn) {
        if (!(typeof(fn) != 'function')) {
            this.errorHandler = fn;
        }
        return this;
    }, setTransportErrorHandler : function (fn) {
        this.transportErrorHandler = fn;
        return this;
    }, getErrorHandler : function () {
        return this.errorHandler;
    }, getTransportErrorHandler : function () {
        return this.transportErrorHandler;
    }, setTimeoutHandler : function (timeout, fn) {
        if (!(typeof(fn) != 'function')) {
            this.timeout = timeout;
            this.timeoutHandler = fn;
        }
        return this;
    }, resetTimeout : function (timeout) {
        if (!(this.timeoutHandler === null)) {
            if (timeout === null) {
                this.timeout = null;
                clearTimeout( this.timer );
                this.timer = null;
            } else {
                var clear_on_quickling_event = !this._allowCrossPageTransition;
                this.timeout = timeout;
                clearTimeout( this.timer );
                this.timer = this._handleTimeout.bind( this ).defer( this.timeout, clear_on_quickling_event );
            }
        }
        return this;
    }, _handleTimeout : function () {
        this.abandon();
        this.timeoutHandler( this );
    }, setNewSerial : function () {
        this.id = ++AsyncRequest._last_id;
        return this;
    }, setFinallyHandler : function (fn) {
        this.finallyHandler = fn;
        return this;
    }, setServerDialogCancelHandler : function (fn) {
        this.serverDialogCancelHandler = fn;
        return this;
    }, setPreBootloadHandler : function (fn) {
        this.preBootloadHandler = fn;
        return this;
    }, setReadOnly : function (readOnly) {
        if (!(typeof(readOnly) != 'boolean')) {
            this.readOnly = readOnly;
        }
        return this;
    }, setFBMLForm : function () {
        this.writeRequiredParams = ["fb_sig"];
        return this;
    }, getReadOnly : function () {
        return this.readOnly;
    }, setRelativeTo : function (element) {
        this.relativeTo = element;
        return this;
    }, getRelativeTo : function () {
        return this.relativeTo;
    }, setStatusClass : function (c) {
        this.statusClass = c;
        return this;
    }, setStatusElement : function (element) {
        this.statusElement = element;
        return this;
    }, getStatusElement : function () {
        return ge( this.statusElement );
    }, isRelevant : function () {
        if (this._allowCrossPageTransition) {
            return true;
        }
        if (!this.id) {
            return true;
        }
        return this.id > AsyncRequest._id_threshold;
    }, clearStatusIndicator : function () {
        var statusElem = this.getStatusElement();
        if (statusElem) {
            CSS.removeClass( statusElem, 'async_saving' );
            CSS.removeClass( statusElem, this.statusClass );
        }
    }, addStatusIndicator : function () {
        var statusElem = this.getStatusElement();
        if (statusElem) {
            CSS.addClass( statusElem, 'async_saving' );
            CSS.addClass( statusElem, this.statusClass );
        }
    }, specifiesWriteRequiredParams : function () {
        return this.writeRequiredParams.every( function (param) {
            this.data[param] = this.data[param] || Env[param] || (ge( param ) || {}).value;
            if (this.data[param] !== undefined) {
                return true;
            }
            return false;
        }, this );
    }, setOption : function (opt, v) {
        if (typeof(this.option[opt]) != 'undefined') {
            this.option[opt] = v;
        }
        return this;
    }, getOption : function (opt) {
        typeof(this.option[opt]) == 'undefined';
        return this.option[opt];
    }, abort : function () {
        if (this.transport) {
            var old_handler = this.getTransportErrorHandler();
            this.setOption( 'suppressErrorAlerts', true );
            this.setTransportErrorHandler( bagofholding );
            this._requestAborted = 1;
            this.transport.abort();
            this.setTransportErrorHandler( old_handler );
        }
    }, abandon : function () {
        clearTimeout( this.timer );
        this.setOption( 'suppressErrorAlerts', true ).setHandler( bagofholding ).setErrorHandler( bagofholding ).setTransportErrorHandler( bagofholding );
        if (this.transport) {
            this._requestAborted = 1;
            this.transport.abort();
        }
    }, setNectarData : function (nctrParams) {
        if (nctrParams) {
            if (this.data.nctr === undefined) {
                this.data.nctr = {};
            }
            copyProperties( this.data.nctr, nctrParams );
        }
        return this;
    }, setNectarModuleDataSafe : function (elem) {
        if (this.setNectarModuleData) {
            this.setNectarModuleData( elem );
        }
        return this;
    }, setNectarImpressionIdSafe : function () {
        if (this.setNectarImpressionId) {
            this.setNectarImpressionId();
        }
        return this;
    }, setAllowCrossPageTransition : function (allow) {
        this._allowCrossPageTransition = !!allow;
        if (this.timer) {
            this.resetTimeout( this.timeout );
        }
        return this;
    }, send : function (isRetry) {
        isRetry = isRetry || false;
        if (!this.uri) {
            return false;
        }
        !this.errorHandler && !this.getOption( 'suppressErrorHandlerWarning' );
        if (this.getOption( 'jsonp' ) && this.method != 'GET') {
            this.setMethod( 'GET' );
        }
        if (this.getOption( 'useIframeTransport' ) && this.method != 'GET') {
            this.setMethod( 'GET' );
        }
        this.timeoutHandler !== null && (this.getOption( 'jsonp' ) || this.getOption( 'useIframeTransport' ));
        if (!this.getReadOnly()) {
            this.specifiesWriteRequiredParams();
            if (this.method != 'POST') {
                return false;
            }
        }
        if (this.method == 'POST' && this.getOption( 'tfbEndpoint' )) {
            this.data.fb_dtsg = Env.fb_dtsg;
            this.data.lsd = getCookie( 'lsd' );
        }
        if (!isEmpty( this.context ) && this.getOption( 'tfbEndpoint' )) {
            copyProperties( this.data, this.context );
            this.data.ajax_log = 1;
        }
        if (window.Env && Env.force_param) {
            copyProperties( this.data, Env.force_param );
        }
        if (!this.getReadOnly() && this.getOption( 'tfbEndpoint' ) && this.method == 'POST' && this.data.post_form_id_source === undefined) {
            this.data.post_form_id_source = 'AsyncRequest';
        }
        if (window.Env) {
            this.data.__user = Env.user;
        }
        this._setUserActionID();
        if (this.getOption( 'bundle' ) && AsyncRequest._bundleRequest( this )) {
            return true;
        }
        this.setNewSerial();
        if (this.getOption( 'tfbEndpoint' )) {
            this.uri.addQueryData( {__a : 1} );
            if (Env.fb_isb) {
                this.uri.addQueryData( {fb_isb : Env.fb_isb} );
            }
        }
        this.finallyHandler = async_callback( this.finallyHandler, 'final' );
        var uri_str, query;
        if (this.method == 'GET' || this.file) {
            uri_str = this.uri.addQueryData( this.data ).toString();
            query = '';
        } else {
            uri_str = this.uri.toString();
            query = URI.implodeQuery( this.data );
        }
        if (this.getOption( 'jsonp' ) || this.getOption( 'useIframeTransport' )) {
            uri_str = this.uri.addQueryData( {__a : this.id} ).toString();
            AsyncRequest._JSONPReceivers[this.id] = async_callback( bind( this, 'onjsonpresponse' ), 'json' );
            if (this.getOption( 'jsonp' )) {
                (function () {
                    document.body.appendChild( $N( 'script', {src : uri_str, type : "text/javascript"} ) );
                }).bind( this ).defer();
            } else {
                var style = {position : 'absolute', top : '-9999999px', width : '80px', height : '80px'};
                this.transportIframe = $N( 'iframe', {src : "javascript:''", style : style} );
                document.body.appendChild( this.transportIframe );
                this.transportIframe.src = uri_str;
            }
            return true;
        }
        if (this.transport) {
            return false;
        }
        var transport = null;
        try {
            transport = new XMLHttpRequest();
        }
        catch (ignored) {
        }
        if (!transport) {
            try {
                transport = new ActiveXObject( "Msxml2.XMLHTTP" );
            }
            catch (ignored) {
            }
        }
        if (!transport) {
            try {
                transport = new ActiveXObject( "Microsoft.XMLHTTP" );
            }
            catch (ignored) {
            }
        }
        if (!transport) {
            return false;
        }
        transport.onreadystatechange = async_callback( bind( this, 'onstatechange' ), 'xhr' );
        if (!isRetry) {
            this.remainingRetries = this.getOption( 'retries' );
        }
        if (window.send_error_signal || window.ArbiterMonitor) {
            this._sendTimeStamp = this._sendTimeStamp || Date.now();
        }
        this.transport = transport;
        try {
            this.transport.open( this.method, uri_str, this.getOption( 'asynchronous' ) );
        }
        catch (ex) {
            return false;
        }
        var svn_rev = Env.svn_rev;
        if (svn_rev) {
            this.transport.setRequestHeader( 'X-SVN-Rev', String( svn_rev ) );
        }
        if (this.method == 'POST') {
            this.transport.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        }
        this.addStatusIndicator();
        query = this.file || query;
        this.transport.send( query );
        if (this.timeout !== null) {
            this.resetTimeout( this.timeout );
        }
        AsyncRequest._inflightAdd( this );
        return true;
    }, _displayServerDialog : function (model, is_confirmation) {
        Bootloader.loadComponents( 'dialog', function () {
            var dialog = new Dialog( model );
            if (is_confirmation) {
                dialog.setHandler( this._displayConfirmationHandler.bind( this, dialog ) );
            }
            dialog.setCancelHandler( function () {
                this.serverDialogCancelHandler.apply( this, arguments );
                this.finallyHandler.apply( this, arguments );
            }.bind( this ) ).setCausalElement( this.relativeTo ).setCloseHandler( this.finallyHandler.bind( this ) ).show();
        }.bind( this ) );
    }, _displayConfirmationHandler : function (dialog) {
        this.data.confirmed = 1;
        copyProperties( this.data, dialog.getFormData() );
        this.send();
    }} );
    module.exports = AsyncRequest;
} );
__e( "async", ["AsyncRequest", "AsyncResponse"], function (a, b) {
    a.AsyncRequest = b( 'AsyncRequest' );
    a.AsyncResponse = b( 'AsyncResponse' );
}, 3 );
__e( "object-core-utils", ["isEmpty", "copyProperties"], function (c, e, d, b) {
    c.is_empty = e( 'isEmpty' );
    c.copy_properties = e( 'copyProperties' );
    function a (f, g) {
        return copy_properties( window[f] || (window[f] = {}), g );
    }

    c.add_properties = b.add_properties = a;
}, 3 );
__e( "env", ["Env"], function (b, c) {
    var a = c( 'Env' );
    b.Env = a;
}, 3 );
InitialJSLoader = window.InitialJSLoader || {INITIAL_JS_READY : 'BOOTLOAD/JSREADY', load : function (a) {
    InitialJSLoader.callback = Bootloader.loadResources( a, InitialJSLoader.callback );
}, callback : Arbiter.registerCallback( function () {
    Arbiter.inform( InitialJSLoader.INITIAL_JS_READY, true, Arbiter.BEHAVIOR_STATE );
}, [OnloadEvent.ONLOAD_DOMCONTENT_CALLBACK] )};
function _onloadHook () {
    !window.loaded && window.CavalryLogger && CavalryLogger.getInstance().setTimeStamp( 't_prehooks' );
    _runHooks( 'onloadhooks' );
    !window.loaded && window.CavalryLogger && CavalryLogger.getInstance().setTimeStamp( 't_hooks' );
    window.loaded = true;
    Arbiter.inform( 'uipage_onload', true, Arbiter.BEHAVIOR_STATE );
}
function _onafterloadHook () {
    _runHooks( 'onafterloadhooks' );
    window.afterloaded = true;
}
function _runHook (b, c) {
    if (/nocatch/.test( location.search )) {
        return b();
    }
    try {
        return b();
    }
    catch (a) {
        var err = SystemEvents.normalizeError( a );
        err.event_type = c;
        err.category = 'runhook';
        SystemEvents.informError( err );
    }
}
function _runHooks (b) {
    var d = b == 'onbeforeleavehooks' || b == 'onbeforeunloadhooks';
    var e = null;
    do {
        var a = window[b];
        if (!d) {
            window[b] = null;
        }
        if (!a) {
            break;
        }
        for (var c = 0; c < a.length; c++) {
            if (d) {
                e = e || _runHook( a[c], b );
            } else {
                _runHook( a[c], b );
            }
        }
        if (d) {
            break;
        }
    } while (window[b]);
    if (d && e) {
        return e;
    }
}
function keep_window_set_as_loaded () {
    if (window.loaded == false) {
        window.loaded = true;
        _runHooks( 'onloadhooks' );
    }
    if (window.afterloaded == false) {
        window.afterloaded = true;
        _runHooks( 'onafterloadhooks' );
    }
}
Arbiter.registerCallback( _onloadHook, [OnloadEvent.ONLOAD_DOMCONTENT_CALLBACK, InitialJSLoader.INITIAL_JS_READY] );
Arbiter.registerCallback( _onafterloadHook, [OnloadEvent.ONLOAD_DOMCONTENT_CALLBACK, OnloadEvent.ONLOAD_CALLBACK, InitialJSLoader.INITIAL_JS_READY] );
Arbiter.subscribe( OnloadEvent.ONBEFOREUNLOAD, function (b, a) {
    a.warn = _runHooks( 'onbeforeleavehooks' ) || _runHooks( 'onbeforeunloadhooks' );
    if (!a.warn) {
        window.loaded = false;
        window.afterloaded = false;
    }
}, Arbiter.SUBSCRIBE_NEW );
Arbiter.subscribe( OnloadEvent.ONUNLOAD, function (b, a) {
    _runHooks( 'onunloadhooks' );
}, Arbiter.SUBSCRIBE_NEW );
onloadRegister( function () {
    copy_properties( AsyncRequest.prototype, {setNectarModuleData : function (c) {
        if (this.method == 'POST') {
            var d = Env.module;
            if (c && d === undefined) {
                var b = {fbpage_fan_confirm : 1};
                var e = null;
                for (var a = c; a && a != document.body; a = a.parentNode) {
                    if (!a.id || typeof a.id !== 'string') {
                        continue;
                    }
                    if (a.id.startsWith( 'pagelet_' )) {
                        d = a.id;
                        break;
                    }
                    if (!e && b[a.id]) {
                        e = a.id;
                    }
                }
                if (d === undefined && e) {
                    d = e;
                }
            }
            if (d !== undefined) {
                if (this.data.nctr === undefined) {
                    this.data.nctr = {};
                }
                this.data.nctr._mod = d;
            }
        }
    }, setNectarImpressionId : function () {
        if (this.method == 'POST') {
            var a = Env.impid;
            if (a !== undefined) {
                if (this.data.nctr === undefined) {
                    this.data.nctr = {};
                }
                this.data.nctr._impid = a;
            }
        }
    }} );
} );
__e( "deferUntil", [], function (c, e, d, b) {
    function a (h, g, l, f, m) {
        var j = g();
        if (j) {
            h( j );
            return null;
        }
        var k = Date.now();
        var i = setInterval( function () {
            j = g();
            if (!j) {
                if (!l || (l < new Date() - k)) {
                    return;
                }
                m && m();
            }
            clearInterval( i );
            h( j );
        }, 20, f );
        return i;
    }

    d.exports = a;
} );
__e( "function-utils", ["FunctionUtils", "deferUntil"], function (b, c) {
    var a = c( 'FunctionUtils' );
    b.debounce = a.debounce;
    b.throttle = a.throttle;
    b.defer_until = c( 'deferUntil' );
}, 3 );
__e( "XD", ["function-extensions", "copyProperties", "ua", "uri", "arbiter"], function (g, i, h, f) {
    i( "function-extensions" );
    var e = i( "copyProperties" );
    var j = i( "ua" );
    var b = i( "uri" );
    var a = i( "arbiter" );
    var d = {_callbacks : [], _opts : {autoResize : false, allowShrink : true, channelUrl : null, hideOverflow : false, newResizeMethod : false, resizeTimeout : 100, resizeWidth : false, expectResizeAck : false, resizeAckTimeout : 6000}, _lastResizeAckId : 0, _resizeCount : 0, _resizeTimestamp : 0, init : function (k) {
        this._opts = e( e( {}, this._opts ), k );
        if (this._opts.autoResize) {
            this._startResizeMonitor();
        }
        a.subscribe( 'Connect.Unsafe.resize.ack', function (m, l) {
            if (!l.id) {
                l.id = this._resizeCount;
            }
            if (l.id > this._lastResizeAckId) {
                this._lastResizeAckId = l.id;
            }
        }.bind( this ) );
    }, send : function (l, k) {
        k = k || this._opts.channelUrl;
        if (!k) {
            return;
        }
        if (k.substr( 0, 4 ) != 'http') {
            return;
        }
        var s = k + '&' + b.implodeQuery( l ), o = 'f' + (Math.random() * (1 << 30)).toString( 16 ).replace( '.', '' ), m = document.body.appendChild( document.createElement( 'div' ) ), r = false;
        m.style.position = 'absolute';
        m.style.top = '-10000px';
        m.style.width = '1px';
        m.style.height = '1px';
        d._callbacks[o] = function () {
            if (r) {
                (function () {
                    m.parentNode.removeChild( m );
                }).defer( 3000 );
                delete d._callbacks[o];
            }
        };
        if (j.ie()) {
            var p, n = document.createElement( 'div' );
            p = '<iframe onload="XD._callbacks.' + o + '()"></iframe>';
            n.innerHTML = p;
            n.firstChild.setAttribute( 'src', s );
            p = n.innerHTML;
            m.innerHTML = '<iframe src="javascript:false"></iframe>';
            r = true;
            (function () {
                m.innerHTML = p;
            }).defer();
        } else {
            var q = document.createElement( 'iframe' );
            q.onload = d._callbacks[o];
            m.appendChild( q );
            r = true;
            q.src = s;
        }
    }, _computeSize : function () {
        return {width : this._opts.resizeWidth ? this._calcWidth( d.forced_min_width ) : 0, height : this._calcHeight( this._opts.newResizeMethod )};
    }, _calcHeight : function (n) {
        var k = document.body, l = document.documentElement, m = 0;
        if (n) {
            m = Math.max( Math.max( k.offsetHeight, k.scrollHeight ) + k.offsetTop, Math.max( l.offsetHeight, l.scrollHeight ) + l.offsetTop );
        } else {
            if (j.ie()) {
                m = Math.max( k.offsetHeight, k.scrollHeight ) + k.offsetTop;
            } else {
                m = l.offsetHeight + l.offsetTop;
            }
            if (window.Dialog) {
                m = Math.max( m, Dialog.max_bottom );
            }
        }
        return m;
    }, _calcWidth : function (q) {
        var k = document.body, o = document.documentElement, r = 0;
        if (k.offsetWidth < k.scrollWidth) {
            r = k.scrollWidth + k.offsetLeft;
        } else {
            var n = k.childNodes;
            for (var p = 0; p < n.length; p++) {
                var l = n[p];
                var m = l.offsetWidth + l.offsetLeft;
                if (m > r) {
                    r = m;
                }
            }
        }
        if (q) {
            r = Math.max( r, q );
        }
        if (o.clientLeft > 0) {
            r += (o.clientLeft * 2);
        }
        if (o.clientTop > 0) {
            height += (o.clientTop * 2);
        }
        return r;
    }, _startResizeMonitor : function () {
        var l, k = document.documentElement;
        if (this._opts.hideOverflow) {
            k.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        }
        setInterval( (function () {
            var p = this._computeSize();
            var q = Date.now();
            var m = this._lastResizeAckId < this._resizeCount && (q - this._resizeTimestamp) > this._opts.resizeAckTimeout;
            if (!l || (this._opts.expectResizeAck && m) || (this._opts.allowShrink && l.width != p.width) || (!this._opts.allowShrink && l.width < p.width) || (this._opts.allowShrink && l.height != p.height) || (!this._opts.allowShrink && l.height < p.height)) {
                l = p;
                this._resizeCount++;
                this._resizeTimestamp = q;
                var o = {type : 'resize', height : p.height, ackData : {id : this._resizeCount}};
                if (p.width && p.width != 0) {
                    o.width = p.width;
                }
                try {
                    if (b( document.referrer ).isFacebookURI() && window.parent != window && window.name && window.parent.location && window.parent.location.toString && b( window.parent.location ).isFacebookURI()) {
                        var iframes = window.parent.document.getElementsByTagName( 'iframe' );
                        for (var i = 0; i < iframes.length; i = i + 1) {
                            if (iframes[i].name == window.name) {
                                if (this._opts.resizeWidth) {
                                    iframes[i].style.width = o.width + 'px';
                                }
                                iframes[i].style.height = o.height + 'px';
                            }
                        }
                    }
                    this.send( o );
                }
                catch (n) {
                    this.send( o );
                }
            }
        }).bind( this ), this._opts.resizeTimeout );
    }};
    var c = e( {}, d );
    h.exports.UnverifiedXD = c;
    h.exports.XD = d;
    g.UnverifiedXD = c;
    g.XD = d;
} );
__e( "connect-xd", ["XD"], function (a, b) {
    a.UnverifiedXD = b( 'XD' ).UnverifiedXD;
    a.XD = b( 'XD' ).XD;
}, 3 );
WindowComm = {_callbacks : {}, makeHandler : function (a, c) {
    c = c || 'opener';
    var b = 'f' + (Math.random() * (1 << 30)).toString( 16 ).replace( '.', '' );
    WindowComm._callbacks[b] = a;
    return new URI( '/connect/window_comm.php' ).setQueryData( {_id : b, _relation : c} ).getQualifiedURI().toString();
}, _recv : function (b) {
    var a = new URI( b ).getQueryData();
    WindowComm._callbacks[a._id]( a );
}};
__e( "vector", ["event-extensions", "dom", "copyProperties", "ua"], function (h, j, i, g) {
    var a = j( 'event-extensions' ).$E;
    var b = j( 'dom' );
    var d = j( 'copyProperties' );
    var k = j( 'ua' );

    function c (m, n, l) {
        d( this, {x : parseFloat( m ), y : parseFloat( n ), domain : l || 'pure'} );
    }

    d( c.prototype, {toString : function () {
        return '(' + this.x + ', ' + this.y + ')';
    }, add : function (n, o) {
        if (arguments.length == 1) {
            if (n.domain != 'pure') {
                n = n.convertTo( this.domain );
            }
            return this.add( n.x, n.y );
        }
        var l = parseFloat( n );
        var m = parseFloat( o );
        return new c( this.x + l, this.y + m, this.domain );
    }, mul : function (l, m) {
        if (typeof(m) == "undefined") {
            m = l;
        }
        return new c( this.x * l, this.y * m, this.domain );
    }, sub : function (l, m) {
        if (arguments.length == 1) {
            return this.add( l.mul( -1 ) );
        } else {
            return this.add( -l, -m );
        }
    }, distanceTo : function (l) {
        return this.sub( l ).magnitude();
    }, magnitude : function () {
        return Math.sqrt( (this.x * this.x) + (this.y * this.y) );
    }, convertTo : function (l) {
        if (l != 'pure' && l != 'viewport' && l != 'document') {
            return new c( 0, 0 );
        }
        if (l == this.domain) {
            return new c( this.x, this.y, this.domain );
        }
        if (l == 'pure') {
            return new c( this.x, this.y );
        }
        if (this.domain == 'pure') {
            return new c( 0, 0 );
        }
        var m = c.getScrollPosition( 'document' );
        var n = this.x, o = this.y;
        if (this.domain == 'document') {
            n -= m.x;
            o -= m.y;
        } else {
            n += m.x;
            o += m.y;
        }
        return new c( n, o, l );
    }, setElementPosition : function (l) {
        var m = this.convertTo( 'document' );
        l.style.left = parseInt( m.x ) + 'px';
        l.style.top = parseInt( m.y ) + 'px';
        return this;
    }, setElementDimensions : function (l) {
        return this.setElementWidth( l ).setElementHeight( l );
    }, setElementWidth : function (l) {
        l.style.width = parseInt( this.x, 10 ) + 'px';
        return this;
    }, setElementHeight : function (l) {
        l.style.height = parseInt( this.y, 10 ) + 'px';
        return this;
    }, scrollElementBy : function (l) {
        if (l == document.body) {
            window.scrollBy( this.x, this.y );
        } else {
            l.scrollLeft += this.x;
            l.scrollTop += this.y;
        }
        return this;
    }} );
    d( c, {getEventPosition : function (m, l) {
        l = l || 'document';
        m = a( m );
        var n = b.getDocumentScrollElement();
        var p = m.pageX || (m.clientX + n.scrollLeft);
        var q = m.pageY || (m.clientY + n.scrollTop);
        var o = new c( p, q, 'document' );
        return o.convertTo( l );
    }, getScrollPosition : function (l) {
        l = l || 'document';
        var m = b.getDocumentScrollElement();
        var n = m.scrollLeft;
        var o = m.scrollTop;
        return new c( n, o, 'document' ).convertTo( l );
    }, getElementPosition : function (n, m) {
        m = m || 'document';
        if (!n) {
            return;
        }
        if (!('getBoundingClientRect' in n)) {
            return new c( 0, 0, 'document' );
        }
        var p = n.getBoundingClientRect(), l = document.documentElement, o = Math.round( p.left ) - l.clientLeft, q = Math.round( p.top ) - l.clientTop;
        return new c( o, q, 'viewport' ).convertTo( m );
    }, getElementDimensions : function (l) {
        return new c( l.offsetWidth || 0, l.offsetHeight || 0 );
    }, getViewportDimensions : function () {
        var l = (window && window.innerWidth) || (document && document.documentElement && document.documentElement.clientWidth) || (document && document.body && document.body.clientWidth) || 0;
        var m = (window && window.innerHeight) || (document && document.documentElement && document.documentElement.clientHeight) || (document && document.body && document.body.clientHeight) || 0;
        return new c( l, m, 'viewport' );
    }, getDocumentDimensions : function (l) {
        l = l || document;
        var m = b.getDocumentScrollElement( l );
        if (m === l.body && k.firefox()) {
            m = l.documentElement;
        }
        var n = m.scrollWidth || 0;
        var o = m.scrollHeight || 0;
        return new c( n, o, 'document' );
    }, deserialize : function (m) {
        var l = m.split( ',' );
        return new c( l[0], l[1] );
    }} );
    function e (l) {
        return c.getElementPosition( l, 'document' ).x;
    }

    function f (l) {
        return c.getElementPosition( l, 'document' ).y;
    }

    h.elementY = f;
    h.elementX = e;
    h.Vector2 = i.exports = c;
}, 3 );
__e( "PopupWindow", ["copyProperties", "ua", "vector"], function (e, g, f, d) {
    var c = g( "copyProperties" );
    var h = g( "ua" );
    var b = g( "vector" );
    var a = {_opts : {allowShrink : true, timeout : 100}, init : function (i) {
        copy_properties( a._opts, i );
        setInterval( a._resizeCheck, a._opts.timeout );
    }, _resizeCheck : function () {
        var m = b.getViewportDimensions(), i = a._getDocumentSize(), k = i.y - m.y, l = i.x - m.x;
        if (l < 0) {
            l = 0;
        }
        if (!a._opts.allowShrink && k < 0) {
            k = 0;
        }
        if (k || l) {
            try {
                if (window.console && window.console.firebug) {
                    console.log( 'Resizing will not work in firefox with firebug enabled. ' + 'See https://bugzilla.mozilla.org/show_bug.cgi?id=691693' );
                }
                window.resizeBy( l, k );
                if (l) {
                    window.moveBy( l / -2, 0 );
                }
            }
            catch (j) {
            }
        }
    }, _getDocumentSize : function () {
        var i = b.getDocumentDimensions();
        if (window.Dialog && Dialog.max_bottom && Dialog.max_bottom > i.y) {
            i.y = Dialog.max_bottom;
        }
        return i;
    }, open : function (q, j, r) {
        var n = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft, o = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop, m = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth, l = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22), k = parseInt( n + ((m - r) / 2), 10 ), p = parseInt( o + ((l - j) / 2.5), 10 ), i = ('width=' + r + ',height=' + j + ',left=' + k + ',top=' + p);
        return window.open( q, '_blank', i );
    }};
    f.exports = a;
} );
__e( "popup-resizer", ["PopupWindow"], function (a, b) {
    a.PopupResizer = b( 'PopupWindow' );
}, 3 );
ConnectLogin = {init : function (a) {
    this.appID = a.appID;
    this.addToProfile = a.addToProfile;
    this.oneClick = a.oneClick;
    this.channelUrl = a.channelUrl;
    XD.init( a );
}, login : function (a, c, b) {
    if (this.oneClick && !c) {
        this._oneClick( a );
    } else {
        this._openPopup( a, c, b );
    }
}, logout : function () {
    XD.send( {type : 'logout'} );
}, _oneClick : function (a) {
    new AsyncRequest().setURI( '/ajax/api/tos.php' ).setData( {app_id : this.appID, grant_perm : 1} ).setHandler(
        function (b) {
            ConnectLogin._refreshLoginStatus();
            a && a();
        } ).send();
}, _openPopup : function (c, e, d) {
    d = d || {};
    var b = WindowComm.makeHandler( function (h) {
        ConnectLogin._closePopup();
        if (ConnectLogin.appID) {
            ConnectLogin._refreshLoginStatus();
        }
        c && c();
    } ), a = WindowComm.makeHandler( function (h) {
        ConnectLogin._closePopup();
    } ), g = new URI( '/login.php' );
    g.setQueryData( {api_key : this.appID, next : b, channel_url : a, cancel_url : a, req_perms : e, v : '1.0', fbconnect : 1, add_to_profile : this.addToProfile, display : 'popup'} );
    g.addQueryData( d );
    var f = this._getSize( d );
    this._popup = PopupResizer.open( g.toString(), f.height, f.width );
}, _closePopup : function () {
    if (this._popup) {
        this._popup.close();
        this._popup = null;
    }
}, _refreshLoginStatus : function () {
    if (this.channelUrl) {
        XD.send( {type : 'refreshLoginStatus'} );
    } else {
        window.location.reload();
    }
}, _getSize : function (a) {
    if (a.social_plugin == 'registration') {
        return {width : 640, height : 370};
    } else {
        return {width : 610, height : 280};
    }
}};
__e( "intl-core", ["tx", "_tx", "Intl"], function (c, d) {
    var e = d( 'tx' );
    var b = d( '_tx' );
    var a = d( 'Intl' );
    c.tx = e;
    c._tx = b;
    c.intl_ends_in_punct = a.endsInPunct;
    c.intl_phonological_rules = a.phonologicalRules;
}, 3 );
var PlatformOptInPopup = function () {
};
copy_properties( PlatformOptInPopup, {DIALOG_URL : '/connect/uiserver.php', DIALOG_WIDTH : 420, DIALOG_HEIGHT : 450, APP_ID : 127760087237610, open : function (d, c, a) {
    if (!d) {
        d = 'generic';
    }
    if (!c) {
        c = 'opt.in';
    }
    var b = new URI( PlatformOptInPopup.DIALOG_URL );
    b.addQueryData( {social_plugin : d, method : c, display : 'popup', secure : URI.getRequestURI().isSecure(), app_id : PlatformOptInPopup.APP_ID} );
    if (a) {
        b.addQueryData( a );
    }
    return PopupResizer.open( b.toString(), PlatformOptInPopup.DIALOG_WIDTH, PlatformOptInPopup.DIALOG_HEIGHT );
}} );
__e( "animation", ["css"], function (d, f, e, c) {
    var a = f( 'css' );

    function b (g) {
        if (g == undefined) {
            return;
        }
        if (d == this) {
            return new b( g );
        } else {
            this.obj = g;
            this._reset_state();
            this.queue = [];
            this.last_attr = null;
        }
    }

    b.resolution = 20;
    b.offset = 0;
    b.prototype._reset_state = function () {
        this.state = {attrs : {}, duration : 500};
    };
    b.prototype.stop = function () {
        this._reset_state();
        this.queue = [];
        return this;
    };
    b.prototype._build_container = function () {
        if (this.container_div) {
            this._refresh_container();
            return;
        }
        if (this.obj.firstChild && this.obj.firstChild.__animation_refs) {
            this.container_div = this.obj.firstChild;
            this.container_div.__animation_refs++;
            this._refresh_container();
            return;
        }
        var h = document.createElement( 'div' );
        h.style.padding = '0px';
        h.style.margin = '0px';
        h.style.border = '0px';
        h.__animation_refs = 1;
        var g = this.obj.childNodes;
        while (g.length) {
            h.appendChild( g[0] );
        }
        this.obj.appendChild( h );
        this._orig_overflow = this.obj.style.overflow;
        this.obj.style.overflow = 'hidden';
        this.container_div = h;
        this._refresh_container();
    };
    b.prototype._refresh_container = function () {
        this.container_div.style.height = 'auto';
        this.container_div.style.width = 'auto';
        this.container_div.style.height = this.container_div.offsetHeight + 'px';
        this.container_div.style.width = this.container_div.offsetWidth + 'px';
    };
    b.prototype._destroy_container = function () {
        if (!this.container_div) {
            return;
        }
        if (!--this.container_div.__animation_refs) {
            var g = this.container_div.childNodes;
            while (g.length) {
                this.obj.appendChild( g[0] );
            }
            this.obj.removeChild( this.container_div );
        }
        this.container_div = null;
        this.obj.style.overflow = this._orig_overflow;
    };
    b.ATTR_TO = 1;
    b.ATTR_BY = 2;
    b.ATTR_FROM = 3;
    b.prototype._attr = function (g, j, i) {
        g = g.replace( /-[a-z]/gi, function (k) {
            return k.substring( 1 ).toUpperCase();
        } );
        var h = false;
        switch (g) {
            case 'background':
                this._attr( 'backgroundColor', j, i );
                return this;
            case 'margin':
                j = b.parse_group( j );
                this._attr( 'marginBottom', j[0], i );
                this._attr( 'marginLeft', j[1], i );
                this._attr( 'marginRight', j[2], i );
                this._attr( 'marginTop', j[3], i );
                return this;
            case 'padding':
                j = b.parse_group( j );
                this._attr( 'paddingBottom', j[0], i );
                this._attr( 'paddingLeft', j[1], i );
                this._attr( 'paddingRight', j[2], i );
                this._attr( 'paddingTop', j[3], i );
                return this;
            case 'backgroundColor':
            case 'borderColor':
            case 'color':
                j = b.parse_color( j );
                break;
            case 'opacity':
                j = parseFloat( j, 10 );
                break;
            case 'height':
            case 'width':
                if (j == 'auto') {
                    h = true;
                } else {
                    j = parseInt( j, 10 );
                }
                break;
            case 'borderWidth':
            case 'lineHeight':
            case 'fontSize':
            case 'marginBottom':
            case 'marginLeft':
            case 'marginRight':
            case 'marginTop':
            case 'paddingBottom':
            case 'paddingLeft':
            case 'paddingRight':
            case 'paddingTop':
            case 'bottom':
            case 'left':
            case 'right':
            case 'top':
            case 'scrollTop':
            case 'scrollLeft':
                j = parseInt( j, 10 );
                break;
            default:
                throw new Error( g + ' is not a supported attribute!' );
        }
        if (this.state.attrs[g] === undefined) {
            this.state.attrs[g] = {};
        }
        if (h) {
            this.state.attrs[g].auto = true;
        }
        switch (i) {
            case b.ATTR_FROM:
                this.state.attrs[g].start = j;
                break;
            case b.ATTR_BY:
                this.state.attrs[g].by = true;
            case b.ATTR_TO:
                this.state.attrs[g].value = j;
                break;
        }
    };
    b._get_box_width = function (i) {
        var j = parseInt( a.getStyle( i, 'paddingLeft' ), 10 ), k = parseInt( a.getStyle( i, 'paddingRight' ), 10 ), g = parseInt( a.getStyle( i, 'borderLeftWidth' ), 10 ), h = parseInt( a.getStyle( i, 'borderRightWidth' ), 10 );
        return i.offsetWidth - (j ? j : 0) - (k ? k : 0) - (g ? g : 0) - (h ? h : 0);
    };
    b._get_box_height = function (i) {
        var k = parseInt( a.getStyle( i, 'paddingTop' ), 10 ), j = parseInt( a.getStyle( i, 'paddingBottom' ), 10 ), g = parseInt( a.getStyle( i, 'borderTopWidth' ), 10 ), h = parseInt( a.getStyle( i, 'borderBottomWidth' ), 10 );
        return i.offsetHeight - (k ? k : 0) - (j ? j : 0) - (g ? g : 0) - (h ? h : 0);
    };
    b.prototype.to = function (g, h) {
        if (h === undefined) {
            this._attr( this.last_attr, g, b.ATTR_TO );
        } else {
            this._attr( g, h, b.ATTR_TO );
            this.last_attr = g;
        }
        return this;
    };
    b.prototype.by = function (g, h) {
        if (h === undefined) {
            this._attr( this.last_attr, g, b.ATTR_BY );
        } else {
            this._attr( g, h, b.ATTR_BY );
            this.last_attr = g;
        }
        return this;
    };
    b.prototype.from = function (g, h) {
        if (h === undefined) {
            this._attr( this.last_attr, g, b.ATTR_FROM );
        } else {
            this._attr( g, h, b.ATTR_FROM );
            this.last_attr = g;
        }
        return this;
    };
    b.prototype.duration = function (g) {
        this.state.duration = g ? g : 0;
        return this;
    };
    b.prototype.checkpoint = function (h, g) {
        if (h === undefined) {
            h = 1;
        }
        this.state.checkpoint = h;
        this.queue.push( this.state );
        this._reset_state();
        this.state.checkpointcb = g;
        return this;
    };
    b.prototype.blind = function () {
        this.state.blind = true;
        return this;
    };
    b.prototype.hide = function () {
        this.state.hide = true;
        return this;
    };
    b.prototype.show = function () {
        this.state.show = true;
        return this;
    };
    b.prototype.ease = function (g) {
        this.state.ease = g;
        return this;
    };
    b.prototype.go = function () {
        var h = (new Date()).getTime();
        this.queue.push( this.state );
        for (var g = 0; g < this.queue.length; g++) {
            this.queue[g].start = h - b.offset;
            if (this.queue[g].checkpoint) {
                h += this.queue[g].checkpoint * this.queue[g].duration;
            }
        }
        b.push( this );
        return this;
    };
    b.prototype._show = function () {
        a.show( this.obj );
    };
    b.prototype._hide = function () {
        a.hide( this.obj );
    };
    b.prototype._frame = function (s) {
        var i = true;
        var r = false;
        var u = false;
        var t;

        function j (v) {
            return document.documentElement[v] || document.body[v];
        }

        for (var k = 0; k < this.queue.length; k++) {
            var h = this.queue[k];
            if (h.start > s) {
                i = false;
                continue;
            }
            if (h.checkpointcb) {
                this._callback( h.checkpointcb, s - h.start );
                h.checkpointcb = null;
            }
            if (h.started === undefined) {
                if (h.show) {
                    this._show();
                }
                for (var g in h.attrs) {
                    if (h.attrs[g].start !== undefined) {
                        continue;
                    }
                    switch (g) {
                        case 'backgroundColor':
                        case 'borderColor':
                        case 'color':
                            t = b.parse_color( a.getStyle( this.obj, g == 'borderColor' ? 'borderLeftColor' : g ) );
                            if (h.attrs[g].by) {
                                h.attrs[g].value[0] = Math.min( 255, Math.max( 0, h.attrs[g].value[0] + t[0] ) );
                                h.attrs[g].value[1] = Math.min( 255, Math.max( 0, h.attrs[g].value[1] + t[1] ) );
                                h.attrs[g].value[2] = Math.min( 255, Math.max( 0, h.attrs[g].value[2] + t[2] ) );
                            }
                            break;
                        case 'opacity':
                            t = a.getOpacity( this.obj );
                            if (h.attrs[g].by) {
                                h.attrs[g].value = Math.min( 1, Math.max( 0, h.attrs[g].value + t ) );
                            }
                            break;
                        case 'height':
                            t = b._get_box_height( this.obj );
                            if (h.attrs[g].by) {
                                h.attrs[g].value += t;
                            }
                            break;
                        case 'width':
                            t = b._get_box_width( this.obj );
                            if (h.attrs[g].by) {
                                h.attrs[g].value += t;
                            }
                            break;
                        case 'scrollLeft':
                        case 'scrollTop':
                            t = (this.obj === document.body) ? j( g ) : this.obj[g];
                            if (h.attrs[g].by) {
                                h.attrs[g].value += t;
                            }
                            h['last' + g] = t;
                            break;
                        default:
                            t = parseInt( a.getStyle( this.obj, g ), 10 ) || 0;
                            if (h.attrs[g].by) {
                                h.attrs[g].value += t;
                            }
                            break;
                    }
                    h.attrs[g].start = t;
                }
                if ((h.attrs.height && h.attrs.height.auto) || (h.attrs.width && h.attrs.width.auto)) {
                    if (ua.firefox() < 3) {
                        u = true;
                    }
                    this._destroy_container();
                    for (var g in {height : 1, width : 1, fontSize : 1, borderLeftWidth : 1, borderRightWidth : 1, borderTopWidth : 1, borderBottomWidth : 1, paddingLeft : 1, paddingRight : 1, paddingTop : 1, paddingBottom : 1}) {
                        if (h.attrs[g]) {
                            this.obj.style[g] = h.attrs[g].value + (typeof h.attrs[g].value == 'number' ? 'px' : '');
                        }
                    }
                    if (h.attrs.height && h.attrs.height.auto) {
                        h.attrs.height.value = b._get_box_height( this.obj );
                    }
                    if (h.attrs.width && h.attrs.width.auto) {
                        h.attrs.width.value = b._get_box_width( this.obj );
                    }
                }
                h.started = true;
                if (h.blind) {
                    this._build_container();
                }
            }
            var o = (s - h.start) / h.duration;
            if (o >= 1) {
                o = 1;
                if (h.hide) {
                    this._hide();
                }
            } else {
                i = false;
            }
            var q = h.ease ? h.ease( o ) : o;
            if (!r && o != 1 && h.blind) {
                r = true;
            }
            if (u && this.obj.parentNode) {
                var p = this.obj.parentNode;
                var n = this.obj.nextSibling;
                p.removeChild( this.obj );
            }
            for (var g in h.attrs) {
                switch (g) {
                    case 'backgroundColor':
                    case 'borderColor':
                    case 'color':
                        this.obj.style[g] = 'rgb(' + b.calc_tween( q, h.attrs[g].start[0], h.attrs[g].value[0], true ) + ',' + b.calc_tween( q, h.attrs[g].start[1], h.attrs[g].value[1], true ) + ',' + b.calc_tween( q, h.attrs[g].start[2], h.attrs[g].value[2], true ) + ')';
                        break;
                    case 'opacity':
                        a.setStyle( this.obj, 'opacity', b.calc_tween( q, h.attrs[g].start, h.attrs[g].value ) );
                        break;
                    case 'height':
                    case 'width':
                        this.obj.style[g] = q == 1 && h.attrs[g].auto ? 'auto' : b.calc_tween( q, h.attrs[g].start, h.attrs[g].value, true ) + 'px';
                        break;
                    case 'scrollLeft':
                    case 'scrollTop':
                        var l = this.obj === document.body;
                        t = l ? j( g ) : this.obj[g];
                        if (h['last' + g] !== t) {
                            delete h.attrs[g];
                        } else {
                            var m = b.calc_tween( q, h.attrs[g].start, h.attrs[g].value, true );
                            if (!l) {
                                m = this.obj[g] = m;
                            } else {
                                if (g == 'scrollLeft') {
                                    d.scrollTo( m, j( 'scrollTop' ) );
                                } else {
                                    d.scrollTo( j( 'scrollLeft' ), m );
                                }
                                m = j( g );
                            }
                            h['last' + g] = m;
                        }
                        break;
                    default:
                        this.obj.style[g] = b.calc_tween( q, h.attrs[g].start, h.attrs[g].value, true ) + 'px';
                        break;
                }
            }
            if (o == 1) {
                this.queue.splice( k--, 1 );
                this._callback( h.ondone, s - h.start - h.duration );
            }
        }
        if (u) {
            p[n ? 'insertBefore' : 'appendChild']( this.obj, n );
        }
        if (!r && this.container_div) {
            this._destroy_container();
        }
        return !i;
    };
    b.prototype.ondone = function (g) {
        this.state.ondone = g;
        return this;
    };
    b.prototype._callback = function (g, h) {
        if (g) {
            b.offset = h;
            g.call( this );
            b.offset = 0;
        }
    };
    b.calc_tween = function (g, h, i, j) {
        return (j ? parseInt : parseFloat)( (i - h) * g + h, 10 );
    };
    b.parse_color = function (g) {
        var h = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec( g );
        if (h) {
            return [parseInt( h[1].length == 1 ? h[1] + h[1] : h[1], 16 ), parseInt( h[2].length == 1 ? h[2] + h[2] : h[2], 16 ), parseInt( h[3].length == 1 ? h[3] + h[3] : h[3], 16 )];
        } else {
            var i = /^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9]+))?\)$/.exec( g );
            if (i) {
                if (i[4] === '0') {
                    return [255, 255, 255];
                } else {
                    return [parseInt( i[1], 10 ), parseInt( i[2], 10 ), parseInt( i[3], 10 )];
                }
            } else if (g == 'transparent') {
                return [255, 255, 255];
            } else {
                throw 'Named color attributes are not supported.';
            }
        }
    };
    b.parse_group = function (g) {
        g = trim( g ).split( / +/ );
        if (g.length == 4) {
            return g;
        } else if (g.length == 3) {
            return [g[0], g[1], g[2], g[1]];
        } else if (g.length == 2) {
            return [g[0], g[1], g[0], g[1]];
        } else {
            return [g[0], g[0], g[0], g[0]];
        }
    };
    b.push = function (g) {
        if (!b.active) {
            b.active = [];
        }
        b.active.push( g );
        if (b.active.length === 1) {
            if (!b.requestAnimationFrame) {
                var h = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame;
                if (h) {
                    b.requestAnimationFrame = h.bind( d );
                }
            }
            if (b.requestAnimationFrame) {
                b.requestAnimationFrame( b._animate );
            } else {
                b.timeout = setInterval( b._animate, b.resolution, false );
            }
        }
        if (b.requestAnimationFrame) {
            b._updateEndingTimer();
        }
        b._animate( Date.now(), true );
    };
    b._updateEndingTimer = function () {
        if (!b.requestAnimationFrame) {
            throw new Error( 'Ending timer only valid with requestAnimationFrame' );
        }
        var j = 0;
        for (var g = 0; g < b.active.length; g++) {
            var l = b.active[g];
            for (var k = 0; k < l.queue.length; k++) {
                var h = l.queue[k].start + l.queue[k].duration;
                if (h > j) {
                    j = h;
                }
            }
        }
        if (b.timeout) {
            clearTimeout( b.timeout );
            delete b.timeout;
        }
        var i = Date.now();
        if (j > i) {
            b.timeout = setTimeout( b._animate.shield(), j - i, false );
        }
    };
    b._animate = function (j, i) {
        j = j || Date.now();
        for (var h = (i === true) ? b.active.length - 1 : 0; h < b.active.length; h++) {
            try {
                if (!b.active[h]._frame( j )) {
                    b.active.splice( h--, 1 );
                }
            }
            catch (g) {
                b.active.splice( h--, 1 );
            }
        }
        if (b.active.length === 0) {
            if (b.timeout) {
                if (b.requestAnimationFrame) {
                    clearTimeout( b.timeout );
                } else {
                    clearInterval( b.timeout );
                }
                delete b.timeout;
            }
        } else if (b.requestAnimationFrame) {
            b.requestAnimationFrame( b._animate );
        }
    };
    b.ease = {};
    b.ease.begin = function (g) {
        return Math.sin( Math.PI / 2 * (g - 1) ) + 1;
    };
    b.ease.end = function (g) {
        return Math.sin( .5 * Math.PI * g );
    };
    b.ease.both = function (g) {
        return .5 * Math.sin( Math.PI * (g - .5) ) + .5;
    };
    b.prependInsert = function (h, g) {
        b.insert( h, g, DOM.prependContent );
    };
    b.appendInsert = function (h, g) {
        b.insert( h, g, DOM.appendContent );
    };
    b.insert = function (i, g, h) {
        a.setStyle( g, 'opacity', 0 );
        h( i, g );
        b( g ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 400 ).go();
    };
    d.animation = e.exports = b;
}, 3 );
__e( "array-utils", ["ArrayUtils", "hasArrayNature"], function (a, b) {
    a.$A = b( 'ArrayUtils' ).createFrom;
    a.hasArrayNature = b( 'hasArrayNature' );
}, 3 );
WidgetArbiter = {_findSiblings : function () {
    if (WidgetArbiter._siblings) {
        return;
    }
    WidgetArbiter._siblings = [];
    for (var b = parent.frames.length - 1; b >= 0; b--) {
        try {
            if (parent.frames[b] && parent.frames[b].Arbiter && parent.frames[b].Arbiter.inform) {
                WidgetArbiter._siblings.push( parent.frames[b].Arbiter );
            }
        }
        catch (a) {
        }
    }
}, inform : function () {
    WidgetArbiter._findSiblings();
    var a = $A( arguments );
    WidgetArbiter._siblings.each( function (b) {
        b.inform.apply( b, a );
    } );
}};
__e( "Locale", ["css"], function (d, f, e, c) {
    var a = f( "css" );
    var b = {isRTL : function () {
        return 'rtl' === a.getStyle( document.body, 'direction' );
    }};
    e.exports = b;
} );
__e( "intl-locale", ["Locale"], function (a, b) {
    a.intl_locale_is_rtl = b( 'Locale' ).isRTL;
}, 3 );
__e( "Button", ["event-extensions", "css", "DataStore", "dom", "parent"], function (g, i, h, f) {
    i( 'event-extensions' );
    var b = i( 'css' );
    var d = i( 'DataStore' );
    var c = i( 'dom' );
    var e = i( 'parent' );
    var a = (function () {
        var k = 'uiButtonDisabled';
        var j = 'uiButtonDepressed';
        var m = 'button:blocker';
        var l = 'href';

        function n (s, r) {
            var q = d.get( s, m );
            if (r) {
                if (q) {
                    q.remove();
                    d.remove( s, m );
                }
            } else if (!q) {
                d.set( s, m, Event.listen( s, 'click', bagof( false ), Event.Priority.URGENT ) );
            }
        }

        function o (q) {
            var r = e.byClass( q, 'uiButton' );
            if (!r) {
                throw new Error( 'invalid use case' );
            }
            return r;
        }

        function p (q) {
            return c.isNodeOfType( q, 'a' );
        }

        return {getInputElement : function (q) {
            q = o( q );
            if (p( q )) {
                throw new Error( 'invalid use case' );
            }
            return c.find( q, 'input' );
        }, isEnabled : function (q) {
            return !b.hasClass( o( q ), k );
        }, setEnabled : function (t, q) {
            t = o( t );
            b.conditionClass( t, k, !q );
            if (p( t )) {
                var r = t.href;
                var u = d.get( t, l, '#' );
                if (q) {
                    if (!r) {
                        t.href = u;
                    }
                } else {
                    if (r && r !== u) {
                        d.set( t, l, r );
                    }
                    t.removeAttribute( 'href' );
                }
                n( t, q );
            } else {
                var s = a.getInputElement( t );
                s.disabled = !q;
                n( s, q );
            }
        }, setDepressed : function (r, q) {
            b.conditionClass( o( r ), j, q );
        }, isDepressed : function (q) {
            return b.hasClass( o( q ), j );
        }, setLabel : function (r, q) {
            r = o( r );
            if (p( r )) {
                var s = c.find( r, 'span.uiButtonText' );
                c.setContent( s, q );
            } else {
                a.getInputElement( r ).value = q;
            }
            b.conditionClass( r, 'uiButtonNoText', !q );
        }, setIcon : function (r, q) {
            if (!c.isNode( q )) {
                return;
            }
            b.addClass( q, 'customimg' );
            r = o( r );
            var s = c.scry( r, '.img' )[0];
            if (s != q) {
                if (s) {
                    c.replace( s, q );
                } else {
                    c.prependContent( r, q );
                }
            }
        }};
    })();
    g.Button = h.exports = a;
}, 3 );
!function () {
    var b = document.documentElement;
    var a = function (c) {
        c = c || window.event;
        var d = c.target || c.srcElement;
        var f = d.getAttribute( 'placeholder' );
        if (f) {
            var e = Parent.byClass( d, 'focus_target' );
            if ('focus' == c.type || 'focusin' == c.type) {
                if (d.value == f && CSS.hasClass( d, 'DOMControl_placeholder' )) {
                    d.value = '';
                    CSS.removeClass( d, 'DOMControl_placeholder' );
                }
                if (e) {
                    CSS.addClass( e, 'child_is_active' );
                    CSS.addClass( e, 'child_is_focused' );
                    CSS.addClass( e, 'child_was_focused' );
                    Arbiter.inform( 'reflow' );
                }
            } else {
                if (d.value == '') {
                    CSS.addClass( d, 'DOMControl_placeholder' );
                    d.value = f;
                    e && CSS.removeClass( e, 'child_is_active' );
                    d.style.direction = '';
                }
                e && CSS.removeClass( e, 'child_is_focused' );
            }
        }
    };
    if (b.addEventListener) {
        b.addEventListener( 'focus', a, true );
        b.addEventListener( 'blur', a, true );
    } else {
        b.onfocusin = b.onfocusout = a;
    }
}();
__e( "control-dom", ["DataStore", "dom-core"], function (e, g, f, d) {
    var c = g( 'DataStore' );
    var a = g( 'dom-core' ).$;

    function b (h) {
        this.root = a( h );
        this.updating = false;
        c.set( h, 'DOMControl', this );
    }

    b.prototype = {getRoot : function () {
        return this.root;
    }, beginUpdate : function () {
        if (this.updating) {
            return false;
        }
        this.updating = true;
        return true;
    }, endUpdate : function () {
        this.updating = false;
    }, update : function (h) {
        if (!this.beginUpdate()) {
            return this;
        }
        this.onupdate( h );
        this.endUpdate();
    }, onupdate : function (h) {
    }};
    b.getInstance = function (h) {
        return c.get( h, 'DOMControl' );
    };
    e.DOMControl = f.exports = b;
}, 3 );
__e( "input-methods", ["bootloader", "css-core", "dom", "control-dom", "object-core-utils"], function (g, i, h, f) {
    var a = i( 'bootloader' );
    var b = i( 'css-core' );
    var c = i( 'dom' );
    var d = i( 'control-dom' );
    var e = function (j) {
        var k = j.getAttribute( 'maxlength' );
        if (k && k > 0) {
            a.loadComponents( 'maxlength-form-listener', function () {
                Input.enforceMaxLength( j, k );
            } );
        }
    };
    h.exports = {focus : function (j) {
        try {
            j.focus();
        }
        catch (k) {
        }
    }, isEmpty : function (j) {
        return !(/\S/).test( j.value || '' ) || b.hasClass( j, 'DOMControl_placeholder' );
    }, getValue : function (j) {
        return Input.isEmpty( j ) ? '' : j.value;
    }, setValue : function (k, l) {
        b.removeClass( k, 'DOMControl_placeholder' );
        k.value = l || '';
        e( k );
        var j = d.getInstance( k );
        j && j.resetHeight && j.resetHeight();
    }, setPlaceholder : function (j, k) {
        j.setAttribute( 'title', k );
        j.setAttribute( 'placeholder', k );
        if (j == document.activeElement) {
            return;
        }
        if (Input.isEmpty( j )) {
            b.conditionClass( j, 'DOMControl_placeholder', k );
            j.value = k || '';
        }
    }, reset : function (j) {
        var k = j !== document.activeElement ? (j.getAttribute( 'placeholder' ) || '') : '';
        j.value = k;
        b.conditionClass( j, 'DOMControl_placeholder', k );
        j.style.height = '';
    }, setSubmitOnEnter : function (j, k) {
        b.conditionClass( j, 'enter_submit', k );
    }, getSubmitOnEnter : function (j) {
        return b.hasClass( j, 'enter_submit' );
    }, setMaxLength : function (j, k) {
        if (k > 0) {
            j.setAttribute( 'maxlength', k );
            e( j );
        } else {
            j.removeAttribute( 'maxlength' );
        }
    }};
    i( 'object-core-utils' ).add_properties( 'Input', h.exports );
}, 3 );
onloadRegister( function () {
    Event.listen( document.documentElement, 'submit', function (b) {
        var a = b.getTarget().getElementsByTagName( '*' );
        for (var c = 0; c < a.length; c++) {
            if (a[c].getAttribute( 'placeholder' ) && Input.isEmpty( a[c] )) {
                Input.setValue( a[c], '' );
            }
        }
    } );
} );
var ExternalNodeConnectWidget = function (i) {
    copy_properties( this, {widgetID : i.widgetID, widget : $( i.widgetID ), viewerID : i.viewer, nodeType : i.nodeType, viewerIsAdmin : i.viewerIsAdmin && !i.userOptedOut, adminUrl : i.adminUrl, popupOptInParams : {}, nodeUri : new URI( i.nodeURL ), externalUrl : i.externalURL, pageId : i.pageId, layout : i.layout, edgeType : i.edgeType, error : i.error, errorURI : new URI( '/' ), alreadyConnected : i.alreadyConnected, usingConnectLibrary : !!i.channelURL, commentWidgetMarkup : i.commentWidgetMarkup, commentWidgetOpen : false, commentWidgetVisible : false, userProfile : null, connectStoryFbid : 0, isAmbiguousText : i.isAmbiguousText, socialBar : i.socialbar, useDisconnectLink : i.useDisconnectLink, showError : i.showError, showConfirm : i.showConfirm, showFaces : i.showFaces, connectText : i.connectText, ref : i.ref, userOptedOut : i.userOptedOut, usingInlineCommenting : i.usingInlineCommenting, mobile : i.mobile, supportCommenting : !i.mobile && (!!i.channelURL || i.usingInlineCommenting), inlineCommentListenersInitialized : false, inlineCommentFocused : false, forceCommentHooks : i.forceCommentHooks, nux : i.nux, iframeReferer : i.iframeReferer, isBlocked : i.isBlocked, isPersonalized : i.isPersonalized, confirmedConnect : i.confirmedConnect, hasSend : i.send, colorScheme : i.colorScheme, grayOut : i.grayOut} );
    if (this.usingConnectLibrary) {
        UnverifiedXD.init( {autoResize : i.autoResize, channelUrl : i.channelURL, resizeWidth : i.autoResize && i.layout !== ExternalNodeConnectWidget.STANDARD_LAYOUT} );
    }
    this.connectButtonSlider = DOM.scry( this.widget, 'div.connect_button_slider' );
    this.connectButtonContainer = null;
    if (this.connectButtonSlider.length) {
        this.connectButtonSlider = this.connectButtonSlider[0];
        this.connectButtonContainer = DOM.find( this.connectButtonSlider, 'div.connect_button_container' );
    } else {
        this.connectButtonSlider = null;
    }
    this.connectButton = DOM.find( this.widget, 'a.connect_widget_like_button' );
    if (this.grayOut) {
        this.tombstoneCross = DOM.find( this.widget, 'div.tombstone_cross' );
    }
    this.connectedMessage = DOM.scry( this.widget, 'span.connect_widget_connected_text' );
    this.connectedMessage = this.connectedMessage.length ? this.connectedMessage[0] : null;
    this.notConnectedMessage = DOM.scry( this.widget, 'span.connect_widget_not_connected_text' );
    this.notConnectedMessage = this.notConnectedMessage.length ? this.notConnectedMessage[0] : null;
    this.adminSpans = DOM.scry( this.widget, 'span.connect_widget_admin_span' );
    if (this.adminSpans.length > 0) {
        this.adminLinks = [];
        for (var a = 0; a < this.adminSpans.length; a++) {
            this.adminLinks[a] = DOM.find( this.adminSpans[a], 'a.connect_widget_admin_option' );
        }
    }
    if (this.layout == ExternalNodeConnectWidget.STANDARD_LAYOUT) {
        this.confirmationCell = DOM.find( this.widget, 'div.connect_confirmation_cell' );
        this.userActionTextSpan = DOM.find( this.confirmationCell, 'span.connect_widget_user_action' );
        this.summaryTextSpan = DOM.find( this.confirmationCell, 'span.connect_widget_summary' );
        this.summaryText = DOM.find( this.confirmationCell, 'div.connect_widget_text_summary' );
        var j = DOM.scry( this.widget, 'div.connect_widget_sample_connections' );
        this.sampleConnections = j.length > 0 ? j[0] : null;
        if (i.showFaces && i.viewer > 0) {
            var e = DOM.scry( this.widget, 'div.connect_widget_logged_in_user' );
            this.loggedInUserPhotoDiv = e.length > 0 ? e[0] : null;
        }
    }
    if (this.layout === ExternalNodeConnectWidget.SIMPLE_LAYOUT) {
        this.originalButtonWidth = this.computeButtonDimensions().width;
        this.summaryIncluding = DOM.find( this.widget, 'td.connect_widget_simple_including' );
        this.supportCommenting = false;
        this.usingInlineCommenting = false;
    }
    this.setQueryData();
    if (this.pageId) {
        copy_properties( this.popupOptInParams, {connect_id : this.pageId} );
    }
    this.errorSpans = DOM.scry( this.widget, 'span.connect_widget_error_span' );
    if (this.errorSpans.length > 0) {
        this.errorLinks = [];
        for (var b = 0; b < this.errorSpans.length; b++) {
            this.errorLinks[b] = DOM.find( this.errorSpans[b], 'a.connect_widget_error_text' );
        }
    }
    this.confirmSpans = DOM.scry( this.widget, 'span.connect_widget_confirm_span' );
    if (this.confirmSpans.length > 0) {
        this.confirmLinks = [];
        for (var d = 0; d < this.confirmSpans.length; d++) {
            this.confirmLinks[d] = DOM.find( this.confirmSpans[d], 'a.connect_widget_confirm_link' );
        }
    }
    this.unlikeSpans = DOM.scry( this.widget, 'span.unlike_span' );
    this.unlikeLinks = [];
    for (var c = 0; c < this.unlikeSpans.length; c++) {
        this.unlikeLinks[c] = DOM.find( this.unlikeSpans[c], 'a.connect_widget_unlike_link' );
        Event.listen( this.unlikeLinks[c], 'click', this.connectToNodeOnClick.bind( this ) );
    }
    var h = DOM.scry( this.widget, 'div.connect_widget_number_cloud' );
    if (h.length == 1) {
        this.numberCloud = h[0];
        this.numberCloudNub = DOM.find( this.widget, 'div.connect_widget_number_cloud_nub' );
        this.numberCloudExtension = DOM.find( this.numberCloud, 'div.connect_widget_number_cloud_extension' );
        this.sizeNumberCloud();
        this.numberCloudUnlikeSpan = DOM.find( this.numberCloudExtension, 'span.unlike_span' );
        this.numberCloudReminderSpan = DOM.find( this.numberCloudExtension, 'span.like_reminder' );
        this.inAnimation = false;
        this.reminderIsVisible = CSS.hasClass( this.numberCloudUnlikeSpan, 'hidden_elem' );
        Event.listen( this.numberCloud, 'mouseleave', this.restoreReminderSpan.bind( this ) );
        Event.listen( this.numberCloudExtension, 'mouseleave', this.restoreReminderSpan.bind( this ) );
        Event.listen( this.numberCloudExtension, 'mouseenter', this.exposeUnlikeSpan.bind( this ) );
        Event.listen( this.numberCloud, 'mouseenter', this.exposeUnlikeSpan.bind( this ) );
        Event.listen( this.numberCloudExtension, 'mouseleave', function (event) {
            this.requiresMouseLeaveEvent = false;
        }.bind( this ) );
    }
    if (this.usingInlineCommenting && !this.showFaces) {
        this.shareCommentSpans = DOM.scry( this.widget, 'span.connect_widget_share_comment_span' );
        for (var f = 0; f < this.shareCommentSpans.length; f++) {
            var k = DOM.find( this.shareCommentSpans[f], 'a.connect_widget_share_comment_option' );
            Event.listen( k, 'click', function (event) {
                for (var l = 0; l < this.shareCommentSpans.length; l++) {
                    CSS.addClass( this.shareCommentSpans[l], 'hidden_elem' );
                }
                this.presentCommentingOption();
            }.bind( this ) );
        }
    }
    if (this.layout === ExternalNodeConnectWidget.BUTTON_COUNT_LAYOUT) {
        XD.forced_min_width = this.getButtonCountWidgetWidth();
        this.numberExcluding = DOM.find( this.widget, 'td.connect_widget_button_count_excluding' );
        this.summaryIncluding = DOM.find( this.widget, 'td.connect_widget_button_count_including' );
        this.thumbsUpIcon = DOM.find( this.summaryIncluding, 'div.thumbs_up' );
        this.undoRegion = DOM.find( this.summaryIncluding, 'div.undo' );
        this.originalButtonWidth = this.computeButtonDimensions().width;
        Event.listen( this.thumbsUpIcon, 'mouseenter', function (event) {
            this.undoButton = DOM.find( this.undoRegion, 'label.undo_button input' );
            Event.listen( this.undoButton, 'click', this.connectToNodeOnClick.bind( this ) );
            CSS.addClass( this.thumbsUpIcon, 'hidden_elem' );
            CSS.removeClass( this.undoRegion, 'hidden_elem' );
        }.bind( this ) );
        Event.listen( this.undoRegion, 'mouseleave', function (event) {
            CSS.removeClass( this.thumbsUpIcon, 'hidden_elem' );
            CSS.addClass( this.undoRegion, 'hidden_elem' );
        }.bind( this ) );
    }
    if (!this.isBlocked) {
        Event.listen( this.connectButton, 'click', this.primaryLikeButtonOnClick.bind( this ) );
        if (this.grayOut) {
            Event.listen( this.tombstoneCross, 'click', this.connectToNodeOnClick.bind( this ) );
        }
    }
    if (this.adminLinks) {
        for (var a = 0; a < this.adminLinks.length; a++) {
            Event.listen( this.adminLinks[a], 'click', this.presentAdminPage.bind( this ) );
        }
    }
    if (this.errorLinks) {
        for (var a = 0; a < this.errorLinks.length; a++) {
            Event.listen( this.errorLinks[a], 'click', this.presentErrorDialog.bind( this ) );
        }
    }
    if (this.confirmLinks) {
        for (var g = 0; g < this.confirmLinks.length; g++) {
            Event.listen( this.confirmLinks[g], 'click', this.presentConfirmDialog.bind( this ) );
        }
    }
    if (i.showCaptcha) {
        this.showCaptcha = true;
        this.connectToNode( true );
    }
    if (this.forceCommentHooks) {
        this.setupCommentHooks( $( this.forceCommentHooks ) );
    }
    this.textInputMarginWithButton = 5;
    this.widthSyncArbiter = Arbiter.subscribe( 'platform/socialplugins/send/resize', this.syncSendWidgetWidth.bind( this ) );
    Arbiter.inform( 'platform/socialplugins/like/resize', {button_width : this.computeButtonDimensionsWithPadding().width, widget_width : Vector2.getElementDimensions( this.widget ).x, layout : this.layout}, Arbiter.BEHAVIOR_STATE );
    Arbiter.subscribe( 'platform/socialplugins/dialog', function (m, l) {
        if (l.controllerID !== this.widgetID) {
            this.otherCommentWidgetOpen = (l.event == 'open');
        }
    }.bind( this ) );
    this.subscribeToSync( i );
};
copy_properties( ExternalNodeConnectWidget, {STANDARD_LAYOUT : 'standard', BOX_COUNT_LAYOUT : 'box_count', BUTTON_COUNT_LAYOUT : 'button_count', SIMPLE_LAYOUT : 'simple', COLOR_DARK : 0, COLOR_LIGHT : 1, OPT_IN_FACEBOOK_APP_ID : '127760087237610', updateLoggedInUser : function (b) {
    var a = ExternalNodeConnectWidget.controllerManagingLogin;
    a.setLoggedIn( b );
    a.connectToNode( true );
    a.userOptedOut = false;
    delete ExternalNodeConnectWidget.controllerManagingLogin;
    Arbiter.inform( 'platform/socialplugins/login', {user : b.user}, Arbiter.BEHAVIOR_STATE );
    WidgetArbiter.inform( 'platform/socialplugins/login', {user : b.user}, Arbiter.BEHAVIOR_STATE );
}, onCommentWidgetLoaded : function (a) {
    var b = ExternalNodeConnectWidget.self;
    delete ExternalNodeConnectWidget.self;
    b.injectCommentWidgetMarkup( a );
}} );
copy_properties( ExternalNodeConnectWidget.prototype, {getSyncEndpointName : function () {
}, getConnectionEndpointName : function () {
}, getPluginName : function () {
}, subscribeToSync : function (a) {
    Arbiter.subscribe( 'platform/socialplugins/login', function (c, b) {
        if (this.viewerID && b.user !== this.viewerID) {
            document.location.reload();
        }
    }.bind( this ) );
    Arbiter.subscribe( this.getSyncEndpointName(), function (c, b) {
        if (b.externalUrl == a.externalURL) {
            this.userOptedOut = false;
            this.updateWidget( b.opts, true );
        }
    }.bind( this ) );
}, setQueryData : function () {
    copy_properties( this.popupOptInParams, {protocol : window.location.protocol, external_page_url : this.externalUrl} );
    if (this.nux) {
        copy_properties( this.popupOptInParams, {nux : this.nux, referer : this.iframeReferer} );
    }
}, updateWidget : function (e, d, b) {
    var a = (this.alreadyConnected != e.nowConnected) || (this.showConfirm != e.showConfirm);
    if (!d) {
        Arbiter.inform( this.getConnectionEndpointName(), e, Arbiter.BEHAVIOR_STATE );
    }
    this.alreadyConnected = e.nowConnected;
    this.viewerIsAdmin = e.isAdmin;
    this.showError = e.showError;
    this.showConfirm = e.showConfirm;
    this.adminUrl = e.adminUrl;
    this.userProfile = e.userProfile;
    this.connectStoryFbid = e.connectStoryFbid;
    this.error = e.error;
    if (!e.nowConnected) {
        this.closeCommentWidget();
    }
    if (a && !d || b) {
        var c = e.nowConnected ? 'edgeCreated' : 'edgeRemoved';
        UnverifiedXD.send( {type : c} );
    }
    if (a || this.error) {
        this.syncWidgetDisplay();
    }
    if (!d || b) {
        WidgetArbiter.inform( this.getSyncEndpointName(), {externalUrl : this.externalUrl, opts : e}, Arbiter.BEHAVIOR_STATE );
    }
}, presentOptIn : function () {
    ExternalNodeConnectWidget.controllerManagingLogin = this;
    PlatformOptInPopup.open( this.getPluginName(), 'opt.inlike', this.popupOptInParams );
    UnverifiedXD.send( {type : 'authPrompted'} );
}, setLoggedIn : function (a) {
    this.viewerID = a.user;
    this.newProfilePic = a.profilePic;
    this.placeFormUserCheck( a.formUserCheck, a.fbDtsg );
}, placeFormUserCheck : function (b, a) {
    Env.fb_dtsg = a;
    if (ge( 'post_form_id' )) {
        DOM.replace( $( 'post_form_id' ), HTML( b ) );
    } else {
        DOM.appendContent( DOM.find( document, 'body' ), HTML( b ) );
    }
}, syncWidgetWithServer : function (c) {
    var b = c.getPayload();
    if (b.requires_login) {
        this.updateWidget( {nowConnected : false, isAdmin : false}, false );
        this.presentOptIn();
        return;
    }
    var a = {nowConnected : b.success && b.already_connected, isAdmin : b.is_admin, showError : b.show_error, showConfirm : b.show_confirm, adminUrl : b.admin_url, userProfile : b.user_profile, connectStoryFbid : b.story_fbid, error : b.error_info};
    this.updateWidget( a, !b.success, b.success );
    if (b.success && this.showCaptcha) {
        window.opener.location.reload();
        window.close();
    }
}, getButtonCountWidgetWidth : function () {
    var a = DOM.find( this.widget, 'table.connect_widget_interactive_area' );
    var b = CSS.getStyle( a, 'width' );
    return parseInt( b, 10 );
}, sizeNumberCloud : function () {
    this.collapsedNumberCloudHeight = this.getCollapsedNumberCloudHeight();
    this.expandedNumberCloudHeight = this.collapsedNumberCloudHeight + this.getNumberCloudExtensionHeight();
    if (this.alreadyConnected) {
        CSS.setStyle( this.numberCloud, 'height', this.expandedNumberCloudHeight + 'px' );
    }
    var a = this.computeButtonDimensionsWithPadding().width;
    XD.forced_min_width = a;
    var b = intl_locale_is_rtl();
    a -= 2;
    CSS.setStyle( this.numberCloud, 'width', a + 'px' );
    CSS.setStyle( this.numberCloud, 'visibility', 'visible' );
    animation( this.numberCloud ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 100 ).go();
}, getCollapsedNumberCloudHeight : function () {
    var b = Vector2.getElementDimensions( this.numberCloud ).y;
    var d = parseInt( CSS.getStyle( this.numberCloud, 'paddingTop' ), 10 );
    var c = parseInt( CSS.getStyle( this.numberCloud, 'paddingBottom' ), 10 );
    var a = parseInt( CSS.getStyle( this.numberCloud, 'border' ), 10 );
    return b - d - c - 2;
}, getNumberCloudExtensionHeight : function () {
    CSS.addClass( this.numberCloudExtension, 'connect_widget_offscreen' );
    if (!this.alreadyConnected) {
        CSS.removeClass( this.numberCloudExtension, 'hidden_elem' );
    }
    var a = Vector2.getElementDimensions( this.numberCloudExtension ).y;
    if (!this.alreadyConnected) {
        CSS.addClass( this.numberCloudExtension, 'hidden_elem' );
    }
    CSS.removeClass( this.numberCloudExtension, 'connect_widget_offscreen' );
    return a;
}, restoreReminderSpan : function (event) {
    if (this.reminderIsVisible || this.inAnimation) {
        return;
    }
    this.animateReminderSpanReappearance();
}, animateReminderSpanReappearance : function () {
    if (this.reminderIsVisible || this.inAnimation) {
        return;
    }
    this.inAnimation = true;
    CSS.addClass( this.numberCloudUnlikeSpan, 'hidden_elem' );
    CSS.setStyle( this.numberCloudReminderSpan, 'opacity', 0 );
    CSS.removeClass( this.numberCloudReminderSpan, 'hidden_elem' );
    animation( this.numberCloudReminderSpan ).to( 'opacity', 1 ).duration( 100 ).ondone( function () {
        this.inAnimation = false;
        this.reminderIsVisible = true;
    }.bind( this ) ).go();
}, exposeUnlikeSpan : function (event) {
    if (!this.alreadyConnected || this.requiresMouseLeaveEvent || !this.reminderIsVisible || this.inAnimation) {
        return;
    }
    this.inAnimation = true;
    CSS.addClass( this.numberCloudReminderSpan, 'hidden_elem' );
    CSS.setStyle( this.numberCloudUnlikeSpan, 'opacity', 0 );
    CSS.removeClass( this.numberCloudUnlikeSpan, 'hidden_elem' );
    animation( this.numberCloudUnlikeSpan ).to( 'opacity', 1 ).duration( 100 ).ondone( function () {
        this.inAnimation = false;
        this.reminderIsVisible = false;
    }.bind( this ) ).go();
}, conditionallyActivateButton : function (event) {
    this.commentButtonIsActive = this.inlineCommentInput.value.trim().length > 0;
}, updateConnectionWithComment : function (event) {
    Event.kill( event );
    if (this.commentButtonIsActive) {
        this.postInlineComment();
        this.resetInlineComment();
        this.closeInlineComment();
    }
}, postInlineComment : function () {
    this.postUserComment( this.inlineCommentInput.value.trim(), false, 'iframe' );
}, resetInlineComment : function () {
    this.concealCommentButton();
    var a = this.inlineCommentInput.getAttribute( 'placeholder' );
    this.inlineCommentInput.value = a;
}, showInlineComment : function (event) {
    Event.kill( event );
    if (!this.inlineCommentFlyoutOpen || this.inlineCommentFlyoutVisible || this.showConfirm || this.error) {
        return;
    }
    this.inlineCommentFlyoutVisible = true;
    CSS.show( this.inlineCommentFlyout );
}, hideInlineComment : function (event) {
    if (event) {
        Event.kill( event );
    }
    if (this.inlineCommentFocused || !this.inlineCommentFlyoutOpen || !this.inlineCommentFlyoutVisible) {
        return;
    }
    if (event && DOM.contains( this.inlineCommentFlyout, event.getRelatedTarget() )) {
        return;
    }
    var b = this.inlineCommentInput.value.trim();
    var a = this.inlineCommentInput.getAttribute( 'placeholder' );
    if (b.length > 0 && b != a) {
        return;
    }
    this.inlineCommentFlyoutVisible = false;
    CSS.hide( this.inlineCommentFlyout );
}, closeInlineComment : function () {
    this.inlineCommentFlyoutVisible = false;
    this.inlineCommentFlyoutOpen = false;
    CSS.hide( this.inlineCommentFlyout );
    this.resetInlineComment();
}, concealCommentButton : function () {
    CSS.addClass( this.inlineCommentButton, 'hidden_elem' );
    CSS.setStyle( this.inlineCommentInput, 'width', this.textInputWidthWithoutButton + 'px' );
    CSS.setStyle( this.inlineCommentInput, 'margin-right', 0 );
}, positionInlineCommentFlyout : function () {
    CSS.addClass( this.inlineCommentFlyout, 'comment_widget_offscreen' );
    CSS.removeClass( this.inlineCommentFlyout, 'hidden_elem' );
    var b = 0;
    var a = this.computeButtonDimensions();
    var e = a.height;
    var d = this.grayOut ? b : b + 20;
    var g = intl_locale_is_rtl() ? 'right' : 'left';
    if (this.showFaces) {
        var k = DOM.scry( this.widget, 'span.connect_widget_text' )[0];
        var h = intl_locale_is_rtl() ? 'paddingRight' : 'paddingLeft';
        var l = CSS.getStyle( k, h );
        d = this.grayOut ? b : b + parseInt( l, 10 );
        var i = Vector2.getElementDimensions( this.sampleConnections ).y;
        e = i - 3;
    }
    var j = Vector2.getElementDimensions( this.summaryText ).y;
    if (j > 15) {
        e += 2;
    }
    CSS.setStyle( this.inlineCommentFlyout, g, d + 'px' );
    CSS.setStyle( this.inlineCommentFlyout, 'top', (-e) + 'px' );
    var n = Vector2.getElementPosition( this.widget, 'document' ).x;
    var m = Vector2.getElementDimensions( this.widget ).x;
    var o = n + m - d - 5;
    CSS.setStyle( this.inlineCommentFlyout, 'width', o + 'px' );
    CSS.removeClass( this.inlineCommentButton, 'hidden_elem' );
    var f = Vector2.getElementDimensions( this.inlineCommentButton ).x;
    CSS.addClass( this.inlineCommentButton, 'hidden_elem' );
    var c = (this.inlineCommentClose) ? 15 : 0;
    this.textInputWidthWithoutButton = o - 24 - c;
    this.textInputWidthWithButton = this.textInputWidthWithoutButton - f - this.textInputMarginWithButton - 1;
    CSS.setStyle( this.inlineCommentInput, 'width', this.textInputWidthWithoutButton + 'px' );
    CSS.setStyle( this.inlineCommentInput, 'margin-right', 0 );
    CSS.removeClass( this.inlineCommentFlyout, 'comment_widget_offscreen' );
    CSS.addClass( this.inlineCommentFlyout, 'hidden_elem' );
}, postUserComment : function (a, c, d) {
    var b = {href : this.externalUrl, node_type : this.nodeType, edge_type : this.edgeType, page_id : this.pageId, connect_text : this.connectText, story_fbid : this.connectStoryFbid, comment : a, widget_type : d || 'xfbml', own_product : c};
    new AsyncRequest().setURI( this.getCommentAjaxEndpoint() ).setData( b ).setNectarModuleDataSafe().setNectarImpressionIdSafe().send();
    this.closeCommentWidget();
}, closeCommentWidget : function () {
    if (this.commentWidgetOpen) {
        delete this.inGracePeriod;
        delete this.commentWidgetIsExpanded;
        this.commentWidgetVisible = false;
        this.commentWidgetOpen = false;
        UnverifiedXD.send( {type : 'dismissEdgeCommentDialog'} );
    }
}, presentAdminPage : function () {
    var a = '_blank';
    window.open( this.adminUrl.toString(), a );
}, presentErrorDialog : function () {
    if (!this.error.errorUri) {
        return;
    }
    var b = '_blank';
    var a = 'toolbar=0, status=0, width=960, height=300';
    window.open( this.error.errorUri.toString(), b, a );
}, presentConfirmDialog : function () {
    var b = '_blank';
    var a = 'toolbar=0,status=0,width=450,height=200,scrollbars=0,location=0,menubar=0';
    if (!window.confirmDialogReturn) {
        window.confirmDialogReturn = {};
    }
    window.confirmDialogReturn[this.widgetID] = this;
    var c = this.getConfirmURL();
    window.open( c, b, a );
}, returnFromConfirmDialog : function (a) {
    if (a) {
        this.showConfirm = null;
        this.confirmedConnect = a;
        this.connectToNode( !this.alreadyConnected );
    } else {
        this.updateWidget( {nowConnected : this.alreadyConnected, showConfirm : null, isAdmin : this.viewerIsAdmin}, false );
    }
}, syncWidgetDisplay : function () {
    var a = this.alreadyConnected;
    this.setButtonState( a );
    this.showElementIf( this.connectedMessage, a );
    this.showElementIf( this.notConnectedMessage, !a );
    if (this.adminSpans) {
        for (var b = 0; b < this.adminSpans.length; b++) {
            this.showElementIf( this.adminSpans[b], this.viewerIsAdmin );
        }
    }
    if (this.errorSpans) {
        for (var c = 0; c < this.errorSpans.length; c++) {
            this.showElementIf( this.errorSpans[c], this.error && (this.viewerIsAdmin || this.showError) );
        }
    }
    for (var f = 0; f < this.confirmSpans.length; f++) {
        this.showElementIf( this.confirmSpans[f], !this.alreadyConnected && this.showConfirm );
    }
    for (var d = 0; d < this.unlikeSpans.length; d++) {
        this.showElementIf( this.unlikeSpans[d], this.alreadyConnected );
    }
    if (this.shareCommentSpans) {
        for (var e = 0; e < this.shareCommentSpans.length; e++) {
            this.showElementIf( this.shareCommentSpans[e], a );
        }
    }
    this.showElementIf( this.connectButton, (!this.useDisconnectLink || !a) && !this.showConfirm );
    if (this.layout === ExternalNodeConnectWidget.BOX_COUNT_LAYOUT) {
        this.manageBoxCountButtonAnimation( a );
    } else if (this.layout === ExternalNodeConnectWidget.BUTTON_COUNT_LAYOUT) {
        this.manageButtonCountButtonAnimation( a );
    } else if (this.layout === ExternalNodeConnectWidget.SIMPLE_LAYOUT) {
        this.manageSimpleButtonAnimation( a );
    } else {
        this.manageStandardButtonAnimation( a );
    }
    if (!this.loggedInUserPhotoDiv) {
        return;
    }
    if (a) {
        this.slideUserPhotoIn( this.loggedInUserPhotoDiv );
    } else {
        this.slideUserPhotoOut( this.loggedInUserPhotoDiv );
    }
}, manageStandardButtonAnimation : function (a) {
    if (this.grayOut) {
        return;
    }
    if (this.alreadyConnected || this.showConfirm) {
        this.hideButton( true );
    } else {
        this.hideButton( false );
    }
}, setButtonState : function (a) {
    if (a) {
        CSS.removeClass( this.connectButton, 'like_button_no_like' );
        CSS.addClass( this.connectButton, 'like_button_like' );
        this.fixIEButtonDoubleLineBug();
    } else {
        CSS.addClass( this.connectButton, 'like_button_no_like' );
        CSS.removeClass( this.connectButton, 'like_button_like' );
    }
}, fixIEButtonDoubleLineBug : function () {
    if (this.layout === ExternalNodeConnectWidget.STANDARD_LAYOUT && ua.ie() <= 7 && !this.hasBeenFixed) {
        var a = this.computeButtonDimensionsWithPadding();
        CSS.setStyle( this.connectButton, 'width', a.width + 1 );
        this.hasBeenFixed = true;
    }
}, hideButton : function (a) {
    if (this.layout !== 'standard') {
        return;
    }
    if (this.oAnimateBlind) {
        this.oAnimateBlind.stop();
    }
    this.oAnimateBlind = animation( this.connectButtonSlider ).duration( 150 );
    var c = 1, b = intl_locale_is_rtl(), d = b ? 'marginRight' : 'marginLeft', e = b ? 'marginLeft' : 'marginRight';
    if (a) {
        CSS.addClass( this.connectButtonContainer, 'hidden' );
        this.oAnimateBlind.ondone( function () {
            CSS.setStyle( this.connectButtonContainer, d, '2px' );
            CSS.setStyle( this.connectButtonContainer, 'visibility', 'hidden' );
            CSS.addClass( this.confirmationCell, 'connect_confirmation_cell_like' );
            CSS.removeClass( this.confirmationCell, 'connect_confirmation_cell_no_like' );
            this.oAnimateBlind = null;
        }.bind( this ) );
    } else {
        CSS.setStyle( this.connectButtonContainer, d, '0px' );
        c = Vector2.getElementDimensions( this.connectButton ).x;
        this.oAnimateBlind.ondone( function () {
            CSS.setStyle( this.connectButtonSlider, 'overflow', 'visible' );
            CSS.setStyle( this.connectButtonSlider, 'width', 'auto' );
            CSS.removeClass( this.confirmationCell, 'connect_confirmation_cell_like' );
            CSS.addClass( this.confirmationCell, 'connect_confirmation_cell_no_like' );
            CSS.setStyle( this.connectButtonContainer, 'visibility', 'visible' );
            CSS.removeClass( this.connectButtonContainer, 'hidden' );
            this.oAnimateBlind = null;
        }.bind( this ) );
    }
    this.oAnimateBlind.to( 'width', c ).blind().go();
}, showElementIf : function (a, b) {
    if (!a) {
        return;
    }
    if (b) {
        CSS.show( a );
    } else {
        CSS.hide( a );
    }
}, slideUserPhotoIn : function (b) {
    if (!CSS.hasClass( b, 'connect_widget_user_not_connected' )) {
        return;
    }
    var a = CSS.getStyle( b, 'width' );
    CSS.setStyle( b, 'width', 0 );
    CSS.setStyle( b, 'opacity', 0 );
    CSS.removeClass( b, 'connect_widget_user_not_connected' );
    animation( b ).to( 'width', a ).duration( 100 ).checkpoint().to( 'opacity', 1 ).duration( 400 ).go();
}, slideUserPhotoOut : function (a) {
    if (CSS.hasClass( a, 'connect_widget_user_not_connected' )) {
        return;
    }
    animation( a ).to( 'opacity', 0 ).duration( 100 ).checkpoint( .25 ).to( 'width', 0 ).duration( 100 ).ondone(
        function () {
            CSS.addClass( a, 'connect_widget_user_not_connected' );
            CSS.setStyle( a, 'width', null );
        } ).go();
}, primaryLikeButtonOnClick : function (event) {
    if (this.grayOut && this.alreadyConnected && !this.mobile) {
        return;
    }
    this.connectToNodeOnClick( event );
    if (this.tombstoneCross && this.alreadyConnected) {
        DOM.replace( this.tombstoneCross, HTML( '<div class="tombstone_cross tombstone_cross_static" />' ) );
    }
    setTimeout( function () {
        this.tombstoneCross = DOM.find( this.widget, 'div.tombstone_cross' );
        CSS.removeClass( this.tombstoneCross, 'tombstone_cross_static' );
        Event.listen( this.tombstoneCross, 'click', this.connectToNodeOnClick.bind( this ) );
    }.bind( this ), 1000 );
}, _clickLocked : false, connectToNodeOnClick : function (event) {
    Event.kill( event );
    if (!this._clickLocked) {
        this._clickLocked = true;
        setTimeout( function () {
            this._clickLocked = false;
        }.bind( this ), 1000 );
        if (this.viewerID == 0 || this.userOptedOut) {
            this.presentOptIn();
        } else {
            this.connectToNode( !this.alreadyConnected );
        }
    }
}, connectToNode : function (d) {
    if (!d) {
        if (this.layout === ExternalNodeConnectWidget.SIMPLE_LAYOUT) {
            return;
        }
        if (this.layout === ExternalNodeConnectWidget.STANDARD_LAYOUT && !this.usingConnectLibrary) {
            CSS.addClass( this.userActionTextSpan, 'hidden_elem' );
            CSS.removeClass( this.summaryTextSpan, 'hidden_elem' );
            CSS.setStyle( this.summaryTextSpan, 'opacity', 1 );
        }
        if (this.shareCommentSpans) {
            for (var b = 0; b < this.shareCommentSpans.length; b++) {
                CSS.addClass( this.shareCommentSpans[b], 'hidden_elem' );
            }
        }
        if (this.commentWidgetOpen) {
            this.closeCommentWidget();
        } else if (this.inlineCommentFlyoutOpen) {
            this.closeInlineComment();
        }
    }
    this.updateWidget( {nowConnected : !this.alreadyConnected, isAdmin : this.viewerIsAdmin}, true );
    var a = {href : this.externalUrl, node_type : this.nodeType, edge_type : this.edgeType, page_id : this.pageId, layout : this.layout, is_personalized : this.isPersonalized, show_captcha : this.showCaptcha, connect_text : this.connectText, ref : this.ref, now_connected : d, post_form_id : $( 'post_form_id' ).value, iframe_referer : this.iframeReferer};
    if (this.confirmedConnect) {
        a.confirm = 1;
    }
    new AsyncRequest().setURI( this.getAjaxEndpoint() ).setHandler( this.syncWidgetWithServer.bind( this ) ).setData( a ).setNectarModuleDataSafe().setNectarImpressionIdSafe().send();
    if (d) {
        if (this.layout === ExternalNodeConnectWidget.BOX_COUNT_LAYOUT) {
            this.requiresMouseLeaveEvent = true;
        }
        if (this.layout === ExternalNodeConnectWidget.STANDARD_LAYOUT && !this.usingConnectLibrary) {
            CSS.setStyle( this.userActionTextSpan, 'opacity', 1 );
            CSS.removeClass( this.userActionTextSpan, 'hidden_elem' );
            CSS.addClass( this.summaryTextSpan, 'hidden_elem' );
            Event.listen( this.widget, 'mouseleave', this.transitionBetweenMessages.bind( this ) );
        }
        if (this.shareCommentSpans) {
            for (var c = 0; c < this.shareCommentSpans; c++) {
                CSS.removeClass( this.shareCommentSpans[c], 'hidden_elem' );
            }
        } else if (this.supportCommenting) {
            this.presentCommentingOption();
        }
        this.repositionFacepileVertically();
    }
}, transitionBetweenMessages : function (event) {
    if (!this.alreadyConnected || CSS.hasClass( this.userActionTextSpan, 'hidden_elem' )) {
        return;
    }
    animation( this.userActionTextSpan ).to( 'opacity', 0 ).duration( 500 ).ondone( function () {
        CSS.addClass( this.userActionTextSpan, 'hidden_elem' );
        CSS.setStyle( this.summaryTextSpan, 'opacity', 0 );
        CSS.removeClass( this.summaryTextSpan, 'hidden_elem' );
        animation( this.summaryTextSpan ).to( 'opacity', 1 ).duration( 500 ).ondone( function () {
            this.repositionFacepileVertically();
        }.bind( this ) ).go();
        this.positionInlineCommentFlyout();
    }.bind( this ) ).go();
}, presentCommentingOption : function () {
    Arbiter.inform( 'platform/socialplugins/dialog', {controllerID : this.widgetID, event : 'open'} );
    if (this.usingConnectLibrary) {
        ExternalNodeConnectWidget.self = this;
        var a = {type : 'presentEdgeCommentDialog', masterFrameName : window.name, version : 2};
        if (this.layout == ExternalNodeConnectWidget.BOX_COUNT_LAYOUT) {
            a.preComputedWidthOffset = this.computeButtonDimensionsWithPadding().width;
            if (!intl_locale_is_rtl()) {
                a.preComputedWidthOffset += 8;
            }
        }
        if (this.socialBar) {
            a.left = parseInt( CSS.getStyle( document.getElementById( 'profile' ), 'width' ), 10 ) + 1;
        } else if (this.hasSend && this.layout == ExternalNodeConnectWidget.STANDARD_LAYOUT) {
            a.preComputedWidthOffset = this.invertedButtons ? 0 : 65;
        }
        UnverifiedXD.send( a );
        this.commentWidgetOpen = true;
        this.commentWidgetVisible = true;
        this.commentWidgetExpanded = true;
    } else if (this.usingInlineCommenting) {
        if (!this.inlineCommentListenersInitialized) {
            this.unwrapComment();
            this.initializeInlineCommentListeners();
            this.openInlineCommentFlyout();
            this.positionInlineCommentFlyout();
            this.inlineCommentListenersInitialized = true;
        } else {
            this.positionInlineCommentFlyout();
            this.openInlineCommentFlyout();
        }
    }
}, unwrapComment : function () {
    if (this.unwrapComment.done) {
        return;
    }
    var b = $( 'connect-widget-comment-box-markup' ), a = ExternalNodeConnectWidget.commentMarkup;
    b.innerHTML = a;
    this.unwrapComment.done = true;
}, initializeInlineCommentListeners : function () {
    this.inlineCommentFlyout = DOM.find( this.widget, '.connect_widget_comment_box' );
    this.inlineCommentInput = DOM.find( this.inlineCommentFlyout, '.connect_widget_comment_textinput' );
    this.inlineCommentButton = DOM.find( this.inlineCommentFlyout, '.connect_widget_comment_button' );
    this.inlineCommentClose = DOM.scry( this.inlineCommentFlyout, '.connect_widget_comment_close_button' );
    if (this.inlineCommentClose.length > 0) {
        this.inlineCommentClose = this.inlineCommentClose[0];
    }
    this.commentButtonIsActive = false;
    Event.listen( this.inlineCommentInput, 'keyup', this.conditionallyActivateButton.bind( this ) );
    Event.listen( this.inlineCommentInput, 'focus', function () {
        this.inlineCommentFocused = true;
        this.exposeCommentButton();
    }.bind( this ) );
    Event.listen( this.inlineCommentButton, 'click', this.updateConnectionWithComment.bind( this ) );
    Event.listen( this.inlineCommentInput, 'blur', function () {
        this.inlineCommentFocused = false;
        this.hideInlineComment();
    }.bind( this ) );
    Event.listen( this.widget, 'mouseout', this.hideInlineComment.bind( this ) );
    Event.listen( this.widget, 'mouseover', this.showInlineComment.bind( this ) );
    if (this.inlineCommentClose) {
        Event.listen( this.inlineCommentClose, 'click', function (event) {
            for (var a = 0; a < this.shareCommentSpans.length; a++) {
                CSS.removeClass( this.shareCommentSpans[a], 'hidden_elem' );
            }
            this.closeInlineComment();
        }.bind( this ) );
    }
}, exposeCommentButton : function (event) {
    if (!CSS.hasClass( this.inlineCommentButton, 'hidden_elem' )) {
        return;
    }
    CSS.removeClass( this.inlineCommentButton, 'hidden_elem' );
    CSS.setStyle( this.inlineCommentInput, 'width', this.textInputWidthWithButton + 'px' );
    CSS.setStyle( this.inlineCommentInput, 'margin-right', this.textInputMarginWithButton + 'px' );
}, openInlineCommentFlyout : function () {
    CSS.show( this.inlineCommentFlyout );
    this.inlineCommentFlyoutOpen = true;
    this.inlineCommentFlyoutVisible = true;
}, manageBoxCountButtonAnimation : function (a) {
    if (a && !this.showConfirm) {
        this.animateBoxCountButtonDisappearance();
    } else {
        this.animateBoxCountButtonReappearance();
    }
}, animateBoxCountButtonDisappearance : function () {
    if (this.grayOut) {
        return;
    }
    CSS.addClass( this.connectButton, 'hidden_elem' );
    CSS.setStyle( this.numberCloudExtension, 'opacity', 0 );
    CSS.removeClass( this.numberCloudExtension, 'hidden_elem' );
    CSS.addClass( this.numberCloudNub, 'hidden_elem' );
    CSS.addClass( this.numberCloudUnlikeSpan, 'hidden_elem' );
    CSS.removeClass( this.numberCloudReminderSpan, 'hidden_elem' );
    animation( this.numberCloud ).to( 'height', this.expandedNumberCloudHeight ).duration( 100 ).ondone( function () {
        animation( this.numberCloudExtension ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 100 ).go();
    }.bind( this ) ).go();
}, animateBoxCountButtonReappearance : function () {
    CSS.addClass( this.numberCloudExtension, 'hidden_elem' );
    animation( this.numberCloud ).to( 'height', this.collapsedNumberCloudHeight ).duration( 75 ).ondone( function () {
        if (this.showConfirm) {
            for (var a = 0; a < this.confirmSpans.length; a++) {
                CSS.removeClass( this.confirmSpans[a], 'hidden_elem' );
            }
        } else {
            CSS.setStyle( this.connectButton, 'opacity', 0 );
            CSS.removeClass( this.connectButton, 'hidden_elem' );
            animation( this.connectButton ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 75 ).ondone( function () {
                CSS.setStyle( this.numberCloudNub, 'opacity', 0 );
                CSS.removeClass( this.numberCloudNub, 'hidden_elem' );
                animation( this.numberCloudNub ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 50 ).go();
            }.bind( this ) ).go();
        }
    }.bind( this ) ).go();
}, manageButtonCountButtonAnimation : function (a) {
    if (a && !this.showConfirm) {
        this.animateButtonCountButtonDisappearance();
    } else {
        this.animateButtonCountButtonReappearance();
    }
    if (!this.grayOut) {
        CSS.removeClass( this.thumbsUpIcon, 'hidden_elem' );
        CSS.addClass( this.undoRegion, 'hidden_elem' );
    }
}, manageSimpleButtonAnimation : function (a) {
    if (this.grayOut) {
        return;
    }
    if (a && !this.showConfirm) {
        this.animateSimpleButtonDisappearance();
    } else {
        this.animateSimpleButtonReappearance();
    }
}, animateButtonCountButtonDisappearance : function () {
    if (!this.grayOut) {
        animation( this.connectButton ).from( 'opacity', 1 ).to( 'opacity', 0 ).from( 'width', this.originalButtonWidth ).to( 'width', '0px' ).ondone( function () {
            CSS.addClass( this.connectButton, 'hidden_elem' );
        }.bind( this ) ).duration( 100 ).go();
    }
    animation( this.numberExcluding ).from( 'opacity', 1 ).to( 'opacity', 0 ).duration( 100 ).ondone( function () {
        CSS.addClass( this.numberExcluding, 'hidden_elem' );
        CSS.setStyle( this.summaryIncluding, 'opacity', 0 );
        CSS.removeClass( this.summaryIncluding, 'hidden_elem' );
        animation( this.summaryIncluding ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 100 ).go();
    }.bind( this ) ).go();
    for (var a = 0; a < this.confirmSpans.length; a++) {
        CSS.addClass( this.confirmSpans[a], 'hidden_elem' );
    }
    if (this.grayOut) {
        CSS.removeClass( this.connectButton, 'hidden_elem' );
    }
}, animateSimpleButtonDisappearance : function () {
    animation( this.connectButton ).from( 'opacity', 1 ).to( 'opacity', 0 ).from( 'width', this.originalButtonWidth ).to( 'width', '0px' ).ondone( function () {
        CSS.addClass( this.connectButton, 'hidden_elem' );
        CSS.setStyle( this.summaryIncluding, 'opacity', 0 );
        CSS.removeClass( this.summaryIncluding, 'hidden_elem' );
        animation( this.summaryIncluding ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 100 ).go();
    }.bind( this ) ).duration( 50 ).go();
    for (var a = 0; a < this.confirmSpans.length; a++) {
        CSS.addClass( this.confirmSpans[a], 'hidden_elem' );
    }
    if (this.grayOut) {
        CSS.removeClass( this.connectButton, 'hidden_elem' );
    }
}, computeButtonDimensions : function () {
    var c = CSS.hasClass( this.connectButton, 'hidden_elem' );
    if (c) {
        CSS.addClass( this.connectButton, 'connect_widget_offscreen' );
        CSS.removeClass( this.connectButton, 'hidden_elem' );
    }
    var a = Vector2.getElementDimensions( this.connectButton );
    var d = a.x;
    var b = a.y;
    var f = parseInt( CSS.getStyle( this.connectButton, 'paddingLeft' ), 10 );
    var g = parseInt( CSS.getStyle( this.connectButton, 'paddingRight' ), 10 );
    var h = parseInt( CSS.getStyle( this.connectButton, 'paddingTop' ), 10 );
    var e = parseInt( CSS.getStyle( this.connectButton, 'paddingBottom' ), 10 );
    if (c) {
        CSS.addClass( this.connectButton, 'hidden_elem' );
        CSS.removeClass( this.connectButton, 'connect_widget_offscreen' );
    }
    return {width : d - f - g - 2, height : b};
}, computeButtonDimensionsWithPadding : function () {
    var c = CSS.hasClass( this.connectButton, 'hidden_elem' );
    if (c) {
        CSS.addClass( this.connectButton, 'connect_widget_offscreen' );
        CSS.removeClass( this.connectButton, 'hidden_elem' );
    }
    var a = Vector2.getElementDimensions( this.connectButton );
    var d = a.x;
    var b = a.y;
    if (ua.ie()) {
        d += 3;
    }
    if (c) {
        CSS.addClass( this.connectButton, 'hidden_elem' );
        CSS.removeClass( this.connectButton, 'connect_widget_offscreen' );
    }
    return {width : d, height : b};
}, animateButtonCountButtonReappearance : function () {
    if (this.showConfirm) {
        for (var a = 0; a < this.confirmSpans.length; a++) {
            CSS.removeClass( this.confirmSpans[a], 'hidden_elem' );
        }
    } else if (!this.grayOut) {
        CSS.removeClass( this.connectButton, 'hidden_elem' );
        animation( this.connectButton ).from( 'width', '0px' ).to( 'width', this.originalButtonWidth ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 100 ).go();
    }
    CSS.setStyle( this.summaryIncluding, 'opacity', 1 );
    animation( this.summaryIncluding ).from( 'opacity', 1 ).to( 'opacity', 0 ).duration( 100 ).ondone( function () {
        CSS.addClass( this.summaryIncluding, 'hidden_elem' );
        CSS.setStyle( this.numberExcluding, 'opacity', 0 );
        CSS.removeClass( this.numberExcluding, 'hidden_elem' );
        animation( this.numberExcluding ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 100 ).go();
    }.bind( this ) ).go();
}, animateSimpleButtonReappearance : function () {
    if (this.showConfirm) {
        for (var a = 0; a < this.confirmSpans.length; a++) {
            CSS.removeClass( this.confirmSpans[a], 'hidden_elem' );
        }
    } else {
        CSS.removeClass( this.connectButton, 'hidden_elem' );
        animation( this.connectButton ).from( 'width', '0px' ).to( 'width', this.originalButtonWidth ).from( 'opacity', 0 ).to( 'opacity', 1 ).duration( 100 ).go();
    }
    CSS.setStyle( this.summaryIncluding, 'opacity', 1 );
    animation( this.summaryIncluding ).from( 'opacity', 1 ).to( 'opacity', 0 ).duration( 100 ).ondone( function () {
        CSS.addClass( this.summaryIncluding, 'hidden_elem' );
    }.bind( this ) ).go();
}, injectCommentWidgetMarkup : function (a) {
    this.commentDocument = a;
    this.commentDocument.body.innerHTML = this.commentWidgetMarkup;
    this.transferCSSStyles();
    if (this.newProfilePic) {
        var c = DOM.find( this.commentDocument, 'img.connect_comment_widget_user_pic' );
        c.src = this.newProfilePic;
        delete this.newProfilePic;
    }
    if (ua.ie()) {
        var f = DOM.scry( this.commentDocument, '.connect_comment_share_preview_pic' );
        if (f.length > 0) {
            f = f[0];
            var e = 50;
            var d = Vector2.getElementDimensions( f );
            var g = e / d.x;
            if (g < 1) {
                CSS.setStyle( f, 'width', e );
                CSS.setStyle( f, 'height', d.y * g );
            }
        }
    }
    this.setupCommentHooks( this.commentDocument );
    this.commentWidgetIsExpanded = !this.inlineUnlikeLink;
    var b = this.getCommentActivatingComponent();
    b.onmouseout = this.commentDocument.body.onmouseout = this.onCommentMouseOut.bind( this );
    b.onmouseover = this.commentDocument.body.onmouseover = this.onCommentMouseOver.bind( this );
    this.inGracePeriod = false;
}, onCommentMouseOut : function (a) {
    if (this.mouseclickToDismiss) {
        this.mouseOutside = true;
        return true;
    } else {
        return this.hideCommentWidget();
    }
}, onCommentMouseOver : function (a) {
    if (this.mouseclickToDismiss) {
        this.mouseOutside = false;
        return true;
    } else {
        return this.showCommentWidget();
    }
}, setupCommentHooks : function (a) {
    this.placeholderInputRegion = DOM.find( a, 'div.connect_comment_widget_placeholder_input_region' );
    this.placeholderInput = DOM.find( this.placeholderInputRegion, 'input.connect_comment_widget_placeholder_input' );
    this.fullInputRegion = DOM.find( a, 'div.connect_comment_widget_full_input_region' );
    this.fullInputTextarea = DOM.find( this.fullInputRegion, 'textarea.connect_comment_widget_full_input_textarea' );
    this.ownProductCheckbox = DOM.scry( a, '.connect_comment_widget_own_product_checkbox' );
    if (this.ownProductCheckbox.length > 0) {
        this.ownProductCheckbox = this.ownProductCheckbox[0];
    }
    this.widgetButtonRegion = DOM.find( a, 'div.connect_comment_widget_button_region' );
    this.postToFacebookButton = DOM.scry( this.widgetButtonRegion, '.connect_comment_widget_post_button input' );
    if (this.postToFacebookButton.length > 0) {
        this.postToFacebookButton = this.postToFacebookButton[0];
        this.postToFacebookButton.onclick = this.updateUserComment.bind( this );
    }
    this.closeButton = DOM.scry( this.widgetButtonRegion, '.connect_comment_widget_close_button input' );
    if (this.closeButton.length > 0) {
        this.closeButton = this.closeButton[0];
        this.closeButton.onclick = this.closeCommentWidget.bind( this );
        this.sendOnEnter = true;
    }
    this.mouseclickToDismiss = CSS.hasClass( this.widgetButtonRegion, 'mouseclicktodismiss' );
    this.inlineUnlikeLink = DOM.scry( a, 'a.connect_comment_widget_unlike_link' );
    if (this.inlineUnlikeLink.length > 0) {
        this.inlineUnlikeLink = this.inlineUnlikeLink[0];
        this.inlineUnlikeLink.onclick = this.connectToNodeOnClick.bind( this );
    }
    this.defaultInputText = this.placeholderInput.value;
    this.placeholderInput.onfocus = this.transitionToFullInputMode.bind( this );
    this.fullInputTextarea.onfocus = this.removePlaceholderText.bind( this );
    this.fullInputTextarea.onblur = (function (b) {
        this.restorePlaceholderText();
        if (this.mouseclickToDismiss && this.mouseOutside) {
            return this.hideCommentWidget();
        }
    }).bind( this );
    if (this.inlineUnlikeLink) {
        this.inlineUnlikeLink.onclick = this.connectToNodeOnClick.bind( this );
    }
    if (this.closeButton) {
        this.closeButton.onclick = this.closeCommentWidget.bind( this );
    }
    this.sendOnEnter = (CSS.hasClass( this.widgetButtonRegion, 'sendonenter' ) || this.sendOnEnter);
    if (this.sendOnEnter) {
        this.fullInputTextarea.onkeydown = (function (b) {
            b = b || window.event;
            if (!b) {
                return true;
            }
            if (this.sendOnEnter && b.keyCode == 13 && !(b.ctrlKey || b.shiftKey || b.altKey || b.metaKey)) {
                this.updateUserComment();
                return false;
            }
            if (this.didResetOnKeydown) {
                return true;
            }
            this.removePlaceholderText();
            this.didResetOnKeydown = true;
            return true;
        }).bind( this );
        this.transitionToFullInputMode();
    }
}, getCommentActivatingComponent : function () {
    if (this.layout === ExternalNodeConnectWidget.BOX_COUNT_LAYOUT || this.layout === ExternalNodeConnectWidget.BUTTON_COUNT_LAYOUT) {
        return this.widget;
    } else if (this.layout === ExternalNodeConnectWidget.SIMPLE_LAYOUT) {
        return this.widget;
    } else if (this.grayOut) {
        return DOM.find( this.widget, 'table.connect_widget_interactive_area' );
    } else {
        return this.confirmationCell;
    }
}, showCommentWidget : function (event) {
    if (this.otherCommentWidgetOpen) {
        return false;
    }
    this.inGracePeriod = true;
    this.killCloseThread();
    if (this.commentWidgetOpen && !this.commentWidgetVisible) {
        this.commentWidgetVisible = true;
        CSS.show( this.commentDocument.body );
        UnverifiedXD.send( {type : 'showEdgeCommentDialog'} );
    }
    return false;
}, hideCommentWidget : function (event) {
    if (this.otherCommentWidgetOpen) {
        return false;
    }
    this.inGracePeriod = false;
    if (this.commentWidgetOpen && this.commentWidgetVisible) {
        var a = function () {
            if (!this.inGracePeriod && this.shouldHideExpandedWidget()) {
                this.fullInputTextarea.blur();
                this.commentWidgetVisible = false;
                if (!this.socialBar) {
                    CSS.hide( this.commentDocument.body );
                }
                UnverifiedXD.send( {type : 'hideEdgeCommentDialog'} );
            }
            this.inGracePeriod = false;
            this.killCloseThread();
        }.bind( this );
        this.closeThreadID = setTimeout( a, 100 );
    }
    return false;
}, shouldHideExpandedWidget : function () {
    return !this.commentWidgetIsExpanded || this.fullInputTextarea.value === '' || this.fullInputTextarea.value === this.defaultInputText;
}, killCloseThread : function () {
    if (this.closeThreadID) {
        clearTimeout( this.closeThreadID );
        delete this.closeThreadID;
    }
}, transferCSSStyles : function () {
    var e = DOM.scry( window.document, 'link' );
    var f = DOM.scry( window.document, 'style' );
    var d = DOM.find( window.document, 'html' );
    var h = DOM.find( this.commentDocument, 'html' );
    var g = DOM.find( this.commentDocument, 'head' );
    for (var b = 0; b < e.length; b++) {
        if (e[b].rel == 'stylesheet') {
            var c = this.commentDocument.createElement( 'link' );
            c.rel = e[b].rel;
            c.href = e[b].href;
            c.type = e[b].type;
            g.appendChild( c );
        }
    }
    for (b = 0; b < f.length; b++) {
        var i = this.commentDocument.createElement( 'style' );
        var a = f[b].innerText || f[b].textContent || f[b].innerHTML;
        i.setAttribute( "type", "text/css" );
        g.appendChild( i );
        if (i.styleSheet) {
            i.styleSheet.cssText = a;
        } else {
            var j = this.commentDocument.createTextNode( a );
            i.appendChild( j );
        }
    }
    h.id = d.id;
    h.className = d.className;
    this.commentDocument.body.className = window.document.body.className;
}, transitionToFullInputMode : function (event) {
    this.commentWidgetIsExpanded = true;
    CSS.hide( this.placeholderInputRegion );
    CSS.show( this.fullInputRegion );
    CSS.show( this.widgetButtonRegion );
    if (this.closeButton || this.sendOnEnter) {
        this.restorePlaceholderText();
        var b = this.fullInputTextarea;
        if (document.selection) {
            var a = b.createTextRange();
            a.collapse( true );
            a.moveEnd( 'character', 0 );
            a.moveStart( 'character', 0 );
            a.select();
        } else if (b.setSelectionRange) {
            b.focus();
            b.setSelectionRange( 0, 0 );
        }
    }
    return false;
}, removePlaceholderText : function (event) {
    if (CSS.hasClass( this.fullInputTextarea, 'connect_comment_widget_disabled' )) {
        CSS.removeClass( this.fullInputTextarea, 'connect_comment_widget_disabled' );
        this.fullInputTextarea.value = '';
    }
    return false;
}, restorePlaceholderText : function (event) {
    if (this.fullInputTextarea.value.trim() == '') {
        this.fullInputTextarea.value = this.defaultInputText;
        CSS.addClass( this.fullInputTextarea, 'connect_comment_widget_disabled' );
    }
    return false;
}, updateUserComment : function (event) {
    var b = this.fullInputTextarea.value.trim();
    var a = this.ownProductCheckbox.checked;
    if (b === '' || b == this.defaultInputText) {
        if (a === false) {
            return false;
        }
        b = '';
    }
    this.postUserComment( b, a );
    return false;
}, getAjaxEndpoint : function () {
    return '/ajax/connect/external_node_connect.php';
}, getCommentAjaxEndpoint : function () {
    return '/ajax/connect/external_edge_comment.php';
}, getConfirmURL : function () {
    var a = {href : this.externalUrl, page_id : this.pageId, node_type : this.nodeType, edge_type : this.edgeType, widget_id : this.widgetID};
    if (this.ref) {
        a.ref = this.ref;
    }
    return URI( '/plugins/like_confirm.php' ).addQueryData( a ).toString();
}, updateLoggedInUser : function (b, a) {
    ExternalNodeConnectWidget.updateLoggedInUser( b, a );
}, syncSendWidgetWidth : function (h, b) {
    var a = this.computeButtonDimensionsWithPadding().width;
    var c = b.button_width - a;
    if (this.layout === ExternalNodeConnectWidget.BOX_COUNT_LAYOUT && c > 0 && c <= 5) {
        CSS.setStyle( this.connectButton, 'width', (b.button_width - parseInt( CSS.getStyle( this.connectButton, 'paddingLeft' ) ) - parseInt( CSS.getStyle( this.connectButton, 'paddingRight' ) ) - parseInt( CSS.getStyle( this.connectButton, 'borderLeftWidth' ) ) - parseInt( CSS.getStyle( this.connectButton, 'borderRightWidth' ) )) + 'px' );
        this.sizeNumberCloud();
    }
    if (this.layout === ExternalNodeConnectWidget.STANDARD_LAYOUT) {
        var d = Vector2.getElementDimensions( this.widget ).y;
        CSS.setStyle( this.widget, 'height', (d + 5) + 'px' );
        var e = ua.ie();
        var f = intl_locale_is_rtl();
        var g = f ? 'right' : 'left';
        if (e && e < 9) {
            CSS.setStyle( this.connectButton, 'position', 'absolute' );
            CSS.setStyle( this.connectButton, g, -(b.button_width + 10) + 'px' );
        } else {
            CSS.setStyle( this.connectButton, 'position', 'fixed' );
            CSS.setStyle( this.connectButton, g, '0px' );
        }
        if (e && this.connectButtonSlider) {
            CSS.setStyle( this.connectButtonSlider, g, b.button_width + 'px' );
            if (e <= 7) {
                this.fixIEButtonDoubleLineBug();
            }
        }
        CSS.setStyle( this.confirmationCell, 'position', 'absolute' );
        CSS.setStyle( this.confirmationCell, g, (b.button_width + a + 5) + 'px' );
        CSS.setStyle( this.confirmationCell, 'top', '5px' );
        if (this.sampleConnections) {
            CSS.setStyle( this.sampleConnections, 'position', 'fixed' );
            CSS.setStyle( this.sampleConnections, g, '0' );
        }
        this.invertedButtons = true;
        this.repositionFacepileVertically();
    }
}, repositionFacepileVertically : function () {
    if (this.invertedButtons && this.sampleConnections) {
        var a = Vector2.getElementDimensions( this.summaryText ).y;
        CSS.setStyle( this.sampleConnections, 'margin-top', (5 + a + 5) + 'px' );
    }
}} );
var ExternalPageLikeWidget = function (a) {
    a.edgeType = 'like';
    this.parent.construct( this, a );
    this.unactionLink = DOM.scry( this.widget, 'span.unlike_link' )[0];
    if (this.unactionLink) {
        Event.listen( this.unactionLink, 'click', this.connectToNodeOnClick.bind( this ) );
    }
    this.hasShowedInsights = false;
    this.showInsights();
};
Class.extend( ExternalPageLikeWidget, 'ExternalNodeConnectWidget' );
ExternalPageLikeWidget.LIKE_EDGE_TYPE = 0;
ExternalPageLikeWidget.RECOMMEND_EDGE_TYPE = 1;
copy_properties( ExternalPageLikeWidget.prototype, {getSyncEndpointName : function () {
    var a = this.connectText ? this.connectText : 'like';
    if (a == ExternalPageLikeWidget.RECOMMEND_EDGE_TYPE) {
        a = 'like';
    }
    return 'platform/' + a + '/sync';
}, getConnectionEndpointName : function () {
    return 'platform/like/connection';
}, getPluginName : function () {
    return 'like';
}, presentInsightsPage : function () {
    window.open( '/insights/?sk=po_' + this.pageId, '_blank' );
}, showInsights : function () {
    if (this.hasShowedInsights || !this.pageId) {
        return;
    }
    var b = DOM.scry( this.widget, 'a.connect_widget_insights_link' );
    if (b) {
        for (var a = 0; a < b.length; a++) {
            CSS.show( b[a].parentNode );
            Event.listen( b[a], 'click', this.presentInsightsPage.bind( this ) );
        }
    }
    this.hasShowedInsights = true;
}, repositionFacepileVertically : function () {
    this.showInsights();
    this.parent.repositionFacepileVertically();
}} );
function SendButton (b) {
    var a = $( b.divID );
    copy_properties( this, {button : DOM.find( a, 'a.btnLink' ), channel : b.channel, div : a, divID : b.divID, loggedIn : !!b.userID, nodeImageURL : b.nodeImageURL, nodeTitle : b.nodeTitle, nodeURL : b.nodeURL, nodeSummary : b.nodeSummary, error : b.error, initFormOpen : b.initFormOpen, extended_social_context : b.extended_social_context, likeButtonLayout : b.likeButtonLayout} );
    this.init();
}
copy_properties( SendButton.prototype, {init : function () {
    this.formIsOpen = false;
    this.formIsShown = false;
    this.pendingFormShow = false;
    Arbiter.subscribe( 'platform/socialplugins/send/sent', function (b, a) {
        if (a.controllerID === this.divID) {
            this.closeForm();
        }
    }.bind( this ), Arbiter.SUBSCRIBE_NEW );
    Arbiter.subscribe( 'platform/socialplugins/send/cancel', function (b, a) {
        if (a.controllerID === this.divID) {
            this.hideForm();
        }
    }.bind( this ), Arbiter.SUBSCRIBE_NEW );
    this.buttonWidth = Vector2.getElementDimensions( this.button ).x;
    this.widthSyncArbiter = Arbiter.subscribe( 'platform/socialplugins/like/resize', this.syncLikeWidgetWidth.bind( this ) );
    Arbiter.inform( 'platform/socialplugins/send/resize', {button_width : this.buttonWidth}, Arbiter.BEHAVIOR_STATE );
    Arbiter.subscribe( 'platform/socialplugins/dialog', function (b, a) {
        if (a.controllerID !== this.divID && a.event == 'open') {
            this.closeForm();
        }
    }.bind( this ) );
    UnverifiedXD.init( {channelUrl : this.channel, autoResize : true, resizeWidth : true} );
    Event.listen( this.button, 'click', this.toggleFormVisibility.bind( this ) );
    if (this.initFormOpen) {
        onafterloadRegister( this.toggleFormVisibility.bind( this ) );
    }
}, syncLikeWidgetWidth : function (d, a) {
    var b = a.button_width - this.buttonWidth;
    if (a.layout === 'box_count' && b > 0 && b <= 5) {
        CSS.setStyle( this.div, 'width', (a.button_width - parseInt( CSS.getStyle( this.button, 'paddingLeft' ) ) - parseInt( CSS.getStyle( this.button, 'paddingRight' ) ) - parseInt( CSS.getStyle( this.button, 'borderLeftWidth' ) ) - parseInt( CSS.getStyle( this.button, 'borderRightWidth' ) )) + 'px' );
    }
    if (a.layout === 'standard') {
        var c = intl_locale_is_rtl() ? 'right' : 'left';
        CSS.setStyle( this.div, 'position', 'absolute' );
        CSS.setStyle( this.div, c, (a.button_width + 5) + 'px' );
        this.invertedButtons = true;
    }
    this.likeWidgetWidth = a.widget_width;
    this.likeButtonWidth = a.button_width;
}, toggleFormVisibility : function (a) {
    if (!this.loggedIn) {
        a.kill();
        PlatformOptInPopup.open( 'send' );
        return;
    }
    if (!this.formIsOpen) {
        this.openForm();
    } else if (this.formIsShown) {
        this.hideForm();
    } else {
        this.showForm();
    }
}, hideForm : function () {
    if (this.formIsShown) {
        this.formIsShown = false;
        UnverifiedXD.send( {type : 'hideEdgeCommentDialog'} );
        CSS.removeClass( this.div, 'fbSendButtonSelected' );
    }
}, showForm : function () {
    if (!this.formIsShown) {
        CSS.addClass( this.div, 'fbSendButtonSelected' );
        this.formIsShown = true;
        UnverifiedXD.send( {type : 'showEdgeCommentDialog'} );
    }
}, closeForm : function () {
    Arbiter.inform( 'platform/socialplugins/dialog', {controllerID : this.divID, event : 'close'} );
    if (this.formIsOpen) {
        this.formIsOpen = this.formIsShown = false;
        UnverifiedXD.send( {type : 'dismissEdgeCommentDialog'} );
        CSS.removeClass( this.div, 'fbSendButtonSelected' );
    }
    return this;
}, openForm : function () {
    Arbiter.inform( 'platform/socialplugins/dialog', {controllerID : this.divID, event : 'open'} );
    if (!this.formIsOpen) {
        CSS.addClass( this.div, 'fbSendButtonSelected' );
        this.formIsOpen = this.formIsShown = true;
        var a = {type : 'presentEdgeCommentDialog', nodeImageURL : this.nodeImageURL, nodeTitle : this.nodeTitle, nodeURL : this.nodeURL, nodeSummary : this.nodeSummary, controllerID : this.divID, error : this.error, widget_type : 'send', extended_social_context : this.extended_social_context};
        if (this.likeButtonLayout == 'button_count') {
            a.preComputedWidthOffset = this.likeWidgetWidth ? this.likeWidgetWidth + 10 : 91;
        } else if (this.likeButtonLayout == 'box_count') {
            a.preComputedHeightOffset = 65;
            a.preComputedWidthOffset = this.buttonWidth ? this.buttonWidth + 7 : 60;
            a.siderender = true;
        } else if (this.likeButtonLayout == 'simple') {
            a.preComputedWidthOffset = 100;
        } else if (this.likeButtonLayout == 'standard' && this.invertedButtons) {
            a.preComputedWidthOffset = this.likeButtonWidth ? this.likeButtonWidth + 5 : 69;
        }
        UnverifiedXD.send( a );
    }
    return this;
}} );