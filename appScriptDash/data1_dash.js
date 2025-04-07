function createDashboard() {
    // Access the sheet by name "chart"
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('chart');

    if (!sheet) {
        // If the sheet doesn't exist, log a message and return
        Logger.log('Sheet "chart" not found!');
        return;
    }

    // Sample data (can replace this with actual data in your Google Sheet)
    var data = [
        ['2024-01-01', 1],
        ['2024-01-02', 30],
        ['2024-01-03', 2],
        ['2024-01-04', 15],
        ['2024-01-05', 25],
        ['2024-01-06', 35],
        ['2024-01-07', 5],
        ['2024-01-08', 50],
        ['2024-01-09', 10],
        ['2024-01-10', 45]
    ];

    // Add the data to the sheet starting from row 2
    sheet.getRange('A2:B' + (data.length + 1)).setValues(data);

    // --- Chart Positioning and Ordering ---
    var chartsPerRow = 2; // Number of charts per row
    var chartWidth = 400;  // Width of each chart (in pixels)
    var chartHeight = 300; // Height of each chart (in pixels)
    var chartSpacingHorizontal = 20; // Horizontal space between charts (in pixels)
    var chartSpacingVertical = 30;   // Vertical space between charts (in pixels)
    var startRow = 5;              // Starting row for the first chart
    var startColumn = 1;           // Starting column for the first chart

    // Loop through and create charts, positioning them in the grid
    for (var i = 0; i < 5; i++) { // Create 5 charts for demonstration
        var chartBuilder = sheet.newChart()
            .setChartType(Charts.ChartType.LINE)  // Line chart
            .addRange(sheet.getRange('A2:B' + (data.length + 1))) // Data range
            .setOption('title', 'Price Over Time ' + (i + 1))  // Chart title
            .setOption('hAxis', { title: 'Date' })  // X-axis label
            .setOption('vAxis', { title: 'Price' })  // Y-axis label
            .setOption('curveType', 'function')  // Smooth line
            .setOption('legend', { position: 'none' }); // No legend

        // Calculate the row and column position for the current chart
        var rowOffset = Math.floor(i / chartsPerRow);
        var colOffset = i % chartsPerRow;

        // Calculate the absolute row and column for setPosition
        var top = startRow + rowOffset * (chartHeight / 15 + chartSpacingVertical / 15); // Convert pixels to row units (approx.)
        var left = startColumn + colOffset * (chartWidth / 8 + chartSpacingHorizontal / 8); // Convert pixels to column units (approx.)

        // Set the position and insert the chart
        sheet.insertChart(chartBuilder.setPosition(top, left, 0, 0).build());
    }

    // Optional: Add a title in cell A1
    var sheetName = sheet.getName();  // Get the sheet name
    sheet.getRange('A1').setValue('Dashboard for: ' + sheetName);  // Set sheet name in cell A1
}