export interface Partners {
  id:number
  companyname: string;
  revenue: number;
  year: string;
  employees: number;
  industry: string;
  revenuedetails: {
    year: string;
    profit: number;
    turnover: number;
    crossmargin: number;
  }[];
  employeedetails:{employeename: string;experience: number; role: string;domain:string;}[];
  industrydetails:{branches:number,headquarters:string,type:string,founder:string}[];
}
