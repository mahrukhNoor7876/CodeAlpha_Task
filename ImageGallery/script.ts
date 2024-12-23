//selecting all required elements
const gallery: HTMLElement[] = Array.from(document.querySelectorAll(".gallery .image"));
const previewBox = document.querySelector(".preview-box") as HTMLDivElement;
const previewImg = previewBox.querySelector("img") as HTMLImageElement;
const closeIcon = previewBox.querySelector(".close") as HTMLDivElement;

window.onload = () => { //once window loaded
    for (let i = 0; i < gallery.length; i++) {
        let newIndex = i; //passing i value to newIndex variable
        gallery[i].onclick = () => {
            console.log(i);

            function preview(){
                let selectedImgUrl = gallery[newIndex].querySelector("img")!.src; //getting user clicks image url
                previewImg.src = selectedImgUrl; //passing user clicked img url to previewImg source
            }

            //work on previous and next button
            const prevBtn = document.querySelector(".prev") as HTMLSpanElement;
            const nextBtn = document.querySelector(".next") as HTMLSpanElement;
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }

            prevBtn.onclick = () => {
                newIndex--; //decrement new index value
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }
                else{
                    preview(); //calling again above function to update image
                    nextBtn.style.display = "block";
                }
            }

            nextBtn.onclick = () => {
                newIndex++; //decrement new index value
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }
                else{
                    preview(); //calling again above function to update image
                    prevBtn.style.display = "block";
                }
            }

            preview(); //calling above function 
            previewBox?.classList.add("show");
            (document.querySelector("body") as HTMLBodyElement).style.overflow = "hidden";

            closeIcon.onclick = () => {
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox?.classList.remove("show");
                (document.querySelector("body") as HTMLBodyElement).style.overflow = "auto";
            }
        }
    }
}