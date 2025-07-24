import { BackButton, Card } from '../../../common';

import CLASSES from './styles.module.css';
import Shop from './Shop';

const Shops = ({ shops }) => {
  return (
    <>
      <BackButton name="CHOOSE A SERVICE" />
      <Card title="CHOOSE A SHOP" className={CLASSES.ShopContainer}>
        <div className={CLASSES.cardwrapper}>
          {shops.map((shop) => (
            <Shop key={shop.id} shop={shop} />
          ))}
        </div>
      </Card>
    </>
  );
};

export default Shops;
