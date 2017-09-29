import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  transform(value: Array<any>, field:string): Array<any> {
    if (value) {
      const groupedObj = value.reduce((prev, cur) =>{
        if(!prev[cur[field]]) {
          prev[cur[field]] = [cur]
        } else{
          prev[cur[field]].push(cur);
        }
        return prev;
      }, {});
      var groupedList = [];
      const filterData = Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
      for (let i=0;i<filterData.length;i++) {
         var data = {"name" : "", "amountC1":" - ", "amountC2":" - ", "amountC3":" - "};
          if(filterData[i].value.length > 0) {
               for (let j=0;j<filterData[i].value.length;j++) {
                     data.name = filterData[i].value[j].name;
                     if (filterData[i].value[j].category == "C1") {
                       data.amountC1 = filterData[i].value[j].amount;
                     } else if (filterData[i].value[j].category == "C2") {
                       data.amountC2 = filterData[i].value[j].amount;
                     } else if (filterData[i].value[j].category == "C3") {
                       data.amountC3 = filterData[i].value[j].amount;
                     }
               }
          }
          groupedList.push(data);
      }
      return groupedList;
    } else {
      return null;
    }
  }

}
