import * as XLSX from "xlsx";

export class TableUtil {
  static exportToExcel(tableId: string, name?: string) {
    let timeSpan = new Date().toISOString();
    let prefix = name || "ListePatients";
    let fileName = `${prefix}-${timeSpan}`;
    let targetTableElm = document.getElementById(tableId);
    let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{ sheet: prefix });
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
