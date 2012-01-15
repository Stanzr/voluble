var async = require('async');
var Seeder = function(){
    this._flow = {};
    this._last = '';
};
Seeder.prototype.create = function(){
    this._flow.start=function(callback,data){
        callback(null,null);
    };
    this._last = 'start';
    return this;
};
Seeder.prototype.next = function(count,func){
    this._flow[this._last+'1']=[this._last,function(callback,data){
        var cnt = count;

        for(var i=0;i<cnt;i++){
            func(function(){
                if(!--count){
                    callback(null,null);
                }
            });

        }
    }];
    this._last+='1';
    return this;
};
Seeder.prototype.run=function(cb){
    cb = cb || function(){};
    async.auto(this._flow,cb);
};
module.exports = Seeder;