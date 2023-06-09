let schemaArr = [];

class Schema {
    constructor(name, description, from, to){
        this.name = name;
        this.description = description;
        this.from = from;
        this.to = to;
        schemaArr.push(this);
    }
};

let foundation = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 7, 5, 4, 3, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 7, 5, 4, 3, 2, 1, 0]],
    perc : [[80, 77, 74, 70, 65, 61, 56, 51, 46, 40, 37, 34, 30, 1, 0], 
        [82, 78, 75, 72, 67, 63, 58, 53, 48, 42, 38, 35, 32, 28, 0]],
    cat : [[],[`Exceptional Distinction`, `High Distinction`, `Mid Distinction`, `Low Distinction`, `High Merit`, `Mid Merit`, `Low Merit`, `High Pass`, `Mid Pass`, `Low Pass`, `Borderline Fail`, `Mid Fail`, `Low Fail`, `Very Low Fail`, `Zero`]],
};

let foundation_PointCategory = new Schema(
    `SHU Foundation Grade Point/Category Conversion`,
    `This schema converts grade point to equivalent category for Foundation Level 4. (Added for the 2022/23 academic year).`,
    foundation.point,
    foundation.cat
);

let foundation_PercentageCategory = new Schema(
    `SHU Foundation Grade Percentage/Category Conversion`,
    `This schema converts indicative mark range (percentage) to equivalent category for Foundation Level 4. (Added for the 2022/23 academic year).`,
    foundation.perc,
    foundation.cat
);

let foundation_PointPercentage = new Schema(
    `SHU Foundation Grade Point/Percentage Conversion`,
    `This schema converts grade point (0-16) to one of the 16 percentage equivalent for Foundation Year. (Added for the 2022/23 academic year).`,
    foundation.point,
    foundation.perc
);


let l46 = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]],
    perc : [[80, 77, 74, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 37, 34, 30, 0],
        [82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48, 45, 42, 38, 35, 32, 28]],
    cat : [[],[`Exceptional 1st`, `High 1st`, `Mid 1st`, `Low 1st`, `High 2.1`, `Mid 2.1`, `Low 2.1`, `High 2.2`, `Mid 2.2`, `Low 2.2`, `High 3rd`, `Mid 3rd`, `Low 3rd`, `Borderline Fail`, `Mid Fail`, `Low Fail`, `Very Low Fail`]]
};

let l46_PointCategory = new Schema(
    `SHU Levels 4-6 Grade Point/Category Conversion`,
    `This schema converts grade point (0-16) to equivalent category for Levels 4-6. (Added for the 2022/23 academic year).`,
    l46.point,
    l46.cat
);

let l46_PercentageCategory = new Schema(
    `SHU Levels 4-6 Grade Percentage/Category Conversion`,
    `This schema converts indicative mark range (percentage) to equivalent category for Levels 4-6. (Added for the 2022/23 academic year).`,
    l46.perc,
    l46.cat
);

let l46_PointPercentage = new Schema(
    `SHU Levels 4-6 Grade Point/Percentage Conversion`,
    `This schema converts grade point (0-16) to one of the 16 percentage equivalent for Levels 4-6. (Added for the 2022/23 academic year).`,
    l46.point,
    l46.perc
);


let l7 = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0]],
    perc : [[80, 77, 74, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 0.01, 0], 
        [82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48, 45, 42, 38, 0]],
    cat : [[],[`Exceptional Distinction`, `High Distinction`, `Mid Distinction`, `Low Distinction`, `High Merit`, `Mid Merit`, `Low Merit`, `High Pass`, `Mid Pass`, `Low Pass`, `Borderline Fail`, `Mid Fail`, `Low Fail`, `Very Low Fail`, `Zero`]]
};

let l7_PointCategory = new Schema(
    `SHU Level 7 Grade Point/Category Conversion`,
    `This schema converts grade point (0-16) to equivalent category for Level 7. (Added for the 2022/23 academic year).`,
    l7.point,
    l7.cat
);

