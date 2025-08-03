document.addEventListener("DOMContentLoaded", function() {
    const toppingOptions = document.querySelectorAll(".topping");
    const submitButton = document.getElementById("topping-btn");
    const waffleImage = document.getElementById("waffle-image");

    let selectedTopping = null;

    toppingOptions.forEach(option => {
        option.addEventListener("click", function() {
            toppingOptions.forEach(opt => {
                opt.classList.remove("selected");
            });
            
            option.classList.add("selected");
            selectedTopping = option;
        });
    });

    submitButton.addEventListener("click", function() {
        if (selectedTopping) {
            const toppingName = selectedTopping.dataset.topping;
            const toppingImageSrc = selectedTopping.dataset.imgSrc;

            waffleImage.src = toppingImageSrc;
            waffleImage.alt = `A waffle with ${toppingName}`;
            alert("Here yo waffle with " + toppingName + " topping.");
        } else {
            alert("YOU must select or ur boring!");
        }
    });
});

