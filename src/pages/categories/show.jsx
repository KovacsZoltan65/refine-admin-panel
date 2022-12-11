import { useShow, useOne, IResourceComponentsProps } from "@pankod/refine-core";
import { Show, Typography, Tag } from "@pankod/refine-antd";

const { Title, Text } = Typography;


export const CategoryShow = () => {

    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Category</Title>
            <Text>{record?.title}</Text>
        </Show>
    );
};