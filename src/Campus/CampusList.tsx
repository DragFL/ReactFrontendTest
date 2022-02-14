import { List, Datagrid, TextField, EditButton, ShowButton, DeleteButton, DeleteWithConfirmButton } from "react-admin";

export const CampusList = (props: any) => (
	<List {...props}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="university" />
			<TextField source="campusName" />
			<EditButton />
			<ShowButton />
      <DeleteWithConfirmButton/>
		</Datagrid>
	</List>
);
