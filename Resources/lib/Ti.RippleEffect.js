function create(e, callback){
    // Width and Height of our clicked view.
    // This way we can make the circle big enough to fit the view.
    var rippleWidth = e.source.toImage().width*2;
    var rippleHeight = e.source.toImage().width*2;

    // Our circle that will be scaled up using 2dMartix.
    // We'll position the view at the center of the click position, by using (clickPositin - (clickedViewWidth / 2)).
    var ripple = Ti.UI.createView({
        top:(e.y-(rippleWidth/2)),
        left:(e.x-(rippleWidth/2)),
        width:rippleWidth,
        height:rippleHeight,
        borderRadius:(rippleWidth/2),
        backgroundColor:"rgba(255,255,255,0.40)",
        transform:Titanium.UI.create2DMatrix().scale(0),
        zIndex:999,
        opacity:0
    });
 
    // Add the ripple view inside the clicked view
    e.source.add(ripple);
 
    // Our animation that will set the opasity from 0 to 1, and scale our view to 50% of max size.
    ripple.animate({
        opacity:1,
        transform:Titanium.UI.create2DMatrix().scale(0.5),
        duration:200,
        curve:Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
        },function() {
 
            // When the first animation is finish we'll scale up to 100% while we fade the opacity to 0.
            ripple.animate({
                opacity:0,
                transform:Titanium.UI.create2DMatrix().scale(1),
                duration:200,
                curve:Titanium.UI.ANIMATION_CURVE_EASE_OUT_IN
                },function() {
 
                    // At the end we'll remove our ripple view from the clicked view.
                    e.source.remove(ripple);
                    ripple=null;
                    if(callback)
                        callback();
                });
        });
};
exports.create = create;
