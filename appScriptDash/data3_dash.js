function createDashboard() {
    // Access the sheet named "chart" for charts
    var chartSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('chart');
    // Access the sheet named "data2" for data
    var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data2');
  
    if (!chartSheet) {
      Logger.log('Sheet "chart" not found!');
      return;
    }
    if (!dataSheet) {
      Logger.log('Sheet "data2" not found!');
      return;
    }
  
    // --- Clear Existing Content ---
    chartSheet.clearContents();
    dataSheet.clearContents();
  
    var charts = chartSheet.getCharts();
    for (var i = 0; i < charts.length; i++) {
      chartSheet.removeChart(charts[i]);
    }
  
    // --- Get and Update Data ---
    var data = getData(); // Call the getData() function from data.gs
  
    //data = updateData(data); // Call the updateData function
    for (var i = 0; i < data.length; i++) {
      if (i == 0) {
        data[i].push('price plus 1');
      } else {
        //tmp = data[i]
        data[i].push(data[i][1] + 1);
      }
    }
  
    var numRows = data.length;
    var numCols = data[0].length;
    dataSheet.getRange(1, 1, numRows, numCols).setValues(data);
  
    // --- Chart Positioning and Ordering ---
    var chartsPerRow = 2; // Number of charts per row
    var chartWidth = 400;  // Width of each chart (in pixels)
    var chartHeight = 300; // Height of each chart (in pixels)
    var chartSpacingHorizontal = 0; // Horizontal space between charts (no gap)
    var chartSpacingVertical = 0;   // Vertical space between charts (no gap)
    var startRow = 1;              // Starting row for the first chart (top)
    var startColumn = 1;           // Starting column for the first chart (left)
  
    var chartTypes = [
      Charts.ChartType.BAR,
      Charts.ChartType.LINE,
      Charts.ChartType.AREA,
      Charts.ChartType.COLUMN,
      Charts.ChartType.SCATTER
      // Add more chart types as needed
    ];
  
    // Loop through and create charts, positioning them in order without gaps
    for (var i = 0; i < 6; i++) { // Create 4 charts for demonstration
      var randomChartType = chartTypes[Math.floor(Math.random() * chartTypes.length)];
      var chartBuilder = chartSheet.newChart()
        .setChartType(randomChartType)  // Line chart
        /** NOTE !!! load data from datasheet */
        .addRange(dataSheet.getRange('A2:B' + numRows)) // Data range
        .setOption('title', 'Price Over Time ' + (i + 1))  // Chart title
        .setOption('hAxis', { title: 'Date' })  // X-axis label
        .setOption('vAxis', { title: 'Price' })  // Y-axis label
        .setOption('curveType', 'function')  // Smooth line
        .setOption('legend', { position: 'none' }); // No legend
  
      // Calculate the row and column position for the current chart
      var rowOffset = Math.floor(i / chartsPerRow);
      var colOffset = i % chartsPerRow;
  
      // Calculate the absolute row and column for setPosition
      var top = startRow + rowOffset * (chartHeight / 15); // Convert pixels to row units (approx.)
      var left = startColumn + colOffset * (chartWidth / 8); // Convert pixels to column units (approx.)
  
      // Set the position and insert the chart
      chartSheet.insertChart(chartBuilder.setPosition(top, left, 0, 0).build());
    }
  }