import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    useForm,
    Create,
    Form,
    Input,
    Select,
    useSelect,
} from "@pankod/refine-antd";

export const UserCreate = () => {
    const { formProps, saveButtonProps } = useForm();
    /*
    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
    });
    */
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="First Name" 
                           name="firstName" 
                           rules={[{required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Last Name" 
                           name="lastName" 
                           rules={[{required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Email" 
                           name="email" 
                           rules={[{required: true}]}>
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};