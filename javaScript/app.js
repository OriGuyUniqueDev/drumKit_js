const btnArr = document.querySelectorAll(".btn");
console.log(btnArr)

btnArr.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Click")
    })
});