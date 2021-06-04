let root = document.querySelector(".root");

function fetch(url) {
    return new Promise((resolve, reject) => {

    });
}

fetch("https://api.unsplash.com/photos/?client_id=iXZbsymHTuImE4lwqFcGTqLFMas1OjPEWjEsp865gSk")
    .then((value) => {
        createUI(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally");
    });

function createUI(randomImages) {
    randomImages.map((ele) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = ele.urls.small;
        li.append(img);
        root.append(li);
    });
}