let l7_PercentageCategory = new Schema(
    `SHU Level 7 Grade Percentage/Category Conversion`,
    `This schema converts indicative mark range (percentage) to equivalent category for Level 7. (Added for the 2022/23 academic year).`,
    l7.perc,
    l7.cat
);

let l7_PointPercentage = new Schema(
    `SHU Level 7 Grade Point/Percentage Conversion`,
    `This schema converts grade point (0-16) to one of the 16 percentage equivalent for Level 7. (Added for the 2022/23 academic year).`,
    l7.point,
    l7.perc
);


let foundationUGD3 = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 7, 5, 4, 3, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 7, 5, 4, 3, 2, 1, 0]],
    perc : [[93, 85, 78, 70, 67, 63, 58, 53, 48, 43, 40, 30, 20, 6, 0],
        [96, 89, 81, 74, 68, 65, 60, 55, 50, 45, 40, 35, 25, 10, 0]],
    cat : [[],[`Exceptional Distinction (16)`, `High Distinction (15)`, `Mid Distinction (14)`, `Low Distinction (13)`, `High Merit (12)`, `Mid Merit (11)`, `Low Merit (10)`, `High Pass (9)`, `Mid Pass (7)`, `Low Pass (5)`, `Pass (4)`, `Fail (3)`, `Low Fail (2)`, `Very Low Fail (1)`, `Zero (0)`]]
};

let foundationUGD3_PercentageCategory = new Schema(
    `Foundation Degree Mark Range to Category Conversion (UGD3)`,
    `This schema converts indicative mark range (percentage) to equivalent category for Foundation Degree. (UGD3).`,
    foundationUGD3.perc,
    foundationUGD3.cat
);

let foundationUGD3_PercentagePercentage = new Schema(
    `Foundation Degree Mark Range to Categorical Percentage (UGD3)`,
    `This schema converts indicative mark range (raw percentage) to categorical percentage for Foundation Degree. (UGD3).`,
    foundationUGD3.perc,
    foundationUGD3.perc
);

let foundationUGD3_PointCategory = new Schema(
    `Foundation Degree Grade Point to Category Conversion (UGD3)`,
    `This schema converts grade point (0-16) to equivalent category for Foundation Degree. (UGD3).`,
    foundationUGD3.point,
    foundationUGD3.cat
);

let foundationUGD3_PointPercentage = new Schema(
    `Foundation Degree Grade Point to Percentage Conversion (UGD3)`,
    `This schema converts grade point (0-16) to one of the 16 percentage equivalent for Foundation Degree. (UGD3).`,
    foundationUGD3.point,
    foundationUGD3.perc
);


let l46UGD3 = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]],
    perc : [[93, 85, 78, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 30, 20, 6, 0],
        [96, 89, 81, 74, 68, 65, 62, 58, 55, 52, 48, 45, 40, 35, 25, 10, 0]],
    cat : [[],[`Exceptional 1st (16)`, `High 1st (15)`, `Mid 1st (14)`, `Low 1st (13)`, `High 2.1 (12)`, `Mid 2.1 (11)`, `Low 2.1 (10)`, `High 2.2 (9)`, `Mid 2.2 (8)`, `Low 2.2 (7)`, `High 3rd (6)`, `Mid 3rd (5)`, `Low 3rd (4)`, `Borderline Fail (3)`, `Mid Fail (2)`, `Low Fail (1)`, `Zero (0)`]]
};

let l46UGD3_PercentageCategory = new Schema(
    `Levels 4-6 Mark Range to Category Conversion (UGD3)`,
    `This schema converts indicative mark range (percentage) to equivalent category for Levels 4-6. (UGD3).`,
    l46UGD3.perc,
    l46UGD3.cat
);

let l46UGD3_PercentagePercentage = new Schema(
    `Levels 4-6 Mark Range to Categorical Percentage (UGD3)`,
    `This schema converts indicative mark range (raw percentage) to categorical percentage for Levels 4-6. (UGD3).`,
    l46UGD3.perc,
    l46UGD3.perc
);

