define(
  'controller',
  ['jquery','model','view'],
   function () {
     return function Controller(model,view) {
       var self=this;
          $('.list__add').on('click',addItem);
          $('.list__input').on('keyup',function (event) {
            if (event.which == 13) {
            addItem();
          }
          });
         $('.list').on('click','.list__delete',removeItem);
         $('.list').on('click','.list__edit',editItem);
         function addItem () {
            var item =$('.list__input').val();
            $('.list__input').val('');
            model.addItem(item);
            view.renderList(model.data);
         }
         function removeItem () {
            var item=$(this).attr('data-value');
            model.removeItem(item);
            view.renderList(model.data);
        }
        function editItem() {
          var text =$(this).attr('data-value');
          removeItem();
          $('.list__input').val(text);
        }
        return self;
      }
   }
);
