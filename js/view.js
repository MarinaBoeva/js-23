define(
  'view',
  ['jquery','model'],
   function () {
     return function View(model) {
       var self=this;
       var wrapper =$('#wrapper').html();
       wrapper=tmpl(wrapper);
       $('body').append(wrapper);
      self.renderList= function (data) {
           var list=$('#list').html();
           list=tmpl(list,{data:data});
           $('.list').html(list);
         }
      self.renderList(model.data);
        return self;
      }
   }
);
