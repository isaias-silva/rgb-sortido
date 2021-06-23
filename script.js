var red_draw = window.document.getElementById("r");
var green_draw = window.document.getElementById("g");
var blue_draw = window.document.getElementById("b");
var machine = false;
var r = 0;
var g = 0;
var b = 0;
var inter;

function color() {
    if (machine == true) {
        b = Math.random() * 255;
        g = Math.random() * 255;
        r = Math.random() * 255;
        window.document.getElementById(
            "conteudo"
        ).style.background = ` rgb(${r},${g},${b})`;
        red_draw.innerHTML = r.toFixed(0);
        green_draw.innerHTML = g.toFixed(0);
        blue_draw.innerHTML = b.toFixed(0);
    } else
        return (r, g, b);
}

function main(v) {
    if (v == "i") {
        window.document.getElementById("button-main").innerHTML = "pausar";
        window.document.getElementById("button-main").value = "p";
        machine = true;
        inter = setInterval(color, 100);
    } else if (v == "p") {
        window.document.getElementById("button-main").innerHTML = "iniciar";
        window.document.getElementById("button-main").value = "i";
        machine = false;
        clearInterval(inter);
    }
}