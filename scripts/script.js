const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim());

    tagsEl.innerHTML = "";
    tags.forEach(tag => {
        const tagEl = document.createElement("span")
        tagEl.classList.add('tag')
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect(){
    const highlightTimes = 40;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        hightlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag();
            finalTag(randomTag);
        }, 100)
    }, highlightTimes * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function hightlightTag(tag) {
    tag.classList.add('hightlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('hightlight');
    tag.classList.remove('final');
}

function finalTag(tag) {
    tag.classList.add('final');
}

