import React from "react";
import EmployeeList from "./EmployeeList";
import Title from "./Title";


const employees = [
    {
      id: 1,
      name: "John Landis",
      number: "555-555-5556",
      department: "Logistics",
      start: "11/22/00",
      location: "Paris, TX",
      email: "john@landis.mov"
    },
    {
      id: 2,
      name:"Margaret Thatcher",
      number: "642-555-6844",
      department: "Technology",
      start: "01/02/03",
      location: "Lafayette, ND",
      email: "margie@thatcher.co"
    },
    {
      id: 3,
      name: "Neil Armstrong",
      number: "917-555-8763",
      department: "Human Resources",
      start: "02/03/04",
      location: "New York, NY",
      email: "neil@moon.edu"
    },
    {
      id: 4,
      name: "Kyle Maclachlan",
      number: "808-555-9352",
      department: "Acquisitions",
      start: "04/05/06",
      location: "Arrakeen, NM",
      email: "muaddib@dune.com"
    },
    {
      id: 5,
      name: "William Gates",
      number: "666-555-2434",
      department: "Development",
      start: "12/12/81",
      location: "Seattle, WA",
      email: "bill@win.dev"
    },
    {
      id: 6,
      name: "John Romero",
      number: "666-666-6677",
      department: "Visioneering",
      start: "11/22/91",
      location: "Madison, WI",
      email: "jromero@id.com"
    },
    {
      id: 7,
      name: "Todd Lebowski",
      number: "413-555-2384",
      department: "Party Planning",
      start: "09/07/99",
      location: "Los Angeles, CA",
      email: "big@lebowski.com"
    },{
      id: 8,
      name: "Bruce Wayne",
      number: "318-555-0953",
      department: "Operations",
      start: "08/12/39",
      location: "Gotham, GT",
      email: "bats@wayne.com"
    }
  ];

class Container extends React.Component {

    render(){
    return (  
      <div>
        <Title />
        <EmployeeList employees={employees} />
        </div>
      );
    
    }    



}

export default Container;