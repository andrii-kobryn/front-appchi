
//xml------------------------------------------------------------------------------------

<person>
  <id>1</id>
  <name>John Doe</name>
  <age>25</age>
  <isStudent>true</isStudent>
  <courses>
    <course>Math</course>
    <course>History</course>
    <course>English</course>
  </courses>
  <address>
    <street>123 Main Street</street>
    <city>New York</city>
    <zipcode>10001</zipcode>
  </address>
</person>

//proto---------------------------------------------------------------------------------------------

syntax = "proto3";

message Address {
string street = 1;
string city = 2;
string zipcode = 3;
}

message Person {
int32 id = 1;
string name = 2;
int32 age = 3;
bool isStudent = 4;
repeated string courses = 5;
Address address = 6;
}

//yaml---------------------------------------------------------------------------------------------------------

person:
  id: 1
  name: John Doe
  age: 25
  isStudent: true
  courses:
    - Math
    - History
    - English
  address:
    street: 123 Main Street
    city: New York
    zipcode: 10001
