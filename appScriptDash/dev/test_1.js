function createDashboard() {
    // Open the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Assume the data starts from row 2 (skip headers) and columns A, B, C represent 'Date', 'Sales', and 'Revenue' respectively
    var dataRange = sheet.getDataRange(); // Get all data from the sheet
    var data = dataRange.getValues(); // Fetch the values in the data range
    
    // Create a new chart to plot Sales over Time
    var salesChart = sheet.newChart()
      .setChartType(Charts.ChartType.LINE)
      .addRange(sheet.getRange('A2:B' + sheet.getLastRow())) // Date vs Sales (assuming data starts at A2)
      .setPosition(5, 5, 0, 0) // Position of the chart in the sheet
      .setOption('title', 'Sales Over Time')
      .setOption('hAxis', {title: 'Date'})
      .setOption('vAxis', {title: 'Sales'})
      .build();
    
    // Create a chart to plot Revenue over Time
    var revenueChart = sheet.newChart()
      .setChartType(Charts.ChartType.LINE)
      .addRange(sheet.getRange('A2:C' + sheet.getLastRow())) // Date vs Revenue (assuming data starts at A2)
      .setPosition(5, 10, 0, 0) // Position of the chart in the sheet
      .setOption('title', 'Revenue Over Time')
      .setOption('hAxis', {title: 'Date'})
      .setOption('vAxis', {title: 'Revenue'})
      .build();
  
    // Create a chart to plot Sales vs Revenue (Scatter plot)
    var scatterChart = sheet.newChart()
      .setChartType(Charts.ChartType.SCATTER)
      .addRange(sheet.getRange('B2:B' + sheet.getLastRow())) // Sales data
      .addRange(sheet.getRange('C2:C' + sheet.getLastRow())) // Revenue data
      .setPosition(15, 5, 0, 0) // Position of the chart in the sheet
      .setOption('title', 'Sales vs Revenue')
      .setOption('hAxis', {title: 'Sales'})
      .setOption('vAxis', {title: 'Revenue'})
      .build();
    
    // Add the charts to the sheet
    sheet.insertChart(salesChart);
    sheet.insertChart(revenueChart);
    sheet.insertChart(scatterChart);
  }
  