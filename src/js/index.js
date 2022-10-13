const tabInformation = document.querySelectorAll(".tab");
const informations = document.querySelectorAll(".information");

tabInformation.forEach((tab) => {
    tab.addEventListener("click", () => {
        if (tab.classList.contains("selected")) {
            return;
        }
        const selectedElement = document.querySelector(".selected");
        selectedElement.classList.remove("selected");

        informations.forEach((info) => {
            if (info.classList.contains("selected")) {
                info.classList.remove("selected");
            } else {
                tab.classList.add("selected");
                info.classList.add("selected");
            }
        });
    });
});
