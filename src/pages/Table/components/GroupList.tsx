import { FolderOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Divider, Menu } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const GroupList: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: 'sub1',
      label: 'Default',
      icon: <FolderOutlined />,
    },
  ];

  return (
    <div>
      <h3>分组列表</h3>
      <Divider />
      <Menu mode="inline" items={items} />
    </div>
  );
};

export default GroupList;
