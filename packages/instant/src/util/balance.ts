import { BuyQuote } from '@0x/asset-buyer';
import { EthRPCClient } from '@0x/eth-rpc-client';
import * as _ from 'lodash';

export const balanceUtil = {
    hasSufficientEth: async (takerAddress: string | undefined, buyQuote: BuyQuote, ethRPCClient: EthRPCClient) => {
        if (_.isUndefined(takerAddress)) {
            return false;
        }
        const balanceWei = await ethRPCClient.getBalanceInWeiAsync(takerAddress);
        return balanceWei.gte(buyQuote.worstCaseQuoteInfo.totalEthAmount);
    },
};
