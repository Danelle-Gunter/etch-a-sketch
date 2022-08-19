// create the 16x16 grid

function square(UI_body) {
    let square = document.createElement('div');
    square.classList.add('square');
    UI_body.append(square);
}

function UI_box(UI_box_number) {
    UI_body = document.createElement("div");
    container.append(UI_body);
    UI_body.setAttribute("id", UI_box_number);
    UI_body.style.display = "flex";

    return UI_body;
}

const container = document.querySelector('.container');

for (let i = 0; i < 8; i++) {
    let UI_body = UI_box(String(i));
    for (let j = 0; j < 8; j++) {
        square(UI_body);
    }
}

