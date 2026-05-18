function doPost(e) {
  try {

    Logger.log(JSON.stringify(e.parameter));

    var folder = DriveApp.getFolderById("1AL7BUNVUibtNSas2l3ka5En-Z94cUVBE");

    var sheet = SpreadsheetApp.openById("11ijzBxwvkPUBN2S4WpSK6sKmcI_dtZk9J_C1_XATFJw")
      .getSheetByName("Sheet1");

    var name = e.parameter.name || "";
    var email = e.parameter.email || "";
    var college = e.parameter.college || "";
    var message = e.parameter.message || "";
    var base64 = e.parameter.resume;

    var fileUrl = "";

    if (base64) {

      // 🔥 Create unique file name
      var fileName = "Resume_" + name + "_" + new Date().getTime() + ".pdf";

      var blob = Utilities.newBlob(
        Utilities.base64Decode(base64),
        "application/pdf",
        fileName
      );

      var file = folder.createFile(blob);
      fileUrl = file.getUrl();
    }

    sheet.appendRow([
      new Date(),
      name,
      email,
      college,
      fileUrl,
      message
    ]);

    return ContentService.createTextOutput("Success");

  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message);
  }
}