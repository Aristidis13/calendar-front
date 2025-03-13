import { Typography, Card } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { ReactNode, useContext } from 'react';
import CLASSES from './styles.module.css';
import { StepsContext } from '../../../context';
import { IShopProps } from './types/Shops';

/**
 * Creates a selectable Shop Card
 * @param {object} props - The props of the Component
 * @param {TShop} props.shop - The shop object to render
 * @returns {ReactNode} -  The Component
 */
const Shop = ({ shop }: IShopProps): ReactNode => {
  const { selectShop } = useContext(StepsContext) as any;
  return (
    <Card className={CLASSES.noPadding + ' ' + CLASSES.card} onClick={selectShop}>
      <div>
        <img className={CLASSES.shopImage} src={shop.img} alt={shop.name} />
      </div>
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
