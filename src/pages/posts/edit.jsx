//import { IResourceComponentsProps } from "@pankod/refine-core";

import {
    useForm,
    Form,
    Input,
    Select,
    Edit,
    useSelect,
} from "@pankod/refine-antd";

export const PostEdit = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
        defaultValue: queryResult?.data?.data.category.id,
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Title"
                           name="title"
                           rules={[{required: true,},]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Status"
                           name="status"
                           rules={[{required: true,},]}>
                    <Select options={[
                                {
                                    label: "Published",
                                    value: "published",
                                },
                                {
                                    label: "Draft",
                                    value: "draft",
                                },
                                {
                                    label: "Rejected",
                                    value: "rejected",
                                },
                            ]}/>
                </Form.Item>
                <Form.Item label="Category"
                           name={["category", "id"]}
                           rules={[{required: true,},]}>
                    <Select {...categorySelectProps} />
                </Form.Item>
            </Form>
        </Edit>
    );
};