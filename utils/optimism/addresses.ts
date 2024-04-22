import { NetworkName } from "../network";
import { OptContractAddresses, CommonOptions } from "./types";

const OptimismMainnetAddresses: OptContractAddresses = {
  L1CrossDomainMessenger: "0xE3d981643b806FB8030CDB677D6E60892E547EdA",
  L2CrossDomainMessenger: "0x4200000000000000000000000000000000000007"
};

const OptimismSepoliaAddresses: OptContractAddresses = {
  L1CrossDomainMessenger: "0xcd5989E230D97FFE8C3C5217DEdCaC64Fa5fCeb3",
  L2CrossDomainMessenger: "0x4200000000000000000000000000000000000007",
};

export default function addresses(  
  networkName: NetworkName,
  options: CommonOptions = {}
) {
  switch (networkName) {
    case "mainnet":
      return { ...OptimismMainnetAddresses, ...options.customAddresses };
    case "sepolia":
      return { ...OptimismSepoliaAddresses, ...options.customAddresses };
    default:
      throw new Error(`Network "${networkName}" is not supported`);
  }
}
