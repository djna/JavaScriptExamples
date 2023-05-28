const sql = require('mssql');

// Configuration for the SQL Server connection
const config = {
    user: 'sa',
    password: 'DaveDockedSoftwire2021',
    server: 'localhost',
    database: 'splendid',
    trustServerCertificate:true,
  };

// Function to perform a dirty read
async function performDirtyRead() {
  try {
    // Connect to the SQL Server database
    await sql.connect(config);

    // Begin a transaction with the READ UNCOMMITTED isolation level
    const transaction = new sql.Transaction();
    // transaction.isolationLevel = sql.ISOLATION_LEVEL.READ_UNCOMMITTED;
    transaction.isolationLevel = sql.ISOLATION_LEVEL.SERIALIZABLE;
    await transaction.begin();

    try {
      // Execute a dirty read query
      const result = await transaction.request().query(`SELECT * FROM books where isbn like '1000%' `);

      // Process the result
      console.log(result.recordset);

      // Commit the transaction
      await transaction.commit();
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

// Call the function to perform the dirty read
performDirtyRead();
