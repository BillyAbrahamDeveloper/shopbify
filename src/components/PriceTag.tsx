import { FormatPrice } from '@/lib/format';

interface PriceTagProps {
  price: number;
  className?: string;
}

const PriceTag = ({ price, className }: PriceTagProps) => {
  return <span className={`badge ${className}`}>{FormatPrice(price)}</span>;
};

export default PriceTag;
