let color_sel = "hsl(0, 0%, 100%)"
let color_unselect = "hsl(217, 12%, 63%)"
let bgcolor_sel = "hsl(25, 97%, 53%)"
let bgcolor_unselect = "hsl(213, 8%, 23%)"

function LevelSelect(element) {
    let one = document.getElementById("1")
    let two = document.getElementById("2")
    let three = document.getElementById("3")
    let four = document.getElementById("4")
    let five = document.getElementById("5")
    element == one ? (one.style.color = color_sel, one.style.backgroundColor = bgcolor_sel) : (one.style.color = color_unselect, one.style.backgroundColor = bgcolor_unselect)
    element == two ? (two.style.color = color_sel, two.style.backgroundColor = bgcolor_sel) : (two.style.color = color_unselect, two.style.backgroundColor = bgcolor_unselect)
    element == three ? (three.style.color = color_sel, three.style.backgroundColor = bgcolor_sel) : (three.style.color = color_unselect, three.style.backgroundColor = bgcolor_unselect)
    element == four ? (four.style.color = color_sel, four.style.backgroundColor = bgcolor_sel) : (four.style.color = color_unselect, four.style.backgroundColor = bgcolor_unselect)
    element == five ? (five.style.color = color_sel, five.style.backgroundColor = bgcolor_sel) : (five.style.color = color_unselect, five.style.backgroundColor = bgcolor_unselect)
    document.getElementById("select").innerHTML = element.id
}

function Submit(){
    event.preventDefault();
    let y = document.getElementById("rating")
    y.style.display = "none"
    let x = document.getElementById("result")
    x.style.display = "block"
}
