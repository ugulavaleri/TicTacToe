// class="fa-solid fa-o fa-2xl" - O
// class="fa-regular fa-x fa-2xl" - X

const table = document.querySelector(".table");

const tableData = document.querySelectorAll(".tableData");
const icon = document.querySelectorAll(".i");
const resetButton = document.getElementById("resetButton");
const span = document.querySelector(".span");

const isClicked = tableData.classList;

var ip = 0;
var clicked = false;
var Xclicked = [];
var Oclicked = [];
var leftscore = 0;
var rightscore = 0;

const leftPlayer = document.getElementById("leftPlayer");
const rightPlayer = document.getElementById("rightPlayer");

leftPlayer.textContent = leftscore;
rightPlayer.textContent = rightscore;

const Win = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const a = arr[i],
                    b = arr[j],
                    c = arr[k];
                if (
                    c - b === b - a ||
                    a - b === b - c ||
                    a - c === c - b ||
                    c - a === a - b
                ) {
                    if (
                        !(arr.includes(0) && arr.includes(2) && arr.includes(4))
                    ) {
                        if (
                            !(
                                arr.includes(4) &&
                                arr.includes(6) &&
                                arr.includes(8)
                            )
                        ) {
                            if (
                                !(
                                    arr.includes(1) &&
                                    arr.includes(3) &&
                                    arr.includes(5)
                                )
                            ) {
                                if (
                                    !(
                                        arr.includes(3) &&
                                        arr.includes(5) &&
                                        arr.includes(7)
                                    )
                                )
                                    // setTimeout(() => {
                                    //     removeAll();
                                    // }, 1500);
                                    return true;
                            }
                        }
                    }
                }
            }
        }
    }
};

// tableData.forEach((a) => {
//     a.addEventListener("click", fillTable);
// });

const fillTable = () => {
    tableData.forEach((a, i) => {
        a.addEventListener("click", () => {
            if (
                !(
                    a.classList.contains("clickedX") ||
                    a.classList.contains("clickedO")
                )
            ) {
                ip++;
                if (ip % 2 !== 0) {
                    if (
                        icon[i].classList.length > 0 &&
                        icon[i].classList.length < 5
                    ) {
                        icon[i].classList.add("fa-regular");
                        icon[i].classList.add("fa-x");
                        icon[i].classList.add("fa-2xl");
                        a.classList.add("clickedX");
                    }
                    Xclicked.push(i);
                    Win(Xclicked);
                    var whenXwins = Win(Xclicked);
                } else {
                    if (
                        icon[i].classList.length > 0 &&
                        icon[i].classList.length < 5
                    ) {
                        icon[i].classList.add("fa-solid");
                        icon[i].classList.add("fa-o");
                        icon[i].classList.add("fa-2xl");
                        a.classList.add("clickedO");
                    }
                    Oclicked.push(i);
                    Win(Oclicked);
                    var whenOwins = Win(Oclicked);
                }
            }
            if (whenXwins) {
                rightscore = rightscore + 1;
                // console.log("X");
                rightPlayer.textContent = rightscore;
                ip--;
                if (rightscore === 3) {
                    rightPlayer.textContent = "Person II Win!";
                    leftPlayer.textContent = "";
                    span.style.display = "none";
                    rightPlayer.style.fontWeight = "400";
                }
            }
            if (whenOwins) {
                leftscore = leftscore + 1;
                // console.log("O");
                leftPlayer.textContent = leftscore;
                ip--;
                if (leftscore === 3) {
                    leftPlayer.textContent = "Person I Win!";
                    rightPlayer.textContent = "";
                    span.style.display = "none";
                    leftPlayer.style.fontWeight = "400";
                }
            }
        });
    });
};

fillTable();

// reset button

resetButton.addEventListener("click", () => {
    removeAll();
});

const removeAll = () => {
    for (let index = 0; index < tableData.length; index++) {
        const element = tableData[index];
        element.classList.remove("clickedX");
        element.classList.remove("clickedO");
        icon[index].classList.remove("fa-solid");
        icon[index].classList.remove("fa-o");
        icon[index].classList.remove("fa-2xl");

        icon[index].classList.remove("fa-regular");
        icon[index].classList.remove("fa-x");
        icon[index].classList.remove("fa-2xl");
    }
    Oclicked.splice(0, Oclicked.length);
    Xclicked.splice(0, Xclicked.length);
    if (ip > 0 && ip % 2 !== 0) {
        ip--;
    }
    if (leftscore === 3) {
        leftscore = 0;
        leftPlayer.textContent = leftscore;
        rightPlayer.textContent = leftscore;
        span.style.display = "inline-block";
        leftPlayer.style.fontWeight = "800";
    }
    if (rightscore === 3) {
        rightscore = 0;
        rightPlayer.textContent = rightscore;
        leftPlayer.textContent = rightscore;
        span.style.display = "inline-block";
        rightPlayer.style.fontWeight = "800";
    }
};
