import { Admin, EditGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import "./App.css";
import { CampusList } from "./Campus/CampusList";
import { CampusEdit } from "./Campus/CampusEdit";
import { CampusCreate } from "./Campus/CampusCreate";
import { FacultyList } from "./Faculty/FacultyList";
import { FacultyEdit } from "./Faculty/FacultyEdit";
import { FacultyCreate } from "./Faculty/FacultyCreate";
import { ProgramList } from "./Program/ProgramList";
import { ProgramEdit } from "./Program/ProgramEdit";
import { ProgramCreate } from "./Program/ProgramCreate";

function App() {
	return (
		<Admin
			dataProvider={jsonServerProvider(
				"http://localhost:8080"
			)}
		>
			<Resource name="campus" list={CampusList} edit={CampusEdit} create={CampusCreate}/>
      <Resource name="faculty" list={FacultyList} edit={FacultyEdit} create={FacultyCreate}/>
      <Resource name="program" list={ProgramList} edit={ProgramEdit} create={ProgramCreate}/>
		</Admin>
	);
}

export default App;
