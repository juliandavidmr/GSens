import {Pipe} from "angular2/core";

@Pipe({
  name: 'filterSensor'
})
class FilterBySensor {
  transform(value, search_idSensor) {
    return value.filter((item) => {
      return item.fk_idSensor == search_idSensor;
    });
  }
}
