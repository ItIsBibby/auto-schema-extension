function fill(schema) {
    if (window.location.href.indexOf("ultra") > -1) {
        if (document.querySelector('[aria-label="Edit Grading Schema Name"]')) {
            document.querySelector('[aria-label="Edit Grading Schema Name"]').click();
        };
        document.querySelector('[data-analytics-id="course.grades.settings.schema.edit.title.button"]').click();
        document.querySelector('[data-analytics-id="course.grades.settings.schema.add.title.input"]').value = schema.name;
        document.querySelector('[data-analytics-id="course.grades.settings.schema.add.title.input"]').dispatchEvent(new InputEvent('input', {bubbles:true}));
        document.querySelector('[data-analytics-id="course.grades.settings.schema.add.title.input"]').click();

        while (document.querySelector('[aria-label="Schema Mapping"]').children[1].rows.length < schema.from[0].length) {
            document.querySelector('[aria-label="Schema Mapping"]').children[1].rows[0].querySelectorAll('[type="button"]')[1].click();
        };
        while (document.querySelector('[aria-label="Schema Mapping"]').children[1].rows.length > schema.from[0].length) {
            document.querySelector('[aria-label="Schema Mapping"]').children[1].rows[0].querySelectorAll('[type="button"]')[0].click();
            document.querySelector('[aria-label="Delete"]').click();
        };

        if(document.querySelector('[aria-label="Schema Mapping"]').children[1].rows[0].querySelector('[aria-label="Grade Name"')) {
            document.querySelector('[aria-label="Schema Mapping"]').children[1].rows[0].querySelector('[aria-label="Grade Name"').click();
        };

        for (let i = 0; i < schema.from[0].length; i++) {
            document.querySelector('[aria-label="Schema Mapping"]').children[1].rows[i].children[0].children[0].children[0].children[0].click();
            if(document.getElementById(`upper-bound-field-0`)) {
                document.getElementById(`upper-bound-field-0`).value = "100";
                document.getElementById(`upper-bound-field-0`).dispatchEvent(new InputEvent('input', {bubbles:true}));
            };
            document.getElementById(`grade-symbol-text-field-${i}`).value = schema.to[1][i];
            document.getElementById(`grade-symbol-text-field-${i}`).dispatchEvent(new InputEvent('input', {bubbles:true}));
            document.getElementById(`lower-bound-field-${i}`).value = schema.from[0][i];
            document.getElementById(`lower-bound-field-${i}`).dispatchEvent(new InputEvent('input', {bubbles:true}));
        };
    }
    else {
        document.getElementById(`name`).value = schema.name;
        document.getElementById(`description`).value = schema.description;
        document.getElementById(`symbol[0].displayUpperBound`).value = 100;

        while(document.getElementById(`datatable`).children[1].rows.length < schema.from[0].length) {
            document.querySelector(`.insertButton .insertMore`).click()
        };
        while(document.getElementById(`datatable`).children[1].rows.length > schema.from[0].length) {
            document.querySelector(`.inlineAction`).click()
        };

        for (let i = 0; i < schema.from[0].length; i++) {
            document.getElementById(`symbol[${i}].displayLowerBound`).value = schema.from[0][i];
            document.getElementById(`symbol[${i}].displayLowerBound`).dispatchEvent(new KeyboardEvent('keyup'));
            document.getElementById(`symbol[${i}].symbol`).value = schema.to[1][i];
            document.getElementById(`symbol[${i}].displayAbsoluteTranslation`).value = schema.from[1][i];
        };
    };
};