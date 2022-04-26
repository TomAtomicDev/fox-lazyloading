const observer= new window.IntersectionObserver (
    (entries) => {

    entries
        .filter(isIntersecting)

        .forEach(showImage)
    });

function isIntersecting (entry) {
    return entry.isIntersecting
}

function showImage (entry) {

    const container = entry.target;
    const img = container.firstChild;
    const url = img.dataset.src;
    img.src=url;
    observer.unobserve(container);
    loadedCounter+=1;
    printCounters();
} 

export function registerElement (elem) {
    observer.observe(elem);
}