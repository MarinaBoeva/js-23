define(
  'model',
  ['jquery'],
   function () {
     return function Model() {
         var self=this;
         self.data=[];
         self.addItem=function (item) {
           if(item.length != 0){
             self.data.push(item);
             return self.data;
           }
         };
         self.removeItem=function (item) {
           var index=self.data.indexOf(item);
           self.data.splice(index,1);
           return self.data;
         }
      }
   }
);
