function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function getSheetData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = sheet.getDataRange().getValues(); // 2D array of all data
  Logger.log(">>> (getSheetData) data = " + JSON.stringify(data));
  return data;
}
