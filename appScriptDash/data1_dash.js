function createDashboard() {
    // Open the active spreadsheet and the first sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Sample data (can replace this with actual data in your Google Sheet)
    var data = [
        ['2024-01-01', 1],
        ['2024-01-02', 30],
        ['2024-01-03', 2],
        ['2024-01-04', 15],
        ['2024-01-05', 25],
        // Add more data rows here as needed
    ];

    // Add the data to the sheet starting from row 2
    sheet.getRange('A2:B' + (data.length + 1)).setValues(data);

    // Create a chart to plot the data (price over time)
    var chart = sheet.newChart()
        .setChartType(Charts.ChartType.LINE)  // Line chart for data vs price
        .addRange(sheet.getRange('A2:B' + (data.length + 1))) // Data from A2:B to the last row with data
        .setPosition(5, 5, 0, 0) // Position the chart at row 5, column 5
        .setOption('title', 'Price Over Time')  // Set the chart title
        .setOption('hAxis', { title: 'Date' })  // Set x-axis title
        .setOption('vAxis', { title: 'Price' })  // Set y-axis title
        .setOption('curveType', 'function')  // Make the line curve smooth
        .setOption('legend', { position: 'none' })  // No legend needed
        .build();

    console.log(">>> chart = " + String(chart))

    // Insert the chart into the sheet
    sheet.insertChart(chart);

    // Create additional charts or make adjustments as needed
}
