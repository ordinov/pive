import { Injectable } from '@nestjs/common';
import { Partitaiva, PartitaivaStatus } from './partitaiva.model'
import { v1 as uuid } from 'uuid'

@Injectable()
export class PartiteivaService {
   private partiteiva : Partitaiva[] = []

   createPartitaiva(data) : Partitaiva {
      const piva: Partitaiva = {
         id: uuid(),
         number: data.number,
         companyname: data.companyname,
         website: data.website,
         linkedin_id: data.linkedin_id,
         emails: data.emails,
         status: PartitaivaStatus.SEARCHABLE,
         errorMsg: null
      }
      this.partiteiva.push(piva);
      return piva;
   }

   getPivaByNumber(number: string): Partitaiva {
      return this.partiteiva.find(o => o.number === number)
   }
}
