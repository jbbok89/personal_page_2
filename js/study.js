const buttons =
    document.querySelectorAll(".study-nav button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.target;

        const section =
            document.getElementById(target);

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});