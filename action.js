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


let l0Ultra = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]],
    perc : [[92.5, 85.5, 77.5, 69.5, 66.5, 62.5, 59.5, 56.5, 53.5, 49.5, 46.5, 43.5, 39.5, 29.5, 19.5, 5.5, 0], 
        [96, 89, 81, 74, 68, 65, 62, 58, 55, 52, 48, 45, 40, 35, 25, 10, 0]],
    cat : [[],[`Pass (Excellent) (16)`, `Pass (Excellent) (15)`, `Pass (Excellent) (14)`, `Pass (Excellent) (13)`, `Pass (Very Good) (12)`, `Pass (Very Good) (11)`, `Pass (Very Good) (10)`, `Pass (Good) (9)`, `Pass (Good) (8)`, `Pass (Good) (7)`, `Pass (Satisfactory) (6)`, `Pass (Satisfactory) (5)`, `Pass (Satisfactory) (4)`, `Fail (Unsatisfactory) (3)`, `Fail (Unsatisfactory) (2)`, `Fail (Unsatisfactory) (2)`, `Fail (Unsatisfactory) (1)`, `Zero (0)`]],
};

let l0Ultra_PointCategory = new Schema(
    `Level 0 (Foundation Year) Grade (0-16) to Category`,
    `This schema converts grade point (0-16) to the equivalent category for Level 0. (Added for the 2023/24 academic year).`,
    l0Ultra.point,
    l0Ultra.cat
);

let l0Ultra_PointPercentage = new Schema(
    `Level 0 (Foundation Year) Grade (0-16) to Categorical Mark (%)`,
    `This schema converts grade point (0-16) to the equivalent categorical percentage for Level 0. (Added for the 2023/24 academic year).`,
    l0Ultra.point,
    l0Ultra.perc
);

let l0Ultra_PercentagePercentage = new Schema(
    `Level 0 (Foundation Year) Test Score to Categorical Mark (%)`,
    `This schema converts percentage test score to the equivalent categorical percentage for Level 0. (Added for the 2023/24 academic year).`,
    l0Ultra.perc,
    l0Ultra.perc
);

let l0Ultra_PercentageCategory = new Schema(
    `Level 0 (Foundation Year) Test Score to Category`,
    `This schema converts percentage test score to the equivalent category for Level 0. (Added for the 2023/24 academic year).`,
    l0Ultra.perc,
    l0Ultra.cat
);


let l46Ultra = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]],
    perc : [[92.5, 85.5, 77.5, 69.5, 66.5, 62.5, 59.5, 56.5, 53.5, 49.5, 46.5, 43.5, 39.5, 29.5, 19.5, 5.5, 0], 
        [96, 89, 81, 74, 68, 65, 62, 58, 55, 52, 48, 45, 40, 35, 25, 10, 0]],
    cat : [[],[`Exceptional 1st (16)`, `High 1st (15)`, `Mid 1st (14)`, `Low 1st (13)`, `High 2.1(12)`, `Mid 2.1 (11)`, `Low 2.1 (10)`, `High 2.2 (9)`, `Mid 2.2 (8)`, `Low 2.2 (7)`, `High 3rd (6)`, `Mid 3rd (5)`, `Low 3rd (4)`, `Borderline Fai (3)`, `Mid Fail (2)`, `Low Fail (1)`, `Zero (0)`]]
};

let l46Ultra_PointCategory = new Schema(
    `Levels 4-6 Grade (0-16) to Category`,
    `This schema converts grade point (0-16) to the equivalent category for Levels 4-6. (Added for the 2023/24 academic year).`,
    l46Ultra.point,
    l46Ultra.cat
);

let l46Ultra_PointPercentage = new Schema(
    `Levels 4-6 Grade (0-16) to Categorical Mark (%)`,
    `This schema converts grade point (0-16) to the equivalent categorical percentage for Levels 4-6. (Added for the 2023/24 academic year).`,
    l46Ultra.point,
    l46Ultra.perc
);

let l46Ultra_PercentagePercentage = new Schema(
    `Levels 4-6 Test Score to Categorical Mark (%)`,
    `This schema converts percentage test score to the equivalent categorical percentage for Levels 4-6. (Added for the 2023/24 academic year).`,
    l46Ultra.perc,
    l46Ultra.perc
);

let l46Ultra_PercentageCategory = new Schema(
    `Levels 4-6 Test Score to Category`,
    `This schema converts percentage test score to the equivalent category for Levels 4-6. (Added for the 2023/24 academic year).`,
    l46Ultra.perc,
    l46Ultra.cat
);


let l7Ultra = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0]],
    perc : [[80, 77, 74, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 0.01, 0], 
        [82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48, 45, 42, 38, 0]],
    cat : [[],[`Exceptional Distinction (16)`, `High Distinction (15)`, `Mid Distinction (14)`, `Low Distinction (13)`, `High Merit (12)`, `Mid Merit (11)`, `Low Merit (10)`, `High Pass (9)`, `Mid Pass (8)`, `Low Pass (7)`, `Borderline Fail (6)`, `Mid Fail (4)`, `Low Fail (2)`, `Very Low Fail (1)`, `Zero (0)`]]
};

