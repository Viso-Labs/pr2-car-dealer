import './Leads_success.css';
import React from 'react'
import Heder from "../components/Heder";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

export default function Leads_success() {

    const [search, setSearch] = React.useState('');
    const [table_success, settable_success] = React.useState([]);
    // const [checked, setChecked] = React.useState(true);

    const handleSelect = (data, id) => {

        var checked = document.getElementById(id);
        var coloumn = document.getElementsByClassName(data);
        // var coloumnid = document.getElementById(data);
        // console(coloumn.length);

        if (checked.checked === true) {
            for (var i = 0; i < coloumn.length; i++) {
                coloumn[i].style.display = "table-cell";
            }
            checked.defaultChecked = true;
        }
        else {
            for (var i = 0; i < coloumn.length; i++) {
                coloumn[i].style.display = "none";
            }
            checked.defaultChecked = false;
        }

    }

    const filter = [
        {
            filtername: "First_Name",
            id: "1",
        },
        {
            filtername: "Last_Name",
            id: "2",
        },
        {
            filtername: "Make",
            id: "3",
        },
        {
            filtername: "Model",
            id: "4",
        },
        {
            filtername: "Reg_Number",
            id: "5",
        },
        {
            filtername: "Muleage",
            id: "6",
        },
        {
            filtername: "Colour",
            id: "7",
        },
        {
            filtername: "Price(£)",
            id: "8",
        },
        {
            filtername: "Monthly_Payment",
            id: "9",
        },
        {
            filtername: "Camount_of_Equity",
            id: "10",
        },

    ];
    const defult_table_success = [
        {
            id: "1",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            muleage: "60000 KM",
            Colour: "Red",
            Price: "20000",
            m_payment: "10000",
            equity: "10000",
        },
        {
            id: "2",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            muleage: "70000 KM",
            Colour: "Red",
            Price: "40000",
            m_payment: "20000",
            equity: "20000",
        },
        {
            id: "3",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            muleage: "30000 KM",
            Colour: "Red",
            Price: "20000",
            m_payment: "10000",
            equity: "10000",
        },
        {
            id: "4",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            muleage: "60000 KM",
            Colour: "Red",
            Price: "30000",
            m_payment: "20000",
            equity: "20000",
        },
    ];
    const month_list = [
        {
            name: "January"
        },
        {
            name: "February	"
        },
        {
            name: "March"
        },
        {
            name: "April"
        },
        {
            name: "May"
        },
        {
            name: "June"
        },
        {
            name: "July"
        },
    ];
    const price_range = [
        {
            name: "10000-20000"
        },
        {
            name: "20000-30000	"
        },
        {
            name: "30000-40000	"
        },
        {
            name: "40000-50000	"
        },
    ];

    const handleSearch = (event) => {

        setSearch(event.target.value);
        if (search !== "") {
            myFunction();
        }
        else{
            settable_success(defult_table_success);
        }



    };

    const serach_Table = () => {

        const data = {
            nodes: defult_table_success.filter((item) =>
                item.id.toLowerCase().includes(search.toLowerCase())
            ),
        };

        settable_success(data.nodes);
    };

    React.useEffect(() => {
        settable_success(defult_table_success);
    }, [])


    return (
        <div className='bg'>
            <Heder />
            <div className='setbody'>
                <div className='mt-5 row ms-5'>
                    <h2 className='mt-4'>Our Leads / <span className='small_font'>Success</span></h2>
                </div>
                <div className='mt-5 row ms-5 me-5'>
                    <div className='col-10 col-md-6 searchBox'>
                        <div className='row'>
                            <div className='mt-2 col-10 alignCenter2'>
                                <input id="myInput" className='inputSearch' type="text" onChange={handleSearch} placeholder=' Search here' />
                            </div>
                            <div className='mt-2 col-2 alignCenter'>
                                <img onClick={serach_Table} src="./images/search.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-2 col-md-6'>
                        <div className='row'>
                            <Dropdown className='me-4'>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="filterbox ms-4">
                                    <img className='mt-2 mar_le' src="./images/filter.png" alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='drofdownBox'>
                                    <div className='row'>
                                        <div className='col-8'></div>
                                        <div className='col-4 alignCenter'>
                                            <h6 className='me-3'>Show</h6>
                                        </div>
                                    </div>

                                    {filter.map((filter) => (
                                        <Dropdown.Item href="#/action-1">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <h6 className='color_blu'>{filter.filtername}</h6>
                                                </div>
                                                <div className='col-4 alignCenter'>
                                                    <Form.Check className='me-2' // prettier-ignore
                                                        type="checkbox"
                                                        id={filter.id}
                                                        defaultChecked={true}
                                                        onChange={() => handleSelect(filter.filtername, filter.id)} />
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-4 row tblleboxmargin'>
                    <div className='col-12 '>

                        <div className='mt-4 row row_width ms-2 me-2'>
                            <div className='col-12 col-md-6'>
                                <h6 className="tx_bold">Select one and view more</h6>
                            </div>
                            <div className='col-12 col-md-3 rowell'>
                                <h6 className="tx_bold">Month</h6>
                                <Form.Select aria-label="Default select example" className='size_select fondsixw ms-2'>
                                    <option>Select Month</option>
                                    {month_list.map((month_list) => (
                                        <option value={month_list.name}>{month_list.name}</option>
                                    ))}

                                </Form.Select>
                            </div>
                            <div className='col-12 col-md-3 rowell'>
                                <h6 className="tx_bold">Price_Range</h6>
                                <Form.Select aria-label="Default select example" className='size_select fondsixw ms-2'>
                                    <option>Price Range</option>
                                    {price_range.map((price_range) => (
                                        <option value={price_range.name}>{price_range.name}</option>
                                    ))}
                                </Form.Select>
                            </div>
                        </div>

                        <div className='mt-4 row tableBox'>
                            <div>
                                <div className='row ms-3 me-3'>

                                    <Table id="myTable" bordered hover>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th className='First_Name'>First_Name</th>
                                                <th className='Last_Name'>Last_Name</th>
                                                <th className='Make'>Make</th>
                                                <th className='Model'>Model</th>
                                                <th className='Reg_Number'>Reg_Number</th>
                                                <th className='Muleage'>Muleage</th>
                                                <th className='Colour'>Colour</th>
                                                <th className='Price(£)'>Price(£)</th>
                                                <th className='Monthly_Payment'>Monthly_Payment</th>
                                                <th className='Camount_of_Equity'>Camount_of_Equity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table_success.map((table_success) => (
                                                <tr>
                                                    <td>{table_success.id}</td>
                                                    <td className='First_Name'>{table_success.f_name}</td>
                                                    <td className='Last_Name'>{table_success.L_name}</td>
                                                    <td className='Make'>{table_success.Make}</td>
                                                    <td className='Model'>{table_success.Model}</td>
                                                    <td className='Reg_Number'>{table_success.reg_Number}</td>
                                                    <td className='Muleage'>{table_success.muleage}</td>
                                                    <td className='Colour'>{table_success.Colour}</td>
                                                    <td className='Price(£)'>{table_success.Price}</td>
                                                    <td className='Monthly_Payment'>{table_success.m_payment}</td>
                                                    <td className='Camount_of_Equity'>{table_success.equity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

