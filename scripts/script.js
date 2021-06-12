function toggleRead() {
    var readMoreContent = document.getElementById("read-more-content");
    var readMoreButton = document.getElementById("readMore");
    if (readMoreContent.style.display === "block") {
        readMoreContent.style.display = "none"
        readMoreButton.textContent = "Leer más..."
    } else {
        readMoreContent.style.display = "block"
        readMoreButton.textContent = "Leer menos..."
    }
}

function showCategory(type){
    var familiaCategory = document.getElementById('familia');
    var hobbiesCategory = document.getElementById('hobbies');
    var paseosCategory = document.getElementById('paseos');

    var familiaBtnCategory = document.getElementById("familia-btn");
    var hobbiesBtnCategory = document.getElementById("hobbies-btn");
    var paseosBtnCategory = document.getElementById("paseos-btn");
    switch(type){
        case 'paseos':
            familiaCategory.style.display="none";
            hobbiesCategory.style.display="none";
            paseosCategory.style.display="block";

            familiaBtnCategory.style.backgroundColor="#9932CC";
            hobbiesBtnCategory.style.backgroundColor="#9932CC";
            paseosBtnCategory.style.backgroundColor="#0000FF";
            break;
        case 'hobbies':
            familiaCategory.style.display="none";
            paseosCategory.style.display="none";
            hobbiesCategory.style.display="block";

            familiaBtnCategory.style.backgroundColor="#9932CC";
            paseosBtnCategory.style.backgroundColor="#9932CC";
            hobbiesBtnCategory.style.backgroundColor="#0000FF";
            break;
        default:
            paseosCategory.style.display="none";
            hobbiesCategory.style.display="none";
            familiaCategory.style.display="block";

            paseosBtnCategory.style.backgroundColor="#9932CC";
            hobbiesBtnCategory.style.backgroundColor="#9932CC";
            familiaBtnCategory.style.backgroundColor="#0000FF";
            break;
    }

}