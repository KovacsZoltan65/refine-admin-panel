import { useMany } from "@pankod/refine-core";
//import { ICategory } from "interfaces";
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

export const CategoryList = () => {
    const { tableProps } = useTable();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="title"
                              title="title"/>
                <Table.Column title="action" 
                              dataIndex=""
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