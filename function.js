class Schema {
    fill() {
        document.getElementById(`name`).value = this.name;
        document.getElementById(`description`).value = this.description;
        document.getElementById(`symbol[0].displayUpperBound`).value = 100;

        while(document.getElementById(`datatable`).rows.length<(this.length + 1)) {
            document.querySelector(`.insertButton .insertMore`).click()
        };
        while(document.getElementById(`datatable`).rows.length>(this.length + 1)) {
            document.querySelector(`.inlineAction`).click()
        };

        for (let i = 0; i < this.length; i++) {
            document.getElementById(`symbol[${i}].displayLowerBound`).value = this.from[0][i];
            document.getElementById(`symbol[${i}].displayLowerBound`).dispatchEvent(new KeyboardEvent('keyup'));
            document.getElementById(`symbol[${i}].symbol`).value = this.to[1][i];
            document.getElementById(`symbol[${i}].displayAbsoluteTranslation`).value = this.from[1][i];
        };
    };
};


class Foundation extends Schema {
    point = [[15.99, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0]];
    perc = [[80, 77, 74, 70, 65, 61, 56, 51, 46, 40, 37, 34, 30, 1, 0], 
        [82, 78, 75, 72, 67, 63, 58, 53, 48, 42, 38, 35, 32, 28, 0]];
    cat = [[],[`Exceptional Distinction`, `High Distinction`, `Mid Distinction`, `Low Distinction`, `High Merit`, `Mid Merit`, `Low Merit`, `High Pass`, `Mid Pass`, `Low Pass`, `Borderline Fail`, `Mid Fail`, `Low Fail`, `Very Low Fail`, `Zero`]];
    length = 15;

    constructor(name, description, from, to){
        super();
        this.name = name;
        this.description = description;
        this.from = this[from];
        this.to = this[to];
    }
};

let foundation_PointCategory = new Foundation(`SHU Foundation Grade Point/Category Conversion`, 
`This schema converts grade point to equivalent category for Foundation Level 4. (Added for the 2022/23 academic year).`,
`point`, `cat`);

let foundation_PercentageCategory = new Foundation(`SHU Foundation Grade Percentage/Category Conversion`, 
`This schema converts indicative mark range (percentage) to equivalent category for Foundation Level 4. (Added for the 2022/23 academic year).`,
`perc`, `cat`);

let foundation_PointPercentage = new Foundation(`SHU Foundation Grade Point/Percentage Conversion`, 
`This schema converts grade point (0-16) to one of the 16 percentage equivalent for Foundation Year. (Added for the 2022/23 academic year).`,
`point`, `perc`);


