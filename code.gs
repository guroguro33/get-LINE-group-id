function doPost(e){
 var json = JSON.parse(e.postData.contents);
 var UID = json.events[0].source.userId;
 var GID = json.events[0].source.groupId;
  
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 sheet.getRange(1,1).setValue('グループID');
 sheet.getRange(2,1).setValue(GID);
 sheet.getRange(1,2).setValue('ユーザーID');
 sheet.getRange(2,2).setValue(UID);
}
