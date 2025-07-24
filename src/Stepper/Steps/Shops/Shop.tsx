import { Card, Typography } from 'antd';
import { ReactNode, useContext } from 'react';

import CLASSES from './styles.module.css';
import { IShopProps } from './types/Shops';
import { Image } from '../../../common';
import { PhoneOutlined } from '@ant-design/icons';
import { StepsContext } from '../../../context';

/**
 * Creates a selectable Shop Card
 * @param {object} props - The props of the Component
 * @param {TShop} props.shop - The shop object to render
 * @returns {ReactNode} -  The Component
 */
const Shop = ({ shop }: IShopProps): ReactNode => {
  const { selectShop } = useContext(StepsContext) as any;
  return (
    <Card
      className={CLASSES.noPadding + ' ' + CLASSES.card}
      onClick={() => {
        selectShop(shop);
      }}
    >
      <Image img={shop.img} />
      <Typography className="text">{shop.address}</Typography>
      {shop?.phone && (
        <Typography className={'text ' + CLASSES.phone}>
          <PhoneOutlined className="icon" /> {shop.phone}
        </Typography>
      )}
    </Card>
  );
};

export default Shop;
