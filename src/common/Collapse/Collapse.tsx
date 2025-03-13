import { Collapse as AntCollapse } from 'antd';
import CLASSES from './Collapse.module.css';
import { DownOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import { ICollapseProps } from '../types/Collapse';

/**
 * Creates a Collapse to use  with set styles
 * @param {object} props - The props of the Collapse
 * @param {ICollapseProps} props.items - The items for the Collapse
 * @returns {ReactNode} - The React Component
 */
const Collapse = ({ items }: ICollapseProps): ReactNode => {
  return (
    <AntCollapse
      className={CLASSES.container}
      defaultActiveKey={0}
      bordered={false}
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <DownOutlined width={15} height={15} className="icon" rotate={isActive ? 0 : -90} />
      )}
      items={items}
    />
  );
};

export default Collapse;
