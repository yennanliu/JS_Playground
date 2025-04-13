const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
const DATA_SHEET_NAME = 'DeliveryData';   // Replace with the name of your data sheet

function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  template.dashboardData = JSON.stringify(generateFakeData());
  return template.evaluate()
    .setTitle('Delivery Startup Dashboard')
    .setFaviconUrl('https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png');
}

function generateFakeData() {
  // Generate fake data for the delivery startup dashboard
  return {
    // Daily delivery metrics over the last 7 days
    dailyDeliveries: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      delivered: [124, 135, 118, 142, 165, 192, 148],
      failed: [8, 12, 10, 9, 11, 14, 12],
      pending: [14, 8, 12, 10, 9, 15, 11]
    },
    
    // Average delivery time by zone (in minutes)
    deliveryTimeByZone: {
      'Downtown': 22,
      'Midtown': 28,
      'Uptown': 35,
      'Suburbs': 42,
      'Rural': 55
    },
    
    // Revenue breakdown by delivery type
    revenueByType: {
      'Express': 12500,
      'Standard': 28000,
      'Economy': 18500,
      'Scheduled': 15000
    },
    
    // Customer satisfaction ratings (1-5)
    customerSatisfaction: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      ratings: [4.2, 4.3, 4.1, 4.4, 4.2, 4.5, 4.3]
    },
    
    // Delivery issues by category
    deliveryIssues: {
      'Wrong Address': 35,
      'Damaged Package': 22,
      'Late Delivery': 48,
      'Missing Items': 15,
      'Other': 9
    },
    
    // Driver performance
    driverPerformance: {
      drivers: ['Alex', 'Beth', 'Carlos', 'Diana', 'Ethan'],
      deliveriesCompleted: [48, 52, 45, 55, 50],
      avgRating: [4.5, 4.8, 4.2, 4.7, 4.6],
      avgDeliveryTime: [28, 25, 32, 26, 29]
    },
    
    // Delivery count by hour of day
    deliveryByHour: {
      hours: Array.from({length: 24}, (_, i) => i),
      counts: [8, 5, 3, 2, 5, 12, 25, 42, 58, 65, 72, 85, 78, 62, 55, 48, 52, 68, 72, 58, 42, 32, 18, 12]
    }
  };
}

// This function would fetch actual data from the spreadsheet if needed
function fetchDataFromSheet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet().getId() === SPREADSHEET_ID ?
      SpreadsheetApp.getActiveSpreadsheet() :
      SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(DATA_SHEET_NAME);

    if (!sheet) {
      Logger.log(`Sheet "${DATA_SHEET_NAME}" not found.`);
      return { error: 'Sheet not found' };
    }

    // Here you would implement the actual data fetching
    // For now, we're just returning fake data
    return generateFakeData();

  } catch (error) {
    Logger.log(`Error fetching data: ${error}`);
    return { error: 'Could not fetch data' };
  }
} 