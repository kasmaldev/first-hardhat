// SPDX-License-Identifier: MIT
pragma solidity 0.7.0;
/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenERC20 is ERC20 {
    constructor(uint256 initialSupply) ERC20("Aoki", "AOKI") {
        _mint(msg.sender, initialSupply);
    }

}
