var messenger = riot.observable();

messenger.on('greet', function(){
    console.log('Hello from Messenger');
})

messenger.on('reload', function(){
    window.location.reload();
}) 
