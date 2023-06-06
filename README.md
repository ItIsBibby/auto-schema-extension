# auto-schema-extension
A chrome extension I made to auto-fill a Grading Schema form in BlackBoard. I built this to make inputting grading schemas quicker and more accurate at a time when my team was required to update grading schemas en masse, and we would have otherwise had to enter them all manually.

## How it works
It works on the schema creation page in Blackboard by targeting specific input elements, and filling them out with information from the objects defined in action.js, which are based on the grading schemas used at Sheffield Hallam University.
Users can choose to convert student marks between three options: percentage, point, and category.

## Setup
The folder can be added straight into your chrome browser using the "Load unpacked" option in the extensions settings.

## Next steps
The HTML is very basic because I built this under time constraints, so it could definitely be improved with a style sheet. It could also do with a better method of organising the different schemas if it were to be scaled-up, rather than just listing them all in the single window.
