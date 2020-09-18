export interface Partitaiva {
   id: string,
   number: string,
   companyname: string|null,
   website: string|null,
   linkedin_id: string|null,
   emails: Array<{'text' : string; 'value' : string}>,
   status: PartitaivaStatus,
   errorMsg: string
}

export enum PartitaivaStatus {
   SEARCHABLE = 'SEARCHABLE',
   NOT_FOUND = 'NOT_FOUND',
   PARTIAL = 'PARTIAL',
   COMPLETE = 'COMPLETE',
   VALIDATION_ERROR = 'VALIDATION_ERROR'
}