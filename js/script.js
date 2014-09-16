var c, ctx;
var valdFika;
var fikaLista = [];

window.onload = function () {
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
};

function FikaObject(img) {
    this.img = img;
    this.x;
    this.y;
    this.w = img.width;
    this.h = img.height;
    this.alpha;
};

// Målar ut fikaobjekt
FikaObject.prototype.paint = function () {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

};

//Skapar ett fika objekt som följer muspekaren
function fikaKlick(event) {
    // Skapar ett fikaobjekt av den klickade sorten
    var klickadBild = document.getElementById(event.target.id);
    valdFika = new FikaObject(klickadBild);

};

// Hanterar när musen rör sig över canvas
function mouseMove(e) {
    var canvPos = getPosition(e.currentTarget);
    ctx.clearRect(0, 0, c.width, c.height);
    valdFika.x = e.clientX - canvPos.x - valdFika.w / 2;
    valdFika.y = e.clientY - canvPos.y - valdFika.h / 2;
    valdFika.paint();
};

function canvasClick() {

};

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}