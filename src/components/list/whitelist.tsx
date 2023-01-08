
let whitelistAddresses: string[] = [
    "0x4a4fD96907e817565D74Cf384418b0885A53bbcD",
    "0xdAC13042229bB1EA919368eddA8A06d05bBA4560",
    "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
    "0xa33CF97c010F9E4bB06d0851E5BC3a6C02F85739",
    "0xA3E67c48024433Dbb80cE7b41D7221fA80799e26",
    "0x3d8F47441D3fA46cd2a3bdbB543BeC1afe8A7F6d"
]

export function isInWhitelist(addr: any): boolean | null {
  if (typeof addr !== 'string') {
    return null;
  }

  return whitelistAddresses.includes(addr);
}
  
