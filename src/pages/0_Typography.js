import React from 'react';
import { Typography, Space, Divider } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;

const TypoAD = () => (
    <div>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>

        <Divider/>

        <Space direction="vertical">
            <Text>Ant Design</Text>
            <Text type="secondary">Ant Design</Text>
            <Text type="warning">Ant Design</Text>
            <Text type="danger">Ant Design</Text>
            <Text disabled>Ant Design</Text>
            <Text mark>Ant Design</Text>
            <Text code>Ant Design</Text>
            <Text keyboard>Ant Design</Text>
            <Text underline>Ant Design</Text>
            <Text delete>Ant Design</Text>
            <Text strong>Ant Design</Text>
            <Link href="https://ant.design" target="_blank">
            Ant Design
            </Link>
        </Space>

        <Divider/>

        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
        <Paragraph copyable={{ icon: <SmileOutlined /> }}>Custom icon.</Paragraph>
        <Paragraph copyable={{ tooltips: ['click here', 'you clicked!!'] }}>
            Replace tooltips text.
        </Paragraph>

        <Divider/>

        <Paragraph ellipsis>
            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
            a design language for background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED Team. Ant Design, a design
            language for background applications, is refined by Ant UED Team. Ant Design, a design
            language for background applications, is refined by Ant UED Team.
        </Paragraph>

        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
            a design language for background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED Team. Ant Design, a design
            language for background applications, is refined by Ant UED Team. Ant Design, a design
            language for background applications, is refined by Ant UED Team.
        </Paragraph>

    </div>
)

export default TypoAD;