import React from "react";
import Employee from "../Employee";
import "./style.css";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.sortName = this.sortName.bind(this)
    this.sortLocation = this.sortLocation.bind(this)
    this.sortNumber = this.sortNumber.bind(this)
    this.sortEmail = this.sortEmail.bind(this)
    this.sortDepartment = this.sortDepartment.bind(this)
    this.sortDate = this.sortDate.bind(this)
    this.state = {
      search: '',
      order: "chronological",
      local: "chronological",
    }
  }

  sortDate(event) {
    console.log(this.state.order);
    if (this.state.order === 'chronological') {
      this.setState({
        order: 'reverseChronological'
      });
      this.props.employees.sort((a, b) => (a.date> b.date) ? 1 : -1)
    } else {
      this.setState({
        order: "chronological"
      });
      this.props.employees.sort((a, b) => (a.date > b.date) ? -1 : 1)
    }
  }

  sortDepartment(event) {
    console.log(this.state.order);
    if (this.state.order === 'chronological') {
      this.setState({
        order: 'reverseChronological'
      });
      this.props.employees.sort((a, b) => (a.department > b.department) ? 1 : -1)
    } else {
      this.setState({
        order: "chronological"
      });
      this.props.employees.sort((a, b) => (a.department > b.department) ? -1 : 1)
    }
  }

  sortEmail(event) {
    console.log(this.state.order);
    if (this.state.order === 'chronological') {
      this.setState({
        order: 'reverseChronological'
      });
      this.props.employees.sort((a, b) => (a.email > b.email) ? 1 : -1)
    } else {
      this.setState({
        order: "chronological"
      });
      this.props.employees.sort((a, b) => (a.email > b.email) ? -1 : 1)
    }
  }

  sortNumber(event) {
    console.log(this.state.order);
    if (this.state.order === 'chronological') {
      this.setState({
        order: 'reverseChronological'
      });
      this.props.employees.sort((a, b) => (a.number > b.number) ? 1 : -1)
    } else {
      this.setState({
        order: "chronological"
      });
      this.props.employees.sort((a, b) => (a.number > b.number) ? -1 : 1)
    }
  }
  sortLocation(event) {
    // console.log(this.state.local);
    if (this.state.local === 'chronological') {
      this.setState({
        local: 'reverseChronological'
      });
      this.props.employees.sort((a, b) => (a.location > b.location) ? 1 : -1)
    } else {
      this.setState({
        local: "chronological"
      });
      this.props.employees.sort((a, b) => (a.location > b.location) ? -1 : 1)
    }
  }
  sortName(event) {
    console.log(this.state.order);
    if (this.state.order === 'chronological') {
      this.setState({
        order: 'reverseChronological'
      });
      this.props.employees.sort((a, b) => (a.name > b.name) ? 1 : -1)
    } else {
      this.setState({
        order: "chronological"
      });
      this.props.employees.sort((a, b) => (a.name > b.name) ? -1 : 1)
    }
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) })
  }
  render() {
    let filterEmployee = this.props.employees.filter(
      (employee) => {
        return employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="text-center" >
        <br></br>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} /> Search by Employee
   <div className="col-md-12">
     
          <ul>
            <br></br>
            <div className="row">
              <p className="col-md-2 font"><button onClick={this.sortName}>Name</button></p>
              <p className="col-md-2 font"><button onClick={this.sortNumber}>Phone Number</button></p>
              <p className="col-md-2 font"><button onClick={this.sortEmail}>Email</button></p>
              <p className="col-md-2 font"><button onClick={this.sortDepartment}>Department</button></p>
              <p className="col-md-2 font"><button onClick={this.sortDate}>Start Date</button></p>
              <p className="col-md-2 font"><button onClick={this.sortLocation}>Location</button></p>
            </div>
            {filterEmployee.map((employee) => {
              return <Employee employee={employee} key={employee.id} />
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default EmployeeList;