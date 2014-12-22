// First we need to require our commonJS module.
var RippleEffect = require("/lib/Ti.RippleEffect");
 
// Yeah we need a window :)
    var win = Ti.UI.createWindow({
        backgroundColor:"#000"
    });
 
    // Lets add some views that will get the RippleEffect on click event.
    var redView = Ti.UI.createView({
        width:320,
        height:150,
        backgroundColor:"red",
        top:0,
        left:0,
        rippleEffect:true
    });
 
    var blueView = Ti.UI.createView({
        width:160,
        height:150,
        backgroundColor:"blue",
        top:150,
        left:0,
        rippleEffect:true
    });
 
    var greenView = Ti.UI.createView({
        width:160,
        height:150,
        backgroundColor:"green",
        top:150,
        right:0,
        rippleEffect:true
    });
 
    var purpleView = Ti.UI.createView({
        width:320,
        height:150,
        backgroundColor:"purple",
        top:300,
        left:0,
        rippleEffect:true
    });
 
 
    win.add(redView);
    win.add(blueView);
    win.add(greenView);
    win.add(purpleView);
 
    win.addEventListener("click",function(e){
        if(e.source.rippleEffect){
// Here we'll pass the clicked object to our animation handler.
            RippleEffect.create(e);
        }
    });
 
    win.open();