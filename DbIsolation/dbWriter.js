const sql = require('mssql');

// Configuration for the SQL Server connection
const config = {
  user: 'sa',
  password: '***password***', //TODO specify your password
  server: 'localhost',
  database: 'splendid',
  trustServerCertificate:true,
};

// Function to write data and pause
async function writeAndPause() {
  try {
    // Connect to the SQL Server database
    await sql.connect(config);

    // Begin a transaction
    const transaction = new sql.Transaction();
    await transaction.begin();

    try {
      // Execute an INSERT query
    await transaction.request().query(
        `INSERT INTO books(title, author, isbn) 
         VALUES(
            'More Information', 'Arthur Author', '100024'
         )
        `
        );
    console.log('Data inserted, not yet committed.');

      // Pause the program for 10 seconds to simulate a pause before committing
      await new Promise(resolve => setTimeout(resolve, 10000));

      // Commit the transaction
      await transaction.commit();
      console.log('Data committed.');
    } catch (error) {
      // Rollback the transaction if an error occurs
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the SQL Server connection
    sql.close();
  }
}

// Call the function to write and pause
writeAndPause();
