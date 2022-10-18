function Submit(){
    event.preventDefault();
    let y = document.getElementsByClassName("rating-state-start")
    y.style.display = "none"
    let x = document.getElementsByClassName("Thank-you-state")
    x.style.display = "flex"
}