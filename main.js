

window.addEventListener("scroll", handleSectionScroll);


function handleSectionScroll() {
    const sections = document.querySelectorAll(".large-icon");
    console.log(sections);
    sections.forEach((currentElement)=> {
        const windowHeight = window.innerHeight;
        const currentElementTop = currentElement.getBoundingClientRect().top;
        if(currentElementTop <= windowHeight) {
            currentElement.classList.add("large-icon-shown");
        }
    })
}