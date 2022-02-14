import { List, Datagrid, TextField, EditButton, ShowButton, DeleteButton, DeleteWithConfirmButton } from "react-admin";

export const ProgramList = (props: any) => (
	<List {...props}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="facultyName" />
			<EditButton />
			<ShowButton />
      		<DeleteWithConfirmButton/>
		</Datagrid>
	</List>
);
