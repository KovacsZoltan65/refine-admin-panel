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

export const PostList = () => {
    const { tableProps } = useTable();

    const categoryIds = tableProps?.dataSource?.map((item) => item.category.id) ?? [];
    const { data: categoriesData, isLoading } = useMany({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories"
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="title" 
                              title="title" />

                <Table.Column dataIndex="status" 
                              title="status" 
                              render={(value) => <TagField value={value} />} />

                <Table.Column dataIndex="createdAt" 
                              title="createdAt" 
                              render={(value) => <DateField format="LLL" value={value} />} />
                
                <Table.Column dataIndex={["category", "id"]}
                              title="category"
                              render={(value) => {
                                if (isLoading) {
                                    return <TextField value="Loading..." />;
                                }

                                return (<TextField value={categoriesData?.data.find((item) => item.id === value,)?.title}/>);
                              }}
                              filterDropdown={(props) => (
                                <FilterDropdown {...props}>
                                    <Select style={{ minWidth: 200 }}
                                            mode="multiple"
                                            placeholder="Select Category"
                                            {...categorySelectProps}
                                /></FilterDropdown>
                              )}/>
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