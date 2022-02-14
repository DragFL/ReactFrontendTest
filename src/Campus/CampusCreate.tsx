import { Create, SimpleForm, TextInput } from "react-admin";

export const CampusCreate = (props: any) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="university" />
			<TextInput source="campusName" />
		</SimpleForm>
	</Create>
);
