export async function getSheetData({
  sheetId,
  sheetName,
}: {
  sheetId: string;
  sheetName: string;
}): Promise<any[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}&headers=1`;
  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.substring(47).slice(0, -2));

  const cols = json.table.cols.map((col: any) => col.label);
  const obj: any = [];
  for (let i = 0; i < json.table.rows.length; i++) {
    const row = json.table.rows[i];
    const rowObj: any = {};
    for (let j = 0; j < cols.length; j++) {
      rowObj[cols[j]] = row.c[j]?.v;
    }
    obj.push(rowObj);
  }
  return obj;
}