class L46 extends Schema {
    point = [[15.99, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
    perc = [[80, 77, 74, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 37, 34, 30, 0],
        [82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48, 45, 42, 38, 35, 32, 28]];
    cat = [[],[`Exceptional 1st`, `High 1st`, `Mid 1st`, `Low 1st`, `High 2.1`, `Mid 2.1`, `Low 2.1`, `High 2.2`, `Mid 2.2`, `Low 2.2`, `High 3rd`, `Mid 3rd`, `Low 3rd`, `Borderline Fail`, `Mid Fail`, `Low Fail`, `Very Low Fail`]];
    length = 17;

    constructor(name, description, from, to){
        super();
        this.name = name;
        this.description = description;
        this.from = this[from];
        this.to = this[to];
    }
};

let l46_PointCategory = new L46(`SHU Levels 4-6 Grade Point/Category Conversion`, 
`This schema converts grade point (0-16) to equivalent category for Levels 4-6. (Added for the 2022/23 academic year).`,
`point`, `cat`);

let l46_PercentageCategory = new L46(`SHU Levels 4-6 Grade Percentage/Category Conversion`, 
`This schema converts indicative mark range (percentage) to equivalent category for Levels 4-6. (Added for the 2022/23 academic year).`,
`perc`, `cat`);

let l46_PointPercentage = new L46(`SHU Levels 4-6 Grade Point/Percentage Conversion`, 
`This schema converts grade point (0-16) to one of the 16 percentage equivalent for Levels 4-6. (Added for the 2022/23 academic year).`,
`point`, `perc`);


class L7 extends Schema {
    point = [[15.99, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0],
        [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 4, 2, 1, 0]];
    perc = [[80, 77, 74, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 0.01, 0], 
        [82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48, 45, 42, 38, 0]];
    cat = [[],[`Exceptional Distinction`, `High Distinction`, `Mid Distinction`, `Low Distinction`, `High Merit`, `Mid Merit`, `Low Merit`, `High Pass`, `Mid Pass`, `Low Pass`, `Borderline Fail`, `Mid Fail`, `Low Fail`, `Very Low Fail`, `Zero`]];
    length = 15;

    constructor(name, description, from, to){
        super();
        this.name = name;
        this.description = description;
        this.from = this[from];
        this.to = this[to];
    }
};

let l7_PointCategory = new L7(`SHU Level 7 Grade Point/Category Conversion`, 
`This schema converts grade point (0-16) to equivalent category for Level 7. (Added for the 2022/23 academic year).`,
`point`, `cat`);

let l7_PercentageCategory = new L7(`SHU Level 7 Grade Percentage/Category Conversion`, 
`This schema converts indicative mark range (percentage) to equivalent category for Level 7. (Added for the 2022/23 academic year).`,
`perc`, `cat`);

let l7_PointPercentage = new L7(`SHU Level 7 Grade Point/Percentage Conversion`, 
`This schema converts grade point (0-16) to one of the 16 percentage equivalent for Level 7. (Added for the 2022/23 academic year).`,
`point`, `perc`);


class Lang extends Schema {
    perc = [[80, 77, 74, 70, 67, 64, 60, 57, 54, 50, 47, 44, 40, 37, 34, 30, 1, 0],
    [82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48, 45, 42, 38, 35, 32, 28, 0]];
    cat = [[],[`82 (16) - Exceptional 1st`, `78 (15) - High 1st`, `75 (14) - Mid 1st`, `72 (13) - Low 1st`, `68 (12) - High 2.1`, `65 (11) - Mid 2.1`, `62 (10) - Low 2.1`, `58 (9) - High 2.2`, `55 (8) - Mid 2.2`, `52 (7) - Low 2.2`, `48 (6) - High 3rd`, `45 (5) - Mid 3rd`, `42 (4) - Low 3rd`, `38 (3) - Borderline Fail`, `35 (2) - Mid Fail`, `32 (1) - Low Fail`, `28 (0) - Very Low Fail`, 0]];
    length = 18;

    constructor(name, description, from, to){
        super();
        this.name = name;
        this.description = description;
        this.from = this[from];
        this.to = this[to];
    }
};

let lang_PercentageCategory = new Lang(`Languages - Percentage to Categorical mark and GP`, 
`To convert 1-100 grade from phase tests for student view`,
`perc`, `cat`);

let lang_PercentageDownload = new Lang(`Languages - Percentage to Categorical mark`, 
`To convert 1-100 grade from phase tests to download format.`,
`perc`, `perc`);


class FoundationSportsAndSocial extends Schema {
    perc = [[70, 60, 50, 40, 28, 0], 
        [82, 68, 58, 48, 38, 0]];
    cat = [[],[`PASS (Excellent)`, `PASS (Very Good)`, `PASS (Good)`, `PASS (Sufficient)`, `FAIL`, `ZERO`]];
    length = 6;

    constructor(name, description, from, to){
        super();
        this.name = name;
        this.description = description;
        this.from = this[from];
        this.to = this[to];
    }
};

let foundationSportsAndSocial_PercentageCategory = new FoundationSportsAndSocial(`S and SC Foundation Grade Percentage/Category Conversion`, 
`This schema converts indicative mark range (percentage) to equivalent category for Sports and Social Care Foundation Level. (Added for the 2022/23 academic year).`,
`perc`, `cat`);