//import { IResourceComponentsProps } from "@pankod/refine-core";

import {
    useForm,
    Create,
    Form,
    Input,
    Select,
    useSelect,
} from "@pankod/refine-antd";

export const CategoryCreate = () => {
    const { formProps, saveButtonProps } = useForm();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Title"
                           name="title"
                           rules={[{required: true,},]}>
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};