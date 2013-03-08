define("gallery/underscore/1.4.3/underscore",[],function(a,b,c){(function(){var a=this,d=a._,e={},f=Array.prototype,g=Object.prototype,h=Function.prototype,i=f.push,j=f.slice,k=f.concat,l=g.toString,m=g.hasOwnProperty,n=f.forEach,o=f.map,p=f.reduce,q=f.reduceRight,r=f.filter,s=f.every,t=f.some,u=f.indexOf,v=f.lastIndexOf,w=Array.isArray,x=Object.keys,y=h.bind,z=function(a){return a instanceof z?a:this instanceof z?(this._wrapped=a,void 0):new z(a)};void 0!==b?(void 0!==c&&c.exports&&(b=c.exports=z),b._=z):a._=z,z.VERSION="1.4.3";var A=z.each=z.forEach=function(a,b,c){if(null!=a)if(n&&a.forEach===n)a.forEach(b,c);else if(a.length===+a.length){for(var d=0,f=a.length;f>d;d++)if(b.call(c,a[d],d,a)===e)return}else for(var g in a)if(z.has(a,g)&&b.call(c,a[g],g,a)===e)return};z.map=z.collect=function(a,b,c){var d=[];return null==a?d:o&&a.map===o?a.map(b,c):(A(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)};var B="Reduce of empty array with no initial value";z.reduce=z.foldl=z.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),p&&a.reduce===p)return d&&(b=z.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(A(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(B);return c},z.reduceRight=z.foldr=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),q&&a.reduceRight===q)return d&&(b=z.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=a.length;if(f!==+f){var g=z.keys(a);f=g.length}if(A(a,function(h,i,j){i=g?g[--f]:--f,e?c=b.call(d,c,a[i],i,j):(c=a[i],e=!0)}),!e)throw new TypeError(B);return c},z.find=z.detect=function(a,b,c){var d;return C(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},z.filter=z.select=function(a,b,c){var d=[];return null==a?d:r&&a.filter===r?a.filter(b,c):(A(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},z.reject=function(a,b,c){return z.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},z.every=z.all=function(a,b,c){b||(b=z.identity);var d=!0;return null==a?d:s&&a.every===s?a.every(b,c):(A(a,function(a,f,g){return(d=d&&b.call(c,a,f,g))?void 0:e}),!!d)};var C=z.some=z.any=function(a,b,c){b||(b=z.identity);var d=!1;return null==a?d:t&&a.some===t?a.some(b,c):(A(a,function(a,f,g){return d||(d=b.call(c,a,f,g))?e:void 0}),!!d)};z.contains=z.include=function(a,b){return null==a?!1:u&&a.indexOf===u?-1!=a.indexOf(b):C(a,function(a){return a===b})},z.invoke=function(a,b){var c=j.call(arguments,2);return z.map(a,function(a){return(z.isFunction(b)?b:a[b]).apply(a,c)})},z.pluck=function(a,b){return z.map(a,function(a){return a[b]})},z.where=function(a,b){return z.isEmpty(b)?[]:z.filter(a,function(a){for(var c in b)if(b[c]!==a[c])return!1;return!0})},z.max=function(a,b,c){if(!b&&z.isArray(a)&&a[0]===+a[0]&&65535>a.length)return Math.max.apply(Math,a);if(!b&&z.isEmpty(a))return-1/0;var d={computed:-1/0,value:-1/0};return A(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},z.min=function(a,b,c){if(!b&&z.isArray(a)&&a[0]===+a[0]&&65535>a.length)return Math.min.apply(Math,a);if(!b&&z.isEmpty(a))return 1/0;var d={computed:1/0,value:1/0};return A(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;d.computed>g&&(d={value:a,computed:g})}),d.value},z.shuffle=function(a){var b,c=0,d=[];return A(a,function(a){b=z.random(c++),d[c-1]=d[b],d[b]=a}),d};var D=function(a){return z.isFunction(a)?a:function(b){return b[a]}};z.sortBy=function(a,b,c){var d=D(b);return z.pluck(z.map(a,function(a,b,e){return{value:a,index:b,criteria:d.call(c,a,b,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index<b.index?-1:1}),"value")};var E=function(a,b,c,d){var e={},f=D(b||z.identity);return A(a,function(b,g){var h=f.call(c,b,g,a);d(e,h,b)}),e};z.groupBy=function(a,b,c){return E(a,b,c,function(a,b,c){(z.has(a,b)?a[b]:a[b]=[]).push(c)})},z.countBy=function(a,b,c){return E(a,b,c,function(a,b){z.has(a,b)||(a[b]=0),a[b]++})},z.sortedIndex=function(a,b,c,d){c=null==c?z.identity:D(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;e>c.call(d,a[h])?f=h+1:g=h}return f},z.toArray=function(a){return a?z.isArray(a)?j.call(a):a.length===+a.length?z.map(a,z.identity):z.values(a):[]},z.size=function(a){return null==a?0:a.length===+a.length?a.length:z.keys(a).length},z.first=z.head=z.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:j.call(a,0,b)},z.initial=function(a,b,c){return j.call(a,0,a.length-(null==b||c?1:b))},z.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:j.call(a,Math.max(a.length-b,0))},z.rest=z.tail=z.drop=function(a,b,c){return j.call(a,null==b||c?1:b)},z.compact=function(a){return z.filter(a,z.identity)};var F=function(a,b,c){return A(a,function(a){z.isArray(a)?b?i.apply(c,a):F(a,b,c):c.push(a)}),c};z.flatten=function(a,b){return F(a,b,[])},z.without=function(a){return z.difference(a,j.call(arguments,1))},z.uniq=z.unique=function(a,b,c,d){z.isFunction(b)&&(d=c,c=b,b=!1);var e=c?z.map(a,c,d):a,f=[],g=[];return A(e,function(c,d){(b?d&&g[g.length-1]===c:z.contains(g,c))||(g.push(c),f.push(a[d]))}),f},z.union=function(){return z.uniq(k.apply(f,arguments))},z.intersection=function(a){var b=j.call(arguments,1);return z.filter(z.uniq(a),function(a){return z.every(b,function(b){return z.indexOf(b,a)>=0})})},z.difference=function(a){var b=k.apply(f,j.call(arguments,1));return z.filter(a,function(a){return!z.contains(b,a)})},z.zip=function(){for(var a=j.call(arguments),b=z.max(z.pluck(a,"length")),c=Array(b),d=0;b>d;d++)c[d]=z.pluck(a,""+d);return c},z.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},z.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=z.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(u&&a.indexOf===u)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1},z.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=null!=c;if(v&&a.lastIndexOf===v)return d?a.lastIndexOf(b,c):a.lastIndexOf(b);for(var e=d?c:a.length;e--;)if(a[e]===b)return e;return-1},z.range=function(a,b,c){1>=arguments.length&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=Array(d);d>e;)f[e++]=a,a+=c;return f};var G=function(){};z.bind=function(a,b){var c,d;if(a.bind===y&&y)return y.apply(a,j.call(arguments,1));if(!z.isFunction(a))throw new TypeError;return c=j.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,c.concat(j.call(arguments)));G.prototype=a.prototype;var e=new G;G.prototype=null;var f=a.apply(e,c.concat(j.call(arguments)));return Object(f)===f?f:e}},z.bindAll=function(a){var b=j.call(arguments,1);return 0==b.length&&(b=z.functions(a)),A(b,function(b){a[b]=z.bind(a[b],a)}),a},z.memoize=function(a,b){var c={};return b||(b=z.identity),function(){var d=b.apply(this,arguments);return z.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},z.delay=function(a,b){var c=j.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},z.defer=function(a){return z.delay.apply(z,[a,1].concat(j.call(arguments,1)))},z.throttle=function(a,b){var c,d,e,f,g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)};return function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},z.debounce=function(a,b,c){var d,e;return function(){var f=this,g=arguments,h=function(){d=null,c||(e=a.apply(f,g))},i=c&&!d;return clearTimeout(d),d=setTimeout(h,b),i&&(e=a.apply(f,g)),e}},z.once=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}},z.wrap=function(a,b){return function(){var c=[a];return i.apply(c,arguments),b.apply(this,c)}},z.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},z.after=function(a,b){return 0>=a?b():function(){return 1>--a?b.apply(this,arguments):void 0}},z.keys=x||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)z.has(a,c)&&(b[b.length]=c);return b},z.values=function(a){var b=[];for(var c in a)z.has(a,c)&&b.push(a[c]);return b},z.pairs=function(a){var b=[];for(var c in a)z.has(a,c)&&b.push([c,a[c]]);return b},z.invert=function(a){var b={};for(var c in a)z.has(a,c)&&(b[a[c]]=c);return b},z.functions=z.methods=function(a){var b=[];for(var c in a)z.isFunction(a[c])&&b.push(c);return b.sort()},z.extend=function(a){return A(j.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},z.pick=function(a){var b={},c=k.apply(f,j.call(arguments,1));return A(c,function(c){c in a&&(b[c]=a[c])}),b},z.omit=function(a){var b={},c=k.apply(f,j.call(arguments,1));for(var d in a)z.contains(c,d)||(b[d]=a[d]);return b},z.defaults=function(a){return A(j.call(arguments,1),function(b){if(b)for(var c in b)null==a[c]&&(a[c]=b[c])}),a},z.clone=function(a){return z.isObject(a)?z.isArray(a)?a.slice():z.extend({},a):a},z.tap=function(a,b){return b(a),a};var H=function(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;a instanceof z&&(a=a._wrapped),b instanceof z&&(b=b._wrapped);var e=l.call(a);if(e!=l.call(b))return!1;switch(e){case"[object String]":return a==b+"";case"[object Number]":return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]==a)return d[f]==b;c.push(a),d.push(b);var g=0,h=!0;if("[object Array]"==e){if(g=a.length,h=g==b.length)for(;g--&&(h=H(a[g],b[g],c,d)););}else{var i=a.constructor,j=b.constructor;if(i!==j&&!(z.isFunction(i)&&i instanceof i&&z.isFunction(j)&&j instanceof j))return!1;for(var k in a)if(z.has(a,k)&&(g++,!(h=z.has(b,k)&&H(a[k],b[k],c,d))))break;if(h){for(k in b)if(z.has(b,k)&&!g--)break;h=!g}}return c.pop(),d.pop(),h};z.isEqual=function(a,b){return H(a,b,[],[])},z.isEmpty=function(a){if(null==a)return!0;if(z.isArray(a)||z.isString(a))return 0===a.length;for(var b in a)if(z.has(a,b))return!1;return!0},z.isElement=function(a){return!(!a||1!==a.nodeType)},z.isArray=w||function(a){return"[object Array]"==l.call(a)},z.isObject=function(a){return a===Object(a)},A(["Arguments","Function","String","Number","Date","RegExp"],function(a){z["is"+a]=function(b){return l.call(b)=="[object "+a+"]"}}),z.isArguments(arguments)||(z.isArguments=function(a){return!(!a||!z.has(a,"callee"))}),z.isFunction=function(a){return"function"==typeof a},z.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},z.isNaN=function(a){return z.isNumber(a)&&a!=+a},z.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==l.call(a)},z.isNull=function(a){return null===a},z.isUndefined=function(a){return void 0===a},z.has=function(a,b){return m.call(a,b)},z.noConflict=function(){return a._=d,this},z.identity=function(a){return a},z.times=function(a,b,c){for(var d=Array(a),e=0;a>e;e++)d[e]=b.call(c,e);return d},z.random=function(a,b){return null==b&&(b=a,a=0),a+(0|Math.random()*(b-a+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=z.invert(I.escape);var J={escape:RegExp("["+z.keys(I.escape).join("")+"]","g"),unescape:RegExp("("+z.keys(I.unescape).join("|")+")","g")};z.each(["escape","unescape"],function(a){z[a]=function(b){return null==b?"":(""+b).replace(J[a],function(b){return I[a][b]})}}),z.result=function(a,b){if(null==a)return null;var c=a[b];return z.isFunction(c)?c.call(a):c},z.mixin=function(a){A(z.functions(a),function(b){var c=z[b]=a[b];z.prototype[b]=function(){var a=[this._wrapped];return i.apply(a,arguments),O.call(this,c.apply(z,a))}})};var K=0;z.uniqueId=function(a){var b=""+ ++K;return a?a+b:b},z.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,M={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},N=/\\|'|\r|\n|\t|\u2028|\u2029/g;z.template=function(a,b,c){c=z.defaults({},c,z.templateSettings);var d=RegExp([(c.escape||L).source,(c.interpolate||L).source,(c.evaluate||L).source].join("|")+"|$","g"),e=0,f="__p+='";a.replace(d,function(b,c,d,g,h){return f+=a.slice(e,h).replace(N,function(a){return"\\"+M[a]}),c&&(f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(f+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),g&&(f+="';\n"+g+"\n__p+='"),e=h+b.length,b}),f+="';\n",c.variable||(f="with(obj||{}){\n"+f+"}\n"),f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{var g=Function(c.variable||"obj","_",f)}catch(h){throw h.source=f,h}if(b)return g(b,z);var i=function(a){return g.call(this,a,z)};return i.source="function("+(c.variable||"obj")+"){\n"+f+"}",i},z.chain=function(a){return z(a).chain()};var O=function(a){return this._chain?z(a).chain():a};z.mixin(z),A(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=f[a];z.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],O.call(this,c)}}),A(["concat","join","slice"],function(a){var b=f[a];z.prototype[a]=function(){return O.call(this,b.apply(this._wrapped,arguments))}}),z.extend(z.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this)});