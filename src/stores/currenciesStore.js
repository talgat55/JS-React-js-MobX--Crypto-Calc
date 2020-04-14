import axios from 'axios';
import { observable, computed, action } from 'mobx';
import stores from '../stores';

class CurrenciesStore {
    @observable   items  = [];
    @observable   diffObj = {};

    @computed
    get getItems() {
        return this.items;
    }

    @computed
    get getDiffObj() {
        return this.diffObj;
    }


    @action
    fetchCoins = () => {
        axios
            .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({ data }) => {
                const coins = data.Data.map( coin => {
                    const obj = {
                        name: coin.CoinInfo.Name,
                        fullName: coin.CoinInfo.FullName,
                        imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                        price: coin.RAW.USD.PRICE.toFixed(3),
                        volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
                    };
                    return obj;
                });
                this.setItems(coins);
            });
    };

}

export default CurrenciesStore;