let l46UGD3_PointCategory = new Schema(
    `Levels 4-6 Grade Point to Category Conversion (UGD3)`,
    `This schema converts grade point (0-16) to equivalent category for Levels 4-6. (UGD3).`,
    l46UGD3.point,
    l46UGD3.cat
);

let l46UGD3_PointPercentage = new Schema(
    `Levels 4-6 Grade Point to Percentage Conversion (UGD3)`,
    `This schema converts grade point (0-16) to one of the 16 percentage equivalent for Levels 4-6. (UGD3).`,
    l46UGD3.point,
    l46UGD3.perc
);


let l7UGD3 = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0]],
    perc : [[93, 85, 78, 70, 67, 64, 60, 57, 54, 50, 40, 30, 20, 6, 0],
        [96, 89, 81, 74, 68, 65, 62, 58, 55, 50, 45, 35, 25, 10, 0]],
    cat : [[],[`Exceptional Distinction (16)`, `High Distinction (15)`, `Mid Distinction (14)`, `Low Distinction (13)`, `High Merit (12)`, `Mid Merit (11)`, `Low Merit (10)`, `High Pass (9)`, `Mid Pass (8)`, `Low Pass (7)`, `Borderline Fail (6)`, `Mid Fail (4)`, `Low Fail (2)`, `Very Low Fail (1)`, `Zero (0)`]]
};

let l7UGD3_PercentageCategory = new Schema(
    `Level 7 Mark Range to Category Conversion (UGD3)`,
    `This schema converts indicative mark range (percentage) to equivalent category for Level 7. (UGD3).`,
    l7UGD3.perc,
    l7UGD3.cat
);

let l7UGD3_PercentagePercentage = new Schema(
    `Level 7 Mark Range to Categorical Percentage (UGD3)`,
    `This schema converts indicative mark range (raw percentage) to categorical percentage for Level 7. (UGD3).`,
    l7UGD3.perc,
    l7UGD3.perc
);

let l7UGD3_PointCategory = new Schema(
    `Level 7 Grade Point to Category Conversion (UGD3)`,
    `This schema converts grade point (0-16) to equivalent category for Level 7. (UGD3).`,
    l7UGD3.point,
    l7UGD3.cat
);

let l7UGD3_PointPercentage = new Schema(
    `Level 7 Grade Point to Percentage Conversion (UGD3)`,
    `This schema converts grade point (0-16) to one of the 16 percentage equivalent for Level 7. (UGD3).`,
    l7UGD3.point,
    l7UGD3.perc
);


let lang = {
    perc : [[80, 77, 74, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 37, 34, 30, 1, 0],
    [82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48, 45, 42, 38, 35, 32, 28, 0]],
    cat : [[],[`82 (16) - Exceptional 1st`, `78 (15) - High 1st`, `75 (14) - Mid 1st`, `72 (13) - Low 1st`, `68 (12) - High 2.1`, `65 (11) - Mid 2.1`, `62 (10) - Low 2.1`, `58 (9) - High 2.2`, `55 (8) - Mid 2.2`, `52 (7) - Low 2.2`, `48 (6) - High 3rd`, `45 (5) - Mid 3rd`, `42 (4) - Low 3rd`, `38 (3) - Borderline Fail`, `35 (2) - Mid Fail`, `32 (1) - Low Fail`, `28 (0) - Very Low Fail`, 0]]
};

let lang_PercentageCategory = new Schema(
    `Languages - Percentage to Categorical mark and GP`,
    `To convert 1-100 grade from phase tests for student view`,
    lang.perc,
    lang.cat
);

let lang_PercentageDownload = new Schema(
    `Languages - Percentage to Categorical mark`,
    `To convert 1-100 grade from phase tests to download format.`,
    lang.perc,
    lang.perc
);


let foundationSportsAndSocial = {
    perc : [[70, 60, 50, 40, 28, 0], 
        [82, 68, 58, 48, 38, 0]],
    cat : [[],[`PASS (Excellent)`, `PASS (Very Good)`, `PASS (Good)`, `PASS (Sufficient)`, `FAIL`, `ZERO`]]
};

