define("seajs/plugin-text",["./plugin-base"],function(a){function b(a){return a.replace(/(["\\])/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\f/g,"\\f")}var c=a("./plugin-base"),d=c.util;c.add({name:"text",ext:[".tpl",".htm",".html"],fetch:function(a,c){d.xhr(a,function(a){var e=b(a);d.globalEval('define([], "'+e+'")'),c()})}})});