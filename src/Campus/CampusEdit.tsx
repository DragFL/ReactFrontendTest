import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';


export const CampusEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="university" />
            <TextInput source="campusName" />
        </SimpleForm>
    </Edit>
);