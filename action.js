chrome.tabs.executeScript({
    file: "function.js"
});

document.getElementById("foundation_PointCategory").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `foundation_PointCategory.fill();`
    });
});
document.getElementById("foundation_PercentageCategory").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `foundation_PercentageCategory.fill();`
    });
});
document.getElementById("foundation_PointPercentage").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `foundation_PointPercentage.fill();`
    });
});


document.getElementById("l46_PointCategory").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `l46_PointCategory.fill();`
    });
});
document.getElementById("l46_PercentageCategory").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `l46_PercentageCategory.fill();`
    });
});
document.getElementById("l46_PointPercentage").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `l46_PointPercentage.fill();`
    });
});


document.getElementById("l7_PointCatergory").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `l7_PointCategory.fill();`
    });
});
document.getElementById("l7_PercentageCategory").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `l7_PercentageCategory.fill();`
    });
});
document.getElementById("l7_PointPercentage").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `l7_PointPercentage.fill();`
    });
});


document.getElementById("lang_PercentageCategory").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `lang_PercentageCategory.fill();`
    });
});
document.getElementById("lang_PercentageDownload").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `lang_PercentageDownload.fill();`
    });
});


document.getElementById("foundationSportsAndSocial_PercentageCategory").addEventListener("click", function(){
    chrome.tabs.executeScript({
        code: `foundationSportsAndSocial_PercentageCategory.fill();`
    });
});