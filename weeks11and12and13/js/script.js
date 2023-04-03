console.log("Hello World");
$(function() {
    gsap.registerPlugin(GSDevTools);
    //targeting all sections 
    let section = $("section");
    //targeting css directly from this doc and adding some box shadows
    section.css("box-shadow", "4px 4px 10px rgba(0, 0, 0, 0.4)")
    console.log("section");

    // creating animation time line using variables
    let tl0 = gsap.timeline({
        id: "animation0"

    });
    //where the animation is actually happening
    tl0.from(section, {x: 100, opacity: 0, stagger: 0.5,})
    GSDevTools.create({
        animation0: "animation0"
    });
});