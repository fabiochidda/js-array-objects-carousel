const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const msImageWrapperContainer = document.querySelector(".ms_image_wrapper");
console.log(msImageWrapperContainer);

const msTitle = document.querySelector(".ms_description");
console.log(msTitle);

const msPreviewList = document.querySelector(".ms_preview_list");
console.log(msPreviewList);

let currentIndex = 0;

for (i=0; i < items.length; i++) {

    const msImage = document.createElement("div");
    msImage.classList.add("item");
    msImage.innerHTML = `<img src="${items[i]}" alt="">`;
    msImageWrapperContainer.append(msImage);

    const msPreviewImage = document.createElement("li")
    msPreviewImage.classList.add("ms_noBorder")
    msPreviewImage.innerHTML = `<img src="${items[i]}" alt="">`;
    msPreviewList.append(msPreviewImage)
}

const msTitleTest = document.createElement("h2");
msTitle.append(msTitleTest);

const msDescriptionP = document.createElement("p");
msTitle.append(msDescriptionP);

msDescriptionP.innerHTML = text[currentIndex]

msTitleTest.innerHTML = title[currentIndex]

const msActiveImage = [...document.getElementsByClassName("item")];

msActiveImage[currentIndex].classList.add("active");

const msPreviewImage = [...document.getElementsByClassName("ms_noBorder")]

msPreviewImage[currentIndex].classList.add("ms_border_active")

const msPrevImage = document.querySelector(".ms_prev_button");

msPrevImage.addEventListener("click", function() {

    msActiveImage[currentIndex].classList.remove("active");
    msPreviewImage[currentIndex].classList.remove("ms_border_active")
    currentIndex--;
    msActiveImage[currentIndex].classList.add("active");
    msPreviewImage[currentIndex].classList.add("ms_border_active")
    msTitleTest.innerHTML = title[currentIndex];
    msDescriptionP.innerHTML = text[currentIndex];

})

const msNextImage = document.querySelector(".ms_next_button");

msNextImage.addEventListener("click", function() {

    msActiveImage[currentIndex].classList.remove("active");
    msPreviewImage[currentIndex].classList.remove("ms_border_active")
    currentIndex++;
    msActiveImage[currentIndex].classList.add("active");
    msPreviewImage[currentIndex].classList.add("ms_border_active")
    msTitleTest.innerHTML = title[currentIndex];
    msDescriptionP.innerHTML = text[currentIndex];

})