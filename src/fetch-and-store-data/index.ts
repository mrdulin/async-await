import * as rp from 'request-promise';
import * as fs from 'fs';
import * as path from 'path';

const API = 'http://it-ebooks-api.info/v1/search/';

async function getBooksByNames(bookNames: string[]): Promise<any[]> {
  const results: any[] = [];
  for (const bookName of bookNames) {
    const url: string = `${API}${bookName}`;
    try {
      const dataString = await rp.get(url);
      const data = JSON.parse(dataString);
      results.push(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return results;
}

function storeToJSONfile(data: any, fileName: string = 'data.json') {
  const filepath: string = path.resolve(__dirname, fileName);
  const ws: fs.WriteStream = fs.createWriteStream(filepath);
  ws.on('error', err => {
    console.error('保存数据失败!', err);
  });
  ws.on('finish', () => {
    console.log('数据保存成功!');
  });
  ws.write(JSON.stringify(data, null, 4), 'utf8');
  ws.end();
}

export { getBooksByNames, storeToJSONfile };
