/** TODO: Test with static-analyzer */

(function () {
    "use strict";
    /**
     * Module dependencies.
     */
    /** TODO: Define variables */

    /**
     * Creates a new mongoose schema.
     * -----
     * Instructions, hints and questions
     * - Instruction: create a Schema with the following properties
     *   - title
     *   - author
     *   - description
     *   - modificationDate
     * - The properties are defined as follow:
     *   - title, author and description are strings
     *   - modificationDate is a date
     *   - a title of the book is unique
     *   - title and author are required
     *   - the default value for date is now
     *
     * - Question: What are the differences between a 'Schema Type' and a JSON object? Use the references to motivate your answer.
     * - Question: What is the function of the 'collection' property?
     * - Question: Suppose you have a model for 'Person'. What would be the default collection name?
     * @class Schema/Book
     * @returns Schema object
     * @see http://www.json.org/
     * @see http://mongoosejs.com/docs/schematypes.html
     * @see http://mongoosejs.com/docs/guide.html#collection
     */
    /** TODO: Create schema */

    /**
     * Custom validator
     * -------
     * Instructions, hints and questions.
     *
     * In Mongoose you can define custom validators.
     * If the value does not fit the the definition, an error is returned.

     * - Instruction: Add a validator for title. A title must have a length of at least 8 characters.
     * - Question: There are four locations of validations, each for a specific type of validation. Give for each validation an example and describe why that location is the best location for that specific type of validation.
     *   1. Database (technical constraints, primary key)
     *   1. Schema (simple business rules)
     *   1. Application (complex business rules)
     *   1. Client-side (form validation)
     * @class Validator/Book/title
     * @returns true or false. In case of ```false```, a message 'Invalid title' is returned as well.
     * @see http://mongoosejs.com/docs/validation.html
     */
    /**
     * TODO: Create custom validator
     */

    /**
     * Instructions, hints and questions.
     * - Instruction: Create a model for the defined schema.
     * - Question: What are the differences between a 'Model' and a 'Schema Type'? Use the references to motivate your answer.
     * @class Model/Book
     * @see http://mongoosejs.com/docs/models.html
     */
    /** TODO: Create model */

}());