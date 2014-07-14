/**
 * Created by Lee on 2014/6/24.
 */
var sql = require('mssql');

var config = {
    user: 'sa',
    password: 'sa@123456',
    server: '192.168.131.30', // You can use 'localhost\\instance' to connect to named instance
    database: 'Ep_pub_bib_abs_2013',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

var connection = new sql.Connection(config, function(err) {
    // ... error checks

    // Query
    console.dir('start query');
    var request = new sql.Request(connection); // or: var request = connection.request();
    request.query('select top 5 * from _Ep_patent_document ', function(err, recordset) {
        // ... error checks
        console.dir(recordset);
    });

    // Stored Procedure

    var request = new sql.Request(connection);
    request.input('input_parameter', sql.Int, 10);
    request.output('output_parameter', sql.VarChar(50));
    request.execute('procedure_name', function(err, recordsets, returnValue) {
        // ... error checks

        console.dir(recordsets);
    });
});