export default class Seller {
  //Parameterized constructor
  constructor(
    id,
    user_id,
    name,
    contact_no,
    location,
    created_at,
    modified_at
  ) {
    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.contact_no = contact_no;
    this.location = location;
    this.created_at = created_at;
    this.modified_at = modified_at;

    this.table_name = "sellers";
  }

  display() {
    console.log(`Id= ${this.id}`);
    console.log(`User Id= ${this.user_id}`);
    console.log(`Name= ${this.name}`);
    console.log(`Mobile= ${this.contact_no}`);
    console.log(`Location= ${this.location}`);
    console.log(`Created At= ${this.created_at}`);
  }
}