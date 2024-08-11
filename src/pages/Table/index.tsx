import {
  ActionType,
  PageContainer,
  ProCard,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Tag } from 'antd';
import React, { useRef } from 'react';
import GroupList from './components/GroupList';

interface Row {
  name: string;
  ip: Network;
  configInfo: string;
  status: string;
}

interface Network {
  publicNetwork: string;
  internalNetwork: string;
}

const TableList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();

  const columns = [
    {
      title: '主机名称',
      dataIndex: 'name',
      fieldProps: () => {
        return {
          placeholder: '输入名称/IP检索',
        };
      },
      formItemProps: {
        label: '',
      },
    },
    {
      title: 'IP地址',
      dataIndex: 'ip',
      search: false,
      render: (_: Network, row: Row) => {
        return (
          <>
            <div>
              <Tag color="gold" bordered={false}>
                公
              </Tag>
              <span>{row.ip.publicNetwork}</span>
            </div>
            <div>
              <Tag color="blue" bordered={false}>
                内
              </Tag>
              <span>{row.ip.internalNetwork}</span>
            </div>
          </>
        );
      },
    },
    {
      title: '配置信息',
      dataIndex: 'configInfo',
      search: false,
    },
    {
      title: '状态',
      dataIndex: 'status',
      search: false,
      render: (status: Row['status']) => {
        return <Tag color="gold">{status}</Tag>;
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      search: false,
      render: () => {
        return (
          <>
            <Button type="link">编辑</Button>
            <Button type="link" danger>
              删除
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <PageContainer
      header={{
        title: '主机管理',
      }}
    >
      <ProCard gutter={16} ghost>
        <ProCard colSpan={6} style={{ height: '100%' }}>
          <GroupList />
        </ProCard>
        <ProCard colSpan={18}>
          <ProTable<API.UserInfo>
            headerTitle="查询表格"
            actionRef={actionRef}
            rowKey="id"
            search={{
              labelWidth: 120,
            }}
            request={async () => {
              return Promise.resolve({
                data: [
                  {
                    name: 'abc',
                    ip: {
                      publicNetwork: '12.12.12.21',
                      internalNetwork: '12.12.12.2100',
                    },
                    configInfo: '4 核 8GB',
                    status: '未验证',
                  },
                ],
                success: true,
              });
            }}
            columns={columns}
          />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default TableList;
