function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  try {
    var data = JSON.parse(e.postData.contents);

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Critical Charts',
        'Priority Spreads',
        'Time Ranges',
        'Priority Markets',
        'Charts to Skip',
        'Interactive Features',
        'Client Access',
        'Different Client Views',
        'Update Frequency',
        'Export Formats',
        'Mobile Important',
        'Additional Data Sources',
        'Additional Notes'
      ]);
    }

    // Add the data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.criticalCharts || '',
      data.prioritySpreads ? data.prioritySpreads.join(', ') : '',
      data.timeRanges ? data.timeRanges.join(', ') : '',
      data.priorityMarkets ? data.priorityMarkets.join(', ') : '',
      data.chartsToSkip || '',
      data.interactiveFeatures ? data.interactiveFeatures.join(', ') : '',
      data.clientAccess || '',
      data.differentClientViews || '',
      data.updateFrequency || '',
      data.exportFormats ? data.exportFormats.join(', ') : '',
      data.mobileImportant || '',
      data.additionalDataSources || '',
      data.additionalNotes || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
