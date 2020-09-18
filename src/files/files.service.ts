import { Injectable } from '@nestjs/common';
const fs = require('fs');
import readXlsxFile from 'read-excel-file'
import patterns from './patterns'
const googleIt = require('google-it')
const zeroPad = (num, places) => String(num).padStart(places, '0')

@Injectable()
export class FilesService {
   parseFile(file) {
      return readXlsxFile(file.buffer).then(rows => {
         return rows.map(row => this.parseRow(row))
               // .filter(o => o.piva != null)
      })
   }

   parseRow(row) {
      let obj = {
         piva : row.filter(r => { 
            return r.toString().match(patterns.cf) !== null || 
               r.toString().match(patterns.piva) !== null 
         }),
         companyname: row.filter(r => { return r.toString().match(patterns.companyname) })
      }
      obj.piva = obj.piva.length > 0 ? zeroPad(obj.piva[0], 11) : null;
      obj.companyname = obj.companyname.length > 0 ? obj.companyname[0] : null;
      return this.parsePiva(obj);
   }

   async parsePiva(obj) {
      await googleIt({'query': obj.piva}).then(results => {
         obj.link = results[0].link;
         return obj;
      }).catch(e => { })
   }
}
