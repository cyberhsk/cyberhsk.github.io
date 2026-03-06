export async function getSheetData({
  sheetId,
}: {
  sheetId: string;
  sheetName: string;
}) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.substring(47).slice(0, -2));

  const cols = json.table.rows[0].c.map((col: any) => col.v);
  const obj: any = [];
  for (let i = 1; i < json.table.rows.length; i++) {
    const row = json.table.rows[i];
    const rowObj: any = {};
    for (let j = 0; j < cols.length; j++) {
      rowObj[cols[j]] = row.c[j]?.v;
    }
    obj.push(rowObj);
  }
  return obj;
}
