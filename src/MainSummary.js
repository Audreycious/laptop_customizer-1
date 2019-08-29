import React, { Component } from 'react';
import SummaryOption from "./SummaryOption";


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class MainSummary extends Component {
    static defaultProps = { features: [], selected: [] };
    render() {
        const features = this.props.features;
        const summary = Object.keys(this.props.selected).map((feature, i) => {
            const featureHash = feature + '-' + i;
            const selectedOption = this.props.selected[feature];

            return (
                <SummaryOption key={featureHash} featureHash={featureHash} selectedOption={selectedOption} feature={feature} />
            );
        });
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <div className="App">
            <header>
                <h1>ELF Computing | Laptops</h1>
            </header>
            <main>
                <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
                </form>
                <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                    </div>
                </div>
                </section>
            </main>
            </div>
        );
    }
}

export default MainSummary;
