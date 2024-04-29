class Patient {

   constructor(data) {
      this.name = data.name;
      this.patient_id = data.patient_id;
      this.date = data.date;
      this.problem = data.problem;
      this.recipe = data.recipe;
      this.price = data.price;
      this.insurance = data.insurance;
      this.insurance_name = data.insurance_name;
      this.insurance_cover = data.insurance_cover;
   }

   addPatient() {
      return `INSERT INTO patients(name, patient_id, date, problem, recipe, price, insurance, insurance_name, insurance_cover) \
                   VALUES('${this.name}','${this.patient_id}', '${this.date}', '${this.problem}', '${this.recipe}','${this.price}', '${this.insurance}', '${this.insurance_name}', '${this.insurance_cover}')`;
   }
}

module.exports = Patient;