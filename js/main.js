(() => {
console.log("Welcome to my SVG project");
 let
svg_1 = document.querySelector("#image_1"),
svg_2 = document.querySelector("#image_2"),
svg_3 = document.querySelector("#image_3"),
svg_4 = document.querySelector("#image_4"),
svg_5 = document.querySelector("#image_5"),
svg_6 = document.querySelector("#image_6"),
svg_7 = document.querySelector("#image_7"),
svg_8 = document.querySelector("#image_8"),
svg_9 = document.querySelector("#image_9"),
svg_10 = document.querySelector("#image_10");

function logSvg() {

console.log(this.id);

}
svg_1.addEventListener("mouseover", logSvg);
svg_2.addEventListener("mouseover", logSvg);
svg_3.addEventListener("mouseover", logSvg);
svg_3.addEventListener("mouseover", logSvg);
svg_4.addEventListener("mouseover", logSvg);
svg_5.addEventListener("mouseover", logSvg);
svg_6.addEventListener("mouseover", logSvg);
svg_7.addEventListener("mouseover", logSvg);
svg_8.addEventListener("mouseover", logSvg);
svg_9.addEventListener("mouseover", logSvg);
svg_10.addEventListener("mouseover", logSvg);

})();