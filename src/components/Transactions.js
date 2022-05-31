import React from 'react'

function Transactions() {
    return (
        <div>
            <section className="transaction_section">
                <div className="row gx-0">
                    <div className="col-12 col-lg-6 col-xl-3 d-inline-flex align-items-center">
                        <div className="validator_single w-100">
                            <h2>Transtaction Time</h2>
                            <p>1.3m</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3 d-inline-flex align-items-center">
                        <div className="validator_single w-100">
                            <h2>Locked Liquidity</h2>
                            <p>$17m</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3 d-inline-flex align-items-center">
                        <div className="validator_single w-100">
                            <h2>Price Per Token</h2>
                            <p>$0.002</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3 d-inline-flex align-items-center">
                        <div className="validator_single border-none w-100">
                            <h2>Circulating Supply</h2>
                            <p>378M</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Transactions
