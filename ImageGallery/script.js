//selecting all required elements
var gallery = Array.from(document.querySelectorAll(".gallery .image"));
var previewBox = document.querySelector(".preview-box");
var previewImg = previewBox.querySelector("img");
var closeIcon = previewBox.querySelector(".close");
window.onload = function () {
    var _loop_1 = function (i) {
        var newIndex = i; //passing i value to newIndex variable
        gallery[i].onclick = function () {
            console.log(i);
            function preview() {
                var selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicks image url
                previewImg.src = selectedImgUrl; //passing user clicked img url to previewImg source
            }
            //work on previous and next button
            var prevBtn = document.querySelector(".prev");
            var nextBtn = document.querySelector(".next");
            if (newIndex == 0) {
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = function () {
                newIndex--; //decrement new index value
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                }
                else {
                    preview(); //calling again above function to update image
                    nextBtn.style.display = "block";
                }
            };
            nextBtn.onclick = function () {
                newIndex++; //decrement new index value
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                }
                else {
                    preview(); //calling again above function to update image
                    prevBtn.style.display = "block";
                }
            };
            preview(); //calling above function 
            previewBox === null || previewBox === void 0 ? void 0 : previewBox.classList.add("show");
            document.querySelector("body").style.overflow = "hidden";
            closeIcon.onclick = function () {
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox === null || previewBox === void 0 ? void 0 : previewBox.classList.remove("show");
                document.querySelector("body").style.overflow = "auto";
            };
        };
    };
    for (var i = 0; i < gallery.length; i++) {
        _loop_1(i);
    }
};