let l7Ultra_PointCategory = new Schema(
    `Level 7 Grade (0-16) to Category`,
    `This schema converts grade point (0-16) to the equivalent category for Level 7. (Added for the 2023/24 academic year).`,
    l7Ultra.point,
    l7Ultra.cat
);

let l7Ultra_PointPercentage = new Schema(
    `Level 7 Grade (0-16) to Categorical Mark (%)`,
    `This schema converts grade point (0-16) to the equivalent categorical percentage for Level 7. (Added for the 2023/24 academic year).`,
    l7Ultra.point,
    l7Ultra.perc
);

let l7Ultra_PercentagePercentage = new Schema(
    `Level 7 Test Score to Category`,
    `This schema converts percentage test score to the equivalent categorical percentage for Level 7. (Added for the 2023/24 academic year).`,
    l7Ultra.perc,
    l7Ultra.perc
);

let l7Ultra_PercentageCategory = new Schema(
    `Level 7 Test Score to Category`,
    `This schema converts percentage test score to the equivalent category for Level 7. (Added for the 2023/24 academic year).`,
    l7Ultra.perc,
    l7Ultra.cat
);


let artDesignL46 = {
    perc : [[93, 85, 78, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 30, 20, 6, 0],
            []],
    cat : [[],[`Exceptional 1st`, `High 1st`, `Mid 1st`, `Low 1st`, `High 2.1`, `Mid 2.1`, `Low 2.1`, `High 2.2`, `Mid 2.2`, `Low 2.2`, `High 3rd`, `Mid 3rd`, `Low 3rd`, `Borderline Fail`, `Mid Fail`, `Low Fail`, `Zero`]]
};

let artDesignl46_PercentageCategory = new Schema(
    `Art & Design Levels 4-6`,
    `This schema converts percentage test score to the equivalent category for Art & Design Levels 4-6`,
    artDesignL46.perc,
    artDesignL46.cat
);


let artDesignL7 = {
    perc : [[93, 85, 78, 70, 67, 64, 60, 57, 54, 50, 40, 30, 20, 6, 0],
            []],
    cat : [[],[`Exceptional Distinction`, `High Distinction`, `Mid Distinction`, `Low Distinction`, `High Merit`, `Mid Merit`, `Low Merit`, `High Pass`, `Mid Pass`, `Low Pass`, `Borderline Fail`, `Mid Fail`, `Low Fail`, `Very Love Fail`, `Zero`]]
};

let artDesignl7_PercentageCategory = new Schema(
    `Art & Design Level 7`,
    `This schema converts percentage test score to the equivalent category for Art & Design Level 7`,
    artDesignL7.perc,
    artDesignL7.cat
);


let foundationUltra = {
    point : [[16, 15, 14, 13, 12, 11, 10, 9, 7, 5, 4, 3, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 7, 5, 4, 3, 2, 1, 0]],
    perc : [[92.5, 84.5, 77.5, 69.5, 66.5, 63.5, 56.5, 53.5, 46.5, 43.5, 39.5, 29.5, 19.5, 5.5, 0], 
        [96, 89, 81, 74, 68, 65, 60, 55, 50, 45, 40, 35, 25, 10, 0]],
    cat : [[],[`Exceptional Distinction (16)`, `High Distinction (15)`, `Mid Distinction (14)`, `Low Distinction (13)`, `High Merit (12)`, `Mid Merit (11)`, `Low Merit (10)`, `High Pass (9)`, `Mid Pass (7)`, `Low Pass (5)`, `Pass (4)`, `Fail (3)`, `Low Fail (2)`, `Very Low Fail (1)`, `Zero (0)`]],
};

let foundationUltra_PointCategory = new Schema(
    `Foundation Degree Grade (0-16) to Category`,
    `This schema converts grade point (0-16) to the equivalent category for Foundation Degree. (Added for the 2023/24 academic year).`,
    foundationUltra.point,
    foundationUltra.cat
);

let foundationUltra_PointPercentage = new Schema(
    `Foundation Degree Grade (0-16) to Categorical Mark (%)`,
    `This schema converts grade point (0-16) to the equivalent categorical percentage for Foundation Degree. (Added for the 2023/24 academic year).`,
    foundationUltra.point,
    foundationUltra.perc
);

let foundationUltra_PercentagePercentage = new Schema(
    `Foundation Degree Test Score to Categorical Mark (%)`,
    `This schema converts percentage test score to the equivalent categorical percentage for Foundation Degree. (Added for the 2023/24 academic year).`,
    foundationUltra.perc,
    foundationUltra.perc
);

let foundationUltra_PercentageCategory = new Schema(
    `Foundation Degree Test Score to Category`,
    `This schema converts percentage test score to the equivalent category for Foundation Degree. (Added for the 2023/24 academic year).`,
    foundationUltra.perc,
    foundationUltra.cat
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
