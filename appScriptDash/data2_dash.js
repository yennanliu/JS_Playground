function createRandomChartDashboard() {
    // Access the sheet by name "chart"
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('chart');

    if (!sheet) {
        Logger.log('Sheet "chart" not found!');
        return;
    }

    // --- Clear Existing Content ---
    sheet.clearContents();
    var charts = sheet.getCharts();
    for (var i = 0; i < charts.length; i++) {
        sheet.removeChart(charts[i]);
    }

    // Sample data
    var data = [
        ['Category', 'Value'],
        ['A', Math.random() * 50],
        ['B', Math.random() * 50],
        ['C', Math.random() * 50],
        ['D', Math.random() * 50],
        ['E', Math.random() * 50]
    ];

    sheet.getRange('A2:B' + data.length).setValues(data.slice(1)); // Write data (excluding headers)

    var chartTypes = [
        Charts.ChartType.BAR,
        Charts.ChartType.LINE,
        Charts.ChartType.AREA,
        Charts.ChartType.COLUMN,
        Charts.ChartType.SCATTER
        // Add more chart types as needed
    ];

    var chartsPerRow = 2;
    var chartWidth = 400;
    var chartHeight = 300;
    var chartSpacingHorizontal = 20;
    var chartSpacingVertical = 30;
    var startRow = 5;
    var startColumn = 1;
    var numberOfCharts = 5; // Number of random charts to create

    for (var i = 0; i < numberOfCharts; i++) {
        // Randomly select a chart type
        var randomChartType = chartTypes[Math.floor(Math.random() * chartTypes.length)];

        var chartBuilder = sheet.newChart()
            .setChartType(randomChartType)
            .addRange(sheet.getRange('A1:B' + data.length)) // Include headers for labels
            .setOption('title', Utilities.formatString('%s Chart %s', randomChartType.toString().replace('Charts.ChartType.', ''), (i + 1)))
            .setOption('legend', { position: 'bottom' }); // Keep legend for clarity

        // Calculate position
        var rowOffset = Math.floor(i / chartsPerRow);
        var colOffset = i % chartsPerRow;
        var top = startRow + rowOffset * (chartHeight / 15 + chartSpacingVertical / 15);
        var left = startColumn + colOffset * (chartWidth / 8 + chartSpacingHorizontal / 8);

        sheet.insertChart(chartBuilder.setPosition(top, left, 0, 0).build());
    }

    var sheetName = sheet.getName();
    sheet.getRange('A1').setValue('Random Chart Dashboard for: ' + sheetName);
}