import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() { }

  fileType = 'application/vnd.ms-excel;charset=UTF-8';
  fileExtension = '.xls';

  public exportExcel(jsonData: any[], fileName: string, headers: any[]): void {
    var wsa = XLSX.utils.aoa_to_sheet(headers);
    const ws: XLSX.WorkSheet = XLSX.utils.sheet_add_json(wsa, jsonData, {skipHeader: true, origin: "A2"});
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xls', type: 'array' });
    this.downloadCSVFile(excelBuffer, fileName);
  }

  private downloadCSVFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: this.fileType});
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }
}