const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
const DATA_SHEET_NAME = 'Data';           // Replace with the name of your data sheet

function getId() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('chart');
    console.log(">>> id = " + sheet.getParent().getId());
}

function doGet(e) {
    const dashboardData = fetchDashboardData();
    const template = HtmlService.createTemplateFromFile('index');
    template.dashboardData = JSON.stringify(dashboardData);
    return template.evaluate().setTitle('Simple BI Dashboard');
}

function fetchDashboardData() {
    try {
        const ss = SpreadsheetApp.getActiveSpreadsheet().getId() === SPREADSHEET_ID ?
            SpreadsheetApp.getActiveSpreadsheet() :
            SpreadsheetApp.openById(SPREADSHEET_ID);
        const sheet = ss.getSheetByName(DATA_SHEET_NAME);

        if (!sheet) {
            Logger.log(`Sheet "${DATA_SHEET_NAME}" not found.`);
            return { error: 'Sheet not found' };
        }

        // Fetch all data required for the dashboard
        return {
            oppCountPartnerSize: getOppCountPartnerSize(sheet),
            oppCountRegion: getOppCountRegion(sheet),
            revenueByStage: getRevenueByStage(sheet),
            oppCountMonthStage: getOppCountMonthStage(sheet),
            avgRevenuePartnerSize: getAvgRevenuePartnerSize(sheet),
            factoredRevenueBySize: getFactoredRevenueBySize(sheet)
        };

    } catch (error) {
        Logger.log(`Error fetching data: ${error}`);
        return { error: 'Could not fetch data' };
    }
}

// These functions would each read from different ranges in your sheet
// Implement according to your actual sheet structure
function getOppCountPartnerSize(sheet) {
    // Example implementation - adapt based on your sheet structure
    const range = sheet.getRange("A2:C3");  // Adjust range as needed
    const values = range.getValues();
    
    return {
        Yes: { Small: values[0][0], Medium: values[0][1], Large: values[0][2] },
        No: { Small: values[1][0], Medium: values[1][1], Large: values[1][2] }
    };
}

function getOppCountRegion(sheet) {
    // Example implementation
    const range = sheet.getRange("D2:F2");  // Adjust range as needed
    const values = range.getValues()[0];
    
    return {
        East: values[0],
        West: values[1],
        Central: values[2]
    };
}

function getRevenueByStage(sheet) {
    // Example implementation
    const range = sheet.getRange("G2:K2");  // Adjust range as needed
    const values = range.getValues()[0];
    
    return {
        Lead: values[0],
        Quality: values[1],
        Solution: values[2],
        Proposal: values[3],
        Finalize: values[4]
    };
}

function getOppCountMonthStage(sheet) {
    // Example implementation
    const range = sheet.getRange("L2:P7");  // Adjust range as needed
    const values = range.getValues();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const result = {};
    
    for (let i = 0; i < months.length; i++) {
        result[months[i]] = {
            Lead: values[i][0],
            Quality: values[i][1],
            Solution: values[i][2],
            Proposal: values[i][3],
            Finalize: values[i][4]
        };
    }
    
    return result;
}

function getAvgRevenuePartnerSize(sheet) {
    // Example implementation
    const range = sheet.getRange("Q2:S3");  // Adjust range as needed
    const values = range.getValues();
    
    return {
        Yes: { Small: values[0][0], Medium: values[0][1], Large: values[0][2] },
        No: { Small: values[1][0], Medium: values[1][1], Large: values[1][2] }
    };
}

function getFactoredRevenueBySize(sheet) {
    // Example implementation
    const range = sheet.getRange("T2:V2");  // Adjust range as needed
    const values = range.getValues()[0];
    
    return {
        Small: values[0],
        Medium: values[1],
        Large: values[2]
    };
}