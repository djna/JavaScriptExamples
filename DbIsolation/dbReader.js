const sql = require('mssql');

// Configuration for the SQL Server connection
const config = {
    user: 'sa',
    //password: '***thepassword***',
    password: 'DaveDockedSoftwire2021',
    server: 'localhost',
    database: 'splendid',
    trustServerCertificate:true,
  };

// Function to read with different isolation levels
async function performRead() {
  try {
    // Connect to the SQL Server database
    await sql.connect(config);

    // Begin a transaction with the READ UNCOMMITTED isolation level
    const transaction = new sql.Transaction();
    // TODO specify isolation level
       
    await transaction.begin();

    try {
        // TODO read data a report it
        console.log("Read not implemented")

        await transaction.commit()
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

// work with database
performRead();
