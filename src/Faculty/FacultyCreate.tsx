import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const FacultyCreate = (props: any) => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source="campusId" reference="campus">
                <SelectInput optionText="campusName"/>
            </ReferenceInput>
			<TextInput source="facultyName" />
			
		</SimpleForm>
	</Create>
);
