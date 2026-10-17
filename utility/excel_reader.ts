
import fs from 'node:fs';
import path from 'node:path';
import * as XLSX from 'xlsx';

export function readExcel(
  fileName: string
): Record<string, string>[] {
  const filePath = path.resolve(
    process.cwd(),
    'data',
    fileName
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Excel file not found: ${filePath}`);
  }

  const workbook = XLSX.readFile(filePath);

  const sheetName = workbook.SheetNames[0];

  if (!sheetName) {
    throw new Error(`No worksheets found in ${fileName}`);
  }

  const worksheet = workbook.Sheets[sheetName];

  const records = XLSX.utils.sheet_to_json<
    Record<string, unknown>
  >(worksheet, {
    defval: '',
    raw: false
  });

  return records.map(row =>
    Object.fromEntries(
      Object.entries(row).map(([key, value]) => [
        key.trim(),
        String(value ?? '').trim()
      ])
    )
  );
}

export function getTestData(
  testCaseName: string,
  fileName = 'testdata.xlsx'
): Record<string, string> {
  const records = readExcel(fileName);

  const record = records.find(
    row => row['TestCaseName'] === testCaseName
  );

  if (!record) {
    throw new Error(
      `Test case "${testCaseName}" not found in ${fileName}`
    );
  }

  return record;
}