// MIDDLEWARE FUNCTIONS

// Check if Brand Exists in database


// Check if Car exists in database


// Check if brand has cars


// Validate Data
// Sample code from tutorial
// exports.fieldValidator = (fields) => {
//     const { title, price, category, essential, created_at } = fields;
//     if (!title || !price || !category || !essential || !created_at) {
//       const emptyFields = [];
//       Object.keys(fields).forEach((field) => {
//         if (fields[field].length <= 0) {
//           emptyFields.push(field);
//         }
//       });

//       return {
//         error: 'All fields are required',
//         emptyFields,
//       };
//     }
//     return null;
// };
  


// Change to sql code
const iterate = (obj, id, columns) => {
    
    const values = [];
    
    // Go through columns and translate to sql
    columns.forEach(column => {
        if(column !== id){
            values.push(`${column} = ${obj[column]}`);
        }
    });

    return values;
}


// Decipher Postgres Error message and create new error
const errorHandler = (err) => {

    // Store all common error types
    const errorType = {
        "03000" : "sql_statement_not_yet_complete",
        "08003" : "connection_does_not_exist",
        "08006" : "connection_failure",
        "22005" : "error_in_assignment",
        "23505" : "unique_violation",
        "23503" : "foreign_key_violation",
        "26000" : "invalid_sql_statement_name",
        "2F002" : "modifying_sql_data_not_permitted",
        "38001" : "containing_sql_not_permitted",
        "42601" : "syntax_error",
        "42000" : "syntax_error_or_access_rule_violation",
        "42830" : "invalid_foreign_key",
        "42602" : "invalid_name",
        "42939" : "reserved_name",
        "42804" : "datatype_mismatch",
        "42P18" : "indeterminate_datatype",
        "42703" : "undefined_column",
        "42883" : "undefined_function",
        "42P01" : "undefined_table",
        "42P02" : "undefined_parameter"
    }

    error_code = errorType[err.code];

    // If it is a known error type
    if(error_code){
        console.log(`Postgres Error Code: ${err_code}. ${error_code}.`);

    }
    else{
        console.log(`Postgres Error Code: ${err_code}. Learn more: https://www.postgresql.org/docs/12/errcodes-appendix.html.`);
    }

}

module.exports = iterate;
module.exports = errorHandler;