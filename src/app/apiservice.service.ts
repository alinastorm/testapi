



export interface Idata {
  name: string;
}

export class ApiService {


public data: Idata[] = [
{name: 'USD'},
{name: 'EUR'},
{name: 'RUB'}
];
  constructor() { }


public getAll() {

  return this.data;
}
}
