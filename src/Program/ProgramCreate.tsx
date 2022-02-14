import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ProgramCreate = (props: any) => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput source="campusId" reference="facultyId">
                <SelectInput optionText="facultyName"/>
            </ReferenceInput>
			<TextInput source="facultyName" />
			
		</SimpleForm>
	</Create>
);
