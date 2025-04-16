function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

function getDashboardData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  const data = sheet.getDataRange().getValues(); // 2D array: [ [header1, header2], [row1], [row2], ... ]
  return data;
}
