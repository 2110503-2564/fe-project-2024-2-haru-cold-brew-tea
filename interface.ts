  export interface session {
    _id: string,
    company: string,
    user: string,
    sessionDate: string,
    createdAt: string,
    __v: number
  }

  export interface Company {
    _id: string,
    companyName: string,
    address: string,
    website: string,
    description: string,
    tel: string,
    __v: number,
    sessions: session[]
  }

  export interface CompanyJson {
    success: boolean,
    count: number,
    pagination: object,
    data: Company[]
  }