let foundationSportsAndSocial_PercentageCategory = new Schema(
    `Sports and Social Care Foundation Percentage/Category Conversion`,
    `This schema converts indicative mark range (percentage) to equivalent category for Sports and Social Care Foundation Level. (Added for the 2022/23 academic year).`,
    foundationSportsAndSocial.perc,
    foundationSportsAndSocial.cat
);


let foundationEngineeringAndMaths = {
    perc : [[80, 77, 74, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 37, 34, 30, 1, 0],
            [82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48, 45, 42, 38, 35, 32, 28, 0]],
    cat : [[],[`16 (82) - Excellent Pass`, `15 (78) - Excellent Pass`, `14 (75) - Excellent Pass`, `13 (72) - Excellent Pass`, `12 (68) - Very Good Pass`, `11 (65) - Very Good Pass`, `10 (62) - Very Good Pass`, `9 (58) - Good Pass`, `8 (55) - Good Pass`, `7 (52) - Good Pass`, `6 (48) - Satisfactory Pass`, `5 (45) - Satisfactory Pass`, `4 (42) - Satisfactory Pass`, `3 (38) - Unsatisfactory Fail`, `2 (35) - Unsatisfactory Fail`, `1 (32) - Unsatisfactory Fail`, `0 (28) - Insufficient Fail`, `0 (0) - Zero`]]
};

let foundationEngineeringAndMaths_PercentageCategory = new Schema(
    `Engineering and Maths Foundation Percentage/Category Conversion`,
    `This schema converts indicative mark range (percentage) to equivalent category for Engineering and Maths Foundation Level. (Added for the 2022/23 academic year).`,
    foundationEngineeringAndMaths.perc,
    foundationEngineeringAndMaths.cat
);


let artDesignL7 = {
    perc : [[99.99, 93, 85, 78, 70, 67, 64, 60, 57, 54, 50, 40, 30, 20, 10, 1, 0],
            [100, 96, 89, 81, 74, 68, 65, 62, 58, 55, 52, 45, 35, 25, 15, 5, 0]],
    cat : [[],[`Outstanding`, `Excellent Distinction`, `High Distinction`, `Mid Distinction`, `Low Distinction`, `High Merit`, `Mid Merit`, `Low Merit`, `High Pass`, `Mid Pass`, `Low Pass`, `Marginal Fail`, `Higher-Mid Fail`, `Mid Fail`, `Lower-Mid Fail`, `Low Fail`, `Zero`]]
};

let artDesignl7_PercentageCategory = new Schema(
    `Art & Design GBA Level 7`,
    `Grade Based Assessment Schema for Art & Design Level 7 modules.`,
    artDesignL7.perc,
    artDesignL7.cat
);


let artDesignL36 = {
    perc : [[99.99, 93, 85, 78, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 30, 20, 10, 1, 0],
            [100, 96, 89, 81, 74, 68, 65, 62, 58, 55, 52, 48, 45, 42, 35, 25, 15, 5, 0]],
    cat : [[],[`Perfect 1st`, `Exceptional 1st`, `High 1st`, `Mid 1st`, `Low 1st`, `High 2.1`, `Mid 2.1`, `Low 2.1`, `High 2.2`, `Mid 2.2`, `Low 2.2`, `High 3rd`, `Mid 3rd`, `Low 3rd`, `Marginal Fail`, `Mid Fail`, `Lower-Mid Fail`, `Low Fail`, `Zero`]]
};

let artDesignl36_PercentageCategory = new Schema(
    `Art & Design GBA Levels 3-6`,
    `Grade Based Assessment Schema for Art & Design Levels 3-6 modules.`,
    artDesignL36.perc,
    artDesignL36.cat
);


chrome.tabs.executeScript({
    file: "function.js"
});

function doFill(schema) {
    chrome.tabs.executeScript({
        code: `fill(${JSON.stringify(schema)})`
    });
}

for (let schema of schemaArr) {
    let button = document.createElement("button");
    button.innerText = `${schema.name}`
    button.addEventListener("click", function() {doFill(schema)})
    document.getElementById("buttons").appendChild(button);
};
