const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
const DATA_SHEET_NAME = 'Data';           // Replace with the name of your data sheet
const DATA_CELL = 'A1';                    // Replace with the cell containing the data you want to display


function getId() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('chart');
    console.log(">>> id = " + sheet.getParent().getId());
}

function doGet(e) {
    const dataValue = fetchDataFromSheet();
    const template = HtmlService.createTemplateFromFile('index');
    template.dataValue = dataValue;
    return template.evaluate().setTitle('Simple Databox');
}

function fetchDataFromSheet() {
    try {
        const ss = SpreadsheetApp.getActiveSpreadsheet().getId() === SPREADSHEET_ID ?
            SpreadsheetApp.getActiveSpreadsheet() :
            SpreadsheetApp.openById(SPREADSHEET_ID);
        const sheet = ss.getSheetByName(DATA_SHEET_NAME);

        if (!sheet) {
            Logger.log(`Sheet "${DATA_SHEET_NAME}" not found.`);
            return 'Error: Sheet not found';
        }

        const cellValue = sheet.getRange(DATA_CELL).getValue();
        return cellValue;

    } catch (error) {
        Logger.log(`Error fetching data: ${error}`);
        return 'Error: Could not fetch data';
    }
}