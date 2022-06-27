import React,{useEffect,useState} from 'react';
import axios from 'axios';
import DataTable from "react-data-table-component";	
function Datafetch(){
const [search,setSearch] = useState("");	
const[countries,setcountries] = useState([]);
const [filteredCountries, setFilteredCountries] = useState([]);
const getCountries = async () => {
	try{
		const response = await axios.get("https://restcountries.com/v2/all");
		setcountries(response.data);
		setFilteredCountries(response.data);
	} catch(error){
		console.log(error);
	}
};
const columns = [
{
	name: "Country Name",
	selector: (row) => row.name,
	sortable: true,
},
{
	name: "Country Native Name",
	selector: (row) => row.nativeName,
},
{
name: "Country Capital",
selector: (row) => row.capital,
},
{
	name: "Country Flag",
	selector: (row) => <img width={50} height={50} src={row.flag} />,
},
{
	name: "Edit",
	cell: (row) => (
 <button type='button' className="bg-blue-600 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded"
onClick={() => alert(row.alpha2Code)}
 >Edit</button>
		),
},

{
	name: "Delete",
	cell: (row) => (
 <button type='button' className="bg-red-600 hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded"
onClick={() => alert(row.alpha2Code)}
 >Delete</button>
		),
},
]

useEffect(() => {
	getCountries();
}, []);	

useEffect(() => {
	const result = countries.filter((Country) => {
		return Country.name.toLowerCase().match(search.toLowerCase());
	});

	setFilteredCountries(result);
}, [search]);
return <DataTable title="Country List" 
columns={columns} 
data={filteredCountries} 
pagination
fixedHeader
fixedHeaderScrollHeight="535px"
selectableRows
highlightOnHover
subHeader
subHeaderComponent={
<input
type="text"
placeholder="Search"
className="w-25 form-control"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>
}
/>;

<h2>React DataBase</h2>

};
export default Datafetch;