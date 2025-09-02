const ExcelJS = require('exceljs');

class ExcelExportUtil {
  static async exportContactsToExcel(contacts) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Contacts', {
      pageSetup: { paperSize: 9, orientation: 'landscape' }
    });

    // Analyze data to determine non-null columns and extra fields
    const { columns, extraFields } = this.analyzeContactData(contacts);

    // Set up headers
    this.setupHeaders(worksheet, columns, extraFields);

    // Add data rows
    this.addDataRows(worksheet, contacts, columns, extraFields);

    // Apply formatting
    this.applyFormatting(worksheet, columns.length + extraFields.length);

    return workbook;
  }

  static analyzeContactData(contacts) {
    const baseColumns = ['id', 'request_type', 'name', 'phone', 'email', 'city', 'company', 'message', 'file', 'posted_date', 'status'];
    const columns = [];
    const extraFieldsSet = new Set();

    // Check which base columns have non-null values
    baseColumns.forEach(col => {
      const hasData = contacts.some(contact => contact[col] !== null && contact[col] !== undefined && contact[col] !== '');
      if (hasData) {
        columns.push(col);
      }
    });

    // Extract unique extra fields
    contacts.forEach(contact => {
      if (contact.extra && typeof contact.extra === 'object') {
        Object.keys(contact.extra).forEach(key => {
          extraFieldsSet.add(key);
        });
      }
    });

    return { columns, extraFields: Array.from(extraFieldsSet) };
  }

  static setupHeaders(worksheet, columns, extraFields) {
    const headerRow = worksheet.getRow(1);
    const subHeaderRow = worksheet.getRow(2);

    // Main headers
    const columnLabels = {
      id: 'ID',
      request_type: 'Request Type',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      city: 'City',
      company: 'Company',
      message: 'Message',
      file: 'File',
      posted_date: 'Posted Date',
      status: 'Status'
    };

    let colIndex = 1;

    // Base columns
    columns.forEach(col => {
      headerRow.getCell(colIndex).value = columnLabels[col] || col;
      colIndex++;
    });

    // Extra fields header
    if (extraFields.length > 0) {
      const extraStartCol = colIndex;
      headerRow.getCell(extraStartCol).value = 'Additional Fields';
      
      // Merge cells for extra fields header
      if (extraFields.length > 1) {
        worksheet.mergeCells(1, extraStartCol, 1, extraStartCol + extraFields.length - 1);
      }

      // Sub headers for extra fields
      extraFields.forEach(field => {
        subHeaderRow.getCell(colIndex).value = field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        colIndex++;
      });
    }

    // Style headers
    headerRow.height = 25;
    subHeaderRow.height = 20;
    
    headerRow.eachCell((cell) => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4472C4' } };
      cell.font = { color: { argb: 'FFFFFFFF' }, bold: true, size: 12 };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });

    if (extraFields.length > 0) {
      subHeaderRow.eachCell((cell, colNumber) => {
        if (colNumber > columns.length) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD9E2F3' } };
          cell.font = { bold: true, size: 10 };
          cell.alignment = { vertical: 'middle', horizontal: 'center' };
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        }
      });
    }
  }

  static addDataRows(worksheet, contacts, columns, extraFields) {
    const startRow = extraFields.length > 0 ? 3 : 2;

    contacts.forEach((contact, index) => {
      const row = worksheet.getRow(startRow + index);
      let colIndex = 1;

      // Base columns
      columns.forEach(col => {
        let value = contact[col];
        
        // Format specific columns
        if (col === 'posted_date' && value) {
          value = new Date(value).toLocaleDateString();
        } else if (col === 'status') {
          value = value === 1 ? 'Active' : 'Inactive';
        } else if (col === 'request_type') {
          value = value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }

        row.getCell(colIndex).value = value || '';
        colIndex++;
      });

      // Extra fields
      extraFields.forEach(field => {
        const value = contact.extra && contact.extra[field] ? contact.extra[field] : '';
        row.getCell(colIndex).value = value;
        colIndex++;
      });

      // Alternate row colors
      if (index % 2 === 0) {
        row.eachCell((cell) => {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8F9FA' } };
        });
      }
    });
  }

  static applyFormatting(worksheet, totalColumns) {
    // Auto-fit columns
    worksheet.columns.forEach((column, index) => {
      let maxLength = 0;
      column.eachCell({ includeEmpty: true }, (cell) => {
        const columnLength = cell.value ? cell.value.toString().length : 10;
        if (columnLength > maxLength) {
          maxLength = columnLength;
        }
      });
      column.width = Math.min(Math.max(maxLength + 2, 12), 50);
    });

    // Add borders to all cells
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        if (colNumber <= totalColumns) {
          cell.border = {
            top: { style: 'thin', color: { argb: 'FFD0D0D0' } },
            left: { style: 'thin', color: { argb: 'FFD0D0D0' } },
            bottom: { style: 'thin', color: { argb: 'FFD0D0D0' } },
            right: { style: 'thin', color: { argb: 'FFD0D0D0' } }
          };
          cell.alignment = { vertical: 'middle', horizontal: 'left' };
        }
      });
    });

    // Freeze header rows
    worksheet.views = [{ state: 'frozen', ySplit: 2 }];
  }
}

module.exports = ExcelExportUtil;