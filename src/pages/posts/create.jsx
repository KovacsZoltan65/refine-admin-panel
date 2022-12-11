import { IResourceComponentsProps } from "@pankod/refine-core";

import {
    useForm,
    Create,
    Form,
    Input,
    Select,
    useSelect,
} from "@pankod/refine-antd";

export const PostCreate = () => {
    const { formProps, saveButtonProps } = useForm();

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
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
        </Create>
    );
};