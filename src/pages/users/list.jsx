import { useMany } from "@pankod/refine-core";
import {
    List,
    TextField,
    TagField,
    DateField,
    Table,
    useTable,
    FilterDropdown,
    Select,useSelect,
    EditButton,ShowButton,DeleteButton, 
    Space
} from "@pankod/refine-antd";

export const UserList = () => {
    const { tableProps } = useTable();
    
    return (
        <List>
            <Table {...tableProps} rowKey="id">

                <Table.Column dataIndex="id" 
                              title="ID" 
                              render={(value) => <TextField value={value}  />} />

                <Table.Column dataIndex="firstName" 
                              title="firstName" 
                              render={(value) => <TextField value={value}/>} />

                <Table.Column dataIndex="lastName" 
                              title="lastName" 
                              render={(value) => <TextField value={value}/>} />

                <Table.Column dataIndex="email" 
                              title="email" 
                              render={(value) => <TextField value={value}/>} />

                <Table.Column dataIndex="birthday" 
                              title="birthday" 
                              render={(value) => <DateField format="LLL" value={value} />} />

                <Table.Column title="Actions"
                              dataIndex="actions"
                              render={(_, record) => {
                                return (
                                    <Space>
                                        <EditButton hideText
                                                    size="small"
                                                    recordItemId={record.id}/>
                                        <ShowButton hideText
                                                    size="small"
                                                    recordItemId={record.id}/>
                                        <DeleteButton hideText
                                                        size="small"
                                                        recordItemId={record.id}/>
                                    </Space>
                                );
                              }}/>
            </Table>
        </List>
    );
};