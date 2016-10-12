requirejs.config({
    paths:{
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery'
    },
    shim: {
        'jquery': {
            exports:'jQuery'
        }
    }
});

require(['model','jquery','view','controller'],
    function(model,$,view,controller) {
     var model = new model();
     var view = new view(model);
     var controller = new controller(model,view);
});
