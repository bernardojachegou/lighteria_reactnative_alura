import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const moneyFormat = money =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(money);
