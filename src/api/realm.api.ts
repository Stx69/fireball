import { EthersApi } from './ethers.api';

import { REALM_CONTRACT } from 'shared/constants';

import REALM_ABI from 'data/abi/realm.abi.json';

const realmContract = EthersApi.makeContract(REALM_CONTRACT, REALM_ABI, 'polygon');

export class RealmApi {
  public static getGotchiLastChanneled(id: CustomAny): CustomAny {
    // !TODO: find a better solution for BigNumber parcing (default method doesn't work)
    return realmContract.getLastChanneled(id).then((response: CustomAny) => response - 0);
  }
}
