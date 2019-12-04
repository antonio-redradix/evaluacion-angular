export interface Weather{
    day : string;
    weather : string;
    min_temp : number;
    max_temp: number;
    current_temp: number;
    precip: string;
    humidity: string;
    wind : string;
    imgRoute : string;
}
// [{"day":"Tuesday","weather":"Cloudy","min_temp":4,"max_temp":9,"current_temp":7,"precip":"1%","humidity":"75%","wind":"11km/h"},{"day":"Wednesday","weather":"Scattered Showers","min_temp":5,"max_temp":11,"current_temp":11,"precip":"70%","humidity":"76%","wind":"18km/h"},{"day":"Thursday","weather":"Partly Cloudy","min_temp":4,"max_temp":13,"current_temp":10,"precip":"69%","humidity":"18%","wind":"18km/h"},{"day":"Friday","weather":"Partly Cloudy","min_temp":5,"max_temp":12,"current_temp":9,"precip":"62%","humidity":"19%","wind":"21km/h"},{"day":"Saturday","weather":"Sunny","min_temp":2,"max_temp":13,"current_temp":11,"precip":"10%","humidity":"74%","wind":"8km/h"},{"day":"Sunday","weather":"Mostly Cloudy","min_temp":11,"max_temp":16,"current_temp":13,"precip":"6%","humidity":"83%","wind":"31km/h"},{"day":"Monday","weather":"Sunny","min_temp":3,"max_temp":11,"current_temp":8,"precip":"15%","humidity":"45%","wind":"31km/h"},{"day":"Tuesday","weather":"Scattered Showers","min_temp":7,"max_temp":14,"current_temp":13,"precip":"84%","humidity":"79%","wind":"13km/h"}]