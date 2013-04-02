define("klog/admin/categories/category",["_","backbone"],function(a){a("_");var c=a("backbone");c.emulateHTTP=!0;var d=c.Model.extend({});return d.List=c.Collection.extend({model:d,url:"/admin/categories"}),d}),define("klog/admin/categories/category-list-view",["./category-view","../common/pop-confirm","./category-edit-view","_","$","jquery.color","backbone","events"],function(a){var b=a("_"),c=a("$");a("jquery.color");var d=a("backbone"),e=a("./category-view"),f=a("./category-edit-view"),g=d.View.extend({el:c("table"),initialize:function(){b.bindAll(this),this.childViews={},this.editView=new f,this.emptyRow=this.$(".table-empty-row"),this.collection.on("add",this.add),this.collection.on("destroy",this.handleChildDelete),this.collection.on("edit",this.renderEdit),this.collection.each(function(a){this.add(a,{noAnim:!0})},this),0===this.collection.size()&&this.emptyRow.show()},add:function(a,b){var c=new e({model:a});this.$el.append(c.$el),this.childViews[a.id]=c,this.emptyRow.hide(),b&&b.noAnim||c.$el.fadeIn("normal",c.animChange)},renderEdit:function(a){var b=this.childViews[a.id];this.editView.setModel(a),this.editView.insertAfter(b)},handleChildDelete:function(a){delete this.childViews[a.id]}});return g}),define("klog/admin/categories/category-view",["../common/pop-confirm","_","$","jquery.color","backbone","events"],function(a){var b=a("_"),c=a("$");a("jquery.color");var d=a("backbone"),e='<tr><td><%= name %></td><td><%= blog_count %></td><td><%= created_at %></td><td class="btn-group"><a class="btn edit">修改</a><a class="btn delete">删除</a></td></tr>',f=a("../common/pop-confirm"),g=new f,h=d.View.extend({el:null,template:b.template(e),events:{"click .delete":"confirmDelete","click .edit":"edit"},initialize:function(){b.bindAll(this),this.model.on("change:name",this.changeName),this.render()},render:function(){this.$el=c(this.template(this.model.toJSON()))},changeName:function(a,b){this.$("td:first").text(b),this.animChange()},confirmDelete:function(){g.show({text:"确定要删除分类 “"+this.model.get("name")+"” ？",trigger:this.$(".delete").parent()}),g.off().on("submit",this.delete)},"delete":function(){this.model.destroy(),this.animDelete()},edit:function(){this.model.trigger("edit",this.model)},animDelete:function(){this.$("td").css("background-color","#f4c8c5"),this.$("td").animate({backgroundColor:"#fff",height:0},"slow","linear",this.remove),this.$el.hide("slow")},animChange:function(){var a=function(){this.$("td").animate({backgroundColor:"#fff"},"slow","linear")};this.$("td").css("backgroundColor","#fcf8e3"),b.delay(b.bind(a,this),1500)}});return h}),define("klog/admin/common/pop-confirm",["_","$","events"],function(a){var b=a("_"),c=a("$"),d=a("events"),e='<div class="pop-confirm"><div class="pop-confirm-inner clearfix"><div class="pop-confirm-content"></div><div class="pull-right"><a class="btn btn-small btn-primary submit">确定</a>&nbsp;<a class="btn btn-small cancel">取消</a></div></div></div>',f=function(){b.bindAll(this),this.$el=c(e).appendTo("body"),this.$el.find(".cancel, .submit").click(this.hide),this.$el.find(".submit").click(this.triggerSubmit),d.mixTo(this)};return f.prototype={constructor:f,show:function(a){if(!this.$el.is(":animated")){this.$el.find(".pop-confirm-content").text(a.text),this.$trigger=c(a.trigger);var b=this.$el.height(),d=this.$trigger.position();this.$trigger.outerHeight(),this.$el.css({left:d.left-.4*this.$el.width()+"px",top:d.top+"px",visibility:"visible",height:0}),this.$el.animate({height:b,top:"-="+b+"px"},"fast")}},hide:function(){var a=this.$el.height();this.$el.animate({height:0,top:"+="+a+"px"},"fast",function(){c(this).css({visibility:"hidden",height:"auto"})}),this.isShown=!1},triggerSubmit:function(){this.trigger("submit",this.$trigger)}},f}),define("klog/admin/categories/category-edit-view",["_","$","backbone"],function(a){var b=a("_"),c=a("$"),d=a("backbone"),e=d.View.extend({el:"#categoryEditView",events:{"click .cancel-edit":"cancelEdit","submit form":"update"},initialize:function(){b.bindAll(this)},setModel:function(a){this.cancelEdit(),this.model=a,this.render()},render:function(){this.$('[name="categroy[name]"]').val(this.model.get("name"))},cancelEdit:function(){this.tmpView&&(this.$el.hide(),this.tmpView.$el.show(),this.tmpView=null)},insertAfter:function(a){a.$el.after(this.$el.show()).hide(),this.tmpView=a},update:function(a){a.preventDefault(),this.model.save("name",this.$('[name="categroy[name]"]').val(),{wait:!0,success:this.cancelEdit,error:this.showError})},showError:function(a,b){var d=c.parseJSON(b.responseText);this.$(".tooltip-inner").text(d[0]),this.$(".tooltip").removeClass("out").addClass("in"),setTimeout(this.hideError,2e3)},hideError:function(){this.$(".tooltip").removeClass("in").addClass("out")}});return e}),define("klog/admin/categories/category-new-view",["_","$","backbone"],function(a){var b=a("_"),c=a("$"),d=a("backbone"),e=d.View.extend({el:c("#new_category"),events:{submit:"createCategory"},initialize:function(){b.bindAll(this)},createCategory:function(a){a.preventDefault(),this.collection.create({name:this.$('[name="category[name]"]').val()},{wait:!0,success:this.showSuccess,error:this.showError})},showSuccess:function(){this.el.reset()},showError:function(a,b){var e=c.parseJSON(b.responseText);this.$(".tooltip-inner").text(e[0]),this.$(".tooltip").removeClass("out").addClass("in"),setTimeout(this.hideError,2e3)},hideError:function(){this.$(".tooltip").removeClass("in").addClass("out")}});return e}),define("klog/admin/categories/index",["./category","./category-list-view","./category-view","../common/pop-confirm","./category-edit-view","./category-new-view","_","backbone","$","jquery.color","events","jquery-ujs"],function(a){var b=a("./category"),c=a("./category-list-view"),d=a("./category-new-view");a("jquery-ujs");var e=new b.List(category_json);new c({collection:e}),new d({collection:e})});