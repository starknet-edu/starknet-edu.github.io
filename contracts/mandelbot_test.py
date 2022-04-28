import os
import pytest

from starkware.starknet.testing.starknet import Starknet

CONTRACT_FILE= os.path.join(
    os.path.dirname(__file__), "mandelbot.cairo")

@pytest.mark.asyncio
async def test_init():
    starknet = await Starknet.empty()

    # Deploy the contract.
    contract = await starknet.deploy(
        source=CONTRACT_FILE,
        cairo_path=["/home/bgoebel/cairo_libs"],
        constructor_calldata=[123],
    )

    # get secret
    secret = await contract.get_secret().call()
    assert secret.result.curr_secret == 123